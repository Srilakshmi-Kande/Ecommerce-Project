import { useCart } from "../../context/cart_context"
import { getTotalCartAmount } from "../../utils/getTotalCartAmount";
import { useNavigate } from "react-router-dom";

export const PriceDetails = () => {

    const navigate = useNavigate();

    const { cart } = useCart();

    const totalCartAmount = getTotalCartAmount(cart);

    const deliveryCharge = 49;

    const loadScript = (src) => {
        return new Promise(resolve => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const displayRazorpay = async () => {
        await loadScript("https://checkout.razorpay.com/v1/checkout.js");

        const options = {
            key : 'rzp_test_RJ9JGkuLNWRLl3',
            amount : (totalCartAmount + deliveryCharge) * 100,
            currency : "INR",
            name : "Shop It",
            description : "Thank you for shopping with us,",
            image: "",

            handler: ({payment_id}) => {
                navigate("/")
            }
        }
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

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
                <button onClick={displayRazorpay} className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
                    PLACE ORDER
                </button>
            </div>
        </div>
    )
}