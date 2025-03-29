import { useEffect, useState } from "react";
import Spinner from "../component/Spinner";
import Products from "../component/Products";

const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    async function data_fetching() {
        setLoading(true);

        try {

            const res = await fetch(API_URL);
            const data = await res.json();
            setPosts(data);
        }
        catch (error) {
            console.log("Error ha ji", error);
            setPosts([]);
        }

        setLoading(false);
    }

    console.log(posts);
    console.log(<Products/>);

    useEffect ( () =>{
        data_fetching();
    },[]);
    
    return (
        <div className="home_first_div">
            {
                loading ? (<Spinner />) :
                (
                    posts.length > 0 ?
                        (<div className="home-products-map-div">{
                            posts.map((post) => (
                                <Products key={post.id} post={post}/>
                            ))
                            // make sure your map must be using () if they are not return anything in the code
                        }
                        
                        </div>)
                        :
                        (<div className="home_second_div">
                            <p className="home_para">
                                Data Not Found
                            </p>
                        </div>
                        )
                )
            }
        </div>
    )
}

export default Home;