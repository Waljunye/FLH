import './App.css';
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CausesAndCategoriesPage from "./components/CategoryAndCauses";
import FirsCause from "./components/Causes/FirstCause";
import SecondCause from "./components/Causes/SecondCause";
import Form from "./components/Form";
import AcceptedPage from "./components/AcceptedPage";

function App() {
    const firstCategory = "частью 1 статьи 20 Федерального закона № 324-ФЗ";
    const secondCategory = "статьей 4, и статьями 5.1 - 5.4 Закона № 113-ОЗ";
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<MainPage/>} exact />
                    <Route path="/casesandcategories" element={<CausesAndCategoriesPage/>} exact />
                    <Route path="/casesAndCategories/causesAndCategories1" element={<FirsCause/>} exact />
                    <Route path="/casesAndCategories/causesAndCategories2" element={<SecondCause/>} exact />
                    <Route path="/form" element={<Form/>} exact />
                    <Route path="/form/accepted-1" element={<AcceptedPage category={firstCategory}/>} exact />
                    <Route path="/form/accepted-2" element={<AcceptedPage category={secondCategory}/>} exact />
                </Routes>
            </div>
        </BrowserRouter>
      );
}

export default App;
