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
  export class ScheduleService extends AbstractService {
    public resourceUrl = "/api/course";
    public resourceUrlModule = "/api/module";
    constructor(protected http: HttpClient) {
      super(http);
    }
    getAllCourse(loading = false): Observable<any> {
        return super.get(`${this.resourceUrl}`);
    }

    getTkb(loading = false): Observable<any> {
        return super.get(`${this.resourceUrl}/ok`);
    }
    
    getAllModule(loading = true): Observable<any> {
        return super.get(`${this.resourceUrlModule}`)
    }
  
    create(course: any): Observable<any> {
      return super.post<any>(`${this.resourceUrl}/create`, course);
    }
  
    update(id: string, course: any): Observable<any> {
      return super.post<any>(`${this.resourceUrl}/update/${id}`, course);
    }
  
    delete(id: string): Observable<any> {
      return super.get<any>(`${this.resourceUrl}/remove/${id}`);
    }
  
}
  