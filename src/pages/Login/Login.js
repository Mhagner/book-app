import './Login.css'
import AuthForm from '../../components/AuthForm/AuthForm'
import { useAuthContext } from '../../context/authContext'

const Login = () => {
    const { handleSubmit, errors } = useAuthContext()

    return (
        <div className="container-login">
            <AuthForm 
                handleSubmit={handleSubmit}
                errors={errors}
             />
        </div>
    )
}

export default Login