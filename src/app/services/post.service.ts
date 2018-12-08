import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http) { }
  getPosts() {
    return this.http.get(this.url);
  }

  createPostServ(post) {
    return this.http.post(this.url, JSON.stringify(post));
  }

  updatePostServ(post) {
   return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true}));
  }

  deletePostServ(post) {
   return this.http.delete(this.url + '/' + post.id);
  }
}
