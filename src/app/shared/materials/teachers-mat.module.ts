import { CUSTOM_ELEMENTS_SCHEMA, NgModule, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { MatIconModule } from '@angular/material/icon';

@NgModule({
  exports: [MatIconModule, MatButtonModule],
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [],
})
export class TeachersMaterialModule implements OnInit {
  ngOnInit(): void {
    console.log('chjam');
  }
}
