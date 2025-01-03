import { computed, Injectable, signal } from '@angular/core';

@Injectable()
export class BrnSidebarService {
	private readonly state = signal<{
		id: string;
		isExpanded: boolean;
		isCollapsible: boolean;
	}>({
		id: '',
		isExpanded: true,
		isCollapsible: true,
	});

	public readonly id = computed(() => this.state().id);
	public readonly isExpanded = computed(() => this.state().isExpanded);
	public readonly isCollapsible = computed(() => this.state().isCollapsible);

	public toggle(): void {
		console.log('this.state().isCollapsible', this.state().isCollapsible);
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
		console.log('isCollapsible', isCollapsible);
		this.state.update((state) => ({
			...state,
			isCollapsible,
		}));
	}
}
