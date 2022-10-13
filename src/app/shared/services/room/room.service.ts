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
  export class RoomService extends AbstractService {
  
    public resourceUrlRoom = "/api/room";
    constructor(protected http: HttpClient) {
      super(http);
    }
  

    getAllRoom(loading=false): Observable<any> {
      return super.get(`${this.resourceUrlRoom}`);
    }

    create(room: any): Observable<any> {
      return super.post<any>(`${this.resourceUrlRoom}/create`, room);
    }

  
    update(id: string, room: any): Observable<any> {
      return super.post<any>(`${this.resourceUrlRoom}/update/${id}`, room);
    }
  
    delete(id: string): Observable<any> {
      return super.get<any>(`${this.resourceUrlRoom}/remove/${id}`);
    }
  
}
  