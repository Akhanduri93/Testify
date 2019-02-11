import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/* Welcome and search component  */
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  searchTerm: string = '';

  /* list of clients */
  clientArr: any=[
    { title: 'Ralph Lairsey' },
    { title: 'Griffin' },
    { title: 'Centaur' },
    { title: 'Minotaur' },
    { title: 'Cyclope' },
    { title: 'Alane Messick' },
    { title: 'Alphackette'},
    { title: 'Lajuana Blanche'},
    { title: 'Fierce Spartan'},
    { title: 'Alane Messick'},
    { title: 'Tamara Bozell' },
    { title: 'Diana' },
    { title: 'Donna' },
    { title: 'Bella' },
    { title: 'Emily' },
    { title: 'Jasmine' },
    { title: 'Jennifer'},
    { title: 'Jessica'},
    { title: 'Julia'},
    { title: 'Leah'},
    { title: 'Karen' },
    { title: 'Joanne' },
    { title: 'Mary' },
    { title: 'Megan' },
    { title: 'Molly' },
    { title: 'Natalie' },
    { title: 'Pippa'},
    { title: 'Samantha'},
    { title: 'Stephanie'},
    { title: 'Sophie'},
  ];


  constructor(
    public router: Router
    ) { }

  ngOnInit() {
  }

}
