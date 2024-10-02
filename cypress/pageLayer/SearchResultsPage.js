class SearchResultsPage {

    elements={
        rateFilterGroup: () => cy.get('div[data-filters-group="class"]'),
        rateFilterClass: (rating) => cy.get(`input[data-filters-item="class:class=${rating}"]`),    
        priceFilter: () => cy.get('a[data-type="price"]'),  
        propertyCard: () => cy.get('div[data-testid="property-card"]'),
        secondItemTitle: () => cy.get('div[data-testid="property-card"]').eq(1).find('div[data-testid="title"]'),
        secondItemPrice: () => cy.get('div[data-testid="property-card"]').eq(1).find('span[data-testid="price-and-discounted-price"]'),
    }  
        

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