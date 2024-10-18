import { Component, EventEmitter, Input, Output, ViewChild, signal } from '@angular/core';
import { BrnInputOtpComponent } from '@spartan-ng/ui-input-otp-brain';
import { HlmInputOtpGroupComponent } from './hlm-input-otp-group.component';
import { HlmInputOtpSlotComponent } from './hlm-input-otp-slot.component';
@Component({
	selector: 'hlm-input-otp',
	standalone: true,
	imports: [HlmInputOtpGroupComponent, HlmInputOtpSlotComponent, BrnInputOtpComponent],
	template: `
  <brn-input-otp [length]="length" (onComplete)="otpChange" (onchange)="otpChange" [autofill]="true">
    <ng-content></ng-content>
  </brn-input-otp>`,
})
export class HlmInputOtpComponent {
	private readonly _length = signal(0);
	@ViewChild(BrnInputOtpComponent) brnInputOtpComponent!: BrnInputOtpComponent;
	@Output() otpChange = new EventEmitter<string>();
	@Output() onComplete = new EventEmitter<string>();
	@Input()
	set length(value: number) {
		this._length.set(value);
	}
	get length() {
		return this._length();
	}
}
