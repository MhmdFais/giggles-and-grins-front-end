import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

function ItemDetailPage() {
    const [item, setItem] = useState({});
    const { category, id } = useParams();
    const navigate = useNavigate();

    // Fetch item details
    const fetchItem = async () => {
        try {
            const response = await axios.get(`${import.meta.env.REACT_APP_API_URL}/${category}/view-item/${id}`);
            console.log(response.data);
            setItem(response.data);
        } catch (error) {
            console.error("Error fetching item:", error.response?.data || "Unknown error");
        }
    };

    useEffect(() => {
        fetchItem();
    }, [category, id]);


    // Delete item
    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            try {
                await axios.delete(`${import.meta.env.REACT_APP_API_URL}/${category}/view-item/${id}`);
                alert("Item deleted successfully.");
                navigate('/');
            } catch (error) {
                console.error("Error deleting item:", error.response?.data || "Unknown error");
                alert("Failed to delete item.");
            }
        }
    };


    const imageSrc = (category) => {
        switch (category) {
            case "boys_clothes":
                return "/assets/photos/boy-dress.webp";
            case "girls_clothes":
                return "/assets/photos/girl-dress.webp";
            case "baby_gear":
                return "/assets/photos/stroll.webp";
            case "feedings":
                return "/assets/photos/feed.webp";
            case "diapers":
                return "/assets/photos/diapers.webp";
            case "toys":
                return "/assets/photos/toy.webp";
        }
    }

    return (
        <div className="itemDetailPage min-h-screen flex justify-center items-center py-10">
            {item ? (
                <div className="itemContainer w-full max-w-6xl bg-white p-10 border rounded-lg shadow-lg flex flex-col md:flex-row gap-10">
                    
                    {/* Left Section: Image */}
                    <div className="imageSection w-full md:w-1/2 flex justify-center">
                        <img
                            src={imageSrc(category)}
                            alt={item.name}
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>
                    
                    {/* Right Section: Details */}
                    <div className="detailsSection w-full md:w-1/2 flex flex-col gap-6">
                        <h1 className="text-4xl font-bold text-cyan-700">{item.name}</h1>
                        <h2 className="text-3xl text-gray-800 font-semibold">${item.price}</h2>
                        <p className="text-lg text-gray-600">{item.description}</p>
                        <p className="text-xl text-gray-700">Available Sizes: <span className="font-medium">{item.available_sizes}</span></p>
                        <p className="text-xl text-gray-700">Quantity: <span className="font-medium">{item.quantity}</span></p>

                        {/* Display additional category-specific fields */}

                        {/* Boys Clothes */}
                        {category === 'boys_clothes' && (
                            <div className="extraFields">
                                <p className="text-lg text-gray-700">Material: <span className="font-medium">{item.material}</span></p>
                                <p className="text-lg text-gray-700">Color: <span className="font-medium">{item.color}</span></p>
                            </div>
                        )}

                        {/* Girls Clothes */}
                        {category === 'girls_clothes' && (
                            <div className="extraFields">
                                <p className="text-lg text-gray-700">Material: <span className="font-medium">{item.material}</span></p>
                                <p className="text-lg text-gray-700">Color: <span className="font-medium">{item.color}</span></p>
                            </div>
                        )}

                        {/* Baby Gear */}
                        {category === 'baby_gear' && (
                            <div className="extraFields">
                                <p className="text-lg text-gray-700">Weight Capacity: <span className="font-medium">{item.weight_capacity}</span></p>
                                <p className="text-lg text-gray-700">Dimensions: <span className="font-medium">{item.dimensions}</span></p>
                            </div>
                        )}

                        {/* Feedings */}
                        {category === 'feedings' && (
                            <div className="extraFields">
                                <p className="text-lg text-gray-700">Type: <span className="font-medium">{item.type}</span></p>
                                <p className="text-lg text-gray-700">Age Range: <span className="font-medium">{item.age_range}</span></p>
                            </div>
                        )}

                        {/* Diapers */}
                        {category === 'diapers' && (
                            <div className="extraFields">
                                <p className="text-lg text-gray-700">Size: <span className="font-medium">{item.size}</span></p>
                                <p className="text-lg text-gray-700">Pack Size: <span className="font-medium">{item.pack_size}</span></p>
                            </div>
                        )}

                        {/* Toys */}
                        {category === 'toys' && (
                            <div className="extraFields">
                                <p className="text-lg text-gray-700">Material: <span className="font-medium">{item.material}</span></p>
                                <p className="text-lg text-gray-700">Age Range: <span className="font-medium">{item.age_range}</span></p>
                            </div>
                        )}

                        {/* Edit Button */}
                        <div className="editButtonContainer mt-6 flex gap-6">
                            <Link 
                                to={`/${category}/view-item/${id}/edit`} 
                                className="bg-cyan-600 text-white px-6 py-3 rounded-md hover:bg-cyan-700 text-lg"
                            >
                                Edit Item
                            </Link>
                            {/* Delete Button */}
                            <button 
                                onClick={handleDelete} 
                                className="bg-red-600 text-white px-6 py-2.5 rounded-md hover:bg-red-700 text-lg"
                            >
                                Delete Item
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <p className="text-center">Loading item details...</p>
            )}
        </div>
    );
}

export default ItemDetailPage;
