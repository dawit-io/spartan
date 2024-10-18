import { NgModule } from '@angular/core';
import { HlmDotComponent } from './lib/hlm-dot.component';
import { HlmFakeCaretComponent } from './lib/hlm-fake-caret.component';
import { HlmInputOtpGroupComponent } from './lib/hlm-input-otp-group.component';
import { HlmInputOtpSlotComponent } from './lib/hlm-input-otp-slot.component';
import { HlmInputOtpComponent } from './lib/hlm-input-otp.component';

export * from './lib/hlm-dot.component';
export * from './lib/hlm-fake-caret.component';
export * from './lib/hlm-input-otp-group.component';
export * from './lib/hlm-input-otp-group.component';
export * from './lib/hlm-input-otp-slot.component';
export * from './lib/hlm-input-otp.component';

export const HlmInputOtpImports = [HlmDotComponent, HlmFakeCaretComponent, HlmInputOtpGroupComponent, HlmInputOtpSlotComponent, HlmInputOtpComponent] as const;

@NgModule({
	imports: [...HlmInputOtpImports],
	exports: [...HlmInputOtpImports],
})
export class HlmOtpInputModule {}
