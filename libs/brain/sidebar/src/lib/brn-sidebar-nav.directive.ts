import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
	selector: '[brnSidebarNav]',
	standalone: true,
})
export class BrnSidebarNavDirective {
	@HostBinding('attr.role') role = 'navigation';
	@HostBinding('tabindex') tabindex = 0;
	@HostBinding('attr.aria-label') ariaLabel = 'Sidebar Navigation';

	@HostListener('keydown', ['$event'])
	onKeyDown(event: KeyboardEvent) {
		// TODO: Implement keyboard navigation logic
	}
}
