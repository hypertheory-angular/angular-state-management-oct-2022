import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: UserInfo | null = null;
  // a subject is something that can be "observed" over time. It will have multiple values, perhaps, over the life of this
  // application. We are going to allow interested code to "observe" this subject and we will push new versions of the data
  // to the code observing this as it changes.
  private userSubject = new BehaviorSubject<UserInfo | null>(null);

  getUser(): Observable<UserInfo | null> {
    return this.userSubject.asObservable();
  }
  logIn() {
    // this will start the OIDC flow to get the user logged in.
    this.user = {
      name: 'Bob Smith',
      email: 'bob@aol.com',
    };
    this.userSubject.next(this.user);
  }

  logOut() {
    // this will log them out... all sorts of fancy important stuff here.
    this.user = null;
    this.userSubject.next(null);
  }

  isLoggedIn(): Observable<boolean> {
    return this.userSubject.asObservable().pipe(
      map((user) => !!user), // return true
    );
  }
}

export type UserInfo = {
  name: string;
  email: string;
};
