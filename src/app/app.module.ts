import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostService } from './services/post.service';
import { GithubFollowersComponent } from './github-followers/github-followers.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    GithubFollowersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
