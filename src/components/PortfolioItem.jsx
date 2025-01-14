import "../App.jsx";

export const PortfolioItem = (element) => {
    const {el} = element;

    return(
        <div className="portfolio-item">
            <img src={el.img} className="item"/>
        </div> 
    )
}
