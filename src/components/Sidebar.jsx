import { Link } from 'react-router-dom'

function Sidebar(){
    return(
        <div className="sidebar">
            <ul>
                <li><Link to="/">All Items</Link></li>
                <li><Link to="/boys_clothes">Boys Clothes</Link></li>
                <li><Link to="/girls_clothes">Girls Clothes</Link></li>
                <li><Link to="/baby_gear">Baby Gear</Link></li>
                <li><Link to="/diapers">Diapers</Link></li>
                <li><Link to="/feedings">Feedings</Link></li>
                <li><Link to="/toys">Toys</Link></li>
            </ul>
        </div>
    )
}

export default Sidebar