import HomePage from "../pageLayer/HomePage";

class HomeTest{
    constructor(){
        this.HomePage = new HomePage;
    }

    setLanguageAndCurrecy(){
        this.HomePage.setLanguageToEnglishUK();
        this.HomePage.setCurrencyToAUD();
    }

    setActionHomePage(){
        this.HomePage.selectStaysTab();
        this.HomePage.enterLocation(location);
        this.HomePage.selectDates(checkInDate, checkOutDate);
        this.HomePage.setGuests(adults, children, rooms);
        this.HomePage.clickSearch();
        this.HomePage.verifyLocation(expectedLocation);

    }
}