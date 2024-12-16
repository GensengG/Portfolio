import { useState } from "react";
import { Toolbar } from "./Toolbar.jsx";
import { ProjectList } from "./ProjectList.jsx";

export const Portfolio = () => {
    const initialPortfolio = {
        filters: ["All", "Websites", "Flayers", "Business Cards"],
        selected: "All",
        className: "toolbar__item",
        projectList: [
        {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
            category: "Business Cards"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
            category: "Websites"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
            category: "Websites"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
            category: "Websites"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
            category: "Business Cards"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
            category: "Websites"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
            category: "Websites"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
            category: "Business Cards"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
            category: "Websites"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
            category: "Flayers"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
            category: "Websites"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
            category: "Business Cards"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
            category: "Websites"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
            category: "Websites"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
            category: "Business Cards"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
            category: "Websites"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
            category: "Flayers"
        }
        ]
    }
    let newProjectList = [];

    const [portfolio, setPortfolio] = useState(initialPortfolio);
    const hanlerPortfolioItem = (e) => {
        setPortfolio({...portfolio, selected: e.target.textContent, className: "toolbar__item__active"});
        console.log(e.target)
    };

    return (
        <>
            <div className="toolbar">
                <div className={portfolio.className} onClick = {hanlerPortfolioItem}>
                    {"All"}
                </div>
                <div className={portfolio.className} onClick = {hanlerPortfolioItem}>
                    {"Websites"}
                </div>
                <div className={portfolio.className} onClick = {hanlerPortfolioItem}>
                    {"Flayers"}  
                </div>
                <div className={portfolio.className} onClick = {hanlerPortfolioItem}>
                    {"Business Cards"}  
                </div>
            </div>
            <div className="projectList">
            </div>
        </>
    );
}
