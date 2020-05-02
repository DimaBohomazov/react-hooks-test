import React from "react";
import "../stylesheets/loader.css"

export const Loader = () => {
    return(
        <div className="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}