import { Component, computed, input } from '@angular/core';
import { BrnSidebarService } from '@spartan-ng/brain/sidebar';
import { hlm } from '@spartan-ng/ui-core';
import { ClassValue } from 'clsx';

@Component({
	selector: 'hlm-sidebar-item',
	standalone: true,
	host: {
		'[class]': '_computedClass()',
	},
	template: `
		<button hlmBtn variant="ghost" class="h-9 w-full">
			<div class="flex items-center" [class.justify-center]="!_sidebarService.isExpanded()">
				<ng-content select="hlm-icon" />
				<span class="ml-2 overflow-hidden truncate"><ng-content /></span>
			</div>
		</button>
	`,
})
export class HlmSidebarItemComponent {
	constructor(protected readonly _sidebarService: BrnSidebarService) {}

	public readonly userClass = input<ClassValue>('', { alias: 'class' });

	protected readonly _computedClass = computed(() => hlm('block', this.userClass()));
}
