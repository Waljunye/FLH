import React from "react";
import "./style.css"
import { YMaps, Map } from 'react-yandex-maps';
<script src="https://unpkg.com/react-yandex-maps/dist/production/react-yandex-maps.umd.js"></script>

function AcceptedPage(props){
    return (
        <section className="accepted-page">
            <div className="accepted-text">
                <p>Результаты теста: Вы можете воспользоваться<br/>
                    правом на получение бесплатной юридической<br/>
                    помощи имеют граждане Российской Федерации,<br/>
                    категории которых установлены {props.category}</p>
            </div>
            <div className="map">
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad5b23b7fce18bc00d2d73c821c900871bd63cfb80ea539c3d8ee73cbe0a62633&amp;source=constructor"
                    width="759" height="480" frameBorder="0">Iframe dont supported</iframe>
            </div>
            <a className="connect-button" href="https://deppolitiki.admhmao.ru">Обратиться</a>
        </section>
    )
}



export default AcceptedPage;
