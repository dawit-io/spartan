import { NgModule } from '@angular/core';
import { BrnInputOtpSlotComponent } from './lib/brn-input-otp-slot.component';
import { BrnInputOtpComponent } from './lib/brn-input-otp.component';

export * from './lib/brn-input-otp-slot.component';
export * from './lib/brn-input-otp.component';
export * from './lib/brn-input-otp.service';
export * from './lib/brn-input-otp.validator';

export const BrnInputOtpImports = [BrnInputOtpSlotComponent, BrnInputOtpComponent] as const;

@NgModule({
	imports: [...BrnInputOtpImports],
	exports: [...BrnInputOtpImports],
})
export class BrnInputOtpModule {}
