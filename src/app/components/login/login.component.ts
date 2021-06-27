import {Component} from '@angular/core';
import {Info} from '../../store/info.reducer';
import {Store} from "@ngrx/store";
import {InfoActions} from "../../store/info.actions";

@Component({
  selector: 'app-auth',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  users = [
    'Ivan',
    'Sergey',
    'Vladimir'
  ];

  roles = [
    'Admin',
    'Manager',
    'User'
  ];

  info: Info = {
    user: '',
    role: '',
    isLoadStatistics: false,
  };

  constructor(
    private store$: Store
  ) {
  }

  auth(): void {
    if (
      this.info.user !== '' &&
      this.info.role !== ''
    ) {
      this.store$.dispatch(InfoActions.authUser({user: this.info.user}));
      this.store$.dispatch(InfoActions.authRole({role: this.info.role}));
      this.store$.dispatch(InfoActions.isLoadStatistics({isLoadStatistics: true}));
    } else {
      alert('Выбирите пользователя и роль');
    }
  }

}
