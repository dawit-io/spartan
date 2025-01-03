import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
	selector: '[brnSidebarNavItem]',
	standalone: true,
})
export class BrnSidebarNavItemDirective {
	@Input() icon?: string;

	@HostBinding('class') class = 'brn-sidebar-nav-item';
	@HostBinding('class.active') @Input() isActive: boolean | undefined;
	@HostBinding('attr.aria-current') get ariaCurrentValue() {
		return this.isActive ? 'page' : undefined;
	}
}
