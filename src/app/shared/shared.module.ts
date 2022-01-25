import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent } from './components/';
import { WebviewDirective } from './directives/';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { MatListModule } from '@angular/material/list';
import { MatCommonModule } from '@angular/material/core';

@NgModule({
  declarations: [
    PageNotFoundComponent, 
    WebviewDirective,
  ],
  imports: [
    CommonModule, 
    TranslateModule,
    FormsModule,
    MatToolbarModule,
    MatListModule,
    BrowserAnimationsModule,
    MatCommonModule,
  ],
  exports: [
    TranslateModule,
    WebviewDirective,
    FormsModule,
    MatToolbarModule,
    MatListModule,
    BrowserAnimationsModule,
    MatCommonModule,
  ]
})
export class SharedModule {}
