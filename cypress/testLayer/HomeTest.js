import HomePage from "../pageLayer/HomePage";

class HomeTest{
    constructor(){
        this.HomePage = new HomePage;
    }

    setLanguageAndCurrecy(){
        this.HomePage.setLanguageToEnglishUK();
        this.HomePage.setCurrencyToAUD();
    }

    
}