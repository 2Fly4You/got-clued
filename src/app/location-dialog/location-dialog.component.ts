import {Component, OnInit} from "@angular/core";
import {MatDialog, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-location-dialog',
  templateUrl: './location-dialog.component.html',
  styleUrls: ['./location-dialog.component.css']
})
export class LocationDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LocationDialogComponent>) {
  }

  ngOnInit() {
  }

}
