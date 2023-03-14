import { Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  // @Input() appTitle;
  // @Input() UserName;
  // @Input() allUsers;
  // username;
  // @Output() sendUsername = new EventEmitter();
  // mobileNum;
  // @Output() sendMobileNum = new EventEmitter();
  recipeName;
  ingredients;
  @Output() sendRecipeName = new EventEmitter();
  
}
