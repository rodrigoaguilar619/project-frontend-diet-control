import { IUserData } from '@app/appComponents/@types/controller/reducers/iuserData';
import { createReducer, on } from '@ngrx/store';
import { setUserData } from '../actions/userData.actions';

export const initialState: IUserData = { userName: "", userRols: [] };

const _setUserDataReducer = createReducer(
    initialState,
    on(setUserData, (state, parameters: { userData: string, userRols: string[] }) => {
        return {...state, userName: parameters.userData, userRols: parameters.userRols }
    }),
);

export function setUserDataReducer(state:any, action:any) {
    return _setUserDataReducer(state, action);
}
