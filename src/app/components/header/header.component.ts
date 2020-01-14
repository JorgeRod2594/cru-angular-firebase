import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  //funcion para colapsar el menu despues de haber seleccionado algo.
  ToggleNavBar () {
      let element: HTMLElement = document.getElementsByClassName( 'navbar-toggler' )[ 0 ] as HTMLElement;
      if ( element.getAttribute( 'aria-expanded' ) == 'true' ) {
          element.click();
      }
  }
  // termina la funcion
  
  ngOnInit() {

  }

}
