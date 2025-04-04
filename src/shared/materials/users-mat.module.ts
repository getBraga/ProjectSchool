import { CUSTOM_ELEMENTS_SCHEMA, NgModule, OnInit } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  exports: [MatTabsModule, MatIconModule],
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [],
})
export class UsersMaterialModule implements OnInit {
  ngOnInit(): void {
    console.log('chjam');
  }
}
