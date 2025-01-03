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
		'[class.brn-sidebar-desktop]': '!_sidebarService.isMobile()',
		'[class.brn-sidebar-overlay]': '_sidebarService.isMobile() && isExpanded()',
	},
})
export class BrnSidebarComponent {
	constructor(protected readonly _sidebarService: BrnSidebarService) {
		this._sidebarService.setId(`brn-sidebar-${nextId++}`);
	}

	public readonly isCollapsible = input<boolean>(true);
	public readonly isOverlay = input<boolean>(false);

	public readonly isExpanded = computed(() => this._sidebarService.isExpanded());

	protected readonly _computedCollapsible = computed(() => {
		this._sidebarService.setCollapsible(this.isCollapsible());
		return this.isCollapsible();
	});

	protected readonly _computedOverlay = computed(() => {
		this._sidebarService.setOverlayMode(this.isOverlay());
		return this.isOverlay();
	});
}
