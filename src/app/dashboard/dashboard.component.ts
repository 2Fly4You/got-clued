import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {MatDialog} from "@angular/material";

import { ClearDialogComponent } from '../clear-dialog/clear-dialog.component'
import { LocationDialogComponent } from '../location-dialog/location-dialog.component'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private storage: Storage = localStorage;

  infoVisible = false;
  username = '';
  location = false;
  dataString = '';
  data = ['0'];
  people = [];
  rooms = [];
  rpeople = [
    { name: 'Jaime Lennister', value: false, notes: '', notes2: '', notes3: '' },
    { name: 'Petyr Balish', value: false, notes: '', notes2: '', notes3: '' },
    { name: 'Sansa Stark', value: false, notes: '', notes2: '', notes3: '' },
    { name: 'Tyrion Lennister', value: false, notes: '', notes2: '', notes3: '' },
    { name: 'Cersei Lennister', value: false, notes: '', notes2: '', notes3: '' },
    { name: 'Margaery Tyrell', value: false, notes: '', notes2: '', notes3: '' }
  ];
  mpeople = [
    { name: 'Jorah Mormont', value: false, notes: '', notes2: '', notes3: '' },
    { name: 'Daario Naharis', value: false, notes: '', notes2: '', notes3: '' },
    { name: 'Micandre', value: false, notes: '', notes2: '', notes3: '' },
    { name: 'Grauer Wurm', value: false, notes: '', notes2: '', notes3: '' },
    { name: 'Loraq', value: false, notes: '', notes2: '', notes3: '' },
    { name: 'Daenerys Targaryen', value: false, notes: '', notes2: '', notes3: '' }
  ];
  rrooms = [
    { name: 'Garten', value: false, notes: '', notes2: '', notes3: '' },
    { name: 'Pavillon', value: false, notes: '', notes2: '', notes3: '' },
    { name: 'Turm der Hand', value: false, notes: '', notes2: '', notes3: '' },
    { name: 'Pycelles Labor', value: false, notes: '', notes2: '', notes3: '' },
    { name: 'Cerseis Schlafgemach', value: false, notes: '', notes2: '', notes3: '' },
    { name: 'Qyburns Labor', value: false, notes: '', notes2: '', notes3: '' },
    { name: 'Kerker', value: false, notes: '', notes2: '', notes3: '' },
    { name: 'Königsbla', value: false, notes: '', notes2: '', notes3: '' },
    { name: 'Übungsplatz', value: false, notes: '', notes2: '', notes3: '' },
    { name: 'Tommens Schlafgemach', value: false, notes: '', notes2: '', notes3: '' },
    { name: 'Kammer des kleinen Rates', value: false, notes: '', notes2: '', notes3: '' }
  ];
  mrooms = [
    { name: 'Garten', value: false, notes: '', notes2: '', notes3: '' },
    { name: 'Pavillon', value: false, notes: '', notes2: '', notes3: '' },
    { name: 'Turm der Hand', value: false, notes: '', notes2: '', notes3: '' },
    { name: 'Großmeister Pycelles Labor', value: false, notes: '', notes2: '', notes3: '' },
    { name: 'Cerseis Schlafgemach', value: false, notes: '', notes2: '', notes3: '' },
    { name: 'Qyburns Labor', value: false, notes: '', notes2: '', notes3: '' },
    { name: 'Kerker', value: false, notes: '', notes2: '', notes3: '' },
    { name: 'Königsbla', value: false, notes: '', notes2: '', notes3: '' },
    { name: 'Übungsplatz', value: false, notes: '', notes2: '', notes3: '' },
    { name: 'König Tommens Schlafgemach der Hand', value: false, notes: '', notes2: '', notes3: '' },
    { name: 'Kammer des kleinen Rates', value: false, notes: '', notes2: '', notes3: '' }
  ];
  weapons = [
    { name: 'Arakh', value: false, notes: '', notes2: '', notes3: '' },
    { name: 'Streitaxt', value: false, notes: '', notes2: '', notes3: '' },
    { name: 'Mann ohne Gesicht', value: false, notes: '', notes2: '', notes3: '' },
    { name: 'Giftflasche', value: false, notes: '', notes2: '', notes3: '' },
    { name: 'Dolch des Assassinen', value: false, notes: '', notes2: '', notes3: '' },
    { name: 'Armbrust', value: false, notes: '', notes2: '', notes3: '' }
  ];

  constructor(
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.username = this.storage.getItem('n');
    // first start? r or m? all info?
    this.data = this.storage.getItem(this.username).split('.', 25);
    this.infoVisible = this.data[0] === '0' ? false : true;
    this.people = this.data[1] === '0' ? this.rpeople : this.mpeople;
    this.rooms = this.data[1] === '0' ? this.rrooms : this.mrooms;
    this.location = this.data[1] === '0' ? false : true;
    console.log(this.data);
    for (let i = 2; i < this.people.length + 2; i++) {
      this.people[i-2].value = this.data[i] === '0' ? false : true;
    }
    for (let i = 2 + this.people.length; i < this.rooms.length + 2 + this.people.length; i++) {
      this.rooms[i - 2 - this.people.length].value = this.data[i] === '0' ? false : true;
    }
    for (let i = 2 + this.people.length + this.rooms.length; i < this.weapons.length + 2  + this.people.length + this.rooms.length; i++) {
      this.weapons[i - 2  - this.people.length - this.rooms.length].value = this.data[i] === '0' ? false : true;
    }
  }

  onLocationChange() {
    let dialogRef = this.dialog.open(LocationDialogComponent, {
      disableClose: false,
      data: []
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.clearAll();

        if (this.location) {
          this.people = this.mpeople;
          this.rooms = this.mrooms;
        }
        else {
          this.people = this.rpeople;
          this.rooms = this.rrooms;
        }
      }
      else {
        this.location = !this.location;
      }
    });
  }

  onVisibility() {
    this.infoVisible = false;
    this.changeOnePlace(0, 0);
  }

  openClearAllDialog() {
    let dialogRef = this.dialog.open(ClearDialogComponent, {
      disableClose: false,
      data: []
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.clearAll();
      }
    });
  }

  changeOnePlace(newvalue, place) {
    const oldstorage = this.storage.getItem(this.username).split('.', 25);

    oldstorage[place] = newvalue;

    let newstorage = oldstorage[0];
    for (let i = 1; i < oldstorage.length; i++) {
      newstorage = newstorage += '.';
      newstorage = newstorage += oldstorage[i];
    }
    console.log(newstorage);
    this.storage.setItem(this.username, newstorage);
  }

  clearAll() {
    for (let i = 0; i < this.people.length; i++) {
      this.people[i].value = false;
      this.people[i].notes = '';
      this.people[i].notes2 = '';
      this.people[i].notes3 = '';
    }
    for (let i = 0; i < this.rooms.length; i++) {
      this.rooms[i].value = false;
      this.rooms[i].notes = '';
      this.rooms[i].notes2 = '';
      this.rooms[i].notes3 = '';
    }
    for (let i = 0; i < this.weapons.length; i++) {
      this.weapons[i].value = false;
      this.weapons[i].notes = '';
      this.weapons[i].notes2 = '';
      this.weapons[i].notes3 = '';
    }
    if (this.location) {
      const infoVisible = this.storage.getItem(this.username).split('.', 1);
      this.storage.setItem(this.username, '1.1.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0');
      this.changeOnePlace(infoVisible[0], 0);
    }
    else {
      const infoVisible = this.storage.getItem(this.username).split('.', 1);
      this.storage.setItem(this.username, '1.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0');
      this.changeOnePlace(infoVisible[0], 0);
    }
  }

  logout() {
    this.router.navigate(['/login']);
  }

  showInfo() {
    this.infoVisible = true;
  }
}
