import React from "react"; 
import './SideBar.css';
import "bootstrap/dist/css/bootstrap.css";

import { generatedPassword } from '../../Functions/permutation';

const SideBar = () => {
    return (
        <main className="container-fluid mx-auto text-center sideBarWrapper float-right">
            <div className="row">
                <div className="col-12 my-3">
                    <h1>SIDEBAR</h1>
                    <h2>{generatedPassword}</h2>
                </div>
            </div>
        </main>
    )
}


export default SideBar;