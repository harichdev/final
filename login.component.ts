import { Component, OnInit } from '@angular/core';
import {
  Router,
  NavigationExtras,
  ActivatedRoute
} from '@angular/router';
import { AuthService } from '../../auth.service';
import { HttpClient } from '@angular/common/http';
import { UserDetail } from './user.detail';
import { environment } from 'environments/environment';
import { AlertService } from 'app/alert.service';

@Component({
  templateUrl: 'login.component.html'

})
export class LoginComponent implements OnInit {

  message: string;
  authStatus: string;
  auth: any = {};
  loading = false;
  returnUrl: string;
  // private readonly baseURL = 'http://reports.ido.org.in:3042';
  // private readonly baseURL = 'http://localhost:3042';
  private readonly baseURL = environment.apiBase;

  constructor(
    private route: ActivatedRoute,
    public authService: AuthService,
    private alertService: AlertService,
    public router: Router,
    private http: HttpClient
  ) {
    this.setMessage();
  }

  ngOnInit(): void {
    // reset login status
    this.authService.logout();
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    }

  login() {

    this.message = 'Trying to log in ...' + this.auth.Id;
    // Below we deliberately used var instead of let because we want the value change through the blocks
    var redirect = this.returnUrl;

    if (this.authService.isLoggedIn !== true) {
        this.authService.loginWithUserPass( this.auth.username, this.auth.password )
        // .first()
        .subscribe(result =>  {
                if ( result.status === 'false') {
                  this.auth.message = result.data;
                  // this.returnUrl = '/pages/login';
                  return; // Temp. may optimize later
                } else {
                  this.setMessage();
                  this.auth.message = 'Welcome ' + result.data[0].firstName + ' ' + result.data[0].lastName + '. Please select a menu item';
                  this.returnUrl = '/dashboard';
                  redirect = this.returnUrl; // Temp. may optimize later
                  console.log('Authenticated.. redirect url is  ' + redirect);
                  this.router.navigate(['/reports/sessionreport']);
                }
              },
                error => {
                  this.alertService.error(error);
                  this.loading = false;
                  this.authService.isLoggedIn = false;
                  this.auth.message = 'Unknown Error. Check if your REST server or DB server running correctly';
                  this.returnUrl = '/pages/login';
                  redirect = this.returnUrl; // Temp. may optimize later
                  });

              // .subscribe(
              //   data => {
                    // this.router.navigate([this.returnUrl]);
              //   },


    } else {
    // if (this.authService.isLoggedIn) {
    // Get the redirect URL from our auth service
    // If no redirect has been set, use the default
    console.log('Loggedin ?? Redirecting to url as  ' + redirect + ' with this.authService.redirectUrl ' + this.authService.redirectUrl );
    console.log(' returnUrl ' + this.returnUrl  +  ' localstorage token is  ' + localStorage.getItem('currentUser'));
    redirect = this.authService.redirectUrl ? this.authService.redirectUrl : this.returnUrl;
    }
    // Set our navigation extras object
    // that passes on our global query params and fragment
    const navigationExtras: NavigationExtras = {
      queryParamsHandling: 'preserve',
      preserveFragment: true
    }

    // Redirect the user
    // redirect =  '/pages/login';
    console.log('Redirecting to url as  ' + redirect + 'with NavigationExtras' + navigationExtras);

  //  this.router.navigate([redirect], navigationExtras);


  }

    logout() {
    this.authService.logout();
    this.setMessage();

  }

}
