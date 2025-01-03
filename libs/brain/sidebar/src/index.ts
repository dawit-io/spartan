import { NgModule } from '@angular/core';
import { BrnSidebarGroupLabelDirective } from './lib/brn-sidebar-group-label.directive';
import { BrnSidebarGroupDirective } from './lib/brn-sidebar-group.directive';
import { BrnSidebarTriggerDirective } from './lib/brn-sidebar-trigger.directive';
import { BrnSidebarComponent } from './lib/brn-sidebar.component';
import { BrnSidebarNavItemDirective } from './lib/brn-sidebar-nav-item.directive';
import { BrnSidebarNavDirective } from './lib/brn-sidebar-nav.directive';

export * from './lib/brn-sidebar-group-label.directive';
export * from './lib/brn-sidebar-group.directive';
export * from './lib/brn-sidebar-trigger.directive';
export * from './lib/brn-sidebar.component';
export * from './lib/brn-sidebar.service';
export * from './lib/brn-sidebar-nav-item.directive';
export * from './lib/brn-sidebar-nav.directive';


export const BrnSidebarImports = [
	BrnSidebarComponent,
	BrnSidebarTriggerDirective,
	BrnSidebarGroupDirective,
	BrnSidebarGroupLabelDirective,
	BrnSidebarNavItemDirective,
	BrnSidebarNavDirective
] as const;

@NgModule({
	imports: [...BrnSidebarImports],
	exports: [...BrnSidebarImports],
})
export class BrnSidebarModule {}
