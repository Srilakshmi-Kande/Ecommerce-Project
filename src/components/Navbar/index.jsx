import { useNavigate } from "react-router-dom"

export const Navbar = () => {

    const navigate = useNavigate();

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
                <span className="material-symbols-outlined hover:cursor-pointer" style={{fontSize: '2rem'}}>
                    account_circle
                </span>
            </nav>
        </header>
    )
}