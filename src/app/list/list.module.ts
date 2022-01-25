import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { ListRoutingModule } from "./list-routing.module";
import { ListComponent } from "./list.component";
import { MatListModule } from '@angular/material/list';
import { InputModule } from "../input/input.module";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
    declarations: [
        ListComponent,
    ],
    imports: [
        CommonModule, 
        SharedModule, 
        InputModule,
        ListRoutingModule,
        MatListModule,
        MatButtonModule,
        MatIconModule,
    ],
    exports: [
        ListComponent
    ]
})
export class ListModule {}