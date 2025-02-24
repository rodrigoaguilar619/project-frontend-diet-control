import { createAction, props } from '@ngrx/store';

export const setUserData = createAction('[LAYOUT Component] SetUserDataState', props<{ userData: string, userRols: string[] }>());
