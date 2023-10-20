const Post = require("../models/Post")

module.exports = {
    createPost: async (req, res) => {
        const { user } = req.user;
        const { title, content, imageurl } = req.body

        await Post.create({ title: title, content: content, user: user._id, imageUrl: imageurl });

        res.status(201).json({ msg: "done create a post" });
    },

    getAllPosts: async (req, res) => {
        // await new Promise((resolve) => setTimeout(resolve, 4000));

        const posts = await Post.aggregate([
            {
                $project: {
                    title: 1,
                    content: 1,
                    imageUrl: 1,
                    commentsCount: { $size: "$comments" },
                    comments: 1,
                    user: 1,
                },
            },
            {
                $lookup: {
                    from: "users",
                    localField: "user",
                    foreignField: "_id",
                    as: "userDetails",
                },
            },
            {
                $unwind: "$userDetails",
            },
            {
                $addFields: {
                    userName: "$userDetails.userName",
                },
            },
            {
                $project: {
                    user: 0,
                    userDetails: 0,
                },
            },
            {
                $unwind: {
                    path: "$comments",
                    preserveNullAndEmptyArrays: true,
                },
            },
            {
                $group: {
                    _id: "$_id",
                    title: { $first: "$title" },
                    content: { $first: "$content" },
                    imageUrl: { $first: "$imageUrl" },
                    commentsCount: { $first: "$commentsCount" },
                    userName: { $first: "$userName" },
                    avgRating: {
                        $avg: { $ifNull: ["$comments.rating", 0] },
                    },
                },
            },
        ]);

        res.json(posts);
    },

    addCommentToPost: async (req, res) => {
        const { text, rating } = req.body;

        const { user } = req.user;

        const { id: postId } = req.params;

        const searchPost = await Post.findById(postId);

        if (!searchPost) {
            return res.status(404).json(msg, "this post not exist");
        }
        searchPost.comments.push({ user: user._id, text: text, rating: rating });
        await searchPost.save();
        res.json({ msg: "comment submit successfully" })

    },

    getPostById: async (req, res) => {
        const { id: postId } = req.params;
        const searchPost = await Post.findById(postId);

        if (!searchPost) {
            return res.status(404).json(msg, "this post not exist");
        }
        await searchPost.populate([
            {
                path: 'user',
                select: 'userName',
            },
            {
                path: 'comments.user',
                select: 'userName',
            },
        ]);
        res.status(200).json(searchPost);
    }
}