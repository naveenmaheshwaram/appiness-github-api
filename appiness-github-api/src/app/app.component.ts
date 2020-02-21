import { Component, Input, OnInit } from '@angular/core';
import { UserService } from './user.service';

interface IUsers {
  name: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'appiness-github-api';
  usersList: IUsers;
  repositoryData: any;
  selectedUserData: any;
  isRepositoryView: Boolean;
  filterUser: string = '';
  constructor(private user: UserService) {
  }

  ngOnInit() {
    this.user.getAllGitUsers().subscribe((data) => {
      this.usersList = data;
    }, (err) => {
      console.log('Error', err);
    });
  }

  getResposityData(user) {
    this.isRepositoryView = true;
    this.selectedUserData = user;
    this.user.getUserRepositories(user.repos_url).subscribe((data)=> {
      this.repositoryData = data;
    });
  }

  showUsersView() {
    this.isRepositoryView = false;
  }


}
