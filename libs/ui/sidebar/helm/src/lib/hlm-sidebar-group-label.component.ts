import { Component, computed, input } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import { ClassValue } from 'clsx';
import { BrnSidebarGroupLabelDirective } from 'libs/brain/sidebar/src/lib/brn-sidebar-group-label.directive';

@Component({
	selector: 'hlm-sidebar-group-label',
	standalone: true,
	hostDirectives: [BrnSidebarGroupLabelDirective],
	host: {
		'[class]': '_computedClass()',
	},
	template: `
		<ng-content />
	`,
})
export class HlmSidebarGroupLabelComponent {
	public readonly userClass = input<ClassValue>('', { alias: 'class' });

	protected readonly _computedClass = computed(() => hlm('text-sm font-semibold', this.userClass()));
}
