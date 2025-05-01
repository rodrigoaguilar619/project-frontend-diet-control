import { downloadFileFromBase64 } from '@app/appComponents/utils/dataUtils/fileUtil';

describe('downloadFileFromBase64', () => {

  let createElementSpy: jest.SpyInstance;
  let clickMock: jest.Mock;
  let mockAnchorElement: HTMLAnchorElement & { _href?: string; _download?: string };

  beforeEach(() => {
    clickMock = jest.fn();

    mockAnchorElement = {
      click: clickMock,
      set href(value: string) {
        mockAnchorElement._href = value;
      },
      set download(value: string) {
        mockAnchorElement._download = value;
      },
      _href: '',
      _download: '',
    } as unknown as HTMLAnchorElement & { _href?: string; _download?: string };

    createElementSpy = jest.spyOn(document, 'createElement').mockReturnValue(mockAnchorElement);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should create an anchor element and trigger file download with correct href and filename', () => {
    const base64 = 'dGVzdC1jb250ZW50'; // "test-content" base64
    const nameFile = 'example';
    const extension = 'txt';

    downloadFileFromBase64(base64, nameFile, extension);

    expect(createElementSpy).toHaveBeenCalledWith('a');
    expect(mockAnchorElement._href).toBe(`data:application/octet-stream;base64,${base64}`);
    expect(mockAnchorElement._download).toBe(`${nameFile}.${extension}`);
    expect(clickMock).toHaveBeenCalled();
  });

});
