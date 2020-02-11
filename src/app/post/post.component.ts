import { AppErrorHandler } from './../common/app-error-handler';
import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app.error';

import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
posts : any[];

  constructor(private service : PostService) { 
  }


  ngOnInit() {
    this.service.getPosts().subscribe(response => {
      this.posts =response.json();
    },error=> {
      alert('a unexpected error occured');
      console.log(error);
    })    
  }

  createPost(input:HTMLInputElement) {
    let post = {title : input.value}
    input.value ='';

    this.service.createPost(post)
      .subscribe(response => {
        post['id'] =response.json().id;
        this.posts.splice(0,0,post);
        //console.log(response.json());
      },(error : Response)=> {
        if( error instanceof BadInput)
          //this.form.setError(error.originalError)
        alert('a unexpected error occured');
        console.log(error);
      })
  } 
  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(response => {
        console.log(response.json())
      });
  }

  deletePost(post) {
    this.service.deletePost(342)
      .subscribe(
        response => {
        let index =this.posts.indexOf(post);
        this.posts.splice(index,1);
      },(error: AppError)=> {
          if(error instanceof NotFoundError)
            alert('this post is already been deleted');
          else throw error; 
      });
    }
}
