import { NgModule } from '@angular/core';
import { CityDetailComponent } from './city-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { CityDetailGuard } from './city-detail.guard';
import { SharedModule } from '../shared/shared.module';
import { CityComponent } from './city-list.component';

@NgModule({
  declarations: [
    CityComponent,
    CityDetailComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    RouterModule.forChild([
      { path: 'Cities', component: CityComponent },
      {
        path: 'Cities/:id',
        canActivate: [CityDetailGuard],
        component: CityDetailComponent
      }
    ]),
    SharedModule
  ]
})
export class CityModule { }
