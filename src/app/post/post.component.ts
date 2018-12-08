import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: any[];
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http) {
    }
    ngOnInit() {
      this.http.get(this.url)
    .subscribe(Response => {
      this.posts = Response.json();
       // console.log(Response.json());
    });
   }

   createPost(input: HTMLInputElement) {
     // const post: any = {title: input.value};
     const post = {title: input.value};
     input.value = '';
      this.http.post(this.url, JSON.stringify(post))
      .subscribe(Response => {
        post['id'] = Response.json().id;
        this.posts.splice(0, 0, post);
        // console.log(Response.json());
      });
   }

   updatePost(post) {
      this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true}))
      .subscribe(Response => {
        console.log(Response.json());
      });
      // this.http.put(this.url, JSON.stringify(post))
   }

   deletePost(post) {
     this.http.delete(this.url + '/' + post.id)
     .subscribe(Response => {
       const index = this.posts.indexOf(post);
       this.posts.splice(index, 1);
     });
   }

}
