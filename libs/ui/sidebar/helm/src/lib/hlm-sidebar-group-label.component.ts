import { Component, computed, input, inject } from '@angular/core';
import { hlm } from '@spartan-ng/brain/core';
import { ClassValue } from 'clsx';
import { BrnSidebarGroupLabelDirective } from '@spartan-ng/brain/sidebar';
import { BrnSidebarGroupDirective } from '@spartan-ng/brain/sidebar';
import { BrnSidebarService } from '@spartan-ng/brain/sidebar';
import { provideIcons } from '@ng-icons/core';
import { lucideChevronDown } from '@ng-icons/lucide';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'hlm-sidebar-group-label',
	standalone: true,
	hostDirectives: [BrnSidebarGroupLabelDirective],
	imports: [HlmIconDirective],
	providers: [provideIcons({ lucideChevronDown })],
	host: {
		'[class]': '_computedClass()',
		'(click)': '_group.toggleExpansion()',
	},
	template: `
		<div class="flex w-full cursor-pointer items-center" [class.justify-center]="!_sidebarService.isExpanded()">
			<div class="transition-transform duration-200 ease-in-out hover:scale-110">
				<ng-content select="ng-icon" />
			</div>
			<span class="text-foreground ml-2 overflow-hidden truncate">{{ label() }}</span>
			@if (_sidebarService.isExpanded()) {
				<ng-icon
					hlm
					name="lucideChevronDown"
					class="text-foreground ml-auto h-4 w-4 transition-transform"
					[class.rotate-270]="!_group.isExpanded()"
				/>
			}
		</div>
	`,
})
export class HlmSidebarGroupLabelComponent {
	protected readonly _sidebarService = inject(BrnSidebarService);
	protected readonly _group = inject(BrnSidebarGroupDirective);
	public label = input('');
	public readonly userClass = input<ClassValue>('', { alias: 'class' });

	protected readonly _computedClass = computed(() =>
		hlm(
			'flex items-center w-full p-2 rounded-md text-foreground',
			'hover:bg-accent hover:text-accent-foreground',
			'transition-colors',
			this.userClass(),
		),
	);
}
