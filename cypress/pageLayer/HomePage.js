class HomePage {

    visit() {
        cy.visit('https://www.booking.com');
    }

    setLanguageToEnglishUK() {
        cy.get('button[data-modal-id="language-selection"]').click();
        cy.contains('a', 'English (UK)').click();
    }

    setCurrencyToAUD() {
        cy.get('button[data-modal-header-async-type="currencyDesktop"]').click();
        cy.get('a[data-modal-header-async-url-param*="AUD"]').click();
    }

    selectStaysTab() {
        cy.get('a[data-decider-header="stays"]').click();
    }

    enterLocation(location) {
        cy.get('#ss').type(location);
    }

    selectDates(checkInDate, checkOutDate) {
        cy.get('span[data-placeholder="Check-in"]').click();
        cy.get(`td[data-date="${checkInDate}"]`).click();   // Example: 2024-10-10
        cy.get(`td[data-date="${checkOutDate}"]`).click();  // Example: 2024-10-12
    }

    setGuests(adults, children, rooms) {
        cy.get('#xp__guests__toggle').click();
        cy.get('button[aria-label="Decrease number of Children"]').click(); // Set children to 0
        cy.get('button[aria-label="Increase number of Adults"]').click();   // Set adults to 1
    }

    clickSearch() {
        cy.get('button[type="submit"]').click();
    }

    verifyLocation(expectedLocation) {
        cy.get('#ss').should('have.value', expectedLocation);
    }
}

export default HomePage;