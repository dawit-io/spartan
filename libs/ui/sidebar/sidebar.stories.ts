import { provideIcons } from '@ng-icons/core';
import {
	lucideCalendar,
	lucideChevronLeft,
	lucideChevronRight,
	lucideInbox,
	lucideLayers,
	lucideLayoutDashboard,
	lucideSettings,
	lucideUsers,
} from '@ng-icons/lucide';
import { BrnSidebarService } from '@spartan-ng/brain/sidebar';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { type Meta, type StoryObj, moduleMetadata } from '@storybook/angular';
import {
	HlmSidebarBrandComponent,
	HlmSidebarComponent,
	HlmSidebarContentHeaderComponent,
	HlmSidebarGroupComponent,
	HlmSidebarGroupContentComponent,
	HlmSidebarGroupLabelComponent,
	HlmSidebarHeaderComponent,
	HlmSidebarItemComponent,
	HlmSidebarNavComponent,
	HlmSidebarTriggerComponent,
} from './helm/src';

const meta: Meta<HlmSidebarComponent> = {
	title: 'Sidebar',
	component: HlmSidebarComponent,
	tags: ['autodocs'],
	decorators: [
		moduleMetadata({
			providers: [
				provideIcons({
					lucideChevronLeft,
					lucideChevronRight,
					lucideLayers,
					lucideLayoutDashboard,
					lucideSettings,
					lucideUsers,
					lucideCalendar,
					lucideInbox,
				}),
				BrnSidebarService,
			],
			imports: [
				HlmIconComponent,
				HlmSidebarComponent,
				HlmSidebarBrandComponent,
				HlmSidebarHeaderComponent,
				HlmSidebarNavComponent,
				HlmSidebarItemComponent,
				HlmSidebarContentHeaderComponent,
				HlmSidebarTriggerComponent,
				HlmSidebarGroupComponent,
				HlmSidebarGroupLabelComponent,
				HlmSidebarGroupContentComponent,
			],
		}),
	],
};

export default meta;
type Story = StoryObj<HlmSidebarComponent>;

export const Basic: Story = {
	render: ({ ...args }) => ({
		props: args,
		template: `
      <div class="flex h-[400px] border rounded-lg">
        <hlm-sidebar>
          <hlm-sidebar-header>
            <hlm-sidebar-brand>
              <hlm-icon name="lucideLayers" class="h-4 w-4" />
              Acme Inc
            </hlm-sidebar-brand>
          </hlm-sidebar-header>

          <hlm-sidebar-nav class="mt-4">
            <hlm-sidebar-item>
              <hlm-icon name="lucideLayoutDashboard" class="h-4 w-4" />
              Dashboard
            </hlm-sidebar-item>
            <hlm-sidebar-item>
              <hlm-icon name="lucideCalendar" class="h-4 w-4" />
              Calendar
            </hlm-sidebar-item>
            <hlm-sidebar-item>
              <hlm-icon name="lucideInbox" class="h-4 w-4" />
              Inbox
            </hlm-sidebar-item>
          </hlm-sidebar-nav>
        </hlm-sidebar>

        <div class="flex-1">
          <hlm-sidebar-content-header>
            <hlm-sidebar-trigger />
          </hlm-sidebar-content-header>
          <div class="p-6">
            <h2 class="text-2xl font-bold mb-4">Main Content</h2>
            <p>Basic sidebar with simple navigation items.</p>
          </div>
        </div>
      </div>
    `,
	}),
};

export const WithSubmenus: Story = {
	render: ({ ...args }) => ({
		props: args,
		template: `
      <div class="flex h-[600px] border rounded-lg">
        <hlm-sidebar>
          <hlm-sidebar-header>
            <hlm-sidebar-brand>
              <hlm-icon name="lucideLayers" class="h-4 w-4" />
              Acme Inc
            </hlm-sidebar-brand>
          </hlm-sidebar-header>

          <hlm-sidebar-nav class="mt-4">
            <hlm-sidebar-item>
              <hlm-icon name="lucideLayoutDashboard" class="h-4 w-4" />
              Dashboard
            </hlm-sidebar-item>

            <hlm-sidebar-group class="mt-4">
              <hlm-sidebar-item>
                <hlm-icon name="lucideSettings" class="h-4 w-4" />
                Settings
              </hlm-sidebar-item>
              <hlm-sidebar-group-content>
                <hlm-sidebar-item>Profile</hlm-sidebar-item>
                <hlm-sidebar-item>Account</hlm-sidebar-item>
                <hlm-sidebar-item>Security</hlm-sidebar-item>
              </hlm-sidebar-group-content>
            </hlm-sidebar-group>

            <hlm-sidebar-group class="mt-4">
              <hlm-sidebar-item>
                <hlm-icon name="lucideUsers" class="h-4 w-4" />
                Team
              </hlm-sidebar-item>
              <hlm-sidebar-group-content>
                <hlm-sidebar-item>Members</hlm-sidebar-item>
                <hlm-sidebar-item>Invites</hlm-sidebar-item>
                <hlm-sidebar-item>Roles</hlm-sidebar-item>
              </hlm-sidebar-group-content>
            </hlm-sidebar-group>

          </hlm-sidebar-nav>
        </hlm-sidebar>

        <div class="flex-1">
          <hlm-sidebar-content-header>
            <hlm-sidebar-trigger />
          </hlm-sidebar-content-header>
          <div class="p-6">
            <h2 class="text-2xl font-bold mb-4">Main Content</h2>
            <p>Notice how the sidebar groups collapse when the sidebar is minimized.</p>
          </div>
        </div>
      </div>
    `,
	}),
};
