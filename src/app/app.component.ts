import { Component, OnInit } from '@angular/core';
import { AuthService } from './Components/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'shopping';
  constructor(private _AuthService:AuthService){}
   ngOnInit() {
     this._AuthService.autoLogin()
   }
}
