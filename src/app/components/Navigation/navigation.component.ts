import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
  selector: 'navbar',
  templateUrl: `navigation.component.html`,
})
export class NavbarComponent{
	private projectName:string;

	constructor(){
		this.projectName = 'Angular 2 Website';
	}
}