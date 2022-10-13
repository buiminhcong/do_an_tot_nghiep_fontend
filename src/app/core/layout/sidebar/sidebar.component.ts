import { Component, Input, OnInit } from '@angular/core';
import { ROUTER_UTILS } from '@shared/utils/router.utils';
import { SidebarConstant } from './sidebar.constant';
import {
  LOCAL_STORAGE,
  SESSION_STORAGE,
} from '@shared/constants/local-session-cookies.constants';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  role: any;

  @Input() isCollapsed = false;
  sidebar = SidebarConstant;

  ROUTER_UTILS = ROUTER_UTILS;
  constructor(
   
    private localStorage: LocalStorageService,
  
  ) {
  
  }

  ngOnInit(): void {
     this.role = this.localStorage.retrieve(LOCAL_STORAGE.ROLE);
    console.log( "role: "+ this.role);
  }
  
}


