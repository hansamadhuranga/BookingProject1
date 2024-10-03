import HomeTest from "../testLayer/HomeTest";
import HotelDetailTest from "../testLayer/HotelDetailsTest";
import SearchResultsTest from "../testLayer/SearchResultsTest";

describe('Booking.com POM Automation', () => {

    const HOME_TEST = new HomeTest();
    const SEARCH_RESULT_TEST = new SearchResultsTest();
    const HOTEL_DETAIL_TEST = new HotelDetailTest();

    it('should automate the booking process using Page Object Model', () => {

        // Step 1: Visit Home Page
        HOME_TEST.visit();

        // Step 2: Set Language and Currency
        HOME_TEST.setLanguageAndCurrecy();

        // Step 3: Select "Stays" tab
        HOME_TEST.setActionHomePage();
       // hotelDetailPage.closePopup();

        // Step 4: Enter location, set dates, and guests
       // HOME_TEST.enterLocation('Kandy');
      //  HOME_TEST.selectDates('2024-10-10', '2024-10-12');
       // HOME_TEST.setGuests(1, 0, 1);

        // Step 5: Click Search
        //HOME_TEST.clickSearch();

        // Step 6: Verify search location
       // HOME_TEST.verifyLocation('Kandy');

        // Step 7: Filter by 3 stars and sort by price
        SEARCH_RESULT_TEST.ratingAndFilter(3);
       // searchResultsPage.sortByPrice();

        // Step 8: Get and click the second item
        //searchResultsPage.getSecondItemName().as('hotelName');
       // searchResultsPage.getSecondItemPrice().as('hotelPrice');
        //searchResultsPage.clickSecondItem();

        // Step 9: Verify hotel name and select room by price
        cy.get('@hotelName').then((hotelName) => {
            hotelDetailPage.verifyHotelName(hotelName);
        });

        cy.get('@hotelPrice').then((hotelPrice) => {
            hotelDetailPage.selectRoomByPrice(hotelPrice);
        });

        // Step 10: Click on reserve and verify dates and price
        hotelDetailPage.clickReserve();
        cy.get('@hotelPrice').then((hotelPrice) => {
            hotelDetailPage.verifyDatesAndPrice('2024-10-10', '2024-10-12', hotelPrice);
        });

        // Step 11: Fill personal details and navigate to final details
        hotelDetailPage.fillPersonalDetails('Test', 'Automation', 'test@example.com');
        hotelDetailPage.clickNextFinalDetails();
        

        // Step 12: Verify final details
        hotelDetailPage.verifyFinalDetails('Test', 'Automation');

        // Step 13: Navigate back to home page
        hotelDetailPage.navigateToHomePage();
    });

});