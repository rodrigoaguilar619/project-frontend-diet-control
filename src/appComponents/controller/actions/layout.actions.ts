import { createAction, props } from '@ngrx/store';

export const setTitle = createAction('[LAYOUT Component] SetTitle', props<{ title: string }>());
export const setSubTitle = createAction('[LAYOUT Component] SetSubTitle', props<{ subTitle: string }>());
export const setMenu = createAction('[LAYOUT Component] SetMenu', props<{ menu: any }>())
