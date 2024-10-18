import { Component, computed, input } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import { ClassValue } from 'clsx';

@Component({
	selector: 'hlm-dot',
	standalone: true,
	imports: [],
	template: `
    <div [class]="_computedClass()"></div>
  `,
})
export class HlmDotComponent {
	public readonly userClass = input<ClassValue>('', { alias: 'class' });
	protected _computedClass = computed(() => hlm('h-1 w-1 bg-foreground rounded-full', this.userClass()));
}
