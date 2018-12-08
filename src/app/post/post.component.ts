import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: any[];
  constructor(private service: PostService) {
    }
    ngOnInit() {
      this.service.getPosts()
    .subscribe(Response => {
      this.posts = Response.json();
       // console.log(Response.json());
    });
   }

   createPost(input: HTMLInputElement) {
     // const post: any = {title: input.value};
     const post = {title: input.value};
     input.value = '';
      this.service.createPostServ(post)
      .subscribe(Response => {
        post['id'] = Response.json().id;
        this.posts.splice(0, 0, post);
        // console.log(Response.json());
      });
   }

   updatePost(post) {
      this.service.updatePostServ(post)
      .subscribe(Response => {
        console.log(Response.json());
      });
      // this.http.put(this.url, JSON.stringify(post))
   }

   deletePost(post) {
     this.service.deletePostServ(post)
     .subscribe(Response => {
       const index = this.posts.indexOf(post);
       this.posts.splice(index, 1);
     });
   }

}
