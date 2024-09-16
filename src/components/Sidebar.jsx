import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
    const location = useLocation(); 

    return (
        <div className="sidebar p-4 bg-gray-800 h-full text-white">
            <ul className="space-y-4"> 
                <li>
                    <Link
                        to="/"
                        className={`block p-2 rounded-lg transition-transform transform 
                        ${location.pathname === '/' ? 'scale-110 bg-gray-700' : 'hover:scale-105 hover:bg-gray-600'}`}
                    >
                        All Items
                    </Link>
                </li>
                <li>
                    <Link
                        to="/boys_clothes"
                        className={`block p-2 rounded-lg transition-transform transform 
                        ${location.pathname === '/boys' ? 'scale-110 bg-gray-700' : 'hover:scale-105 hover:bg-gray-600'}`}
                    >
                        Boys Clothes
                    </Link>
                </li>
                <li>
                    <Link
                        to="/girls_clothes"
                        className={`block p-2 rounded-lg transition-transform transform 
                        ${location.pathname === '/girls' ? 'scale-110 bg-gray-700' : 'hover:scale-105 hover:bg-gray-600'}`}
                    >
                        Girls Clothes
                    </Link>
                </li>
                <li>
                    <Link
                        to="/baby_gear"
                        className={`block p-2 rounded-lg transition-transform transform 
                        ${location.pathname === '/babygear' ? 'scale-110 bg-gray-700' : 'hover:scale-105 hover:bg-gray-600'}`}
                    >
                        Baby Gear
                    </Link>
                </li>
                <li>
                    <Link
                        to="/diapers"
                        className={`block p-2 rounded-lg transition-transform transform 
                        ${location.pathname === '/diapers' ? 'scale-110 bg-gray-700' : 'hover:scale-105 hover:bg-gray-600'}`}
                    >
                        Diapers
                    </Link>
                </li>
                <li>
                    <Link
                        to="/feedings"
                        className={`block p-2 rounded-lg transition-transform transform 
                        ${location.pathname === '/feedings' ? 'scale-110 bg-gray-700' : 'hover:scale-105 hover:bg-gray-600'}`}
                    >
                        Feedings
                    </Link>
                </li>
                <li>
                    <Link
                        to="/toys"
                        className={`block p-2 rounded-lg transition-transform transform 
                        ${location.pathname === '/toys' ? 'scale-110 bg-gray-700' : 'hover:scale-105 hover:bg-gray-600'}`}
                    >
                        Toys
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
