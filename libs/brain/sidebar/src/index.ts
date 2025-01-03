import { NgModule } from '@angular/core';
import { BrnSidebarGroupLabelDirective } from './lib/brn-sidebar-group-label.directive';
import { BrnSidebarGroupDirective } from './lib/brn-sidebar-group.directive';
import { BrnSidebarTriggerDirective } from './lib/brn-sidebar-trigger.directive';
import { BrnSidebarComponent } from './lib/brn-sidebar.component';

export * from './lib/brn-sidebar-group-label.directive';
export * from './lib/brn-sidebar-group.directive';
export * from './lib/brn-sidebar-trigger.directive';
export * from './lib/brn-sidebar.component';
export * from './lib/brn-sidebar.service';

export const BrnSidebarImports = [
	BrnSidebarComponent,
	BrnSidebarTriggerDirective,
	BrnSidebarGroupDirective,
	BrnSidebarGroupLabelDirective,
] as const;

@NgModule({
	imports: [...BrnSidebarImports],
	exports: [...BrnSidebarImports],
})
export class BrnSidebarModule {}
