import { Component, computed, input } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import { ClassValue } from 'clsx';

@Component({
	selector: 'hlm-sidebar-content-header',
	standalone: true,
	host: {
		'[class]': '_computedClass()',
	},
	template: `
		<ng-content />
	`,
})
export class HlmSidebarContentHeaderComponent {
	public readonly userClass = input<ClassValue>('', { alias: 'class' });
	public readonly withBorder = input<boolean>(false);

	protected readonly _computedClass = computed(() =>
		hlm('flex items-center py-2 px-4', this.withBorder() && 'border-b', this.userClass()),
	);
}
