import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
//import {MatProgressBarModule} from '@angular/material/progress-bar';
//import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {NgModule} from "@angular/core"
@NgModule({
  imports: [MatProgressSpinnerModule],
  exports: [MatProgressSpinnerModule],
})
export class MyOwnCustomMaterialModule { }