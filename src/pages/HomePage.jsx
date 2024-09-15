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

    return(
        <div className="homePageContent">
            <div className="upperPart">
                <h1>All Items</h1>
            </div>
            <div className="itemsCardsContainer">
                <ul>
                    {itemsArray.map((item) => (
                        <li key={item.id} className="card">
                            <img></img>
                            <div className="texts">
                                <h1>{item.name}</h1>
                                <h2>${item.price}</h2>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default HomePage;