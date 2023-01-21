import { Component } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiantes';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent {
  listaEstudiantes: Estudiante[] = [
    {
      id: 1,
      nombre: "Matias",
      apellido: "Illanes",
      fecha_nacimiento: "02/02/2004",
      estaActivo: true,
      fecha_inicio: "10/10/2021",
      fecha_final: "10/10/2022",
      promedio_final: 8,
    },
    {
      id: 2,
      nombre: "Walter",
      apellido: "Molina",
      fecha_nacimiento: "02/02/2004",
      estaActivo: true,
      fecha_inicio: "10/10/2020",
      fecha_final: "10/10/2021",
      promedio_final: 3,
    },
    {
      id: 3,
      nombre: "Lucas",
      apellido: "Gallardo",
      fecha_nacimiento: "02/02/2004",
      estaActivo: true,
      fecha_inicio: "10/10/2017",
      fecha_final: "10/10/2019",
      promedio_final: 9,
    },
    {
      id: 4,
      nombre: "Josefina",
      apellido: "Gutierrez",
      fecha_nacimiento: "02/02/2004",
      estaActivo: false,
      fecha_inicio: "10/10/2020",
      fecha_final: "10/10/2021",
      promedio_final: 7,
    },
    {
      id: 5,
      nombre: "Candela",
      apellido: "Fernandez",
      fecha_nacimiento: "02/02/2004",
      estaActivo: true,
      fecha_inicio: "10/10/2020",
      fecha_final: "10/10/2021",
      promedio_final: 5,
    },
    {
      id: 6,
      nombre: "Facundo",
      apellido: "Alvarez",
      fecha_nacimiento: "02/02/2004",
      estaActivo: false,
      fecha_inicio: "10/10/2018",
      fecha_final: "10/10/2020",
      promedio_final: 10,
    }
  ];


}
