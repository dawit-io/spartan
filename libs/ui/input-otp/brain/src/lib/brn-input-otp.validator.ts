import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const completeOtpValidator =
	(length: number): ValidatorFn =>
	(control: AbstractControl): ValidationErrors => {
		const value = control.value;
		if (value.length !== length) {
			return { incompleteOtp: true };
		}
		return {};
	};
