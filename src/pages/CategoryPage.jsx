import { useState, useEffect } from "react";
import axios  from "axios";
import { useParams, Link } from "react-router-dom";

function CategoryPage() {
    const { category } = useParams()
    const [itemsArray, setItemsArray] = useState([])

    const fetchCategoryItems = async () => {
        try {
            console.log(`Selected categoty -- ${category}`)
            const response = await axios.get(`${import.meta.env.REACT_APP_API_URL}/${category}`);
            console.log(response.data)
            setItemsArray(response.data); 
        } catch (error) {
            console.error("Error fetching category items:", error.response.data);
        }
    };

    useEffect(() => {
        fetchCategoryItems();
    }, [category]);

    const imageSrc = (categoryId) => {
        switch (categoryId) {
            case 1:
                return "/assets/photos/boy-dress.webp";
            case 2:
                return "/assets/photos/girl-dress.webp";
            case 3:
                return "/assets/photos/stroll.webp";
            case 4:
                return "/assets/photos/feed.webp";
            case 5:
                return "/assets/photos/diapers.webp";
            case 6:
                return "/assets/photos/toy.webp";
            // default:
            //     return "/assets/photos/default.webp"; 
        }
    };

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
            <div className="itemsCardsContainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {itemsArray.length > 0 ? (
                    itemsArray.map((item) => (
                        <Link 
                            to={`/${category}/view-item/${item.id}`} 
                            key={item.id} 
                            className="card p-4 border rounded-lg shadow-lg hover:bg-gray-100 transition"
                        >
                            <img 
                                src={imageSrc(item.category_id)} 
                                alt={item.name} 
                                className="w-full h-48 object-cover rounded-lg mb-4" 
                            />
                            <h1 className="text-xl font-bold">{item.name}</h1>
                            <h2 className="text-lg text-gray-700">${item.price}</h2>
                        </Link>
                    ))
                ) : (
                    <p className="text-center col-span-3">No items available for this category.</p>
                )}
            </div>
        </div>
    );
    
}

export default CategoryPage;