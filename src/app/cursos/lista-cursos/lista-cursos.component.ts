import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CursoService } from 'src/app/services/curso.service';
import { AuthService } from '../../services/usuario/auth.service';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {

  eventos;
  user;
  animal: string;
  name: string;

  constructor(
    private eventoService: CursoService,
    public authService: AuthService,
    public dialog: MatDialog
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

  //dialog popup
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'create.event.dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
