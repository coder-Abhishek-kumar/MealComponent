import { LightningElement,api } from 'lwc';

export default class MealTileCmp extends LightningElement {
    @api meal;

    recepieHandler(){
        let myCustomEvent = new CustomEvent('recepie',{
            detail : this.meal.idMeal
        })
        this.dispatchEvent(myCustomEvent);
    }
}