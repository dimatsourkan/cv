import { Directive, ElementRef, HostListener, inject, input, type OnInit } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective implements OnInit {

  strength = input<number>(50);

  private element = inject(ElementRef<HTMLElement>);
  private mouseX: number = window.innerWidth / 2;
  private mouseY: number = window.innerHeight / 2;

  ngOnInit(): void {
    this.runParallax();
  }

  runParallax(): void {
    let targetX = 0;
    let targetY = 0;

    const animate = () => {
      targetX += (this.mouseX - targetX) * 0.05;
      targetY += (this.mouseY - targetY) * 0.05;

      const offsetX = (targetX / window.innerWidth - 0.5) * this.strength() * -1;
      const offsetY = (targetY / window.innerHeight - 0.5) * this.strength() * -1;

      const div = this.element.nativeElement;
      div.style.transform = `translate(${offsetX}px, 0)`;
      requestAnimationFrame(animate);
    }

    animate();
  }

  @HostListener('window:mousemove', [ '$event' ])
  onWindowScroll(e: MouseEvent) {
    this.mouseX = e.clientX
    this.mouseY = e.clientY;
  }

}
