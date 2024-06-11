import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiService } from '../../services/api.service';
import { TimerComponent } from '../../components/timer-component/timer-component.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TimerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  titleSecao1 = "Novo Apontamento";
  titleSecao2 = "Apontamentos";
  dados: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.apiService.get()
      .subscribe((data) => {
        this.dados = data
        console.log(this.dados)
      },
        (error) => console.error('Erro ao obter dados da API', error)
      )
  }

  dataConvert(newData: Date){
    const data = new Date(newData);
    const d = data.toLocaleDateString('pt-BR');
    const t = data.toLocaleTimeString('pt-BR');
    return `${d} - ${t}`
  }
}
