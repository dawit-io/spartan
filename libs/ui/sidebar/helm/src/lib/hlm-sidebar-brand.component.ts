import { Component, computed, input } from '@angular/core';
import { BrnSidebarService } from '@spartan-ng/brain/sidebar';
import { hlm } from '@spartan-ng/ui-core';
import { ClassValue } from 'clsx';

@Component({
	selector: 'hlm-sidebar-brand',
	standalone: true,
	host: {
		'[class]': '_computedClass()',
	},
	template: `
		<div class="flex w-full items-center" [class.justify-center]="!_sidebarService.isExpanded()">
			<div class="flex items-center" [class.gap-2]="_sidebarService.isExpanded()">
				<div class="bg-primary text-primary-foreground flex h-8 w-8 items-center justify-center rounded-md">
					<ng-content select="hlm-icon" />
				</div>
				<span class="truncate text-lg font-semibold"><ng-content /></span>
			</div>
		</div>
	`,
})
export class HlmSidebarBrandComponent {
	constructor(protected readonly _sidebarService: BrnSidebarService) {}

	public readonly userClass = input<ClassValue>('', { alias: 'class' });

	protected readonly _computedClass = computed(() => hlm('flex items-center min-w-0', this.userClass()));
}
