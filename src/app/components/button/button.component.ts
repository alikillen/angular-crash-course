import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() color: string;
  // output allows us to emit events
  @Output() btnClick = new EventEmitter()
    // why didnt it generate with a constructor and ngOnInit

  // initialising as empty strings here because we have strict class initialisation on
  constructor() {
    this.text = "";
    this.color = "";
  }

  // this is a lifecycle method - stuff here for when component initially loads
  ngOnInit(): void {

  }

  onClick() {
    this.btnClick.emit();
  }

}
