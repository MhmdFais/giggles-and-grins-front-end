import { useState, useEffect } from "react";
import axios  from "axios";

function HomePage() {
    const [itemsArray, setItemsArray] = useState([])

    const fecthAPI = async () => {
        const response = await axios.get("http://localhost:8080/")
        console.log(response.data)
        setItemsArray(response.data)
    }

    useEffect( () => {
        fecthAPI()
    }, [])

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

    return(
        <div className="homePageContent min-h-screen">
            <div className="upperPart mb-8">
                <p className="text-4xl text-cyan-600">All Items</p>
            </div>
            <div className="itemsCardsContainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {itemsArray.map((item) => (
                    <div key={item.id} className="card p-4 border rounded-lg shadow-lg">
                        <img src={imageSrc(item.category_id)} alt={item.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                        <div className="texts">
                            <h1 className="text-xl font-bold">{item.name}</h1>
                            <h2 className="text-lg text-gray-700">${item.price}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomePage;