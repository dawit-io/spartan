import { Injectable, signal } from '@angular/core';
import { computed } from '@angular/core';

@Injectable()
export class BrnSidebarService {
  private readonly state = signal<{
    id: string;
    isExpanded: boolean;
    isCollapsible: boolean;
    isMobile: boolean;
    isOverlay: boolean;
  }>({
    id: '',
    isExpanded: true,
    isCollapsible: true,
    isMobile: false,
    isOverlay: false
  });

  public readonly id = computed(() => this.state().id);
  public readonly isExpanded = computed(() => this.state().isExpanded);
  public readonly isCollapsible = computed(() => this.state().isCollapsible);
  public readonly isMobile = computed(() => this.state().isMobile);
  public readonly isOverlay = computed(() => this.state().isOverlay);

  public toggle(): void {
    if (!this.state().isCollapsible) return;

    this.state.update((state) => ({
      ...state,
      isExpanded: !state.isExpanded,
    }));
  }

  public setId(id: string): void {
    this.state.update((state) => ({
      ...state,
      id,
    }));
  }

  public setCollapsible(isCollapsible: boolean): void {
    this.state.update((state) => ({
      ...state,
      isCollapsible,
    }));
  }

  public setMobileState(isMobile: boolean): void {
    this.state.update((state) => ({
      ...state,
      isMobile,
    }));
  }

  public setOverlayMode(isOverlay: boolean): void {
    this.state.update((state) => ({
      ...state,
      isOverlay,
    }));
  }
}
