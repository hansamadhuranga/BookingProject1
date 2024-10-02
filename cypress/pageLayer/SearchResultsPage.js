class SearchResultsPage {

    filterByRating(rating) {
        cy.get('div[data-filters-group="class"]').click();
        cy.get(`input[data-filters-item="class:class=${rating}"]`).click(); // Example: 3 stars
    }

    sortByPrice() {
        cy.get('a[data-type="price"]').click();
    }

    selectSecondItem() {
        return cy.get('div[data-testid="property-card"]').eq(1);
    }

    getSecondItemName() {
        return this.selectSecondItem().find('div[data-testid="title"]').invoke('text');
    }

    getSecondItemPrice() {
        return this.selectSecondItem().find('span[data-testid="price-and-discounted-price"]').invoke('text');
    }

    clickSecondItem() {
        this.selectSecondItem().click();
    }
}

export default SearchResultsPage;