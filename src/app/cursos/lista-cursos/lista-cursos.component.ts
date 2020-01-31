import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';
import { AuthService } from '../../services/usuario/auth.service';


@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {

  eventos;

  constructor(
    private cursoService: CursoService,
    public authService: AuthService
  ) { }

  ngOnInit() {
    let user = this.authService.getDatos();
    console.log(user);

    this.cursoService.getEventos(user.dataAlumno.codigo_de_estudiante).subscribe(eventos => {
      console.log('data', eventos);
      this.eventos = eventos;
    });
  }

}
