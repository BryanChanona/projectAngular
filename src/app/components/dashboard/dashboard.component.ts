import { Component, inject, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AsyncPipe,  CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Student } from '../../models/student';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true,
  imports: [
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule, 
    CommonModule
   
  ]
})
export class DashboardComponent implements OnInit{
  studentArray: Student[] = [
    {
      id: 1,
      name: 'Fabricio',
      asignatures: ['Ingles','POO2','Algoritmos2']
    },
    {
      id: 2,
      name: 'Ameth',
      asignatures: ['POO2','Algoritmos2', 'Ingles', 'Estructura de Datos']
    },
    {
      id: 3,
      name: 'Jared',
      asignatures: ['POO2', 'Ingles','Algoritmos2', 'WEB']
    },
    
  ] 
  
 
  ngOnInit(): void {
    console.log(this.studentArray)
  }

  showName(name: string){
    alert(name)
  }

  deleteStudent(id: number){
    var newListStudents: Student[] = this.studentArray 
    this.studentArray = newListStudents.filter(student => student.id != id)
  }


  addStudent(name:string){
   
  var newStudent: Student={
    id: this.studentArray.length+1,
    name: name,
    asignatures: ["web"]

   }
   
    
    this.studentArray.push(newStudent)
    console.log(newStudent)
 
  }

  private breakpointObserver = inject(BreakpointObserver);
  miEstado: boolean = false
  imprime: string = "Subtitulo" 
  imprime2: string = "miEstado" 

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
       
      ];
    })
  );
}
