import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { BrnSidebarService } from './brn-sidebar.service';

let nextId = 0;

@Component({
	selector: 'brn-sidebar',
	standalone: true,
	providers: [BrnSidebarService],
	template: `
		<ng-content />
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		'[class.collapsed]': '!_sidebarService.isExpanded()',
		'[id]': '_sidebarService.id()',
	},
})
export class BrnSidebarComponent {
	constructor(protected readonly _sidebarService: BrnSidebarService) {
		this._sidebarService.setId(`brn-sidebar-${nextId++}`);
	}

	public readonly isCollapsible = input<boolean>(true);

	protected readonly _computedCollapsible = computed(() => {
		this._sidebarService.setCollapsible(this.isCollapsible());
		return this.isCollapsible();
	});
}
