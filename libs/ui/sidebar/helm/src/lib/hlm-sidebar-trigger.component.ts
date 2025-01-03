import { Component, computed, input } from '@angular/core';
import { lucidePanelLeft, lucidePanelRight } from '@ng-icons/lucide';
import { BrnSidebarService, BrnSidebarTriggerDirective } from '@spartan-ng/brain/sidebar';
import { hlm } from '@spartan-ng/ui-core';
import { HlmIconComponent, provideIcons } from '@spartan-ng/ui-icon-helm';
import { ClassValue } from 'clsx';

@Component({
	selector: 'hlm-sidebar-trigger',
	standalone: true,
	imports: [HlmIconComponent, BrnSidebarTriggerDirective],
	providers: [provideIcons({ lucidePanelLeft, lucidePanelRight })],
	host: {
		'[class]': '_computedClass()',
	},
	template: `
		<button brnSidebarTrigger class="inline-flex items-center justify-center">
			<hlm-icon [name]="_sidebarService.isExpanded() ? 'lucidePanelLeft' : 'lucidePanelRight'" class="h-4 w-4" />
		</button>
	`,
})
export class HlmSidebarTriggerComponent {
	constructor(protected readonly _sidebarService: BrnSidebarService) {}

	public readonly userClass = input<ClassValue>('', { alias: 'class' });

	protected readonly _computedClass = computed(() =>
		hlm(
			'inline-flex items-center justify-center rounded-sm hover:bg-accent hover:text-accent-foreground',
			this.userClass(),
		),
	);
}
