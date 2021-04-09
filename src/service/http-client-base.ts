import axios, { AxiosInstance, AxiosResponse } from 'axios';


abstract class HttpClient {
  protected readonly instance: AxiosInstance;

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError,
    );
  };

private _handleResponse = ({ data }: AxiosResponse) => data;
protected _handleError = (error: any) => Promise.reject(error);
public constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
    });

    this._initializeResponseInterceptor();
  }

  

  

  
}

export default HttpClient;