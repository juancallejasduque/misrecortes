import {Injectable} from '@angular/core';


@Injectable()
export class AppConfig {

  public static API_URL_SERVER = 'http://localhost:8080/misrecrotes/';
  public static API_URL = 'api/';
  public static API_VERSION = '01/';

  static Api = class {    
    public static readonly URL = AppConfig.API_URL_SERVER + AppConfig.API_URL+ AppConfig.API_VERSION;
    public static readonly PAGE = URL+'page'
    public static readonly PAGE_CRUD = AppConfig.Api.PAGE+'/'
  };
}