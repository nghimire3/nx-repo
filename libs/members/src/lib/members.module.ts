
import { NgModule } from '@angular/core';
import { MembersComponent } from './members/members.component';
import { MemberRoutingModule } from './members-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MembersComponent],
  imports: [
    MemberRoutingModule,
    CommonModule
  ],
  exports: [MembersComponent]
})
export class MembersModule { }
