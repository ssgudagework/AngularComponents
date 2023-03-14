import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-recipes',
  templateUrl: './show-recipes.component.html',
  styleUrls: ['./show-recipes.component.css'],
})
export class ShowRecipesComponent {
  @Input() recipes;
  recipe;

  onDelete(recipe:string){
    
}
// this.bookservice.BookDelete(bookid)
//     .subscribe(book=>{
//       this.getsoftBooks();
// delete
//     [this.data.indexOf.recipe(recipe)];
// //     })  
}