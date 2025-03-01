import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { SnackBarService } from './snack-bar/service/snack-bar.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
//import { DecisionModalComponent } from './components/decision-modal/decision-modal.component';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule, 
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatRadioModule,
    MatDialogModule,
    MatFormFieldModule,
    MatMenuModule,

    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    MatSelectModule, 
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatRadioModule,
    MatDialogModule,
    MatFormFieldModule,
    MatMenuModule,

    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [SnackBarComponent],
  entryComponents: [SnackBarComponent],
  providers:[SnackBarService]
})
export class MaterialModule { }
