import { Component, computed, input } from '@angular/core';
import { BrnSidebarComponent } from '@spartan-ng/brain/sidebar';
import { hlm } from '@spartan-ng/ui-core';
import { ClassValue } from 'clsx';

@Component({
	selector: 'hlm-sidebar',
	standalone: true,
	host: {
		'[class]': '_computedClass()',
		'[attr.data-state]': '_sidebarService.isExpanded() ? "expanded" : "collapsed"',
	},
	template: `
		<ng-content />
	`,
})
export class HlmSidebarComponent extends BrnSidebarComponent {
	public readonly userClass = input<ClassValue>('', { alias: 'class' });

	protected readonly _computedClass = computed(() =>
		hlm(
			'flex flex-col flex-none border-r bg-background transition-[width] duration-300 ease-in-out',
			'data-[state=expanded]:w-56 data-[state=collapsed]:w-[52px]',
			'data-[state=collapsed]:px-2',
			'[&_span]:data-[state=collapsed]:hidden [&_span]:data-[state=expanded]:inline',
			'[&_hlm-icon]:data-[state=collapsed]:mx-auto',
			this.userClass(),
		),
	);
}
