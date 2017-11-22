import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'pip-drilldown-list',
	template: '<ng-content></ng-content>',
	styleUrls: ['./drilldown-list.component.scss']
})
export class PipDrilldownListComponent implements OnInit {

	ngOnInit() { }
}