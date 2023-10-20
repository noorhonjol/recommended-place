/* eslint-disable react/prop-types */

const CommentSection = ({ comments }) => (
    <div className=" container bg-white rounded-lg border p-2 my-4 mx-auto">
        <h3 className="font-bold">Discussion</h3>
        <form>
            <div className="flex flex-col">
                {
                    comments.map((comment) => (
                        <div className="border rounded-md p-3 ml-3 my-3" key={comment._id}>
                            <h3 className="font-bold">
                                {comment.user.userName}
                            </h3>
                            <p className="text-gray-600 mt-2">
                                {comment.text}
                            </p>

                        </div>
                    ))
                }
            </div>
            <div className="w-full px-3 my-2">
                <textarea
                    className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                    name="body" placeholder='Type Your Comment' required></textarea>
            </div>
            <div className="w-full flex justify-end px-3">
                <input type='submit' className="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500" value='Post Comment' />
            </div>
        </form>
    </div>
)

export default CommentSection;