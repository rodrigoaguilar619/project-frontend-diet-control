export interface MockConfigI {
    method: string;
    url: string;
    status: number;
    response: any;
    headers?: Record<string, string>;
    body?: any;
  }
