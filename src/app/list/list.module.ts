import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { ListRoutingModule } from "./list-routing.module";
import { ListComponent } from "./list.component";
import { ListRowComponent } from './list-row/list-row.component';
import { MatListModule } from '@angular/material/list';
import { InputModule } from "../input/input.module";

@NgModule({
    declarations: [
        ListComponent,
        ListRowComponent,
    ],
    imports: [
        CommonModule, 
        SharedModule, 
        InputModule,
        ListRoutingModule,
        MatListModule,
    ],
    exports: [
        ListComponent
    ]
})
export class ListModule {}