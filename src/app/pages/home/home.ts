import { Component } from '@angular/core';
import {Navbar} from '../../layouts/components/navbar/navbar';
import {Footer} from '../../layouts/components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [
    Navbar,
    Footer
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
