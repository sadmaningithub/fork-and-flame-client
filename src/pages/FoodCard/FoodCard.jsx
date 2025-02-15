import { Link } from "react-router";


const FoodCard = ({ food }) => {

    const { _id, name, image, category, price, rating, description } = food

    // console.log(_id, name, image, category, price, rating, description);

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={image}
                        alt="Food" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{category}</p>
                    <p>${price}</p>
                    <p>{description}</p>
                    <p>{rating}</p>
                    <div className="card-actions justify-center">
                        <Link to={`/menu/${_id}`}><button className="btn">See More</button> </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;