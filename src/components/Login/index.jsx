import { useLogin } from "../../context/login_context";
import { userLogin } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Login = () => {

    const navigate = useNavigate();

    const { loginDispatch, email, password } = useLogin();

    const onFormSubmit = async (e) => {
        e.preventDefault();
        const data = await userLogin(email, password);
        loginDispatch({
            type: 'TOKEN',
            payload: { token: data.access_token }
        });
        if (data.access_token) {
            navigate('/');
        }
    }

    const onEmailChange = (e) => {
        loginDispatch({
            type: 'EMAIL',
            payload:{
                value: e.target.value
            }
        })
    }

    const onPasswordChange = (e) => {
        loginDispatch({
            type: 'PASSWORD',
            payload:{
                value: e.target.value
            }
        })
    }

    return (
        <form onSubmit={onFormSubmit} className="bg-white shadow-md w-[400px]" style={{padding:'2.5rem'}}>
            <h2 className="flex justify-center text-3xl">Login</h2>
            <div className="flex flex-col gap-2" style={{ marginTop: "1rem" }}>
                <span>Email *</span>
                <input className="border-b-2"  onChange={onEmailChange} type="email" placeholder="example@gmail.com" required />
            </div>
            <div className="flex flex-col gap-2" style={{marginTop:'1rem'}}>
                <span>Password *</span>
                <input className="border-b-2"  onChange={onPasswordChange} type="password" placeholder="........" required />
            </div>
            <div className="mx-4">
                <button className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
                    Login
                </button>
            </div>
            <div className="text-center pt-8" style={{paddingTop:'2rem'}}>
                <span>
                    Don’t have an Account?{" "}
                    <Link to="/auth/signup" className="text-blue-600 underline font-medium">
                    Sign Up
                    </Link>
                </span>
            </div>
        </form>
    )
}