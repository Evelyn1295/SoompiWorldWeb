import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  tokenType: string;
  accessToken: string;
  username: string;
  userRole: string;
  baseURL = 'https://soompiworld-edge-service.herokuapp.com/';

  constructor(private httpClient: HttpClient) {}

  // tslint:disable-next-line:typedef
  public setUser(user) {
    this.tokenType = user.tokenType;
    this.accessToken = user.accessToken;
    this.username = user.username;
    this.userRole = user.userRole;
  }

  // tslint:disable-next-line:typedef
  public getToken() {
    return `${this.tokenType} ${this.accessToken}`;
  }

  // tslint:disable-next-line:typedef
  public isAdmin() {
    return this.userRole === 'ROLE_ADMIN';
  }

  // tslint:disable-next-line:typedef
  public authRequest(data) {
    return new Promise((resolve, reject) => {
      this.httpClient.post(`${this.baseURL}auth/sign-in`, data).subscribe(
        (postedData) => {
          this.setUser(postedData);
          resolve(postedData);
        },
        (error) => {
          reject(error.error.message);
        }
      );
    });
  }

  // tslint:disable-next-line:typedef
  public logout() {
    this.tokenType = '';
    this.accessToken = '';
  }

  public getRequest(url): any {
    const headers = new HttpHeaders().set('Authorization', this.getToken());
    console.log(headers);
    return this.httpClient.get<any>(`${this.baseURL}${url}`, { headers });
  }

  public postRequest(url, data): any {
    const headers = new HttpHeaders().set('Authorization', this.getToken());
    return this.httpClient.post(`${this.baseURL}${url}`, data, { headers });
  }

  public putRequest(url, data): any {
    const headers = new HttpHeaders().set('Authorization', this.getToken());
    console.log(headers);
    return this.httpClient.put(`${this.baseURL}${url}`, data, { headers });
  }

  public deleteRequest(url) {
    const headers = new HttpHeaders().set('Authorization', this.getToken());
    this.httpClient.delete(`${this.baseURL}${url}`, { headers }).subscribe(
      (data) => {
        console.log(data);
        return data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

