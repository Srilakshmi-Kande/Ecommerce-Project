import { useCart } from "../../context/cart_context"
import { getTotalCartAmount } from "../../utils/getTotalCartAmount";

export const PriceDetails = () => {

    const { cart } = useCart();

    const totalCartAmount = getTotalCartAmount(cart);

    const deliveryCharge = 49;

    return (
        <div className="w-[400px] h-[100%] bg-[#fafafa]" style={{padding: '16px'}} >
            <p className="text-2xl border-b p-2">Price Details</p>
            <div className="flex flex-col gap-5 border-b" style={{padding:'8px'}}>
                <div className="flex justify-between items-center">
                    <p>Price ({cart.length}) items</p>
                    <p className="ml-auto">Rs. {totalCartAmount}</p>
                </div>
                <div className="flex justify-between items-center">
                    <p>Delivery Charge</p>
                    <p className="ml-auto">Rs. {deliveryCharge}</p>
                </div>
            </div>
            <div className="flex justify-between items-center border-b" style={{padding: '8px'}}>
                <p>Total Amount</p>
                <p className="ml-auto">Rs.{ totalCartAmount + deliveryCharge }</p>
            </div>
            <div style={{padding:'8px'}}>
                <button className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
                    PLACE ORDER
                </button>
            </div>
        </div>
    )
}