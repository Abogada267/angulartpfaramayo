import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FullNamePipe, UserPipe } from '../../../../shared/full-name.pipe';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
})
export class PipesComponent {
  today = new Date();
  price = 10000;

  user: UserPipe = {
    firstName: 'Goku',
    lastName: 'Son',
  };

  constructor(private datePipe: DatePipe, private fullName: FullNamePipe) {
    console.log(this.datePipe.transform(this.today, 'long'));
    console.log(this.fullName.transform(this.user));
  }
}
