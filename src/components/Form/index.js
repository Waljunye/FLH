import React, {useEffect, useState} from "react";
import "./Form.css"
import { withRouter } from "react-router-dom";
import LifeSituation from "./Question";


const Category113 = ["Ветеран ВОВ", "Ветеран Труда", "Инвалид 1-2 Категории",
    "Член семьи умершего ветерана боевых действий ", "Герой труда ","Вдова Военнослужащего",
    "Узник фашизма", "Представитель КМНС"]
const Category324 = ["Сирота", "Усыновитель ", "Недееспособный ", "Инвалид 3 Категории",
     "Пострадавший в ЧС "]
function Form(props){
    const [category, setCategory] = useState("0");
    const [diffSituation, setSituation] = useState(false);
    const [birthDate, setDate] = useState(Date.now());
    const [is113Checked, set113] = useState(false);
    const [is324Checked, set324] = useState(false);
    const onSubmit = (event) => {
        checkHuman()
        event.preventDefault();
        if(is113Checked){
            document.location.href = "/form/accepted-1";
        }if(is324Checked){
            document.location.href = "/form/accepted-2";
        }
    }
    const onCategoryChange = (element) => {
        setCategory(element.target.value)
        checkHuman()
    }
    const onDiffSituation = (element) => {
        setSituation(element.target.checked)
        checkHuman()
    }
    const onDateChanged = (element) => {
        setDate(element.target.value)
        console.log(element.target)
        checkHuman()
    }
    useEffect(() =>{
        console.log(is113Checked)
        console.log(is324Checked)
        console.log(category)
    })
    const checkHuman = () => {
        set113(Date.now() - Date.parse(birthDate) > 2051244000000 || category === "5" || diffSituation)
        set324(category === "2");

    }
    return (
        <section className="form-section">
            <h2>Тест на БЮП</h2>
            <label htmlFor="category-form" className="text">Ваша категория гражданина:</label>
            <div>
                <form onSubmit={onSubmit} className="form">
                    <div>
                        <select id="category-form" className="category" placeholder="Категория" onChange={onCategoryChange}>
                            <option value="0">Нет</option>
                            {Category113.map((option, index) => {
                                return(
                                    <option id={index} value="2" key={index}>{option}</option>
                                )
                            })}
                            {Category324.map((option, index) => {
                                return (
                                    <option id={index} value="5" key={index}>{option}</option>
                                )
                            })}
                        </select>
                        <br/>
                    </div>
                        <div>
                            <label htmlFor="birth-date" className="text" >Когда вы родились?</label>
                            <br/>
                            <input type="date" id="birth-date" className="birth-date" onChange={onDateChanged}/>
                            <br/>
                        </div>
                        <div>
                            <label htmlFor="difficult-life-situation" className="text">У вас сложная жизненная ситуация?</label>
                            <input type="checkbox" id="difficult-life-situation" className="checkbox" onChange={onDiffSituation}/>
                        </div>
                    <input type="submit" value="Проверить" className="button"/>
                </form>
            </div>
        </section>
    )
}

export default Form;