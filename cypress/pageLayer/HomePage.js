class HomePage {

    elements={
        languageBtn: ()=>cy.get('button[data-modal-id="language-selection"]'),
        currency:()=>cy.get('button[data-modal-header-async-type="currencyDesktop"]'),
        AUD:()=>cy.get('a[data-modal-header-async-url-param*="AUD"]'),
        stays:()=>cy.get('a[data-decider-header="stays"]'),
        location:()=>cy.get('#ss').type(location),
        checkIn:()=>cy.get('span[data-placeholder="Check-in"]'),
        checkInDate:()=>cy.get(`td[data-date="${checkInDate}"]`),
        checkOutDate:()=>cy.get(`td[data-date="${checkOutDate}"]`),
        guest:()=>cy.get('#xp__guests__toggle'),
        children:()=>cy.get('button[aria-label="Decrease number of Children"]'),
        adults:()=>cy.get('button[aria-label="Increase number of Adults"]'),
        submit:()=>cy.get('button[type="submit"]'),
        search:()=>cy.get('button[type="submit"]'),
        location:()=>cy.get('#ss')
    }

     visit() {
         cy.visit('https://www.booking.com');
     }

    setLanguageToEnglishUK() {
        this.elements.languageBtn.click();
        cy.contains('a', 'English (UK)').click();
    }

    setCurrencyToAUD() {
        this.elements.currency.click();
        this.elements.AUD.click();
    }

    selectStaysTab() {
        this.elements.stays.click();
    }

    enterLocation(location) {
        this.elements.location.type(location);
    }

    selectDates(checkInDate, checkOutDate) {
        this.elements.checkIn.click();
        this.elements.checkInDate.click();   // Example: 2024-10-10
        this.elements.checkOutDate.click();  // Example: 2024-10-12
    }

    setGuests(adults, children, rooms) {
        this.elements.guest.click();
        this.elements.children.click(); // Set children to 0
        this.elements.adults.click();   // Set adults to 1
    }

    clickSearch() {
        this.elements.submit.click();
    }

    verifyLocation(expectedLocation) {
        this.elements.location.should('have.value', expectedLocation);
    }
}

export default HomePage;