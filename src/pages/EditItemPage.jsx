import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditItemPage() {
    const { category, id } = useParams();
    const [item, setItem] = useState({});
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
   
    const fetchItem = async () => {
        try {
            const response = await axios.get(`${import.meta.env.REACT_APP_API_URL}/${category}/view-item/${id}/edit`)
            console.log(response.data);
            setItem(response.data);
            // setFormData({
            //     name: response.data.name,
            //     price: response.data.price,
            //     quantity: response.data.quantity,
            //     available_sizes: response.data.available_sizes,
            //     description: response.data.description,
            //     category_id: response.data.category_id,
            //     color: response.data.color || "",
            //     material: response.data.material || "",
            //     weight_capacity: response.data.weight_capacity || "",
            //     dimensions: response.data.dimensions || "",
            //     type: response.data.type || "",
            //     age_range: response.data.age_range || "",
            //     size: response.data.size || "",
            //     pack_size: response.data.pack_size || ""
            // })
            setFormData(response.data);
        } catch (error) {
            console.error("Error fetching item:", error.response?.data || error.message);
        }
    };

    useEffect(() => {
        fetchItem(); 
    }, [category, id]);

    
    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData(prevState => ({
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
            console.log("Form data:", payload);
            const response = await axios.post(`http://localhost:8080/${category}/view-item/${id}/edit`, payload);
            console.log(response.data);
            navigate(`/${category}/view-item/${id}`);
        } catch (error) {
            console.error("Error updating item:", error.response?.data || error.message);
        }
    };


    return (
        <div className="editItemPage min-h-screen flex justify-center items-center bg-gray-50">
            <div className="editFormContainer w-full max-w-4xl bg-white border rounded-lg shadow-lg p-10">
                <h1 className="text-4xl font-bold text-cyan-700 mb-6">Edit Item</h1>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Item Name */}
                    <div className="formGroup">
                        <label className="text-lg font-semibold">Item Name</label>
                        <input 
                            type="text"
                            name="name"
                            value={formData.name || ""}
                            placeholder={item.name || "Enter item name"}
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
                            value={formData.price || ""}
                            placeholder={item.price || "Enter item price"}
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
                            value={formData.quantity || ""}
                            placeholder={item.quantity || "Enter item quantity"}
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
                            value={formData.available_sizes || ""}
                            placeholder={item.available_sizes || "Enter available sizes"}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md"
                        />
                    </div>

                    {/* Description */}
                    <div className="formGroup col-span-1 md:col-span-2">
                        <label className="text-lg font-semibold">Description</label>
                        <textarea
                            name="description"
                            value={formData.description || ""}
                            placeholder={item.description || "Enter item description"}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md"
                        ></textarea>
                    </div>

                    {/* Category (Dropdown) */}
                    <div className="formGroup">
                        <label className="text-lg font-semibold">Category</label>
                        <select
                            name="category_id"
                            value={formData.category_id || ""}
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
                    {category === "boys_clothes" && (
                        <>
                            <div className="formGroup">
                                <label className="text-lg font-semibold">Material</label>
                                <input
                                    type="text"
                                    name="material"
                                    value={formData.material || ""}
                                    placeholder={item.material || "Enter material"}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-md"
                                />
                            </div>
                            <div className="formGroup">
                                <label className="text-lg font-semibold">Color</label>
                                <input
                                    type="text"
                                    name="color"
                                    value={formData.color || ""}
                                    placeholder={item.color || "Enter color"}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-md"
                                />
                            </div>
                        </>
                    )}

                    {category === "girls_clothes" && (
                        <>
                            <div className="formGroup">
                                <label className="text-lg font-semibold">Material</label>
                                <input
                                    type="text"
                                    name="material"
                                    value={formData.material || ""}
                                    placeholder={item.material || "Enter material"}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-md"
                                />
                            </div>
                            <div className="formGroup">
                                <label className="text-lg font-semibold">Color</label>
                                <input
                                    type="text"
                                    name="color"
                                    value={formData.color || ""}
                                    placeholder={item.color || "Enter color"}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-md"
                                />
                            </div>
                        </>
                    )}

                    {category === "baby_gear" && (
                        <>
                            <div className="formGroup">
                                <label className="text-lg font-semibold">Weight Capacity</label>
                                <input
                                    type="text"
                                    name="weight_capacity"
                                    value={formData.weight_capacity || ""}
                                    placeholder={item.weight_capacity || "Enter weight capacity"}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-md"
                                />
                            </div>
                            <div className="formGroup">
                                <label className="text-lg font-semibold">Dimensions</label>
                                <input
                                    type="text"
                                    name="dimensions"
                                    value={formData.dimensions || ""}
                                    placeholder={item.dimensions || "Enter dimensions"}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-md"
                                />
                            </div>
                        </>
                    )}

                    {category === "feedings" && (
                        <>
                            <div className="formGroup">
                                <label className="text-lg font-semibold">Type</label>
                                <input
                                    type="text"
                                    name="type"
                                    value={formData.type || ""}
                                    placeholder={item.type || "Enter type"}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-md"
                                />
                            </div>
                            <div className="formGroup">
                                <label className="text-lg font-semibold">Age Range</label>
                                <input
                                    type="text"
                                    name="age_range"
                                    value={formData.age_range || ""}
                                    placeholder={item.age_range || "Enter age range"}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-md"
                                />
                            </div>
                        </>
                    )}

                    {category === "diapers" && (
                        <>
                            <div className="formGroup">
                                <label className="text-lg font-semibold">Size</label>
                                <input
                                    type="text"
                                    name="size"
                                    value={formData.size || ""}
                                    placeholder={item.size || "Enter size"}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-md"
                                />
                            </div>
                            <div className="formGroup">
                                <label className="text-lg font-semibold">Pack Size</label>
                                <input
                                    type="text"
                                    name="pack_size"
                                    value={formData.pack_size || ""}
                                    placeholder={item.pack_size || "Enter pack size"}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-md"
                                />
                            </div>
                        </>
                    )}

                    {category === "toys" && (
                        <>
                            <div className="formGroup">
                                <label className="text-lg font-semibold">Material</label>
                                <input
                                    type="text"
                                    name="material"
                                    value={formData.material || ""}
                                    placeholder={item.material || "Enter material"}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-md"
                                />
                            </div>
                            <div className="formGroup">
                                <label className="text-lg font-semibold">Age Range</label>
                                <input
                                    type="text"
                                    name="age_range"
                                    value={formData.age_range || ""}
                                    placeholder={item.age_range || "Enter age range"}
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
                            Update Item
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditItemPage;
