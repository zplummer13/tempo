import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { TextComponent } from './text/text.component';
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [
      TextComponent
  ],
    imports: [
      CommonModule, 
      SharedModule,
      MatInputModule,
      MatIconModule,
      MatButtonModule,
    ],
    exports: [
      TextComponent
    ]
})
export class InputModule {}