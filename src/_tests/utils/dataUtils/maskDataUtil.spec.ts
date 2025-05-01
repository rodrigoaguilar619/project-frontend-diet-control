
import { maskData } from '@app/appComponents/utils/dataUtils/maskDataUtil';
import { MaskDataTypeEnum } from '@app/appComponents/catalogs/enumCatalog';

jest.mock('@app/appComponents/utils/formatUtils/formatNumericUtil', () => ({
  formatCurrency: jest.fn((value) => `formattedCurrency(${value})`),
  formatAnswerData: jest.fn((value) => `formattedAnswer(${value})`)
}));

jest.mock('@app/appComponents/utils/formatUtils/formatDateUtil', () => ({
  formatDate: jest.fn((value, format) => `formattedDate(${value},${format})`)
}));

describe('maskData', () => {
  it('should return "null" when value is null and isShowNull is true', () => {
    const result = maskData(null, { isShowNull: true, maskType: MaskDataTypeEnum.CURRENCY });
    expect(result).toBe('null');
  });

  it('should return "" when value is null and isShowNull is false', () => {
    const result = maskData(null, { isShowNull: false, maskType: MaskDataTypeEnum.CURRENCY });
    expect(result).toBe('');
  });

  it('should format currency', () => {
    const result = maskData(1000, {
      maskType: MaskDataTypeEnum.CURRENCY,
      isShowNull: false,
      maskDataProps: {
        decimalPlaces: 2,
        addZeroPad: true,
        addSeparateComma: true,
        addSymbolCurrency: true,
        addSymbolPercent: false
      }
    });
    expect(result).toBe('formattedCurrency(1000)');
  });

  it('should format answer data', () => {
    const result = maskData('yes', {
      maskType: MaskDataTypeEnum.ANSWER,
      isShowNull: false
    });
    expect(result).toBe('formattedAnswer(yes)');
  });

  it('should format date', () => {
    const result = maskData('2024-04-27', {
      maskType: MaskDataTypeEnum.DATE,
      isShowNull: false,
      maskDataProps: {
        format: 'dd/MM/yyyy'
      }
    });
    expect(result).toBe('formattedDate(2024-04-27,dd/MM/yyyy)');
  });

  it('should return raw value when no maskDataProps provided', () => {
    const result = maskData('rawValue');
    expect(result).toBe('rawValue');
  });
});
