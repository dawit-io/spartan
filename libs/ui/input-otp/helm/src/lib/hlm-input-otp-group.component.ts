import { Component, computed, input } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import { ClassValue } from 'clsx';

@Component({
	selector: 'hlm-input-otp-group',
	standalone: true,
	template: `
	<ng-content></ng-content>
	`,
	host: {
		'[class]': '_computedClass()',
	},
})
export class HlmInputOtpGroupComponent {
	public readonly userClass = input<ClassValue>('', { alias: 'class' });
	protected _computedClass = computed(() =>
		hlm('flex items-center last:rounded-l-md first:rounded-r-md', this.userClass()),
	);
}
