import React from "react";
import loaderImage from "../../Assets/images/loader.gif";
import Style from "./loader.module.css";

const Loader = () => <div className={Style.imageContainer}>
        <img src={loaderImage}/>
    </div>
export default Loader;