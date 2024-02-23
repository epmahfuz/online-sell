import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-decision-modal',
  templateUrl: './decision-modal.component.html',
  styleUrls: ['./decision-modal.component.scss']
})
export class DecisionModalComponent implements OnInit {
  modalData;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private router: Router,
    public dialogRef: MatDialogRef<DecisionModalComponent>,
  ) {
  }

  ngOnInit(): void { }
  
  closeModal(){
    this.dialogRef.close(true);
  }
}
