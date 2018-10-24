import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Array<any> = []
  availableColours = ['st-taskColour--red', 'st-taskColour--orange', 'st-taskColour--green', 'st-colorBg--yellow', 'st-taskColour--purple', 'st-taskColour--blue', 'st-taskColour--pink']

  constructor() {
    this.createItem("Omg exam1")
    this.createItem("Omg exam2")
    this.createItem("Omg exam3")
  }

  createItem(title) {
    this.items.push({
      'id': Math.random().toString(36).substr(2, 5),
      'title': title,
      'colour': this.chooseNewItemColour(), 
      'percentage': this.chooseNewItemPercentage()
    });
  }

  getItems(){
    return this.items;
  }

  updateItem(newValues){
    let itemIndex = this.items.findIndex(item => item.id == newValues.id);
    this.items[itemIndex] = newValues;
  }

  chooseNewItemColour() {
    let index = Math.floor(Math.random() * Math.floor(this.availableColours.length));
    let colour = this.availableColours[index]; 
    this.availableColours.splice(index, 1); 
    return colour; 
  }

  chooseNewItemPercentage() {
    let newval = 1.0; 
    // let total = 0; 
    this.items.forEach(item => {
      newval = newval - (item.percentage * .8); 
      item.percentage = item.percentage * .8; 
      // total += item.percentage; 
    });
    // total += newval; 
    // console.log(total + " should be 1 always"); 
    return newval; 
  }


}
