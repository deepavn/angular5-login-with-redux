
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  imports: [
    CommonModule, RouterModule 
  ],
   
  exports: [ 
    CommonModule, FormsModule
  ]
  ,providers:[]
})
export class SharedModule {

}