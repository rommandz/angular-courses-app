import { Directive, Renderer2, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCoursePlateBorder]'
})
export class CoursePlateBorderDirective implements OnInit {
  @Input('appCoursePlateBorder') date: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    const borderColor = this.getBorderColor();
    this.setBorder(borderColor);
  }

  private setBorder(color: string): void {
    this.renderer.setStyle(this.el.nativeElement, 'border', `3px solid ${color}`);
  }

  private getBorderColor(): string {
    const currentTimeStamp: number = new Date().getTime();
    const creationDateTimeStamp: number = new Date(this.date).getTime();

    if (
      creationDateTimeStamp < currentTimeStamp &&
      creationDateTimeStamp >= currentTimeStamp - this.convertDaysToMs(14)
    ) {
      return 'green';
    }

    if (creationDateTimeStamp > currentTimeStamp) {
      return 'blue';
    }

    return null;
  }

  private convertDaysToMs(days: number): number {
    return days * 24 * 60 * 60 * 1000;
  }
}
