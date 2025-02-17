import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";


const FoodDetails = () => {

    const [foodDetails, setFoodDetails] = useState({})
    const params = useParams();
    // console.log(params.id);

    useEffect(() => {
        axios.get(`http://localhost:5000/dishes/${params.id}`)
            .then(response => {
                // handle success
                // console.log(response.data);
                setFoodDetails(response.data)
            })
            .catch(error => {
                // handle error
                console.log(error.message);
            })
    }, [params.id])

    

    return (
        <div className="max-w-7xl mx-auto my-10">

            <div className="flex flex-row gap-10 justify-center items-center">
                <div>
                    <img className="max-w-xl rounded-xl" src={foodDetails.image} alt="" />
                </div>
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold">{foodDetails.name}</h1>
                    <p className="text-sm font-normal">{foodDetails.rating}/5</p>
                    <h3 className="text-xl font-bold">${foodDetails.price}</h3>
                    <h4 className="text-xl font-medium">{foodDetails.category}</h4>
                    <p className="text-sm font-normal">{foodDetails.description}</p>
                    <div className="">
                        <Link> <button className="btn ">Order Now</button> </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;