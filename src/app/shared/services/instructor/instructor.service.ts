import {
    HttpClient,
    HttpEventType,
    HttpHeaders,
    HttpResponse,
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import {
    AbstractService,
    EntityResponseType,
  } from '@shared/services/common/abstract.service';
  import { Observable, of } from 'rxjs';
  import { IProductPropertyValue } from '../../models/product-property-value.model';
  @Injectable({
    providedIn: 'root',
  })
  export class InstructorService extends AbstractService {
  
    public resourceUrlInstructor = "/api/instructor";
    public resourceUrlSubject= "/api/subject";
    constructor(protected http: HttpClient) {
      super(http);
    }
  
    getAllSubject(loading = true): Observable<any> {
        return super.get(`${this.resourceUrlSubject}`)
    }

    getAllInstructor(loading=false): Observable<any> {
      return super.get(`${this.resourceUrlInstructor}`);
    }

    getScheduleInstructor(id: string): Observable<any> {
      return super.get(`${this.resourceUrlInstructor}/schedule/${id}`);
    }

    getInstructorByIdUser(id: string): Observable<any> {
      return super.get(`${this.resourceUrlInstructor}/user/${id}`);
    }

    create(instructor: any): Observable<any> {
      return super.post<any>(`${this.resourceUrlInstructor}/create`, instructor);
    }

  
    update(id: string, instructor: any): Observable<any> {
      return super.post<any>(`${this.resourceUrlInstructor}/update/${id}`, instructor);
    }
  
    delete(id: string): Observable<any> {
      return super.get<any>(`${this.resourceUrlInstructor}/remove/${id}`);
    }
  
}
  