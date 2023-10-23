
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service';
import { Observable } from 'rxjs';

type ResolveFn<T> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => Observable<T>;

@Injectable()
export class PostsResolver {
  constructor(private postsService: PostsService) {}

  resolve: ResolveFn<Post[]> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]> => {
    return this.postsService.getPosts();
  }
}