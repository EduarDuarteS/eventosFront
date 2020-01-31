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
  user;

  constructor(
    private eventoService: CursoService,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.user = this.authService.getDatos();
    console.log(this.user);

    this.eventoService.getEventos(this.user.dataAlumno.codigo_de_estudiante).subscribe(eventos => {
      console.log('data', eventos);
      this.eventos = eventos;
    });
  }

  delEvent(id_event) {
      console.log("id_event: ", id_event);

        this.eventoService.delEvent(this.user.dataAlumno.codigo_de_estudiante, id_event).subscribe(eventos => {
          console.log('data', eventos);
          this.eventos = eventos;
        });
  }
}
