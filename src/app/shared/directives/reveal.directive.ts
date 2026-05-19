import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  input,
  OnDestroy,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appReveal]',
  host: {
    class: 'reveal'
  }
})
export class RevealDirective implements AfterViewInit, OnDestroy {

  stagger = input<boolean>(false);
  delay = input<number>(0);
  threshold = input<number>(0.15);

  private element = inject(ElementRef<HTMLElement>);
  private platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.element.nativeElement.classList.add('is-visible');
      return;
    }

    const el = this.element.nativeElement;

    if (this.stagger()) {
      el.classList.add('reveal-stagger');
    }

    if (this.delay() > 0) {
      el.style.animationDelay = `${this.delay()}ms`;
    }

    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: this.threshold(), rootMargin: '0px 0px -40px 0px' }
    );

    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
