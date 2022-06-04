import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { Contact } from './contact';
import { NewContact } from './newContact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiURL: string = environment.baseURL + 'api/';

  constructor( private http: HttpClient ) { }

  getContacts():Observable<Contact[]>{
    return this.http.get<Contact[]>(this.apiURL).pipe(
      catchError(err => throwError(() => new Error ('Error en el servicio')))
    )
  }

  async createContact(name:string, last_name:string, document_id:string):Promise<Observable<NewContact>>{
    return this.http.post<NewContact>(this.apiURL, {'name':name,'last_name':last_name,'document_id':document_id}).pipe(
      catchError(err => throwError(() => new Error ('Error en el servicio')))
    )
  }

  deleteContact(id:string){
    const body = {'idRow':id};
    return this.http.delete(this.apiURL, {body}).pipe(
      catchError(err => throwError(() => new Error ('Error en el servicio')))
    )
  }

  updateContact(id:string, name:string, last_name:string, document_id:string){
    const body = {'idRow':id,'name':name,'last_name':last_name,'document_id':document_id};
    return this.http.patch(this.apiURL, body).pipe(
      catchError(err => throwError(() => new Error ('Error en el servicio')))
    )
  }
}
