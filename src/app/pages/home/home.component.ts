import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class homeComponent implements OnInit {
  ngOnInit() {
    console.log('iniitial');
    
  }
  
}
