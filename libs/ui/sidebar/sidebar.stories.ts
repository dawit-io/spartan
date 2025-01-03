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
		props: {
            ...args,
            items: [
                { icon: 'lucideLayoutDashboard', label: 'Dashboard' },
                { icon: 'lucideCalendar', label: 'Calendar' },
                { icon: 'lucideInbox', label: 'Inbox' }
            ]
        },
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
            @for(item of items; track item.icon) {
              <hlm-sidebar-item [label]="item.label">
                <hlm-icon [name]="item.icon" class="h-4 w-4" />
              </hlm-sidebar-item>
            }
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
		props: {
            ...args,
            settingsItems: [
                { label: 'Profile' },
                { label: 'Account' },
                { label: 'Security' }
            ],
            teamItems: [
                { label: 'Members' },
                { label: 'Invites' },
                { label: 'Roles' }
            ]
        },
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
            <hlm-sidebar-item label="Dashboard">
              <hlm-icon name="lucideLayoutDashboard" class="h-4 w-4" />
            </hlm-sidebar-item>

            <hlm-sidebar-group class="mt-4">
              <hlm-sidebar-item label="Settings">
                <hlm-icon name="lucideSettings" class="h-4 w-4" />
              </hlm-sidebar-item>
              <hlm-sidebar-group-content>
                @for(item of settingsItems; track item.label) {
                  <hlm-sidebar-item [label]="item.label"/>
                }
              </hlm-sidebar-group-content>
            </hlm-sidebar-group>

            <hlm-sidebar-group class="mt-4">
              <hlm-sidebar-item label="Team">
                <hlm-icon name="lucideUsers" class="h-4 w-4" />
              </hlm-sidebar-item>
              <hlm-sidebar-group-content>
                @for(item of teamItems; track item.label) {
                  <hlm-sidebar-item [label]="item.label"/>
                }
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
