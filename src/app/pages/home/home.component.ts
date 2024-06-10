import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.get();
  }

  title = "Apontamentos";
  dados: any[] = [];

  get() {
    this.apiService.get()
      .subscribe((data) => {
        this.dados = data
        console.log(this.dados)
      },
        (error) => console.error('Erro ao obter dados da API', error)
      )
  }
}
