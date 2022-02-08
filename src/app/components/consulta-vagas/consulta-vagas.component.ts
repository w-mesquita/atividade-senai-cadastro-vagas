import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-vagas',
  templateUrl: './consulta-vagas.component.html',
  styleUrls: ['./consulta-vagas.component.css']
})
export class ConsultaVagasComponent implements OnInit {

  public vagas: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getVagas();
  }

  public getVagas(): any {
    this.http.get('https://run.mocky.io/v3/25fee994-0805-457b-af86-4a38587bab38').subscribe(
      response => this.vagas = response,
      error => console.log(error)
    )
}

}
