import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { USERS } from '../mock-users';

import { StorageService } from '../storage.service';
import { MydataService } from '../mydata.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    id: 1,
    name: 'Windstorm'
  };

  users = USERS;
  selectedUser: User;

  constructor(private storageService: StorageService, private mydataService: MydataService) { }

  ngOnInit() {
  }

  onSelect(user: User): void {
    this.selectedUser = user;
//    this.storageService.saveOperationHistory(this);

    this.mydataService.readData();
  }
}
