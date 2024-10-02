import HomePage from "../pageLayer/HomePage";
import HotelDetailPage from "../pageLayer/HotelDetailPage";
import SearchResultsPage from "../pageLayer/SearchResultsPage";

describe('Booking.com POM Automation', () => {

    const homePage = new HomePage();
    const searchResultsPage = new SearchResultsPage();
    const hotelDetailPage = new HotelDetailPage();

    it('should automate the booking process using Page Object Model', () => {

        // Step 1: Visit Home Page
        homePage.visit();

        // Step 2: Set Language and Currency
        homePage.setLanguageToEnglishUK();
        homePage.setCurrencyToAUD();

        // Step 3: Select "Stays" tab
        homePage.selectStaysTab();
        hotelDetailPage.closePopup();

        // Step 4: Enter location, set dates, and guests
        homePage.enterLocation('Kandy');
        homePage.selectDates('2024-10-10', '2024-10-12');
        homePage.setGuests(1, 0, 1);

        // Step 5: Click Search
        homePage.clickSearch();

        // Step 6: Verify search location
        homePage.verifyLocation('Kandy');

        // Step 7: Filter by 3 stars and sort by price
        searchResultsPage.filterByRating(3);
        searchResultsPage.sortByPrice();

        // Step 8: Get and click the second item
        searchResultsPage.getSecondItemName().as('hotelName');
        searchResultsPage.getSecondItemPrice().as('hotelPrice');
        searchResultsPage.clickSecondItem();

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