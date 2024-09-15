import PropTypes from 'prop-types';
import Sidebar from "./Sidebar"
import Heading from './Heading'

function Layout({children}){
    return(
        <div className="mainContent grid grid-cols-4 min-h-screen">
            <div className="bg-gray-800 p-4 text-zinc-100"> 
                <Heading />
                <Sidebar />
            </div>
            <div className="content col-span-3 p-6">
                {children}  
            </div>
        </div>
    )
}

export default Layout

Layout.propTypes = {
    children: PropTypes.node.isRequired
}