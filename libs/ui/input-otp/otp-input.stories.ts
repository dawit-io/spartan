import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { HlmDotComponent } from './helm/src';
import { HlmFakeCaretComponent } from './helm/src';
import { HlmInputOtpGroupComponent } from './helm/src';
import { HlmInputOtpSlotComponent } from './helm/src';
import { HlmInputOtpComponent } from './helm/src';
import { BrnInputOtpSlotComponent, completeOtpValidator } from './brain/src';
import { BrnInputOtpComponent } from './brain/src';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HlmButtonDirective } from '../button/helm/src';
import { HlmFormFieldModule } from '../form-field/helm/src';

@Component({
	selector: 'otp-input-component-tester',
	template: `
	<div class="w-full flex justify-center">
		<form [formGroup]="otpForm" (ngSubmit)="onSubmit()">
				<brn-input-otp [length]="this.otpLength()" name="otp"
						(onComplete)="onOtpComplete($event)"
						(otpChange)="onOtpChange($event)"
						formControlName="otp">
						<hlm-input-otp-group>
							<hlm-input-otp-slot [index]="0"/>
							<hlm-input-otp-slot [index]="1"/>
							<hlm-input-otp-slot [index]="2"/>
						</hlm-input-otp-group>
						<hlm-dot/>
						<hlm-input-otp-group>
							<hlm-input-otp-slot [index]="3"/>
							<hlm-input-otp-slot [index]="4"/>
						</hlm-input-otp-group>
						<hlm-dot />
						<hlm-input-otp-group>
							<hlm-input-otp-slot [index]="5"/>
							<hlm-input-otp-slot [index]="6"/>
							<hlm-input-otp-slot [index]="7"/>
						</hlm-input-otp-group>
				</brn-input-otp>
			<button type="submit" hlmBtn class="mt-5">Submit</button>
		</form>
	</div>
	`,
})
class InputOtpComponentTester {
	otpLength = signal(8);
	otpForm = inject(FormBuilder).group({
		otp: new FormControl('', [Validators.required, completeOtpValidator(this.otpLength())]),
	});

	onOtpComplete(value: string) {}
	onOtpChange(value: string) {}
	onSubmit() {
		this.otpForm.markAllAsTouched();
	}
}
const meta: Meta<BrnInputOtpComponent> = {
	title: 'Input Otp',
	component: BrnInputOtpComponent,
	tags: ['autodocs'],
	decorators: [
		moduleMetadata({
			imports: [
				FormsModule,
				HlmDotComponent,
				HlmFakeCaretComponent,
				HlmInputOtpGroupComponent,
				HlmInputOtpSlotComponent,
				HlmInputOtpComponent,
				BrnInputOtpSlotComponent,
				BrnInputOtpComponent,
				HlmButtonDirective,
				ReactiveFormsModule,
				HlmFormFieldModule,
			],
			declarations: [InputOtpComponentTester],
		}),
	],
};

export default meta;
type Story = StoryObj<BrnInputOtpComponent>;

export const Default: Story = {
	render: () => ({
		props: {
			otpValue: '',
			onOtpComplete: (value: string) => {},
			onOtpChange: (value: string) => {},
		},
		template: `
			<div class="w-full flex justify-center">
				<brn-input-otp [length]="8" [(ngModel)]="otpValue" name="otp"
					(onComplete)="onOtpComplete($event)"
					(otpChange)="onOtpChange($event)">
					<hlm-input-otp-group>
						<hlm-input-otp-slot [index]="0"/>
						<hlm-input-otp-slot [index]="1"/>
						<hlm-input-otp-slot [index]="2"/>
					</hlm-input-otp-group>
					<hlm-dot/>
					<hlm-input-otp-group>
						<hlm-input-otp-slot [index]="3"/>
						<hlm-input-otp-slot [index]="4"/>
					</hlm-input-otp-group>
					<hlm-dot />
					<hlm-input-otp-group>
						<hlm-input-otp-slot [index]="5"/>
						<hlm-input-otp-slot [index]="6"/>
						<hlm-input-otp-slot [index]="7"/>
					</hlm-input-otp-group>
				</brn-input-otp>
		</div>
		`,
	}),
};

export const Pattern: Story = {
	render: () => ({
		props: {
			otpValue: '',
			pattern: /^[0-9A-Za-z]$/g,
		},
		template: `
			<div class="w-full flex justify-center mb-2 text-xl">
			Pattern: 0-9A-Za-z
			</div>
			<div class="w-full flex justify-center">
				<brn-input-otp [length]="8"
					[pattern]="pattern" name="otp">
					<hlm-input-otp-group>
						<hlm-input-otp-slot [index]="0"/>
						<hlm-input-otp-slot [index]="1"/>
						<hlm-input-otp-slot [index]="2"/>
						<hlm-input-otp-slot [index]="3"/>
						<hlm-input-otp-slot [index]="4"/>
						<hlm-input-otp-slot [index]="5"/>
						<hlm-input-otp-slot [index]="6"/>
						<hlm-input-otp-slot [index]="7"/>
					</hlm-input-otp-group>
				</brn-input-otp>
		</div>
		`,
	}),
};

export const Separator: Story = {
	render: () => ({
		props: {
			otpValue: '',
			pattern: /^[0-9A-Za-z]$/g,
		},
		template: `
			<div class="w-full flex justify-center">
				<brn-input-otp [length]="6"
					[pattern]="pattern" name="otp">
					<hlm-input-otp-group>
						<hlm-input-otp-slot [index]="0"/>
						<hlm-input-otp-slot [index]="1"/>
					</hlm-input-otp-group>
					<hlm-dot/>
					<hlm-input-otp-group>
						<hlm-input-otp-slot [index]="2"/>
						<hlm-input-otp-slot [index]="3"/>
					</hlm-input-otp-group>
					<hlm-dot />
					<hlm-input-otp-group>
						<hlm-input-otp-slot [index]="4"/>
						<hlm-input-otp-slot [index]="5"/>
					</hlm-input-otp-group>
				</brn-input-otp>
		</div>
		`,
	}),
};
export const ReactiveFormControl: Story = {
	render: () => ({
		props: {
			otpValue: '',
			pattern: /^[0-9A-Za-z]$/g,
		},
		template: `
			<otp-input-component-tester />
		`,
	}),
};
