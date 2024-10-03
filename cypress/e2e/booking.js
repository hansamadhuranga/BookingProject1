import HomePage from '../page_objects/HomePage';
import SearchResultsPage from '../page_objects/SearchResultsPage';
import HotelDetailPage from '../page_objects/HotelDetailPage';

describe('Booking.com Automation Test using POM', () => {
    const homePage = new HomePage();
    const searchResultsPage = new SearchResultsPage();
    const hotelDetailPage = new HotelDetailPage();

    beforeEach(() => {
        cy.fixture('testData').as('testData');
    });

    it('should automate the Booking.com scenario', function() {
        // Step 1: Visit Booking.com
        homePage.visit("https://www.booking.com/");

        // Step 2: Set Language to English (UK)
        homePage.selectLanguage();

        // Step 3: Set Currency to AUD
        homePage.selectCurrency();

        // Step 4: Select "Stays" Tab (Handled by default)

        // Step 5: Enter Location
        homePage.enterLocation(this.testData.location);

        // Step 6: Select Check-in and Check-out Dates
        homePage.selectDates(this.testData.checkInDate, this.testData.checkOutDate);

        // Step 7: Set Guests: 1 Adult, 0 Children
        homePage.setGuests(this.testData.adults, this.testData.children);

        // Step 8: Click Search Button
        homePage.search();

        // Step 9: Verify Search Location
        homePage.verifySearchLocation(this.testData.location);

        // Step 10: Select Property Rating Filter
        searchResultsPage.filterByRating(this.testData.rating);

        // Step 11: Sort by Price
        searchResultsPage.sortByPrice();

        // Step 12: Get Name and Price of the Second Item
        searchResultsPage.getSecondItemDetails();

        // Step 13: Click the Second Item and Navigate to the Detail Page
        searchResultsPage.clickSecondItem();

        // Step 14: Verify Hotel Name on Detail Page
        cy.get('@hotelName').then((hotelName) => {
            hotelDetailPage.verifyHotelName(hotelName);
        });

        // Step 15: Select a Room Based on Price
        cy.get('@hotelPrice').then((hotelPrice) => {
            hotelDetailPage.selectRoomByPrice(hotelPrice);
        });

        // Step 16: Click "I’ll reserve"
        hotelDetailPage.clickReserve();

        // Step 17: Verify Check-in, Check-out Dates, and Price
        hotelDetailPage.verifyCheckInOutDates(this.testData.checkInDate, this.testData.checkOutDate);
        cy.get('@hotelPrice').then((hotelPrice) => {
            cy.get('div.price').should('contain', hotelPrice.trim());
        });

        // Step 18: Fill in Personal Details
        hotelDetailPage.fillPersonalDetails(this.testData.firstName, this.testData.lastName, this.testData.email);

        // Step 19: Click "Next: Final Details"
        hotelDetailPage.clickNextFinalDetails();

        // Step 20: Verify Final Details
        hotelDetailPage.verifyFinalDetails(this.testData.firstName, this.testData.lastName);

        // Step 21: Navigate Back to Home Page (Handled by clicking the logo)
        cy.get('a[title="Booking.com"]').click();
    });
});



// import HomeTest from "../testLayer/HomeTest";
// import HotelDetailTest from "../testLayer/HotelDetailsTest";
// import SearchResultsTest from "../testLayer/SearchResultsTest";

// describe('Booking.com POM Automation', () => {

//     const HOME_TEST = new HomeTest();
//     const SEARCH_RESULT_TEST = new SearchResultsTest();
//     const HOTEL_DETAIL_TEST = new HotelDetailTest();

//     it('should automate the booking process using Page Object Model', () => {

//         // Step 1: Visit Home Page
//         HOME_TEST.visit();

//         // Step 2: Set Language and Currency
//         HOME_TEST.setLanguageAndCurrecy();

//         // Step 3: Select "Stays" tab
//         HOME_TEST.setActionHomePage();
//        // hotelDetailPage.closePopup();

//         // Step 4: Enter location, set dates, and guests
//        // HOME_TEST.enterLocation('Kandy');
//       //  HOME_TEST.selectDates('2024-10-10', '2024-10-12');
//        // HOME_TEST.setGuests(1, 0, 1);

//         // Step 5: Click Search
//         //HOME_TEST.clickSearch();

//         // Step 6: Verify search location
//        // HOME_TEST.verifyLocation('Kandy');

//         // Step 7: Filter by 3 stars and sort by price
//         SEARCH_RESULT_TEST.ratingAndFilter(3);
//        // searchResultsPage.sortByPrice();

//         // Step 8: Get and click the second item
//         //searchResultsPage.getSecondItemName().as('hotelName');
//        // searchResultsPage.getSecondItemPrice().as('hotelPrice');
//         //searchResultsPage.clickSecondItem();

//         // Step 9: Verify hotel name and select room by price
//         cy.get('@hotelName').then((hotelName) => {
//             hotelDetailPage.verifyHotelName(hotelName);
//         });

//         cy.get('@hotelPrice').then((hotelPrice) => {
//             hotelDetailPage.selectRoomByPrice(hotelPrice);
//         });

//         // Step 10: Click on reserve and verify dates and price
//         hotelDetailPage.clickReserve();
//         cy.get('@hotelPrice').then((hotelPrice) => {
//             hotelDetailPage.verifyDatesAndPrice('2024-10-10', '2024-10-12', hotelPrice);
//         });

//         // Step 11: Fill personal details and navigate to final details
//         hotelDetailPage.fillPersonalDetails('Test', 'Automation', 'test@example.com');
//         hotelDetailPage.clickNextFinalDetails();
        

//         // Step 12: Verify final details
//         hotelDetailPage.verifyFinalDetails('Test', 'Automation');

//         // Step 13: Navigate back to home page
//         hotelDetailPage.navigateToHomePage();
//     });

// });