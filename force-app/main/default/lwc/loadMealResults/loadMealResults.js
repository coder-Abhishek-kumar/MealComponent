import { LightningElement,api } from 'lwc';

export default class LoadMealResults extends LightningElement {
    @api mealResult = [];
    selectedMeal;

    showModal = false;
    
    get checkMeals(){
        return typeof(this.mealResult) != 'undefined' && this.mealResult.length > 0;
    }
    recepieHandler(event){
        let selectedMealId = event.detail;
        console.log('selectedMealId->>',selectedMealId);

        this.selectedMeal = this.mealResult.find(currItem => currItem.idMeal === selectedMealId);
        this.showModal = true;

    }
    closeHandler(){
        this.showModal = false;
    }
   

}