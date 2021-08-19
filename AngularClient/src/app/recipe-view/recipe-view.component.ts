import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.css']
})
export class RecipeViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   recipe={
    name:"shahi paneer recipe",
    preparation_time:40,
    image_url:"https://d1uz88p17r663j.cloudfront.net/resized/4cdc8a73516386a08888a432adbb7af0_A42I2602_1500_700.jpg", 
  
    total_time:70,
    nutrition:[
      {nutrition:"energy",amount:"40"},
      {nutrition:"protien",amount:"40"},
      {nutrition:"fat",amount:"4"},
      {nutrition:"cholestrol",amount:"7"},
      {nutrition:"fibre",amount:"80"},
      {nutrition:"iron",amount:"50"},
  ],
    category:[
      "veg",
      "non-veg",
      "indian",
      "spicey",
    ],
    items:[
      {ingredients:"paneer",amount:"2"},
      {ingredients:"onion",amount:"7"},
      {ingredients:"tomoto",amount:"8"},
      {ingredients:"garlic",amount:"8"},
      {ingredients:"ginger",amount:"3"},
    ],
    process:[
      "cut all the vegetables",
      "add the sliced vegetables and panner in boiled water",
      "add some spices",
      "cook it for 30 mins",
      "serve your shahi paneer",
    ]

  }

}
