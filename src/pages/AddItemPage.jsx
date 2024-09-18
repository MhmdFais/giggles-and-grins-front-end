import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function AddItemPage() {
  const { category} = useParams();
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        quantity: "",
        available_sizes: "",
        description: "",
        category_id: "",
        color: "",
        material: "",
        weight_capacity: "",
        dimensions: "",
        type: "",
        age_range: "",
        size: "",
        pack_size: ""
    });
    const navigate = useNavigate();

    const categories = [
        { id: 1, name: "boys_clothes" },
        { id: 2, name: "girls_clothes" },
        { id: 3, name: "baby_gear" },
        { id: 4, name: "feedings" },
        { id: 5, name: "diapers" },
        { id: 6, name: "toys" }
    ];

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                ...formData,
                category_id: parseInt(formData.category_id),
            };
            console.log("Form data before sending:", payload);
            const response = await axios.post(`http://localhost:8080/${category}/add-item`, payload);
            console.log(response.data);
            navigate(`/${category}`);
        } catch (error) {
            console.error("Error adding item:", error.response?.data || error.message);
        }
    };

    return (
        <div className="addItemPage min-h-screen flex justify-center items-center bg-gray-50">
            <div className="addFormContainer w-full max-w-4xl bg-white border rounded-lg shadow-lg p-10">
                <h1 className="text-4xl font-bold text-cyan-700 mb-6">Add New Item</h1>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Item Name */}
                    <div className="formGroup">
                        <label className="text-lg font-semibold">Item Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            placeholder="Enter item name"
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md"
                        />
                    </div>

                    {/* Price */}
                    <div className="formGroup">
                        <label className="text-lg font-semibold">Price</label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            placeholder="Enter item price"
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md"
                        />
                    </div>

                    {/* Quantity */}
                    <div className="formGroup">
                        <label className="text-lg font-semibold">Quantity</label>
                        <input
                            type="number"
                            name="quantity"
                            value={formData.quantity}
                            placeholder="Enter item quantity"
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md"
                        />
                    </div>

                    {/* Available Sizes */}
                    <div className="formGroup">
                        <label className="text-lg font-semibold">Available Sizes</label>
                        <input
                            type="text"
                            name="available_sizes"
                            value={formData.available_sizes}
                            placeholder="Enter available sizes"
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md"
                        />
                    </div>

                    {/* Description */}
                    <div className="formGroup col-span-1 md:col-span-2">
                        <label className="text-lg font-semibold">Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            placeholder="Enter item description"
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md"
                        ></textarea>
                    </div>

                    {/* Category (Dropdown) */}
                    <div className="formGroup">
                        <label className="text-lg font-semibold">Category</label>
                        <select
                            name="category_id"
                            value={formData.category_id}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md"
                        >
                            <option value="">Select a Category</option>
                            {categories.map((cat) => (
                                <option key={cat.id} value={cat.id}>
                                    {cat.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Additional fields for different categories */}
                    {formData.category_id == 1 && (
                        <>
                            <div className="formGroup">
                                <label className="text-lg font-semibold">Material</label>
                                <input
                                    type="text"
                                    name="material"
                                    value={formData.material}
                                    placeholder="Enter material"
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-md"
                                />
                            </div>
                            <div className="formGroup">
                                <label className="text-lg font-semibold">Color</label>
                                <input
                                    type="text"
                                    name="color"
                                    value={formData.color}
                                    placeholder="Enter color"
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-md"
                                />
                            </div>
                        </>
                    )}

                    {formData.category_id == 2 && (
                        <>
                            <div className="formGroup">
                                <label className="text-lg font-semibold">Material</label>
                                <input
                                    type="text"
                                    name="material"
                                    value={formData.material}
                                    placeholder="Enter material"
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-md"
                                />
                            </div>
                            <div className="formGroup">
                                <label className="text-lg font-semibold">Color</label>
                                <input
                                    type="text"
                                    name="color"
                                    value={formData.color}
                                    placeholder="Enter color"
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-md"
                                />
                            </div>
                        </>
                    )}

                    {formData.category_id == 3 && (
                        <>
                            <div className="formGroup">
                                <label className="text-lg font-semibold">Weight Capacity</label>
                                <input
                                    type="text"
                                    name="weight_capacity"
                                    value={formData.weight_capacity}
                                    placeholder="Enter weight capacity"
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-md"
                                />
                            </div>
                            <div className="formGroup">
                                <label className="text-lg font-semibold">Dimensions</label>
                                <input
                                    type="text"
                                    name="dimensions"
                                    value={formData.dimensions}
                                    placeholder="Enter dimensions"
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-md"
                                />
                            </div>
                        </>
                    )}

                    {formData.category_id == 4 && (
                        <>
                            <div className="formGroup">
                                <label className="text-lg font-semibold">Type</label>
                                <input
                                    type="text"
                                    name="type"
                                    value={formData.type}
                                    placeholder="Enter type"
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-md"
                                />
                            </div>
                            <div className="formGroup">
                                <label className="text-lg font-semibold">Age Range</label>
                                <input
                                    type="text"
                                    name="age_range"
                                    value={formData.age_range}
                                    placeholder="Enter age range"
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-md"
                                />
                            </div>
                        </>
                    )}

                    {formData.category_id == 5 && (
                        <>
                            <div className="formGroup">
                                <label className="text-lg font-semibold">Size</label>
                                <input
                                    type="text"
                                    name="size"
                                    value={formData.size}
                                    placeholder="Enter size"
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-md"
                                />
                            </div>
                            <div className="formGroup">
                                <label className="text-lg font-semibold">Pack Size</label>
                                <input
                                    type="text"
                                    name="pack_size"
                                    value={formData.pack_size}
                                    placeholder="Enter pack size"
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-md"
                                />
                            </div>
                        </>
                    )}

                    {formData.category_id == 6 && (
                        <>
                            <div className="formGroup">
                                <label className="text-lg font-semibold">Material</label>
                                <input
                                    type="text"
                                    name="material"
                                    value={formData.material}
                                    placeholder="Enter material"
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-md"
                                />
                            </div>
                            <div className="formGroup">
                                <label className="text-lg font-semibold">Age Range</label>
                                <input
                                    type="text"
                                    name="age_range"
                                    value={formData.age_range}
                                    placeholder="Enter age range"
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-md"
                                />
                            </div>
                        </>
                    )}

                    {/* Submit Button */}
                    <div className="formGroup col-span-2 flex justify-end">
                        <button
                            type="submit"
                            className="bg-cyan-600 text-white px-6 py-2 rounded-md hover:bg-cyan-700"
                        >
                            Add Item
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddItemPage;
