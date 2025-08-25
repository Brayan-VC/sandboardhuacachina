// Ejemplo en promociones.component.ts
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

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

  carouselItems = [
    { title: 'Promociones', description: 'Nuestras mejores ofertas', link: '/promociones', img: 'promo_3.jpg' },
    { title: 'Contáctanos', description: 'Escríbenos para más información', link: '/contactanos', img: 'promo_1.jpg' },
    { title: 'Nosotros', description: 'Conoce quiénes somos', link: '/nosotros', img: 'promo_2.jpg' },
    { title: 'Reserva', description: 'Aparta tu cupo ahora mismo', link: '/reserva', img: 'promo_4.jpg' }
  ];

  currentSlide = 0;

  ngOnInit(): void {
    setInterval(() => this.nextSlide(), 4000);
  }

  nextSlide() {
    const totalSlides = this.carouselItems.length;
    const maxSlide = totalSlides - 2; // mostrar 2 a la vez
    this.currentSlide = this.currentSlide >= maxSlide ? 0 : this.currentSlide + 1;
  }

  getTransform(): string {
    return `translateX(-${this.currentSlide * 50}%)`; // 50% porque se muestran 2 a la vez
  }



  tours = [
    {
      image: 'https://perutravelexpress.com/wp-content/uploads/2020/11/Ica-Huacachina-Buggies-750x410.jpg',
      title: 'RELAJANTE COMO TU QUIERAS',
      duration: '18 hours',
      price: 99
    },
    {
      image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0c/04/4a/1b.jpg',
      title: 'DISFRUTA CON TUS AMIGOS',
      duration: '2 days',
      price: 140
    },
    {
      image: 'https://viajesica.com/wp-content/uploads/2019/01/a1.jpg',
      title: 'CONOCE LO HERMOSO DE PERU',
      duration: '3.5 hours',
      price: 40
    }
  ];
}
