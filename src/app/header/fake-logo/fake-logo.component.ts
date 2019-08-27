import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-fake-logo',
  templateUrl: './fake-logo.component.html',
  styleUrls: ['./fake-logo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FakeLogoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
