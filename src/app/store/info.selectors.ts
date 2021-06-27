import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Info} from "./info.reducer";

export namespace InfoSelectors {

  export const info = createFeatureSelector<Info>('info');

  export const user = createSelector(info, (info) => info.user);

  export const role = createSelector(info, (info) => info.role);

  export const isLoadStatistics = createSelector(info, (info) => info.isLoadStatistics);

  export const statistics = createSelector(info, (info) => info.statistics);

}
