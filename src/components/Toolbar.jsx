import { useState } from "react";

export const Toolbar = (holdCalback) => {
    const {holdCalbackApp} = holdCalback;
    return (
        <>
            <div className="toolbar">
                <div className="toolbar__item" onClick = {holdCalbackApp}>
                    {"All"}
                </div>
                <div className="toolbar__item" onClick = {holdCalbackApp}>
                    {"Websites"}
                </div>
                <div className="toolbar__item" onClick = {holdCalbackApp}>
                    {"Flayers"}  
                </div>
                <div className="toolbar__item" onClick = {holdCalbackApp}>
                    {"Business Cards"}  
                </div>
            </div>
        </>
    );

};
