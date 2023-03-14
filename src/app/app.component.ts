import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',],
})
export class AppComponent {
  // title = 'ey-angular';
  // name = "Shraddha Gudage";
  // users = [
  //   {
  //     "name": "Harry Potter",
  //     "city": "London"
  //   },
  //   {
  //      "name": "Don Quixote",
  //      "city": "Madrid"
  //     },
  //     {
  //       "name": "Joan of Arc",
  //        "city": "Paris"
  //       },
  //       {
  //         "name": "Rosa Park",
  //          "city": "Alabama"
  //         }
  //       ] 

  // getUsername(username:string){
  //   console.log("This is from app component");
  //   console.log(username);
  // }
  // getMobileNum(num:number){
  //   console.log("This is from app component");
  //   console.log(num);
  // }

  // receipe:any;
  // receipe.recipeName:string;

  items = [];
  name = "";
  ingredients = "";
  type = "";
  details = "";
  onAdd() {
    this.items.push({ name: this.name, ingredients: this.ingredients, type: this.type, details: this.details })
    this.name = "";
    this.ingredients = "";
    this.type = "";
    this.details = "";
  }
}
