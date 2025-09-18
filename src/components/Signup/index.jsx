import { useLogin } from "../../context/login_context";
import { userSignup } from "../../api/newauth";
import { useNavigate, Link } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate();

  const { loginDispatch, name, email, password } = useLogin();

  const onFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await userSignup(name, email, password);

      if (data?.id) {
        alert("Signup successful! Please login.");
        navigate("/auth/login");
      } else {
        alert("Signup failed, please try again.");
      }
    } catch (err) {
      console.error("Signup error:", err);
      alert("Something went wrong. Try again later.");
    }
  };

  const onNameChange = (e) => {
    loginDispatch({
      type: "NAME",
      payload: {
        value: e.target.value,
      },
    });
  };

  const onEmailChange = (e) => {
    loginDispatch({
      type: "EMAIL",
      payload: {
        value: e.target.value,
      },
    });
  };

  const onPasswordChange = (e) => {
    loginDispatch({
      type: "PASSWORD",
      payload: {
        value: e.target.value,
      },
    });
  };

  return (
    <form onSubmit={onFormSubmit} className="bg-white shadow-md w-[450px]" style={{ padding: "2.5rem" }}>
      <h2 className="flex justify-center text-3xl">Create a New Account</h2>
      <div className="flex flex-col gap-2" style={{ marginTop: "1rem" }}>
        <span>Username *</span>
        <input className="border-b-2" onChange={onNameChange} type="text" placeholder="example" required />
      </div>

      <div className="flex flex-col gap-2" style={{ marginTop: "1rem" }}>
        <span>Email *</span>
        <input className="border-b-2" onChange={onEmailChange} type="email" placeholder="example@gmail.com" required />
      </div>

      <div className="flex flex-col gap-2" style={{ marginTop: "1rem" }}>
        <span>Password *</span>
        <input className="border-b-2" onChange={onPasswordChange} type="password" placeholder="********" required />
      </div>

      <div className="mx-4 mt-6" style={{marginInline:"1rem",marginTop:"1.5rem"}}>
        <button type="submit" className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
          Sign In
        </button>
      </div>

      <div className="text-center" style={{ paddingTop: "2rem" }}>
        <span>
          Already have an Account?{" "}
          <Link to="/auth/login" className="text-blue-600 underline">
            Login
          </Link>
        </span>
      </div>
    </form>
  );
};
