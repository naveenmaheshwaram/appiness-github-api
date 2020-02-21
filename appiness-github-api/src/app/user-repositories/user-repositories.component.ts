import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-repositories',
  templateUrl: './user-repositories.component.html',
  styleUrls: ['./user-repositories.component.scss']
})
export class UserRepositoriesComponent implements OnInit {
  @Input()
  user: any = {};
  @Input()
  repositoryData = [];

  constructor() { }

  ngOnInit() {
  }

}
