import { LightningElement } from 'lwc';
import mealDB from "@salesforce/resourceUrl/MealDB";

export default class MealSearch extends LightningElement {
    searchMeal
    changeHandler(event){
        this.searchMeal = event.target.value;
    }

    clickHandler(event){
        let myCustomEvent = new CustomEvent('searchmeal',{detail : this.searchMeal});

        this.dispatchEvent(myCustomEvent);
    }
}