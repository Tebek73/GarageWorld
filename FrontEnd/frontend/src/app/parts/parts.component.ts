import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { PartService } from '../services/part.service';
import { Part } from '../models/part.model';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-parts',
  standalone: true,
  imports: [
    MatButtonModule,
    RouterModule,
    CommonModule,
    MatIconModule
  ],
  templateUrl: './parts.component.html',
  styleUrl: './parts.component.scss'
})
export class PartsComponent implements OnInit{

  private partService = inject(PartService);

  parts!: Part[]

  ngOnInit(): void {
   this.initData();
  }

  initData(): void{
    this.partService.get().subscribe(
      data => {
        console.log("parts", data);
        this.parts = data;
      },
      error =>{
        console.log("error: ", error);
      }
    );
  }

  onDeleteClick(part: Part){
    if(window.confirm("Esti sigur/sigura ca vrei sa stergi " + part.name + "?")){
      this.partService.delete(part._id).subscribe(
        data => {
          this.initData();
        },
        error => {
          console.error('error:', error);
        }
      );
    }
  }

}
