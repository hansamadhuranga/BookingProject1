class HotelDetailPage {

    closePopup(){
        cy.get('.ffd93a9ecb > .abcc616ec7 > .a83ed08757').click();
    }
    verifyHotelName(expectedName) {
        cy.get('h2.hp__hotel-name').should('contain', expectedName.trim());
    }

    selectRoomByPrice(price) {
        cy.get(`span:contains("${price.trim()}")`).first().scrollIntoView().click();
    }

    clickReserve() {
        cy.get('button[type="submit"]').click();
    }

    verifyDatesAndPrice(checkInDate, checkOutDate, price) {
        cy.get('input[name="checkin"]').should('have.value', checkInDate);
        cy.get('input[name="checkout"]').should('have.value', checkOutDate);
        cy.get('div.price').should('contain', price.trim());
    }

    fillPersonalDetails(firstName, lastName, email) {
        cy.get('input#firstname').type(firstName);
        cy.get('input#lastname').type(lastName);
        cy.get('input#email').type(email);
    }

    clickNextFinalDetails() {
        cy.get('button[name="book"]').click();
    }

    verifyFinalDetails(firstName, lastName) {
        cy.get('div.final-details').within(() => {
            cy.get('input#firstname').should('have.value', firstName);
            cy.get('input#lastname').should('have.value', lastName);
        });
    }

    navigateToHomePage() {
        cy.get('a[title="Booking.com"]').click();
    }
}

export default HotelDetailPage;