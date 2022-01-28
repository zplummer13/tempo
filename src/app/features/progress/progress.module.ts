import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ProgressRoutingModule } from './progress-routing.module';
import { ProgressComponent } from './progress.component';

@NgModule({
    declarations: [
        ProgressComponent,
    ],
    imports: [
        SharedModule, 
        ProgressRoutingModule,
    ]
})
export class ProgressModule {}