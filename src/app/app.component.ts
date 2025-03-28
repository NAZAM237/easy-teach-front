import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FeatureSummaryComponent} from './feature-summary/feature-summary.component';
import {MainFeatureComponent} from './main-feature/main-feature.component';
import {MarketingFeatureComponent} from './marketing-feature/marketing-feature.component';
import {TestimonialComponent} from './testimonial/testimonial.component';
import {PriceComponent} from './price/price.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {MainAccrochComponent} from './main-accroch/main-accroch.component';
import {MainAdvantageComponent} from './main-advantage/main-avantage.component';
import {MainHeroComponent} from './main-hero/main-hero.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FeatureSummaryComponent, MainFeatureComponent, MarketingFeatureComponent, TestimonialComponent, PriceComponent, FooterComponent, HeaderComponent, MainAccrochComponent, MainAdvantageComponent, MainHeroComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'easy-teach-front';
}
