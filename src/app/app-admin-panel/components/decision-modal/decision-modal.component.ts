import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-decision-modal',
  templateUrl: './decision-modal.component.html',
  styleUrls: ['./decision-modal.component.scss']
})
export class DecisionModalComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DecisionModalComponent>,
  ) {
  }

  ngOnInit(): void { }
  
  onClickCancel(){
    this.dialogRef.close(false);
  }
  onClickConfirm(){
    this.dialogRef.close(true)
  }
}
