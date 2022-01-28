import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProgressComponent } from './progress.component';

const routes: Routes = [
  {
    path: 'progress',
    component: ProgressComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgressRoutingModule {}