import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {
  pageX: number;
  pageY: number;
  mouseY: number = 0;
  mouseX: number = 0;

  constructor() {
    this.pageX = document.documentElement.clientWidth;
    this.pageY = document.documentElement.clientHeight;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    // verticalAxis
    this.mouseY = event.pageY;
    const yAxis = (this.pageY / 2 - this.mouseY) / this.pageY * 300;
    // horizontalAxis
    this.mouseX = event.pageX / -this.pageX;
    const xAxis = -this.mouseX * 100 - 100;

    const ghostEyes = document.querySelector('.box__ghost-eyes');
    if (ghostEyes) {
      ghostEyes.setAttribute(
        'style',
        `transform: translate(${xAxis}%, -${yAxis}%);`
      );
    }
  }
}