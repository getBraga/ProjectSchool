import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarTitleComponent } from './components/toolbar-title/toolbar-title.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
@NgModule({
  imports: [CommonModule, MatToolbarModule, MatIconModule, FlexLayoutModule],
  declarations: [ToolbarTitleComponent],
  exports: [ToolbarTitleComponent],
})
export class SharedModule {}
