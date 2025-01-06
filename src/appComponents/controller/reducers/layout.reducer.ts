import { createReducer, on } from '@ngrx/store';
import { ILayout } from '@app/appComponents/@types/controller/reducers/ilayout';
import { setMenu, setSubTitle, setTitle } from '@app/appComponents/controller/actions/layout.actions';

export const initialState: ILayout = { title: "", subTitle: "", menu: [] };

const _setLayoutReducer = createReducer(
    initialState,
    on(setTitle, (state, parameters: { title: string }) => {
        return {...state, title: parameters.title }
    }),
    on(setSubTitle, (state, parameters: { subTitle: string }) => {
        return {...state, subTitle: parameters.subTitle }
    }),
    on(setMenu, (state, parameters: { menu: any }) => {
        return {...state, menu: parameters.menu }
    }),
);

export function setLayoutReducer(state:any, action:any) {
    return _setLayoutReducer(state, action);
}
