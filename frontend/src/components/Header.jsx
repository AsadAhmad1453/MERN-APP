import react from 'react'
import {Link} from 'react-router-dom';
export default function Header(){

    return(
        <>
         <header className="header-area">
    
                <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid navv" >
                    <a href="#home" className="site-logo">Blog Spot</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav  justify-content-end">
                        <li className="nav-item">
                        <Link className="nav-link " aria-current="page" to="/" >Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/blogs">Blogs</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/createblog">Create New</Link>
                        </li>
                        
                      
                    
                    </ul>
                        
                    </div>
                </div>
                </nav>
        </header>
        </>

    );


}