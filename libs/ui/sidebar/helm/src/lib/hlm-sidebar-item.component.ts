import { Component, computed, Input, input } from '@angular/core';
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
		<button hlmBtn variant="ghost" class="group relative h-9 w-full">
			<div class="flex items-center" [class.justify-center]="!_sidebarService.isExpanded()">
				<div class="transition-transform duration-200 ease-in-out group-hover:scale-110">
					<ng-content select="hlm-icon" />
				</div>
				<span class="ml-2 overflow-hidden truncate">{{ label }}</span>
			</div>
			<div
				*ngIf="!_sidebarService.isExpanded()"
				class="invisible absolute left-full top-1/2 z-10 ml-2 -translate-y-1/2 rounded-md bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:visible group-hover:opacity-100"
			>
				{{ label }}
			</div>
		</button>
	`,
})
export class HlmSidebarItemComponent {
	constructor(protected readonly _sidebarService: BrnSidebarService) {}

	public readonly userClass = input<ClassValue>('', { alias: 'class' });

	@Input()
	public label = '';

	protected readonly _computedClass = computed(() => hlm('block', this.userClass()));
}
