import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { DataStorageService } from '../services/data-storage.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule , RouterLink , RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private _AuthService:AuthService ,
  private  _Router:Router,
  private _DataStorageService:DataStorageService
  ){}
  isAuthantecate =false
  subscription:Subscription = new Subscription
  ngOnInit() {
this.subscription = this._AuthService.user.subscribe(user =>{
     this.isAuthantecate = !! user
     console.log(!!user);
  }
)

  }
  // goRecipes(){
  //   if (this.isAuthantecate) {
  //     this._Router.navigate(['/recipes'])

  //   }
  // }
  logout(){
    this._AuthService.logout()
   this._Router.navigate(['/login'])
  }

  saveDate(){
    this._DataStorageService.dataStorage().subscribe()
  }

  onFetchData(){
    this._DataStorageService.FetchData().subscribe()
  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}

