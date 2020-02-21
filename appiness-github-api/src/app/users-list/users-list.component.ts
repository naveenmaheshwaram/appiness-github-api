import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  @Input()
  filterUser: string = '';

  @Input()
  usersList = [];

  @Output() selectedUser = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  filterName(index, data) {
    return data.id;
  }

  onSelectUser(user) {
    this.selectedUser.emit(user);
  }

}
