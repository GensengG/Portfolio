import { useState } from "react";
import { Toolbar } from "./Toolbar.jsx";
import "../App.jsx";
import { Portfolio } from "./Portfolio.jsx";

export const PortfolioItem = (element) => {
    const {el} = element;

    return(
        <div className="portfolio-item">
            <img src={el.img} className="item"/>
        </div> 
    )
}
