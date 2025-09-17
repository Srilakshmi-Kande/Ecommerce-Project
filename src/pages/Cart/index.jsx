import { Navbar } from "../../components/Navbar/index"
import { useCart } from "../../context/cart_context"
import { HorizontalProductCard } from "../../components/HorizontalProductCard/index"
import { PriceDetails } from "../../components/PriceDetails"
import { useNavigate } from "react-router-dom"

export const Cart = () => {

    const { cart } = useCart();

    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <main className="flex flex-col items-center" style={{paddingTop: '2rem'}}>
                {
                    cart?.length > 0 ? (
                        <>
                            <h2 className="text-3xl">My Cart</h2>
                            <div className="flex gap-8">
                                <div className="flex flex-col gap-4" style={{paddingTop: '2rem'}}>
                                {
                                    cart?.length > 0 && cart.map(product => <HorizontalProductCard key={product.id} product={product} />) 
                                }
                                </div>
                                <PriceDetails />
                            </div>
                        </>
                    ) : <div>
                        <h2>Cart is Empty</h2>
                        <p className="text-[primary-color] hover:underline hover:cursor-pointer" onClick={() => navigate('/')}>Click here to add items to Cart</p>
                    </div>
                }
            </main>
        </>
    )
}