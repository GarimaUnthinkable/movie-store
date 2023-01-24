import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatMenuModule,
  MatDialogModule,
  MatButtonToggleModule,
} from '@angular/material';

const AngularMaterialComponents = [
  MatButtonToggleModule,
  MatCardModule,
  MatIconModule,
  MatMenuModule,
  MatButtonModule,
  MatFormFieldModule,
  MatDialogModule,
];

@NgModule({
  imports: [AngularMaterialComponents],
  exports: [AngularMaterialComponents],
})
export class AngularMaterialModule {}
