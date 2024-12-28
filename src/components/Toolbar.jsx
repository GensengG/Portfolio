import { useState } from "react";
import "../App.jsx";

export const Toolbar = (chooseCategory) => {

    const {chooseFunk} = chooseCategory;

    const state = {
        filter: [
            {
                key: "All",
                name: "All"
            },
            {
                key: "Websites",
                name: "Websites"
            },
            {
                key: "Flayers",
                name: "Flayers"
            },
            {
                key: "Business Cards",
                name: "Business Cards"
            }
        ]
    }

    return (
        <div className="toolbar">
            {state.filter.map(item => (
                <div key={item.key} className="toolbar__item" onClick={() => chooseFunk(item.name)}>{item.name}</div>
            ))}
        </div>
    );

};
