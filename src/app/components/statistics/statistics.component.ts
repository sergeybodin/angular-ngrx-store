import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {InfoActions} from "../../store/info.actions";
import {InfoSelectors} from "../../store/info.selectors";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html'
})
export class StatisticsComponent {

  isLoadStatistics$: any;

  statistics: any = 'no';

  constructor(
    private store$: Store
  ) {}

  ngDoCheck():void {
    this.isLoadStatistics$ = this.store$.select(InfoSelectors.isLoadStatistics);
  }

  loadStatistics(): void {
    this.statistics = Math.round(Math.random() * 100000);
    setTimeout(() => {
      this.store$.dispatch(InfoActions.setStatistics({statistics: this.statistics}));
      this.loadStatistics();
    }, 1000);
  }
}
