import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoviedetailPageRoutingModule } from './moviedetail-routing.module';

import { MoviedetailPage } from './moviedetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoviedetailPageRoutingModule
  ],
  declarations: [MoviedetailPage]
})
export class MoviedetailPageModule {}
