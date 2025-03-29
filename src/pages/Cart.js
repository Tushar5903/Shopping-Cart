import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { useEffect, useState } from 'react';
import CartItems from '../component/CartItems';
const Cart = () => {
    const { cart } = useSelector((state) => state);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
    }, [cart]);

    return (
        <div className="first_cart_div">

            {
                cart.length > 0 ? (
                    <div className="second_cart_div">
                        <div className="third_cart_div">
                            {
                                cart.map((item, index) => {
                                    return <CartItems key={item.id} item={item} itemIndex={index} />
                                })
                            }
                        </div>
                        <div className='Cart_items_start'>
                            <div className="forth_cart_div">
                                <div className="first_para_cart_div">Your Cart</div>
                                <div className="second_para_cart_div"> Summary</div>
                                <p className="para_price">
                                    <span>Total Items : {cart.length}</span>
                                </p>
                            </div>
                            <div className="fifth_cart_div">
                                <p className="total_amount_para">Total Amount : $ <span className='amout_value'> {totalAmount.toFixed(2) } </span></p>
                                <button className="checkout_button">
                                    Checkout Now
                                </button>
                            </div>
                        </div>
                    </div>
                ) :
                    (
                        <div className="first_false_div">
                            <h2 className="false_heading">
                                Empty Cart
                            </h2>
                            <NavLink to={"/"}>
                                <button className="start_shopping_button"> Start Shopping</button>
                            </NavLink>
                        </div>
                    )


            }
        </div>
    )
}

export default Cart