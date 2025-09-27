import { Component } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  isCollapsed = true;
  hovered = false;

  private toggleCollapse$ = new Subject<void>();
  private menuLinkClick$ = new Subject<void>();

  constructor() {
    // Handle collapse toggle and hover effect
    this.toggleCollapse$
      .pipe(
        tap(() => {
          this.isCollapsed = !this.isCollapsed;
          this.hovered = true;
        }),
        switchMap(() => timer(1000)),
        tap(() => (this.hovered = false))
      )
      .subscribe();

    // Handle menu link click and collapse after delay
    this.menuLinkClick$
      .pipe(
        switchMap(() => timer(500)),
        tap(() => (this.isCollapsed = true))
      )
      .subscribe();
  }

  toggleCollapse() {
    this.toggleCollapse$.next();
  }

  onMenuLinkClick() {
    this.menuLinkClick$.next();
  }
}
