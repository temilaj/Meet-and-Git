import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Githubservice {
  private clientId = 'a59b57cbe788d8945293';
  private clientSecret = '47d998794973f7a2f5208cd0e9a66b4ea486930d';

  constructor(public http: Http) {
    console.log('Githubservice is ready baby!');
  }
 
  /**
   * Retrieve a user from github with the same name match
   * @param {string} username 
   * @returns json (observable)
   * 
   * @memberOf Githubservice
   */
  getUser(username:string) {
        return this.http.get(`https://api.github.com/users/${username}?client_id=${this.clientId}&client_secret=${this.clientSecret}`)
        .map(res => res.json()); 
    }
}
