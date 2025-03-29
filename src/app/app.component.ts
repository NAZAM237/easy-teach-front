import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MarketingFeatureComponent} from './marketing-feature/marketing-feature.component';
import {TestimonialComponent} from './testimonial/testimonial.component';
import {PriceComponent} from './price/price.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {MainAdvantageComponent} from './main-advantage/main-avantage.component';
import {MainHeroComponent} from './main-hero/main-hero.component';
import {FeatureSectionComponent} from './feature-section/feature-section.component';
import {CtaSectionComponent} from './cta-section/cta-section.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MarketingFeatureComponent, TestimonialComponent, PriceComponent, FooterComponent, HeaderComponent, MainAdvantageComponent, MainHeroComponent, FeatureSectionComponent, CtaSectionComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'easy-teach-front';
}
