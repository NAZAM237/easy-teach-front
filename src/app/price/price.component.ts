import { Component } from '@angular/core';

@Component({
  selector: 'app-price',
  imports: [],
  templateUrl: './price.component.html',
  standalone: true,
  styleUrl: './price.component.scss'
})
export class PriceComponent {

    constructor() {
      const toggleButtons: NodeListOf<Element> = document.querySelectorAll('.toggle-button');
      const prices: NodeListOf<Element> = document.querySelectorAll('.price');
      const savings: NodeListOf<Element> = document.querySelectorAll('.annual-savings');

      const monthlyPrices: string[] = ['29', '79', '199'];
      const annualPrices: string[] = ['23', '63', '159'];

      toggleButtons.forEach((button: Element, index: number) => {
        button.addEventListener('click', () => {
          toggleButtons.forEach((btn: Element) => btn.classList.remove('active'));
          button.classList.add('active');

          const isAnnual: boolean = index === 1;

          prices.forEach((price: Element, i: number) => {
            (price as HTMLElement).textContent = isAnnual ? annualPrices[i] : monthlyPrices[i];
          });

          savings.forEach((saving: Element) => {
            saving.setAttribute('style', isAnnual ? 'display: block;' : 'display: none;');
          });
        });
      });
    }
}
