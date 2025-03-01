import { Component, computed, inject, input, output } from '@angular/core';
import { BrnSidebarService } from '@spartan-ng/brain/sidebar';
import { hlm } from '@spartan-ng/brain/core';
import { ClassValue } from 'clsx';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hlm-sidebar-footer',
  standalone: true,
  imports: [HlmButtonDirective, CommonModule],
  host: {
    '[class]': '_computedClass()',
  },
  template: `
    <button
      hlmBtn
      variant="ghost"
      [ngClass]="{'px-3': _sidebarService.isExpanded(), 'px-2': !_sidebarService.isExpanded()}"
      class="group relative h-12 w-full border-t border-border"
      (click)="clicked.emit()">
      <div
        class="flex items-center w-full"
        [class.justify-start]="_sidebarService.isExpanded()"
        [class.justify-center]="!_sidebarService.isExpanded()">
        <div class="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-muted text-muted-foreground transition-transform duration-200 ease-in-out group-hover:scale-110">
          <ng-content select="ng-icon" />
        </div>

        @if(_sidebarService.isExpanded()) {
          <div class="ml-3 flex flex-col min-w-0">
            <span class="text-sm font-medium text-foreground truncate">{{ title() }}</span>
            <span class="text-xs text-muted-foreground truncate">{{ subtitle() }}</span>
          </div>
        }
        @else {
          <div class="invisible absolute left-full bottom-full z-50 mb-2 ml-2 rounded-md bg-popover text-popover-foreground px-2 py-1 text-xs opacity-0 transition-opacity group-hover:visible group-hover:opacity-100">
            {{ title() }}
          </div>
        }
      </div>
    </button>
  `,
})
export class HlmSidebarFooterComponent {
  protected readonly _sidebarService = inject(BrnSidebarService);

  public readonly clicked = output<void>();
  public readonly userClass = input<ClassValue>('', { alias: 'class' });
  public readonly title = input.required<string>();
  public readonly subtitle = input.required<string>();

  protected readonly _computedClass = computed(() =>
    hlm(
      'block mt-auto',
      this.userClass()
    )
  );
}
