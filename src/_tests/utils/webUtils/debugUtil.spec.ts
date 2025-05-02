
describe('debugUtils', () => {
  const moduleName = 'TestModule';
  const defaultColor = 'color: white; background-color: #E1901A';
  let consoleLogSpy: jest.SpyInstance;
  let consoleErrorSpy: jest.SpyInstance;

  // Dynamically import modules after mocking
  const setup = (env: string, debugColor?: string) => {
    jest.resetModules();

    jest.doMock('@app/appComponents/catalogs/constantCatalog', () => {
      const actual = jest.requireActual('@app/appComponents/catalogs/constantCatalog');
      return {
        ...actual,
        _APP_ENVIRONMENT_: env,
      };
    });

    const DebugClass = require('@app/appComponents/classes/debugClass').default;

    const debugUtils = require('@app/appComponents/utils/webUtils/debugUtil');
    const debugClass = new DebugClass(moduleName, debugColor);

    return {
      debug: debugUtils.debug,
      debugError: debugUtils.debugError,
      debugClass,
    };
  };

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
  });

  it('should log with custom color in non-production', () => {
    const { debug, debugClass } = setup('development', 'color: blue');
    debug(debugClass, 'info');
    expect(consoleLogSpy).toHaveBeenCalledWith(
      `%cTestModule`,
      'color: blue',
      'info'
    );
  });

  it('should log with default color if no debugColor is provided', () => {
    const { debug, debugClass } = setup('development');
    debug(debugClass, 'info');
    expect(consoleLogSpy).toHaveBeenCalledWith(
      `%cTestModule`,
      defaultColor,
      'info'
    );
  });

  it('should not log in production environment', () => {
    const { debug, debugClass } = setup('production', 'color: blue');
    debug(debugClass, 'info');
    expect(consoleLogSpy).not.toHaveBeenCalled();
  });

  it('should always log errors with debugError and custom color', () => {
    const { debugError, debugClass } = setup('production', 'color: green');
    debugError(debugClass, 'error');
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      `%cTestModule`,
      'color: green',
      'error'
    );
  });

  it('should use default color in debugError if color is not provided', () => {
    const { debugError, debugClass } = setup('production');
    debugError(debugClass, 'error');
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      `%cTestModule`,
      defaultColor,
      'error'
    );
  });
});
