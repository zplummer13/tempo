import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';

import { HomeRoutingModule } from './home/home-routing.module';
import { DetailRoutingModule } from './detail/detail-routing.module';
import { JournalRoutingModule } from './features/journal/journal-routing.module';
import { ProgressRoutingModule } from './features/progress/progress-routing.module';
import { SearchRoutingModule } from './features/search/search-routing.module';
import { DocsRoutingModule } from './features/docs/docs-routing.module';
import { SettingsRoutingModule } from './features/settings/settings-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'journal',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    HomeRoutingModule,
    DetailRoutingModule,
    JournalRoutingModule,
    ProgressRoutingModule,
    SearchRoutingModule,
    DocsRoutingModule,
    SettingsRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
