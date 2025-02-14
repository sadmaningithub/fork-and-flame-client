import { BiDish } from "react-icons/bi";


const AddDish = () => {
    return (
        <div className="max-w-7xl mx-auto my-10 lg:my-24">
            <div className="flex flex-row justify-center">
                <div className="max-w-xl w-full">

                    <div className="max-w-xl w-full bg-base-100 p-5 lg:p-10 rounded-xl shadow-2xl">

                        <div className="mb-4">
                            <h1 className="flex flex-row justify-center items-center gap-1 text-xl font-bold"> <BiDish /> <span>Add a dish</span></h1>
                        </div>

                        <form className="fieldset ">
                            <label className="fieldset-label">Name</label>
                            <input type="text" className="input w-full" placeholder="name" />
                            <label className="fieldset-label">Dish Image</label>
                            <input type="text" className="input w-full" placeholder="image url" />
                            <label className="fieldset-label">Dish Category</label>
                            <input type="text" className="input w-full" placeholder="dish category" />
                            <label className="fieldset-label">Price</label>
                            <input type="text" className="input w-full" placeholder="price" />
                            <label className="fieldset-label">Description</label>
                            <textarea className="textarea w-full" placeholder="description"></textarea>
                            <input className="btn btn-neutral mt-4" type="submit" value="Add Dish" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddDish;