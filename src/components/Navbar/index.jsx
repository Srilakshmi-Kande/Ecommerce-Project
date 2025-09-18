import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { useLogin } from "../../context/login_context";

export const Navbar = () => {

    const navigate = useNavigate();
    const [isAccountDropdownOpen,setIsAccountDropdownOpen] = useState(false);
    const { token, loginDispatch }= useLogin();

    const onLoginClick = () => {
        if (!token) {
            navigate("/auth/login");
        } else {
            loginDispatch({ type: "LOGOUT" });
            navigate("/auth/login");
        }
    };


    return (
        <header className="flex bg-green-900 justify-between align-center text-slate-50" style={{paddingInline: '3rem'}}>
            <div>
                <h1 onClick={() => navigate('/')} className="text-5xl cursor-pointer">ShopIt</h1>
            </div>
            <nav className="ml-auto flex gap-8">
                <span onClick={() => navigate('/wishlist')} className="material-symbols-outlined hover:cursor-pointer"
                    style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24", fontSize: '2rem' }}>
                favorite
                </span>
                <span onClick={() => navigate('/cart')} className="material-symbols-outlined hover:cursor-pointer" style={{fontSize: '2rem'}}>
                    shopping_cart
                </span>
                <div className="relative">
                    <span onClick={() => setIsAccountDropdownOpen(!isAccountDropdownOpen)} className="material-symbols-outlined hover:cursor-pointer" style={{fontSize: '2rem'}}>
                        account_circle
                    </span>
                    {
                        isAccountDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow-lg">
                                <button
                                onClick={onLoginClick}
                                className="w-full text-left px-4 py-2 hover:bg-gray-100"
                                >
                                {token ? "Logout" : "Login"}
                                </button>
                            </div>
                        )
                    }
                </div>
            </nav>
        </header>
    )
}