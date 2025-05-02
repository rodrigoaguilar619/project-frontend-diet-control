
import moment from 'moment';
import { parseDate, formatDate } from '@app/appComponents/utils/formatUtils/formatDateUtil';

describe('parseDate', () => {
  it('should return null if value is null or undefined', () => {
    expect(parseDate(undefined as unknown as number)).toBeNull();
  });

  it('should convert valid number to Date', () => {
    const timestamp = 1672531200000; // Jan 1, 2023
    const date = parseDate(timestamp);
    expect(date).toBeInstanceOf(Date);
    expect(date?.getTime()).toBe(timestamp);
  });
});

describe('formatDate', () => {
  it('should return empty string if value is null or undefined', () => {
    expect(formatDate(null as unknown as number, 'YYYY-MM-DD')).toBe('');
    expect(formatDate(undefined as unknown as number, 'YYYY-MM-DD')).toBe('');
  });

  it('should return the same value if date is invalid', () => {
    expect(formatDate('invalid-date', 'YYYY-MM-DD')).toBe('invalid-date');
  });

  it('should format valid timestamp', () => {
    const timestamp = 1672531200000; // Jan 1, 2023
    expect(formatDate(timestamp, 'YYYY-MM-DD')).toBe(moment(timestamp).format('YYYY-MM-DD'));
  });

  it('should format valid string number', () => {
    const timestamp = '1672531200000'; // Jan 1, 2023 as string
    expect(formatDate(timestamp, 'YYYY-MM-DD')).toBe(moment(Number(timestamp)).format('YYYY-MM-DD'));
  });
});
