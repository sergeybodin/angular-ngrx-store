import {createAction, props} from '@ngrx/store';

export namespace InfoActions {

  export const authUser = createAction(
    '[AUTH] user',
    props<{
      user?: string
    }>()
  );

  export const authRole = createAction(
    '[AUTH] role',
    props<{
      role?: string
    }>()
  );

  export const isLoadStatistics = createAction(
    '[STATISTICS] isLoad',
    props<{
      isLoadStatistics?: any
    }>()
  );

  export const setStatistics = createAction(
    '[STATISTICS] set',
    props<{
      statistics?: any
    }>()
  );
}
