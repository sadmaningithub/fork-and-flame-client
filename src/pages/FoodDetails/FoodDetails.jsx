import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const FoodDetails = () => {

    const [foodDetails, setFoodDetails] = useState({})
    const params = useParams();
    // console.log(params.id);
    const { user } = useAuth();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();

    // console.log(user);

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

    const handleAddToCart = (food) => {
        // console.log(food);
        if (user && user.email) {
            // console.log(food);

            const cartItem = {
                menuId: params.id,
                email: user.email,
                name: foodDetails.name,
                image: foodDetails.image,
                price: foodDetails.price
            }

            console.log(cartItem);

            axiosSecure.post('/cart', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            title: `${foodDetails.name} added to the cart!`,
                            icon: "success",
                            confirmButtonColor: "#000000",
                        });
                    }

                })
                .catch(error => {
                    console.log(error);
                });
        }
        else {
            Swal.fire({
                title: "Please login before ordering",

                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#000000",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login"
            }).then((result) => {
                if (result.isConfirmed) {

                    navigate('/login')
                }
            });
        }
    }



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
                        <button onClick={() => handleAddToCart(foodDetails)} className="btn ">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;