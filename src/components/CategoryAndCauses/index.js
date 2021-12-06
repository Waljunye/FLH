import React from "react";
import {Link} from "react-router-dom";
import "./CausesAndCategories.css"

function CausesAndCategoriesPage(){
    return (
        <section className="causes-and-categories">
            <Link to="causesAndCategories1"><h2>Случаи установленные частью 2 статьи 20 № 324-ФЗ</h2></Link>
            <Link to="causesAndCategories2"><h2>Случаи установленные статьей 5 Закона № 113-ОЗ</h2></Link>
        </section>
    )
}

export default CausesAndCategoriesPage;