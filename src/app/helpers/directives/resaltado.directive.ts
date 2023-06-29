import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appResaltado]',
})
export class ResaltadoDirective {
  constructor(private elemento: ElementRef) {
    this.inicializarElementos();
  }

  inicializarElementos() {
    // check if element is <a></a> set href by default, then change it to google.com
    if (this.elemento.nativeElement.tagName == 'A') {
      this.elemento.nativeElement.style.backgroundColor = 'yellow';
      this.elemento.nativeElement.href = 'https://www.google.com';
      this.elemento.nativeElement.target = '_blank';
    }
    if (this.elemento.nativeElement.tagName == 'IMG') {
      this.elemento.nativeElement.src =
        'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
      this.elemento.nativeElement.style.width = '200px';
    } else {
      this.elemento.nativeElement.style.backgroundColor = 'red';
    }
    this.elemento.nativeElement.innerHTML = this.elemento.nativeElement.innerHTML.toLowerCase();
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.ponerMayuscula();
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.inicializarElementos();
  }

  private ponerMayuscula() {
    this.elemento.nativeElement.innerHTML = this.elemento.nativeElement.innerHTML.toUpperCase();
  }
}
