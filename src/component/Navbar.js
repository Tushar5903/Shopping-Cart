import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Navbar = () => {
const {cart} = useSelector((state) => state);

    return (
        <div className="navbar_first_div">
            <nav className="navbar_second_div">
                <NavLink to="/">
                    <div className="logo">
                        <img src="https://www.figma.com/community/resource/d3ce5064-a3ee-468b-8245-0e47504800f2/thumbnail" alt="logos" className="logo_image"></img>
                    </div>
                </NavLink>
                <div className="navbar_third_div">
                    <NavLink to="/">
                        <p className="navbar_home">Home</p>
                    </NavLink>
                    <NavLink to="/cart">
                            <div className="navbar_cart_logo">
                                <TiShoppingCart className="cart_logo" />
                                { cart.length >0 && <span className="cart_pop_number custom-bounce">{cart.length}</span>}
                                
                        </div>
                    </NavLink>
                </div>
            </nav>
        </div>
    )
};
export default Navbar