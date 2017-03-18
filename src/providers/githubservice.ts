import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Githubservice {
  private clientId = 'a59b57cbe788d8945293';
  private clientSecret = '47d998794973f7a2f5208cd0e9a66b4ea486930d';
  private baseUrl = 'https://api.github.com'

  constructor(public http: Http) {
    console.log('Githubservice is ready baby!');
  }

  /**
   * Retrieve a user from github with the same name match
   * @param {string} username 
   * @returns json (observable) containing a user's details
   * 
   * @memberOf Githubservice
   */
  getUser(username: string) {
    return this.http.get(`${this.baseUrl}/users/${username}?client_id=${this.clientId}&client_secret=${this.clientSecret}`)
      .map(res => res.json());
  }

  /**
   * 
   * Retrieve a user's repos from github
   * @param {string} username 
   * @returns json (observable) containing a user's repos
   * 
   * @memberOf Githubservice
   */
  getRepos(username: string) {
    return this.http.get(`${this.baseUrl}/users/${username}/repos?client_id=${this.clientId}&client_secret=${this.clientSecret}`)
      .map(res => res.json());
  }

  /**
   * 
   * Retrieve a list of  users who match the query string
   * @param {string} city 
   * @param {string} language 
   * @returns  json (observable) containing an array of users
   * 
   * @memberOf Githubservice
   */
  rankUsers(city:string, language:string){
        return this.http.get(`${this.baseUrl}/search/users?q=language:${language}+location:${city}&client_id=${this.clientId}&client_secret=${this.clientSecret}`)
            .map(res => res.json());
    }

}
