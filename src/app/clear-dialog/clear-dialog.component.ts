import {Component, OnInit} from "@angular/core";
import {MatDialog, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-clear-dialog',
  templateUrl: './clear-dialog.component.html',
  styleUrls: ['./clear-dialog.component.css']
})
export class ClearDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ClearDialogComponent>) {
  }

  ngOnInit() {
  }

}
