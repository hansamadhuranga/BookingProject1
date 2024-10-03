import SearchResultsPage from "../pageLayer/SearchResultsPage";

class SearchResultsTest{
    constructor(){
        this.SearchResultsPage = new SearchResultsPage;
    }

ratingAndFilter(){
this.SearchResultsPage.filterByRating(3);
this.SearchResultsPage.sortByPrice();
this.SearchResultsPage.selectSecondItem();
this.SearchResultsPage.getSecondItemName();
this.SearchResultsPage.getSecondItemPrice();
this.SearchResultsPage.clickSecondItem();

 }   
}
export default SearchResultsTest;