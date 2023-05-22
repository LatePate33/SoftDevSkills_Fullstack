import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from '../_services/storage.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {
  constructor(private storageService: StorageService, private http: HttpClient) { }

  content = <string><unknown>[];

  all = ["Albania", "Armenia", "Australia", "Austria", "Azerbaijan", "Belgium", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia"];

  all2 = ["Finland", "France", "Georgia", "Germany", "Greece", "Iceland", "Ireland", "Israel", "Italy", "Latvia", "Lithuania"];

  all3 = ["Luxembourg", "Malta", "Moldova", "Netherlands", "Norway", "Poland", "Portugal", "Romania",
    "San Marino", "Serbia", "Slovenia"];

  all4 = ["Spain", "Sweden", "Switzerland", "Ukraine", "United Kingdom"];

  first = <string[]>[];
  second = <string[]>[];
  third = <string[]>[];
  fourth = <string[]>[];
  fifth = <string[]>[];
  sixth = <string[]>[];
  seventh = <string[]>[];
  eight = <string[]>[];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  ngOnInit(): void {
    this.http.post<any>(
      "http://localhost:8080/api/user/getguess",
      {
        user: this.storageService.getUser().username
      },
      httpOptions
    ).subscribe(data => {
      this.content = `User ${data.user} guesses: 
      1. ${data.first} 
      2. ${data.second} 
      3. ${data.third} 
      4. ${data.fourth} 
      5. ${data.fifth} 
      6. ${data.sixth}
      7. ${data.seventh} 
      8. ${data.eight}`
    });
  }

  submitChoices() {

    if (this.first[0] === undefined || this.second[0] === undefined || this.third[0] === undefined || this.fourth[0] === undefined || this.fifth[0] === undefined ||
      this.sixth[0] === undefined || this.seventh[0] === undefined || this.eight[0] === undefined) {
      this.content = "Finish your guesses first"
    } else {
      this.http.post<any>(
        "http://localhost:8080/api/user/guess",
        {
          user: this.storageService.getUser().username,
          first: this.first[0],
          second: this.second[0],
          third: this.third[0],
          fourth: this.fourth[0],
          fifth: this.fifth[0],
          sixth: this.sixth[0],
          seventh: this.seventh[0],
          eight: this.eight[0]
        },
        httpOptions
      ).subscribe(data => {
        this.content = `User ${data.user} guesses: 
        1. ${data.first} 
        2. ${data.second} 
        3. ${data.third} 
        4. ${data.fourth} 
        5. ${data.fifth} 
        6. ${data.sixth}
        7. ${data.seventh} 
        8. ${data.eight}`
      });

      /*this.content = `Your guesses:
       1. ${this.first[0]} 
       2. ${this.second[0]} 
       3. ${this.third[0]} 
       4. ${this.fourth[0]} 
       5. ${this.fifth[0]} 
       6. ${this.sixth[0]}
       7. ${this.seventh[0]} 
       8. ${this.eight[0]} 
       `*/
    }
  }

  onlyOne1Predicate = () => {
    if (this.first.length == 0) {
      return true;
    } else {
      return false;
    }
  };

  onlyOne2Predicate = () => {
    if (this.second.length == 0) {
      return true;
    } else {
      return false;
    }
  };

  onlyOne3Predicate = () => {
    if (this.third.length == 0) {
      return true;
    } else {
      return false;
    }
  };

  onlyOne4Predicate = () => {
    if (this.fourth.length == 0) {
      return true;
    } else {
      return false;
    }
  };

  onlyOne5Predicate = () => {
    if (this.fifth.length == 0) {
      return true;
    } else {
      return false;
    }
  };

  onlyOne6Predicate = () => {
    if (this.sixth.length == 0) {
      return true;
    } else {
      return false;
    }
  };

  onlyOne7Predicate = () => {
    if (this.seventh.length == 0) {
      return true;
    } else {
      return false;
    }
  };

  onlyOne8Predicate = () => {
    if (this.eight.length == 0) {
      return true;
    } else {
      return false;
    }
  };

}