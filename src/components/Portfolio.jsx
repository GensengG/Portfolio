import { useState } from "react";


export const Portfolio = (filter) => {
    let {portfolioState} = filter;
    const result = [];
    if(portfolioState === "All"){
        result = [
            <img src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg" />,
            <img src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg"/>,
            <img src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg"/>,
            <img src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg"/>,
            <img src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg"/>,
            <img src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png"/>,
            <img src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg"/>,
            <img src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg"/>,
            <img src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png"/>,
            <img src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png"/>,
            <img src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg"/>,
            <img src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg"/>,
            <img src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg"/>,
            <img src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg"/>,
            <img src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg"/>,
            <img src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg"/>,
            <img src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png"/>,
        ]
    }
    if(portfolioState === "Business Cards"){
        result = [
            <img src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg" />,
            <img src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg" />,
            <img src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg" />,
            <img src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg" />,
            <img src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg" />,
        ]
    }
    if(portfolioState === "Websites"){
        result = [
            <img src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg" />,
            <img src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg" />,
            <img src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg" />,
            <img src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png" />,
            <img src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg" />,
            <img src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png" />,
            <img src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg" />,
            <img src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg" />,
            <img src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg" />,
            <img src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg" />,
        ]
    }
    if(portfolioState === "Flayers"){
        result = [
            <img src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png" />,
            <img src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png" />,
        ]
    }
    return (
        <>
            {result}
        </>
    )
}
