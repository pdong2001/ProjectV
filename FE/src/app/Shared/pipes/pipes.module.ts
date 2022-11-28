import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalUrlPipe } from './external-url.pipe';

@NgModule({
  declarations: [ExternalUrlPipe],
  imports: [CommonModule],
  exports: [ExternalUrlPipe],
})
export class PipesModule {}
