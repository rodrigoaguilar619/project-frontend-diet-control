import { MockConfigI } from '@app/appComponents/@types/utils/httpUtil';
import { HttpInstance } from '@app/appComponents/instances/webInstances/httpIntance';

const mockFetch = jest.fn();
global.fetch = mockFetch;

describe('HttpInstance', () => {
  let httpInstance: HttpInstance;

  beforeEach(() => {
    httpInstance = new HttpInstance();

    // Reset mocks
    jest.clearAllMocks();
    localStorage.clear();
  });

  describe('requestHandler', () => {
    it('should add Authorization and userName to request body and headers', () => {
      localStorage.setItem('token', 'mock-token');
      localStorage.setItem('userName', 'johnDoe');

      const result: any = httpInstance.requestHandler('/api/data', {});

      expect(result.headers['Authorization']).toBe('Bearer mock-token');
      expect(JSON.parse(result.body as string).userName).toBe('johnDoe');
    });

    it('should skip Authorization and userName if not in localStorage', () => {
      const result: any = httpInstance.requestHandler('/api/data', {});
      expect(result.headers['Authorization']).toBeUndefined();
      expect(JSON.parse(result.body as string).userName).toBeUndefined();
    });
  });

  describe('fetchInstance', () => {
    it('should return JSON data when response is ok', async () => {
      const mockData = { success: true };
      mockFetch.mockResolvedValue({
        ok: true,
        json: async () => mockData,
        text: async () => JSON.stringify(mockData),
      });

      const result = await httpInstance.fetchInstance('/api/test', {
        headers: { 'Content-Type': 'application/json' },
      });

      expect(result).toEqual(mockData);
    });

    it('should throw error on failed response', async () => {
      mockFetch.mockResolvedValue({
        ok: false,
        status: 400,
        json: async () => ({ message: 'Bad Request' }),
        text: async () => 'Bad Request',
      });

      await expect(httpInstance.fetchInstance('/api/error', {
        headers: { 'Content-Type': 'application/json' }
      })).rejects.toThrow('Request failed with status 400');
    });

    it('should fallback with general error if no response object', async () => {
      mockFetch.mockRejectedValue(new Error('Network Error'));
      await expect(httpInstance.fetchInstance('/api/fail')).rejects.toThrow('Error on request');
    });
  });

  describe('initConfigMocks', () => {
    it('should intercept fetch calls and return mocked response', async () => {
      const mockResponse = JSON.stringify({ mocked: true });

      const mockConfig: MockConfigI = {
        method: 'POST',
        url: '/mock/endpoint',
        status: 200,
        response: mockResponse,
        headers: { 'Content-Type': 'application/json' },
      };

      httpInstance.initConfigMocks([mockConfig]);

      const res = await fetch('https://localhost/mock/endpoint', { method: 'POST' });
      const json = await res.json();

      expect(json).toEqual({ mocked: true });
    });

    it('should fall back to original fetch if no mock match', async () => {
      const originalFetch = jest.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ fromOriginal: true }),
        text: async () => 'fromOriginal',
      });

      global.fetch = originalFetch;
      httpInstance.initConfigMocks([]); // no mocks

      const res = await fetch('https://localhost/other', { method: 'POST' });
      const json = await res.json();

      expect(json).toEqual({ fromOriginal: true });
    });
  });

  // fetchFluxInstance would ideally be tested in an environment supporting ReadableStream
  // Consider using integration/e2e tests for that with real stream mocks or Node.js readable stream.
});
