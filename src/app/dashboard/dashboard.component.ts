import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }



}


// var sidebar = document.querySelector(".sidebar");
// var sidebarToggle = document.querySelector(".sidebar-toggle");

// var toggleSidebar = function() {
//   if (sidebar.className === "sidebar open") {
//     sidebar.className = "sidebar";
//   }
//   else {
//     sidebar.className = "sidebar open";
//   }
// }