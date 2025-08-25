import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-promociones',
  standalone: false,
  templateUrl: './promociones.component.html',
  styleUrl: './promociones.component.css'
})
export class PromocionesComponent implements AfterViewInit {

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
    const texto = `Hola, Estoy interesado en ir a hacer SANDBOARD`;
    const numero = this.telefono.replace(/[^0-9]/g, '');
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  }
}