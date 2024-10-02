import HotelDetailPage from "../pageLayer/HotelDetailPage";

class HotelDetailTest{
    constructor(){
        this.HotelDetailPage = new HotelDetailPage;
    }

setReservationAndDate(){
    this.HotelDetailPage.closePopup();
    this.HotelDetailPage.verifyHotelName(expectedName);
    this.HotelDetailPage.selectRoomByPrice(price);
    this.HotelDetailPage.clickReserve();
    this.HotelDetailPage.verifyDatesAndPrice(checkInDate, checkOutDate, price);
    this.HotelDetailPage.fillPersonalDetails(firstName, lastName, email);
    this.HotelDetailPage.clickNextFinalDetails();
    this.HotelDetailPage.verifyFinalDetails(firstName, lastName);
    this.HotelDetailPage.navigateToHomePage();


}







}