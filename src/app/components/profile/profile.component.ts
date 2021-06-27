import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {InfoSelectors} from "../../store/info.selectors";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {

  user$: Observable<any> | undefined;
  role$: Observable<any> | undefined;
  statistics$: Observable<any> | undefined;

  constructor(
    private store$: Store,
  ) {
    this.user$ = this.store$.select(InfoSelectors.user);
    this.role$ = this.store$.select(InfoSelectors.role);
    this.statistics$ = this.store$.select(InfoSelectors.statistics);
  }
}
