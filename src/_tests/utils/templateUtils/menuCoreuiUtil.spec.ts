import { transformNav } from '@app/appComponents/utils/templateUtil/menuCoreuiUtil';
import { AppMenusPropsDataI } from '@app/appComponents/@types/layout/appMenuLayout';
import { INavData } from '@coreui/angular';

describe('transformNav', () => {
  it('should transform a flat nav list correctly', () => {
    const input: AppMenusPropsDataI[] = [
      { text: 'Home', url: '/home', icon: 'home-icon' },
      { text: 'About', url: '/about', isOpenExternal: true },
    ];

    const expected: INavData[] = [
      {
        name: 'Home',
        url: '/home',
        icon: 'home-icon',
        attributes: {},
        children: undefined,
      },
      {
        name: 'About',
        url: '/about',
        icon: 'nav-icon-bullet',
        attributes: { target: '_blank' },
        children: undefined,
      }
    ];

    expect(transformNav(input)).toEqual(expected);
  });

  it('should handle nested children correctly', () => {
    const input: AppMenusPropsDataI[] = [
      {
        text: 'Main',
        url: '/main',
        children: [
          { text: 'Sub1', url: '/main/sub1' },
          { text: 'Sub2', url: '/main/sub2', isOpenExternal: true },
        ]
      }
    ];

    const result = transformNav(input);

    expect(result.length).toBe(1);
    expect(result[0].children).toBeDefined();
    expect(result[0].children?.[1].attributes).toEqual({ target: '_blank' });
  });

  it('should default icon and omit attributes if not specified', () => {
    const input: AppMenusPropsDataI[] = [{ text: 'DefaultIcon', url: '/default' }];
    const result = transformNav(input);

    expect(result[0].icon).toBe('nav-icon-bullet');
    expect(result[0].attributes).toEqual({});
  });
});
