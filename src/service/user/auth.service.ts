import { AxiosRequestConfig } from 'axios';

import { getBaseUrl } from '../../utils/constants';
import HttpClient from '../http-client-base';
import { User } from '../../types';

class AuthServiceApi extends HttpClient {
  public static classInstance?: AuthServiceApi;

  // Add api requests here
public createUser = (body: User) => this.instance.post('/users', body);
public getUser = () => this.instance.get<User>('/users');
private _initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(
      this._handleRequest,
      this._handleError,
    );
  };

private _handleRequest = (config: AxiosRequestConfig) => {

    // Add respective headers here
    config.headers.Authorization = 'Bearer ...';
    return config;
  };

private constructor() {
    super(getBaseUrl());
    this._initializeRequestInterceptor();
  }

  public static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new AuthServiceApi();
    }
    return this.classInstance;
  }

  

  




  
  
  
}

export default AuthServiceApi;
// const authServiceApi:AuthServiceApi = AuthServiceApi.getInstance();

