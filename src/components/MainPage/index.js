import React from "react";
import arrow from './img/Arrow.svg'
import "./MainPage.css"
import {Link} from "react-router-dom";
import { Carousel } from '3d-react-carousal';
import formImage from "./img/form.jpg";
import infoImage from "./img/info.jpg";
let carouselHtmlItems = [
    <div><Link className="carousel-link" to="/form" style={{background: "none"}}><img src={process.env.PUBLIC_URL + formImage} alt="1"/></Link></div>,
    <div><Link className="carousel-link" to="/casesandcategories" style={{background: "none"}}><img src={process.env.PUBLIC_URL + infoImage} alt="2"/></Link></div> ];
function MainPage() {

    return(
        <div>
        <section className="main-page-body">
            <div className="carousel">
                <Carousel autoplay={false} slides={carouselHtmlItems}/>
            </div>
            <div className="main-body-text">
                <div><p>Заполни форму и узнай,<br/>
                    сожешь ли ты получить<br/>
                    Бесплатную Юридичесую<br/>
                    Помощь</p></div>
                <div className="to-form"><Link to="/form"><img src={process.env.PUBLIC_URL + arrow} alt="to form"/></Link></div>
            </div>
        </section>
        </div>
    )
}

export default MainPage;