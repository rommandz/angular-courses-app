import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.css']
})
export class SearchSectionComponent implements OnInit {
  public searchValue = '';

  @Output() searchCourseBtnClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSearchBtnClicked() {
    this.searchCourseBtnClicked.emit(this.searchValue.trim());
  }
}
