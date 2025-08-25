import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-contactanos',
  standalone: false,
  templateUrl: './contactanos.component.html',
  styleUrl: './contactanos.component.css'
})
export class ContactanosComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('section');
    sections.forEach(sec => observer.observe(sec));
  }


  nombre: string = '';
  email: string = '';
  telefono: string = '';
  mensaje: string = '';

  enviarWhatsApp() {
    const texto = `Hola, mi nombre es ${this.nombre}. Mi consulta es: ${this.mensaje}`;
    const numero = this.telefono.replace(/[^0-9]/g, '');
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  }

  enviarFormulario() {
    const asunto = encodeURIComponent('Consulta desde el sitio web');
    const cuerpo = encodeURIComponent(`Nombre: ${this.nombre}\nEmail: ${this.email}\nWhatsApp: ${this.telefono}\nMensaje: ${this.mensaje}`);
    window.location.href = `mailto:tuemail@ejemplo.com?subject=${asunto}&body=${cuerpo}`;
  }

}