import { Directive, signal } from '@angular/core';
import { BrnSidebarService } from './brn-sidebar.service';

@Directive({
	selector: '[brnSidebarGroup]',
	standalone: true,
	host: {
		role: 'group',
		'[attr.aria-labelledby]': 'labelId()',
		'[attr.data-expanded]': '_sidebarService.isExpanded()',
	},
})
export class BrnSidebarGroupDirective {
	constructor(protected readonly _sidebarService: BrnSidebarService) {}
	public readonly labelId = signal('');
}
