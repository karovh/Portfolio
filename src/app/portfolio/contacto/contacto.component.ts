import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  serviceID = 'default_service';
  templateID = 'template_1ewdbyi';
  templateParams = {
    name: "",
    email: "",
    message: "",
  };


  constructor() {
    
   }

  ngOnInit(): void {    
  }
  onSubmit(value: any){

    this.templateParams.name=value.name;
    this.templateParams.email = value.email;
    this.templateParams.message = value.message;
    
    emailjs.send(this.serviceID, this.templateID, this.templateParams, 'Vg7IYjs2h2LSI-B5w')
      .then((result: EmailJSResponseStatus) => {
        console.log('SUCCESS!', result.status, result.text);
        Swal.fire({
          title: 'Mensaje enviado con exito',
          text: 'Me comunicaré contigo!',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      }, (error) => {
        console.log('FAILED...', error.text);
        Swal.fire({
          title: 'Error!',
          text: 'Do you want to continue',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      });

    
  }
  
  

  

}
