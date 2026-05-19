import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  NgZone,
  OnDestroy,
  PLATFORM_ID,
  signal
} from '@angular/core';
import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { ParallaxDirective } from '../../shared/directives/parallax.directive';

@Component({
  selector: 'app-header',
  imports: [
    ParallaxDirective,
    NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit, OnDestroy {

  stuck = signal(false);

  private host = inject(ElementRef<HTMLElement>);
  private zone = inject(NgZone);
  private platformId = inject(PLATFORM_ID);

  private ticking = false;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.zone.runOutsideAngular(() => {
      window.addEventListener('scroll', this.onScroll, { passive: true });
      window.addEventListener('resize', this.onScroll, { passive: true });
      this.update();
    });
  }

  ngOnDestroy(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onScroll);
  }

  scrollToTop(event: Event): void {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private onScroll = (): void => {
    if (this.ticking) return;
    this.ticking = true;
    requestAnimationFrame(() => {
      this.update();
      this.ticking = false;
    });
  }

  private update(): void {
    const scrollY = window.scrollY;
    const vh = window.innerHeight;
    const start = vh * 0.35;
    const end = vh * 0.75;
    const progress = Math.min(1, Math.max(0, (scrollY - start) / (end - start)));

    this.host.nativeElement.style.setProperty('--hp', progress.toString());

    const nextStuck = progress > 0.5;
    if (nextStuck !== this.stuck()) {
      this.zone.run(() => this.stuck.set(nextStuck));
    }
  }
}
