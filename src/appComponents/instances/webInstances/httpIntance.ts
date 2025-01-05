import { Injectable } from '@angular/core';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { MockConfigI } from '@app/appComponents/@types/utils/axiosUtil';

@Injectable({
  providedIn: 'root'
})
export class HttpInstance {

  private axiosInstance = axios.create({
    baseURL: '',
  });

  constructor() {
    this.axiosInstance.interceptors.request.use(
      request => this.requestHandler(request)
    );
  }

  private requestHandler(request: any) {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('userName');

    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }

    if (username) {
      request.data.userName = username;
    }

    return request;
  }

  public initConfigMocks(mockConfigs: MockConfigI[]) {
    const mock = new MockAdapter(this.axiosInstance);

    mockConfigs.forEach((config: MockConfigI) => {
      mock.onPost(config.url).reply(config.status, config.response);
    });
  }

  // Method to get the axios instance
  public getAxiosInstance() {
    return this.axiosInstance;
  }
}
