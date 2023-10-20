import FormContainer from "../components/FormContainer";
import InputField from "../components/InputField";
import api from "../helpers/api"
import { validationSchema } from "../validationSchema";

const handleSubmit=async(values,{setErrors,setSubmitting})=>{
    try{
        setSubmitting(true);
        console.log(await api('auth/login',"post",values))
        setSubmitting(false);

    }catch(err){
        setErrors({error:err.message})
    }
}
const LoginPage = () => {
    return (
        <div className="h-screen mt-72">
            <FormContainer initialValues={{username:'',password:''}} validationSchema={validationSchema} handleSubmit={handleSubmit}>

                    <InputField type="text" name="username" placeholder="e.g ahamad mohsen" id="username" label="user name"/>
                    <InputField type="password" name="password" id="password" placeholder="e.g 123" label="password"/>
            </FormContainer>
        </div>
    );
};

export default LoginPage;
