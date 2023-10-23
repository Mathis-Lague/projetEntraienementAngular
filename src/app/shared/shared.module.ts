import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './component/comments/comments.component'
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    CommentsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    MaterialModule,
    CommentsComponent
  ]
})
export class SharedModule { }
