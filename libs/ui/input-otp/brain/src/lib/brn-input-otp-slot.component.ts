import { CommonModule } from '@angular/common';
import { Component, Input, computed, inject, signal } from '@angular/core';
import { BrnInputOtpService } from './brn-input-otp.service';

@Component({
	selector: 'brn-input-otp-slot',
	standalone: true,
	imports: [CommonModule],
	host: {
		'[style]': '_computedStyles()',
	},
	template: `
  {{char()}}
  <ng-content></ng-content>`,
})
export class BrnInputOtpSlotComponent {
	private readonly _brnInputOtpService = inject(BrnInputOtpService);
	_height = signal(0);
	_width = signal(0);

	@Input()
	set height(value: number) {
		this._height.set(value);
	}
	get height() {
		return this._height();
	}
	@Input()
	set width(value: number) {
		this._width.set(value);
	}
	get width() {
		return this._width();
	}
	@Input() index = 0;
	isActive = computed(() => this.index === this._brnInputOtpService.activeSlot);
	isComplete = computed(() => this._brnInputOtpService.otp.length === this._brnInputOtpService.length);
	char = computed(() =>
		this._brnInputOtpService.otp.length > this.index ? this._brnInputOtpService.otp[this.index] : '',
	);

	_computedStyles = computed(() => {
		const height = this._height();
		const width = this._width();
		return {
			position: 'relative',
			height: height ? `${height}px` : undefined,
			width: width ? `${width}px` : undefined,
			display: 'flex',
			'justify-content': 'center',
		};
	});
}
