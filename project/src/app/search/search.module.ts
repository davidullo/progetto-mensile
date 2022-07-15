import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, SearchRoutingModule, FormsModule, NgbModule],
})
export class SearchModule {}
