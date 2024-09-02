import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError,tap } from 'rxjs';
import { User } from '../auth/auth/auth.module';

export interface AuthData{
  kind:string,
  idToken:string,
  email:string,
  refreshToken:string,
  expiresIn:string,
  localId:string,
  registered?:boolean

}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _HttpClient:HttpClient) { }
user = new BehaviorSubject<User | null>(null)
private tokenExpirtionTimer:any

  regitser(email:string , password:string):Observable<any>{
    return this._HttpClient.post<AuthData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC2UdFuywudcRLLlBqfDCuHNdD1xB6G5fQ`,
{
      email,
      password,
      returnSecureToken:true
    }
  ).pipe(catchError(this.handleError),
  tap(responseData=>{
   this.handleAuthanticate(
    responseData.email ,
    responseData.localId ,
    responseData.idToken ,
    +responseData.expiresIn
  )
  // console.log(responseData);

    }
  ))
  }


  login(email:string , password:string):Observable<any>{
  return  this._HttpClient.post
  <AuthData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC2UdFuywudcRLLlBqfDCuHNdD1xB6G5fQ`,
    {
    email,
    password,
    returnSecureToken:true
  }
).pipe(catchError(this.handleError),
tap(
  responseData=>{
    const expretionDate =new Date(new Date().getTime()  + +responseData.expiresIn *1000)
    const user = new User(
      responseData.email ,
      responseData.localId,
      responseData.idToken ,
      expretionDate
      )
      this.user.next(user)
      // console.log(user);

     localStorage.setItem('userData', JSON.stringify(user))

}))

  }

autoLogin(){
const dataUser=localStorage.getItem('userData')
const parseDateUser= dataUser ? JSON.parse(dataUser) : null
  const userData :{
email:string;
id:string;
_token:string;
_tokenExpirationDate:Date
  }= parseDateUser
  if (!userData) {
    return;
  }
  const userLoaded= new User(
    userData.email ,
    userData.id ,
    userData._token ,
    new Date(userData._tokenExpirationDate)
  )
    if (userLoaded.token) {
      this.user.next(userLoaded)
      const expireationDuration =new Date(userData._tokenExpirationDate).getTime() - new Date().getTime()
      this.autoLogout(expireationDuration)
    }
}

  private handleAuthanticate(email:string , userId:string , idToken:string ,expiresIn:number){
    const expretionDate =new Date(new Date().getTime()  + expiresIn *1000)
    const user =new User(
    email ,
    userId,
    idToken ,
    expretionDate
    )
    this.user.next(user);
    this.autoLogout(expiresIn * 1000)
  }
  private handleError(errors:HttpErrorResponse){
    let errorMessage = 'An Unkwon Error'
    if (!errors.error || !errors.error.error) {
     return throwError(errorMessage)
    }
    switch(errors.error.error.message){
      case 'EMAIL_EXISTS':
        errorMessage = ' The email address is already in use by another account.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = ' The password is invalid ';
        break;
      case 'USER_DISABLED':
        errorMessage = 'The user account has been disabled by an administrator. ';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'There is no user';
    }
    return throwError(errorMessage)
  }

  logout(){
    this.user.next(null)
    localStorage.removeItem('userData')
    if (this.tokenExpirtionTimer) {
       clearTimeout(this.tokenExpirtionTimer)
    }
    this.tokenExpirtionTimer = null
  }

  autoLogout(expretionDuration:number){
 this.tokenExpirtionTimer =    setTimeout(() => {
      this.logout()
     }, expretionDuration);
  }
}

