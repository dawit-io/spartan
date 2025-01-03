import { Component, computed, input } from '@angular/core';
import { BrnSidebarComponent } from '@spartan-ng/brain/sidebar';
import { hlm } from '@spartan-ng/ui-core';
import { ClassValue } from 'clsx';

@Component({
	selector: 'hlm-sidebar',
	standalone: true,
	host: {
		'[class]': '_computedClass()',
		'[attr.data-state]': 'sidebarService.isExpanded() ? "expanded" : "collapsed"',
	},
	template: `
		<ng-content />
	`,
})
export class HlmSidebarComponent extends BrnSidebarComponent {
	public readonly userClass = input<ClassValue>('', { alias: 'class' });

	protected get sidebarService() {
		return this._sidebarService;
	}

	protected readonly _computedClass = computed(() =>
		hlm(
			'relative z-50 flex h-screen flex-col flex-none overflow-y-auto border-r border-border bg-background transition-all duration-300',
			this.sidebarService.isMobile() && this.sidebarService.isOverlay()
				? 'fixed inset-0 z-50 bg-background/80 backdrop-blur [@slideInLeft] [@slideOutLeft]'
				: '',
			this.sidebarService.isMobile() && !this.sidebarService.isOverlay() ? 'hidden' : '',
			!this.sidebarService.isMobile() && 'data-[state=expanded]:w-56 data-[state=collapsed]:w-16',
			'data-[state=collapsed]:px-2',
			'[&_span]:data-[state=collapsed]:hidden [&_span]:data-[state=expanded]:inline',
			'[&_hlm-icon]:data-[state=collapsed]:mx-auto',
			this.userClass(),
		),
	);
}
