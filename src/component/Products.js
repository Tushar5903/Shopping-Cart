import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-hot-toast";
import { remove,add } from "../redux/slices/CartSlice";

const Products = ({ post }) => {
    const {cart} = useSelector((state)=> state);
    const dispatch = useDispatch();

    const removeFromCart=()=>{
       dispatch (remove(post.id));
       toast.error("Item removed",{
        iconTheme:{
            primary: "#ff7722",
            secondary :"white",
        },
       });

    }
    function addInCart(){
        dispatch (add(post));
        toast.success("Item added to cart",{
            iconTheme: {
                primary: "#ff7722", 
                secondary: "white", 
              },
        });
    }
    return (
        <div className="products_first_div">
            <div className="products_title_div">
                <p className="product_title_para">{post.title.split(" ").slice(0,3).join(" ") + "..."}</p>
            </div>
            <div className="products_description_div">
                <p className="product_description_para">{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
            </div>
            <div className="products_image_div">
                <img src={post.image} className="product_image"></img>
            </div>
            <div className="products_price_div">
                <p className="product_price_para">${post.price}</p>
                
                {
                    cart.some( (p)=> p.id == post.id)? (<button onClick={removeFromCart} className="products_button"> Remove Item</button>): (<button onClick={addInCart} className="products_button"> Add to cart</button>)
                }
            
            </div>

            

        </div>
    );
};

export default Products;