import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { from, fromEvent, map, pluck } from 'rxjs';
export const SCROLL_CONTENT = 'mat-sidenav-content';
export const TEXT_LIMIT = 50;
export const SHADOW_LIMIT = 100;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
  styles: [],
})
export class AppComponent implements OnInit {
  title = 'ProjectSchool';
  public isSmallScreen = false;
  public popText = false;
  public applyShadow = false;
  // @ViewChild(MatSidenav) sidenav!: MatSidenav;
  constructor(private breakpoint: BreakpointObserver) {}
  ngOnInit(): void {
    const [content] = document.getElementsByClassName(SCROLL_CONTENT);

    fromEvent(content, 'scroll')
      .pipe(map(() => content.scrollTop))
      .subscribe({
        next: (v: number) => this.determineHeader(v),
      });
  }

  determineHeader(scrollTop: number) {
    this.popText = scrollTop >= TEXT_LIMIT;
    this.applyShadow = scrollTop >= SHADOW_LIMIT;
  }
  ngAfterContentInit(): void {
    this.breakpoint
      .observe(['(max-width: 800px)'])
      .pipe(map((x) => x.matches))
      .subscribe((res: boolean) => (this.isSmallScreen = res));
  }
  get sideNavMode() {
    return this.isSmallScreen ? 'over' : 'side';
  }
}
