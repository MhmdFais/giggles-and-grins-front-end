import PropTypes from 'prop-types';
import Sidebar from "./Sidebar";
import Heading from './Heading';

function Layout({children}){
    return(
        <div className="mainContent grid grid-cols-4 h-screen"> {/* Add h-screen */}
            <div className="bg-gray-800 p-4 text-zinc-100 col-span-1 flex flex-col justify-between"> {/* Adjust */}
                <Heading />
                <Sidebar />
            </div>
            <div className="content col-span-3 p-6 overflow-y-auto"> {/* Add overflow-y-auto to handle content overflow */}
                {children}  
            </div>
        </div>
    )
}

export default Layout;

Layout.propTypes = {
    children: PropTypes.node.isRequired
};
