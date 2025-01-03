import { NgModule } from '@angular/core';
import { HlmSidebarBrandComponent } from './lib/hlm-sidebar-brand.component';
import { HlmSidebarContentHeaderComponent } from './lib/hlm-sidebar-content-header.component';
import { HlmSidebarGroupContentComponent } from './lib/hlm-sidebar-group-content.component';
import { HlmSidebarGroupLabelComponent } from './lib/hlm-sidebar-group-label.component';
import { HlmSidebarGroupComponent } from './lib/hlm-sidebar-group.component';
import { HlmSidebarHeaderComponent } from './lib/hlm-sidebar-header.component';
import { HlmSidebarItemComponent } from './lib/hlm-sidebar-item.component';
import { HlmSidebarNavComponent } from './lib/hlm-sidebar-nav.component';
import { HlmSidebarTriggerComponent } from './lib/hlm-sidebar-trigger.component';
import { HlmSidebarComponent } from './lib/hlm-sidebar.component';

export * from './lib/hlm-sidebar-brand.component';
export * from './lib/hlm-sidebar-content-header.component';
export * from './lib/hlm-sidebar-group-content.component';
export * from './lib/hlm-sidebar-group-label.component';
export * from './lib/hlm-sidebar-group.component';
export * from './lib/hlm-sidebar-header.component';
export * from './lib/hlm-sidebar-item.component';
export * from './lib/hlm-sidebar-nav.component';
export * from './lib/hlm-sidebar-trigger.component';
export * from './lib/hlm-sidebar.component';

export const HlmSidebarImports = [
	HlmSidebarComponent,
	HlmSidebarTriggerComponent,
	HlmSidebarHeaderComponent,
	HlmSidebarBrandComponent,
	HlmSidebarNavComponent,
	HlmSidebarItemComponent,
	HlmSidebarContentHeaderComponent,
	HlmSidebarGroupComponent,
	HlmSidebarGroupLabelComponent,
	HlmSidebarGroupContentComponent,
] as const;

@NgModule({
	imports: [...HlmSidebarImports],
	exports: [...HlmSidebarImports],
})
export class HlmSidebarModule {}