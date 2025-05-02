import { transformNav } from '@app/appComponents/utils/templateUtil/menuPrimengUtil';
import { AppMenusPropsDataI } from '@app/appComponents/@types/layout/appMenuLayout';

describe('transformNav', () => {
  it('should transform a basic item with routerLink', () => {
    const input: AppMenusPropsDataI[] = [
      { text: 'Dashboard', url: '/dashboard', icon: 'dashboard-icon' }
    ];

    const expected = [
      {
        label: 'Dashboard',
        icon: 'dashboard-icon',
        routerLink: ['/dashboard']
      }
    ];

    expect(transformNav(input)).toEqual(expected);
  });

  it('should transform external link with full URL using "url" key', () => {
    const input: AppMenusPropsDataI[] = [
      { text: 'Docs', url: 'https://example.com/docs', icon: 'doc-icon', isOpenExternal: true }
    ];

    const expected = [
      {
        label: 'Docs',
        icon: 'doc-icon',
        url: ['https://example.com/docs']
      }
    ];

    expect(transformNav(input)).toEqual(expected);
  });

  it('should transform internal link as external with hash prefix if marked isOpenExternal', () => {
    const input: AppMenusPropsDataI[] = [
      { text: 'Terms', url: '/terms', icon: 'terms-icon', isOpenExternal: true }
    ];

    const expected = [
      {
        label: 'Terms',
        icon: 'terms-icon',
        url: ['#/terms']
      }
    ];

    expect(transformNav(input)).toEqual(expected);
  });

  it('should recursively transform nested items', () => {
    const input: AppMenusPropsDataI[] = [
      {
        text: 'Settings',
        url: '/settings',
        icon: 'settings-icon',
        children: [
          { text: 'Profile', url: '/settings/profile' },
          { text: 'Security', url: '/settings/security', isOpenExternal: true }
        ]
      }
    ];

    const transformed = transformNav(input);

    expect(transformed[0].label).toBe('Settings');
    expect(transformed[0].items).toHaveLength(2);
    expect(transformed[0].items[0].routerLink).toEqual(['/settings/profile']);
    expect(transformed[0].items[1].url).toEqual(['#/settings/security']);
  });
});
