import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {
      const header: HTMLElement | null = document.getElementById('header');
      window.addEventListener('scroll', (): void => {
        if (window.scrollY > 10) {
          if (header) {
            header.classList.add('header-scrolled');
          }
        } else {
          if (header) {
            header.classList.remove('header-scrolled');
          }
        }
      });

    const menuToggle: HTMLElement | null = document.querySelector('.menu-toggle');
    const mobileMenu: HTMLElement | null = document.querySelector('.mobile-menu');

    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener('click', (): void => {
        mobileMenu.classList.toggle('is-open');
      });
    }
  }

}
