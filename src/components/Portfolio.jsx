import { useState } from "react";
import { Toolbar } from "./Toolbar.jsx";
import "../App.jsx";
import { PortfolioItem } from "./PortfolioItem.jsx";

export const Portfolio = (stateSwitch) => {
    const {itemsArr} = stateSwitch;

    return(
        <div className="portfolio">
            itemsArr.currentItems.map(element => (
                <PortfolioItem key={element.id} el={element}/>
            ))}
        </div>
    )
}
