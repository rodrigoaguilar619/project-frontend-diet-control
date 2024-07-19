import { createReducer, on } from '@ngrx/store';
import { ILayout } from '../../../appComponents/@types/controller/reducers/ilayout';
import { setMenu, setTitle } from '../../../appComponents/controller/actions/layout.actions';

export const initialState: ILayout = { title: "", menu: [] };

const _setLayoutReducer = createReducer(
    initialState,
    on(setTitle, (state, parameters: { title: string }) => {
        return {...state, title: parameters.title }
    }),
    on(setMenu, (state, parameters: { menu: any }) => {
        return {...state, menu: parameters.menu }
    }),
);

export function setLayoutReducer(state:any, action:any) {
    return _setLayoutReducer(state, action);
}