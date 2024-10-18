import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, computed, inject, input } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import { BrnInputOtpSlotComponent } from '@spartan-ng/ui-input-otp-brain';
import { BrnInputOtpService } from '@spartan-ng/ui-input-otp-brain';
import { cva } from 'class-variance-authority';
import { ClassValue } from 'clsx';
import { HlmFakeCaretComponent } from './hlm-fake-caret.component';

export const inputOtpVariants = cva(
	'relative flex h-10 w-10 items-center justify-center border-y border-r text-sm transition-all first:border-l first:rounded-l-md last:rounded-r-md',
	{
		variants: {
			error: {
				true: 'text-destructive ring-destructive border-destructive focus-visible:ring-destructive ring-2:focus-visible',
			},
			activeError: {
				true: 'ring-2 ring-offset-background z-10',
			},
			active: {
				true: 'ring-2 ring-ring ring-offset-background z-10',
			},
		}
	},
);
@Component({
	selector: 'hlm-input-otp-slot',
	standalone: true,
	imports: [HlmFakeCaretComponent, CommonModule, BrnInputOtpSlotComponent],
	host: {
		'[class]': '_computedClass()',
	},
	template: `
  <brn-input-otp-slot [index]="index">
    <hlm-fake-caret  *ngIf="isActive() && !isComplete()"/>
  </brn-input-otp-slot>
`,
})
export class HlmInputOtpSlotComponent {
	private readonly _brnInputOtpService = inject(BrnInputOtpService);
	public readonly userClass = input<ClassValue>('', { alias: 'class' });

	@Input() index = 0;
	@Output() slotClicked = new EventEmitter<void>();

	isActive = computed(() => this.index === this._brnInputOtpService.activeSlot);
	isComplete = computed(() => this._brnInputOtpService.otp.length === this._brnInputOtpService.length);
	char = computed(() => this._brnInputOtpService.otp.length > this.index ? this._brnInputOtpService.otp[this.index] : '');
	showError = computed(() => this._brnInputOtpService.isTouched && !this._brnInputOtpService.isValid);

	_computedClass = computed(() => hlm(inputOtpVariants(
		{
			active: this.isActive() && !this.showError(),
			activeError: this.isActive() && this.showError(),
			error: this.showError()
		}), this.userClass()));
}
