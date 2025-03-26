import { CommonModule } from '@angular/common';
import { Component, computed, inject, input, output } from '@angular/core';
import { hlm } from '@spartan-ng/brain/core';
import { BrnSidebarService } from '@spartan-ng/brain/sidebar';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { ClassValue } from 'clsx';

@Component({
	selector: 'hlm-sidebar-item',
	standalone: true,
	imports: [HlmButtonDirective, CommonModule],
	host: {
		'[class]': '_computedClass()',
	},
	template: `
		<button
			hlmBtn
			variant="ghost"
			[ngClass]="{ 'pl-2': _sidebarService.isExpanded() }"
			class="group relative h-9 w-full"
			(click)="clicked.emit()"
		>
			<div
				class="flex w-full items-center"
				[class.justify-start]="_sidebarService.isExpanded()"
				[class.justify-center]="!_sidebarService.isExpanded()"
			>
				<div class="transition-transform duration-200 ease-in-out group-hover:scale-110">
					<ng-content select="ng-icon" />
				</div>
				@if (_sidebarService.isExpanded()) {
					<span class="text-foreground ml-2 overflow-hidden truncate">{{ label() }}</span>
				} @else if (!_sidebarService.isExpanded()) {
					<div
						class="bg-popover text-popover-foreground invisible absolute left-full top-1/2 z-50 ml-2 -translate-y-1/2 rounded-md px-2 py-1 text-xs opacity-0 transition-opacity group-hover:visible group-hover:opacity-100"
					>
						{{ label() }}
					</div>
				}
			</div>
		</button>
	`,
})
export class HlmSidebarItemComponent {
	protected readonly _sidebarService = inject(BrnSidebarService);
	protected readonly _computedClass = computed(() => hlm('block', this.userClass()));

	public readonly clicked = output<void>();
	public readonly userClass = input<ClassValue>('');
	public readonly label = input.required<string>();
}
