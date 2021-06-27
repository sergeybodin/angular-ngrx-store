import {Action, createReducer, on} from '@ngrx/store';
import {InfoActions} from './info.actions';

export interface Info {
  user: string | undefined,
  role: string | undefined,
  isLoadStatistics: boolean | undefined,
  statistics?: string | undefined,
};

export const infoState: Info = {
  user: 'no',
  role: 'no',
  isLoadStatistics: false,
  statistics: 'no'
};

const infoReducer = createReducer(
  infoState,
  on(InfoActions.authUser, (info, {user}) => ({
    ...info,
    user: user
  })),
  on(InfoActions.authRole, (info, {role}) => ({
    ...info,
    role: role
  })),
  on(InfoActions.isLoadStatistics, (info, {isLoadStatistics}) => ({
    ...info,
    isLoadStatistics: isLoadStatistics
  })),
  on(InfoActions.setStatistics, (info, {statistics}) => ({
    ...info,
    statistics: statistics
  }))
);

// @ts-ignore
export function reducer(info?: Info, action: Action)
{
  return infoReducer(info, action);
}
