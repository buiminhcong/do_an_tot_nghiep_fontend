import {
    HttpClient,
    HttpEventType,
    HttpHeaders,
    HttpResponse,
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { SORT } from '@shared/constants/common.constant';
  import { SERVICE } from '@shared/constants/gateway-routes-api.constant';
  import { IBaseResponse } from '@shared/models/base.model';
  import { IProduct } from '@shared/models/productReal.model';
  import {
    IProductSearchRequest,
    ProductSearchRequest,
  } from '@shared/models/request/product-search-request.model';
  import {
    AbstractService,
    EntityResponseType,
  } from '@shared/services/common/abstract.service';
  import { Observable, of } from 'rxjs';
  import { IProductPropertyValue } from '../../models/product-property-value.model';
  @Injectable({
    providedIn: 'root',
  })
  export class ModuleService extends AbstractService {
    public resourceUrlModule = "/api/module";
    public resourceUrlSubject= "/api/subject";
    constructor(protected http: HttpClient) {
      super(http);
    }
  

    getAllModule(loading = true): Observable<any> {
        return super.get(`${this.resourceUrlModule}`)
    }

    getAllSubject(loading = true): Observable<any> {
      return super.get(`${this.resourceUrlSubject}`)
  }
  
    create(module: any): Observable<any> {
      return super.post<any>(`${this.resourceUrlModule}/create`, module);
    }
  
    update(id: string, module: any): Observable<any> {
      return super.post<any>(`${this.resourceUrlModule}/update/${id}`, module);
    }
  
    delete(id: string): Observable<any> {
      return super.get<any>(`${this.resourceUrlModule}/remove/${id}`);
    }
  
}
  