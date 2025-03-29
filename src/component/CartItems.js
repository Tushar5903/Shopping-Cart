import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice";
const CartItems =({item , itemIndex})=>{
    const dispatch = useDispatch();
    const removeFromCart =()=>{
        dispatch(remove(item.id));
        toast.error("Item Removed",{
            iconTheme:{
                primary: "#ff7722",
                secondary :"white",
            },
           });

    }
    return (
        <div className="CartItems_first_div">
            <div className="CartItems_second_div">
                <div className="CartItems_third_div">
                    <img src={item.image} className="CartItems_image_div"></img>
                </div>
                <div className="CartItems_forth_div">
                    <h1 className="CartItems_title">{item.title}</h1>
                    <h1 className="CartItems_description">{item.description.split(" ").slice(0,15).join(" ") + "..."}</h1>
                    <div className="CartItems_fifth_div">
                        <p className="CartItems_price">$ {item.price.toFixed(2)}</p>
                        <div onClick={removeFromCart} className="delete_logo_div" >
                            <MdDelete className="delete_logo" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="lines_black"></div>
        </div>
    )
}

export default CartItems;