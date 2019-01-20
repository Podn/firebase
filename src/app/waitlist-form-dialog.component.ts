import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'waitlist-form-dialog',
  template: `<waitlist-form [isBusiness]="data.isBusiness"></waitlist-form>`,
  styleUrls: ['./app.component.scss']
})
export class WaitlistFormDialogComponent {
    constructor(
    public dialogRef: MatDialogRef<WaitlistFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}
}