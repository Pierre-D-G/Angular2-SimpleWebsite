import {Component} from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'jumbotron',
	templateUrl: 'jumbotron.component.html'
})

export class JumbotronComponent{
	private jbtHeading:string;
	private jbtText:string;
	private jbtBtnText:string;
	private jbtBtnUrl:string;

	constructor(){
		this.jbtHeading = 'Angular 2';
		this.jbtText = 'Maecenas diam sapien, feugiat nec ante eu, imperdiet mattis nisl. Suspendisse fringilla condimentum augue eget dictum. Sed vel laoreet tortor.';
		this.jbtBtnText = 'Read More';
		this.jbtBtnUrl = 'http://google.com';
	}
}