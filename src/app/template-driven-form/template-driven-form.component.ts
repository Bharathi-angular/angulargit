import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Form, FormsModule, NgForm } from '@angular/forms';
import { FormService } from './form-template.service';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent implements OnInit{

  constructor(private form:FormService){}

  array:any =[]
  name ="";
  age = "";
  country ="";
  email = "";
  boolean:boolean = false;

  Submit(form : NgForm) : void{
      this.boolean = true;
      this.form.addData(form.value).subscribe(data => this.array.push(data));
       form.resetForm();
    
  }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.form.getFormDetails()
      .subscribe(data => this.array = data);
     
      
  }

}
