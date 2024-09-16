import { useState, useEffect } from "react";
import axios  from "axios";
import { useParams } from "react-router-dom";

function CategoryPage() {
    const { category } = useParams()
    const [itemsArray, setItemsArray] = useState([])

    const fetchCategoryItems = async () => {
        try {
            console.log(`Selected categoty -- ${category}`)
            const response = await axios.get(`http://localhost:8080/${category}`);
            console.log(response.data)
            setItemsArray(response.data); 
            //console.log(`http://localhost:8080/${category}`)
        } catch (error) {
            console.error("Error fetching category items:", error.response.data);
        }
    };

    useEffect(() => {
        fetchCategoryItems();
    }, [category]);

    return (
        <div className="categoryPage min-h-screen">
            <div className="upperContainer flex justify-between items-center mb-8">
                <h1 className="text-4xl text-cyan-600 capitalize">
                    {category.replace('_', ' ')} Items
                </h1>
                <div className="addButtonContainer">
                    <a 
                        href={`/${category}/add-item`} 
                        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 text-2xl"
                    >
                        Add New Item
                    </a>
                </div>
            </div>
            <div className="itemsCardsContainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {itemsArray.length > 0 ? (
                    itemsArray.map((item) => (
                        <div key={item.id} className="card p-4 border rounded-lg shadow-lg">
                            <img 
                                src={item.image_url} 
                                alt={item.name} 
                                className="w-full h-48 object-cover rounded-lg mb-4" 
                            />
                            <h1 className="text-xl font-bold">{item.name}</h1>
                            <h2 className="text-lg text-gray-700">${item.price}</h2>
                        </div>
                    ))
                ) : (
                    <p className="text-center col-span-3">No items available for this category.</p>
                )}
            </div>
        </div>
    );
    
}

export default CategoryPage;