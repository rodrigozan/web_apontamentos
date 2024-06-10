import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor( private httpClient: HttpClient) {}

  get() {
    this.httpClient.get('http://localhost:3000/api/apontamentos').subscribe(res => {
      console.log(res)
    })
  }
}
