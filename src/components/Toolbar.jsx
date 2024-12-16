import { useState } from "react";
import { Portfolio } from "./Portfolio";
import { ProjectList } from "./ProjectList.jsx";

export const Toolbar = () => {
    const sdbvskv = {
        "All": ProjectList.first,
        "Business Cards": ProjectList.second,
        "Websites": ProjectList.third,
        "Flayers": ProjectList.fourth,
    }
    let selected  = "";
    const onSelectFilter = (selected) => {
        return sdbvskv[selected];
    };

};