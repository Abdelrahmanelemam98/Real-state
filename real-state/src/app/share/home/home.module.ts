import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { PropertyHomeComponent } from './components/property-home/property-home.component';
import { SearchPropertyComponent } from './components/search-property/search-property.component';
import { WorksSectionComponent } from './components/works-section/works-section.component';

@NgModule({
  declarations: [PropertyHomeComponent, SearchPropertyComponent, WorksSectionComponent],
  imports: [CommonModule],
  exports: [PropertyHomeComponent],
})
export class HomeModule {}
