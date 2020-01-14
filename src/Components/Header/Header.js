import React from "react"; 
import './Header.css';
import "bootstrap/dist/css/bootstrap.css";

const Header = () => {
    return (
        <header className="container-fluid mx-auto text-center headerWrapper">
            <div className="row">
                <div className="col-12 my-3">
                    <h1>RANDOM PASSWORD GENERATOR</h1>
                </div>
            </div>
        </header>
    )
}


export default Header;