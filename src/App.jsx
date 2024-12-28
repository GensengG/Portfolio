import './App.css';
import { useState } from 'react';
import { Portfolio } from "./components/Portfolio.jsx";
import { PortfolioItem } from "./components/PortfolioItem.jsx";
import { Toolbar } from "./components/Toolbar.jsx";

function App() {
    let state = {
        currentItems: [
            {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
                category: "Business Cards",
                id: "i1",
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
                category: "Websites",
                id: "i2"
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
                category: "Websites",
                id: "i3"
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
                category: "Websites",
                id: "i4"
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
                category: "Business Cards",
                id: "i5"
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
                category: "Websites",
                id: "i6"
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
                category: "Websites",
                id: "i7"
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
                category: "Business Cards",
                id: "i8"
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
                category: "Websites",
                id: "i9"
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
                category: "Flayers",
                id: "i10"
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
                category: "Websites",
                id: "i11"
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
                category: "Business Cards",
                id: "i12"
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
                category: "Websites",
                id: "i13"
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
                category: "Websites",
                id: "i14"
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
                category: "Business Cards",
                id: "i15"
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
                category: "Websites",
                id: "i16"
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
                category: "Flayers",
                id: "i17"
            }
        ],
        itemCollection: [
            {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
                category: "Business Cards",
                id: "i1",
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
                category: "Websites",
                id: "i2"
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
                category: "Websites",
                id: "i3"
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
                category: "Websites",
                id: "i4"
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
                category: "Business Cards",
                id: "i5"
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
                category: "Websites",
                id: "i6"
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
                category: "Websites",
                id: "i7"
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
                category: "Business Cards",
                id: "i8"
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
                category: "Websites",
                id: "i9"
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
                category: "Flayers",
                id: "i10"
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
                category: "Websites",
                id: "i11"
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
                category: "Business Cards",
                id: "i12"
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
                category: "Websites",
                id: "i13"
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
                category: "Websites",
                id: "i14"
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
                category: "Business Cards",
                id: "i15"
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
                category: "Websites",
                id: "i16"
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
                category: "Flayers",
                id: "i17"
            }
        ]
    };

    const [stateSwitch, setState] = useState(state); 

    function chooseCategory(category){
        if(category === "All"){
            setState({...stateSwitch}, stateSwitch.currentItems = stateSwitch.itemCollection)
        } else {
        setState({...stateSwitch}, stateSwitch.currentItems = stateSwitch.itemCollection.filter(el => el.category === category));
        }
    };

    return(
        <div>
            <Toolbar chooseFunk={chooseCategory}/>
            <Portfolio itemsArr={stateSwitch}/>
        </div>
    );
}

export default App;
