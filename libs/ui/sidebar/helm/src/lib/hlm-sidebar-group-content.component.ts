import { Component, computed, input } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import { ClassValue } from 'clsx';
import { BrnSidebarService } from 'libs/brain/sidebar/src/lib/brn-sidebar.service';

@Component({
	selector: 'hlm-sidebar-group-content',
	standalone: true,
	host: {
		'[class]': '_computedClass()',
		'[attr.data-state]': '_sidebarService.isExpanded() ? "expanded" : "collapsed"',
	},
	template: `
		<div class="relative pl-6">
			<div class="bg-border absolute bottom-0 left-0 top-0 ml-2.5 w-px"></div>
			<ng-content />
		</div>
	`,
})
export class HlmSidebarGroupContentComponent {
	constructor(protected readonly _sidebarService: BrnSidebarService) {}

	public readonly userClass = input<ClassValue>('', { alias: 'class' });

	protected readonly _computedClass = computed(() => hlm('data-[state=collapsed]:hidden', this.userClass()));
}
