import {
	Component,
	ElementRef,
	Input,
	OnInit,
	ViewChild,
	computed,
	effect,
	inject,
	output,
	signal,
} from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { BrnInputOtpService } from './brn-input-otp.service';

@Component({
	selector: 'brn-input-otp',
	standalone: true,
	host: {
		'[style]': '_computedStyles()',
		tabindex: '0',
		'(keydown)': 'keydownEvent($event)',
		'(focus)': 'hasFocus()',
	},
	providers: [BrnInputOtpService],
	template: `
	<input #focusElement [style]="_computedInputStyles()" (blur)="onBlur()"/>
	<ng-content></ng-content>
	`,
})
export class BrnInputOtpComponent implements ControlValueAccessor, OnInit {
	private readonly _brnInputOtpService = inject(BrnInputOtpService);
	private readonly ngControl = inject(NgControl, { optional: true, self: true });

	@ViewChild('focusElement') focusElement!: ElementRef<HTMLInputElement>;

	private readonly _length = signal(0);
	private readonly _autofill = signal(false);

	private onChange: (value: string) => void = () => {};
	private onTouched: () => void = () => {};

	otpChange = output<string>();
	onComplete = output<string>();

	@Input()
	set pattern(value: string) {
		this._brnInputOtpService.pattern = value;
	}

	get pattern() {
		return this._brnInputOtpService.pattern;
	}

	@Input()
	set length(value: number) {
		this._length.set(value);
		this._brnInputOtpService.length = value;
	}

	get length() {
		return this._length();
	}

	@Input()
	set autofill(value: boolean) {
		this._autofill.set(value);
	}

	get autofill() {
		return this._autofill();
	}

	constructor() {
		if (this.ngControl) {
			this.ngControl.valueAccessor = this;
		}
		effect(() => {
			this.otpChange.emit(this._brnInputOtpService.otp);
			if (this._brnInputOtpService.isComplete()) {
				this.onComplete.emit(this._brnInputOtpService.otp);
			}
		});
	}

	ngOnInit(): void {
		if (this.ngControl) {
			this._brnInputOtpService.ngControl = this.ngControl;
			const self = this;
			this.ngControl.statusChanges?.subscribe(() => {
				this.updateErrorState();
			});

			if (this.ngControl.control instanceof FormControl) {
				this.ngControl.control.markAsTouched = function (opts?: { onlySelf?: boolean }) {
					FormControl.prototype.markAsTouched.call(this, opts);
					self.updateErrorState();
				};
				this.ngControl.control.markAllAsTouched = function () {
					FormControl.prototype.markAllAsTouched.call(this);
					self.updateErrorState();
				};
			}
		}
	}

	updateErrorState() {
		if (this.ngControl) {
			this._brnInputOtpService.isTouched = this.ngControl.touched;
			this._brnInputOtpService.isDirty = this.ngControl.dirty;
			this._brnInputOtpService.errors = this.ngControl.errors;
			this._brnInputOtpService.isValid = this.ngControl.valid;
		}
	}

	keydownEvent(event: KeyboardEvent) {
		this._brnInputOtpService.keydownEvent(event);
		this.onChange(this._brnInputOtpService.otp);
	}

	hasFocus() {
		this.focusElement?.nativeElement?.focus();
		this._brnInputOtpService.hasFocus();
	}

	onBlur() {
		this._brnInputOtpService.onBlur();
		this.onTouched();
	}

	_computedStyles = computed(() => {
		return {
			display: 'flex',
			border: 'none',
			ring: '0',
			outline: 'none',
			'align-items': 'center',
			gap: '0.5rem',
		};
	});

	_computedInputStyles = computed(() => {
		return {
			opacity: '0',
			position: 'absolute',
			width: '0',
			height: '0',
		};
	});

	writeValue(value: string): void {
		this._brnInputOtpService.otp = value || '';
	}

	registerOnChange(fn: (value: string) => void): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => void): void {
		this.onTouched = fn;
	}

	setDisabledState(isDisabled: boolean): void {
		this._brnInputOtpService.disabled = isDisabled;
	}
}
