import { Injectable, computed, signal } from '@angular/core';
import { NgControl, ValidationErrors } from '@angular/forms';

@Injectable()
export class BrnInputOtpService {
	private _length = signal(0);
	set length(value: number) {
		this._length.set(value);
	}
	get length() {
		return this._length();
	}

	private _otp = signal('');
	set otp(value: string) {
		this._otp.set(value);
	}
	get otp() {
		return this._otp();
	}

	private _activeSlot = signal<number | null>(null);
	set activeSlot(value: number | null) {
		this._activeSlot.set(value);
	}
	get activeSlot() {
		return this._activeSlot();
	}

	private _disabled = signal(false);
	set disabled(value: boolean) {
		this._disabled.set(value);
	}
	get disabled() {
		return this._disabled();
	}

	_pattern = signal<string>('^[0-9]$');
	set pattern(value: string) {
		this._pattern.set(value);
	}
	get pattern() {
		return this._pattern();
	}

	_ngControl = signal<NgControl | null>(null);
	set ngControl(value: NgControl | null) {
		this._ngControl.set(value);
	}
	get ngControl() {
		return this._ngControl();
	}

	_isTouched = signal<boolean | null>(false);
	set isTouched(value: boolean | null) {
		this._isTouched.set(value);
	}
	get isTouched() {
		return this._isTouched();
	}

	_isDirty = signal<boolean | null>(false);
	set isDirty(value: boolean | null) {
		this._isDirty.set(value);
	}
	get isDirty() {
		return this._isDirty();
	}

	_errors = signal<ValidationErrors | null>(null);
	set errors(value: ValidationErrors | null) {
		this._errors.set(value);
	}
	get errors() {
		return this._errors();
	}

	_valid = signal<boolean | null>(false);
	set isValid(value: boolean | null) {
		this._valid.set(value);
	}
	get isValid() {
		return this._valid();
	}

	isComplete = computed(() => this._otp().length === this.length);

	public hasFocus() {
		this.activeSlot = this.otp.length < this.length ? this.otp.length : this.length - 1;
	}

	public keydownEvent(event: KeyboardEvent) {
		if (this.disabled) return;
		const isAlowedKey = this.isAlowedKey(event.key);
		if (isAlowedKey && this.otp.length < this.length) {
			const isLast = this.activeSlot === this.length - 1;
			this.otp += event.key;
			this.activeSlot = isLast ? this.activeSlot : this.otp.length;
		} else if (isAlowedKey && this.otp.length === this.length && this.otp.length > 0) {
			this.otp = this.otp.slice(0, this.otp.length - 1) + event.key;
		} else if (event.key === 'Backspace' && this.otp.length > 0) {
			this.otp = this.otp.slice(0, this.otp.length - 1);
			this.activeSlot = this.otp.length;
		}
	}

	onBlur() {
		this.activeSlot = null;
	}

	private isAlowedKey(key: string): boolean {
		const reg = new RegExp(this.pattern);
		return key.length === 1 && reg.test(key);
	}
}
