import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { JournalRoutingModule } from './journal-routing.module';

import { JournalComponent } from './journal.component';

@NgModule({
    declarations: [
        JournalComponent
    ],
    imports: [
        SharedModule, 
        JournalRoutingModule,
    ]
})
export class JournalModule {}