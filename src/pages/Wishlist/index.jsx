import { Navbar } from "../../components/Navbar/index"
import { useWishlist } from "../../context/wishlist_context"
import { WishlistCard } from "../../components/WishlistCard"
import { useNavigate } from "react-router-dom"

export const Wishlist = () => {

    const { wishlist } = useWishlist();

    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <main className="flex flex-col items-center" style={{paddingTop: '2rem',paddingInline:'2rem'}}>
                {
                    wishlist?.length > 0 ? (
                        <>
                            <h2 className="text-3xl">My Wishlist</h2>
                            <div className="flex gap-8">
                                <div className="flex flex-wrap gap-8" style={{paddingTop: '2rem'}}>
                                {
                                    wishlist?.length > 0 && wishlist.map(product => <WishlistCard key={product.id} product={product} />) 
                                }
                                </div>
                            </div>
                        </>
                    ) : <div>
                        <h2>Wishlist is Empty</h2>
                        <p className="text-[primary-color] hover:underline hover:cursor-pointer" onClick={() => navigate('/')}>Click here to add items to wishlist</p>
                    </div>
                }
            </main>
        </>
    )
}