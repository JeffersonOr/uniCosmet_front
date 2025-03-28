

import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Chart } from 'chart.js';  // Importa Chart.js

@Component({
  selector: 'app-admin-dash',
  standalone: false,
  templateUrl: './admin-dash.component.html',
  styleUrl: './admin-dash.component.css'
})
export class AdminDashComponent{

  userCreate:boolean = false;
  userList:boolean = false;

  showUserCreate() {
    this.userCreate = true;  // Alterna la visibilidad
    this.userList = false;
  }
  showUserList() {
    this.userList = true;
    this.userCreate = false;  // Alterna la visibilidad
  }
}
