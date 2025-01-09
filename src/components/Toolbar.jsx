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
        <div className="toolbar" id="toolbar">
            {state.filter.map(item => (
                <div key={item.key} className="toolbar__item" 
                    onClick={(e) => {
                        chooseFunk(item.name); 
                        let parent = document.getElementById("toolbar");
                        let btns = Array.from(parent.querySelectorAll("div"));
                        btns.forEach(btn => {
                            btn.className = "toolbar__item";
                        });
                        e.target.className = "active";
                    }
                }>{item.name}</div>
            ))}
        </div>
    );

};
