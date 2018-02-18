import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  private storage: Storage = localStorage;
  @Input() visible = false;
  @Output() infoVisible = new EventEmitter();

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  closeInfo() {
    this.infoVisible.emit();
  }
}
