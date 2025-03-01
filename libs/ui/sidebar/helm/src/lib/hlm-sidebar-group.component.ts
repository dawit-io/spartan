import { Component, computed, input } from '@angular/core';
import { ClassValue } from 'clsx';
import { BrnSidebarGroupDirective } from '@spartan-ng/brain/sidebar';
import { hlm } from '@spartan-ng/brain/core';

@Component({
  selector: 'hlm-sidebar-group',
  standalone: true,
  hostDirectives: [BrnSidebarGroupDirective],
  host: {
    '[class]': '_computedClass()',
  },
  template: `
    <ng-content />
  `,
})
export class HlmSidebarGroupComponent {
  public readonly userClass = input<ClassValue>('', { alias: 'class' });

  protected readonly _computedClass = computed(() =>
    hlm('flex flex-col gap-1', this.userClass())
  );
}
