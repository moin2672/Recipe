import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[]=[
    new Recipe('Butter Chicken','This is a simple tst recipe', 'https://picturetherecipe.com/wp-content/uploads/2020/07/Butter-Chicken-PTR-Featured-395x500.jpg'),
    new Recipe('Vanilla kulfi','This is a kulfi icecream', 'https://picturetherecipe.com/wp-content/uploads/2020/04/Vanilla-Cardamom-Kulfi-PTR-Featured-395x500.jpg')
  ];

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
