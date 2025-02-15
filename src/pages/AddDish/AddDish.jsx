import axios from "axios";
import { BiDish } from "react-icons/bi";
import Swal from "sweetalert2";


const AddDish = () => {

    const handleAddDish = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const dishData = { name, image, category, price,rating, description }
        console.log(dishData);
        axios.post('http://localhost:5000/dishes', dishData)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        title: `${name} has been added`,
                        icon: "success",
                        confirmButtonColor: '#000000'
                    });
                }
                form.reset();
            })
            .catch(error => {
                console.log(error);
                if (error.message) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                        confirmButtonText: 'Try again',
                        confirmButtonColor: '#000000'
                    });
                }
            });


    }

    return (
        <div className="max-w-7xl mx-auto my-16">
            <div className="flex flex-row justify-center ">
                <div className="max-w-xl w-full ">

                    <div className="w-full bg-base-100 p-5 lg:p-10 rounded-xl shadow-2xl">

                        <div className="mb-4">
                            <h1 className="flex flex-row justify-center items-center gap-1 text-xl font-bold"> <BiDish /> <span>Add a dish</span></h1>
                        </div>

                        <form onSubmit={handleAddDish} className="fieldset ">
                            <label className="fieldset-label">Name</label>
                            <input type="text" name="name" className="input w-full" placeholder="name" />
                            <label className="fieldset-label">Dish Image</label>
                            <input type="text" name="image" className="input w-full" placeholder="image url" />
                            <label className="fieldset-label">Dish Category</label>
                            <input type="text" name="category" className="input w-full" placeholder="dish category" />
                            <label className="fieldset-label">Price</label>
                            <input type="text" name="price" className="input w-full" placeholder="price" />
                            <label className="fieldset-label">Rating</label>
                            <input type="text" name="rating" className="input w-full" placeholder="rating" />
                            <label className="fieldset-label">Description</label>
                            <textarea className="textarea w-full" name="description" placeholder="description"></textarea>
                            <input className="btn btn-neutral mt-4" type="submit" value="Add Dish" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddDish;