import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BarchartComponent } from './components/barchart/barchart.component';


const routes: Routes = [
{path: '', component: HomeComponent },
{path: '', component: BarchartComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
