import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.css']
})
export class SearchSectionComponent implements OnInit {
  public searchValue = '';

  @Output() searchCourseBtnClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSearchBtnClicked(): void {
    this.searchCourseBtnClicked.emit(this.searchValue.trim());
  }

  addCourse(): void {
    this.router.navigate(['courses/new']);
  }
}
