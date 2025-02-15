import axios from "axios";
import { useState } from "react";
import FoodCard from "../FoodCard/FoodCard";


const Menu = () => {
    const [data, setData] = useState([]);

    useState(() => {
        axios.get('http://localhost:5000/dishes')
            .then(response => {
                // handle success
                console.log(response.data);
                setData(response.data)

            })
            .catch(error => {
                // handle error
                console.log(error.message);
            })
    }, [])

    return (
        <div className="max-w-7xl mx-auto my-10">
            <div className="text-center mb-4">
                <h1>Menu</h1>
            </div>
            <div className="grid grid-cols-3 gap-10">
                {
                    data.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default Menu;