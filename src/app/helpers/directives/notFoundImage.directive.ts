import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[imgFallback]',
})

export class DefaultImageDirective{
  public defaultImg: string = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png';
  @Input() src!: string;

  @HostBinding('src')
  get originalSrc() {
    return this.src;
  }

  @HostListener('error') onError() {
    this.src = this.defaultImg;
  }
}
