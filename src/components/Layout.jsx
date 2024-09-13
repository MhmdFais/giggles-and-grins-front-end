import PropTypes from 'prop-types';
import Sidebar from "./Sidebar"

function Layout({children}){
    return(
        <div className="mainContent">
            <Sidebar/>
            <div className="content">
                {children}  
            </div>
        </div>
    )
}

export default Layout

Layout.propTypes = {
    children: PropTypes.node.isRequired
}