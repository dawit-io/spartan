import { NgIcon, provideIcons } from '@ng-icons/core';
import {
	lucideCalendar,
	lucideChevronLeft,
	lucideChevronRight,
	lucideHouse,
	lucideInbox,
	lucideLayers,
	lucideLayoutDashboard,
	lucideSearch,
	lucideSettings,
	lucideSquare,
	lucideUser,
	lucideUsers,
} from '@ng-icons/lucide';
import { type Meta, type StoryObj, argsToTemplate, moduleMetadata } from '@storybook/angular';
import { BrnMenuTriggerDirective } from '../../brain/menu/src';
import { BrnSidebarService } from '../../brain/sidebar/src';
import { HlmIconDirective } from '../icon/helm/src';
import {
	HlmMenuComponent,
	HlmMenuGroupComponent,
	HlmMenuItemDirective,
	HlmMenuItemIconDirective,
	HlmMenuSeparatorComponent,
} from '../menu/helm/src';
import {
	HlmSidebarBrandComponent,
	HlmSidebarComponent,
	HlmSidebarContentHeaderComponent,
	HlmSidebarFooterComponent,
	HlmSidebarGroupComponent,
	HlmSidebarGroupContentComponent,
	HlmSidebarGroupLabelComponent,
	HlmSidebarHeaderComponent,
	HlmSidebarItemComponent,
	HlmSidebarNavComponent,
	HlmSidebarSectionTitleDirective,
	HlmSidebarTriggerComponent,
} from './helm/src';

interface SidebarStoryArgs {
	variant: 'sidebar' | 'floating' | 'inset';
	collapsibleMode: 'offcanvas' | 'icon' | 'none';
	isCollapsible: boolean;
	isOverlay: boolean;
}

const meta: Meta<SidebarStoryArgs> = {
	title: 'Sidebar',
	component: HlmSidebarComponent,
	tags: ['autodocs'],
	args: {
		variant: 'sidebar',
		collapsibleMode: 'icon',
		isCollapsible: true,
		isOverlay: false,
	},
	argTypes: {
		variant: {
			description: 'Defines the sidebar layout variant',
			options: ['sidebar', 'floating', 'inset'],
			control: 'select',
			defaultValue: 'sidebar',
		},
		collapsibleMode: {
			description: 'Controls how the sidebar collapses',
			options: ['offcanvas', 'icon', 'none'],
			control: 'select',
			defaultValue: 'icon',
		},
		isCollapsible: {
			description: 'Whether the sidebar can be collapsed',
			control: 'boolean',
			defaultValue: true,
		},
		isOverlay: {
			description: 'Whether the sidebar uses overlay mode on mobile',
			control: 'boolean',
			defaultValue: false,
		},
	},
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
					lucideUser,
					lucideCalendar,
					lucideInbox,
					lucideSquare,
					lucideHouse,
					lucideSearch,
				}),
				BrnSidebarService,
			],
			imports: [
				HlmSidebarComponent,
				HlmSidebarBrandComponent,
				HlmSidebarHeaderComponent,
				HlmSidebarNavComponent,
				HlmSidebarItemComponent,
				HlmSidebarGroupComponent,
				HlmSidebarGroupLabelComponent,
				HlmSidebarGroupContentComponent,
				HlmSidebarSectionTitleDirective,
				HlmSidebarFooterComponent,
				HlmSidebarTriggerComponent,
				HlmSidebarContentHeaderComponent,
				BrnMenuTriggerDirective,
				HlmMenuComponent,
				HlmMenuItemDirective,
				HlmMenuSeparatorComponent,
				HlmMenuItemIconDirective,
				HlmMenuGroupComponent,
				HlmIconDirective,
				NgIcon,
			],
		}),
	],
};

export default meta;
type Story = StoryObj<SidebarStoryArgs>;

// Default sidebar items
const defaultItems = [
	{ icon: 'lucideHome', label: 'Dashboard' },
	{ icon: 'lucideCalendar', label: 'Calendar' },
	{ icon: 'lucideInbox', label: 'Inbox' },
	{ icon: 'lucideSearch', label: 'Search' },
];

// Interactive demo with all controls
export const Interactive: Story = {
	render: (args) => ({
		props: {
			...args,
			items: defaultItems,
		},
		template: `
      <div class="flex h-[500px] border">
        <hlm-sidebar
          ${argsToTemplate(args)}
        >
          <hlm-sidebar-header>
            <hlm-sidebar-brand>
              <ng-icon hlm name="lucideSquare" class="h-6 w-6" />
              <div class="flex flex-col">
                <span class="text-sm font-semibold text-foreground">Acme Inc</span>
                <span class="text-xs text-muted-foreground">Enterprise</span>
              </div>
            </hlm-sidebar-brand>
          </hlm-sidebar-header>

          <hlm-sidebar-nav class="mt-4">
            <div hlmSidebarSectionTitle>Navigation</div>
            @for(item of items; track item.icon) {
              <hlm-sidebar-item [label]="item.label">
                <ng-icon hlm [name]="item.icon" class="h-4 w-4" />
              </hlm-sidebar-item>
            }
          </hlm-sidebar-nav>
        </hlm-sidebar>

        <div class="flex-1 flex flex-col">
          <hlm-sidebar-content-header [withBorder]="true">
            <hlm-sidebar-trigger class="mt-2 ml-2" />
            <span class="ml-4 text-lg font-semibold">Interactive Sidebar Demo</span>
          </hlm-sidebar-content-header>
          <div class="p-6 flex-1">
            <h2 class="text-2xl font-bold mb-4">Current Configuration</h2>
            <div class="mb-4 p-4 bg-gray-100 dark:bg-gray-800 rounded">
              <ul class="space-y-2">
                <li><strong>Variant:</strong> {{ variant }}</li>
                <li><strong>Collapsible Mode:</strong> {{ collapsibleMode }}</li>
                <li><strong>Is Collapsible:</strong> {{ isCollapsible ? 'Yes' : 'No' }}</li>
                <li><strong>Is Overlay:</strong> {{ isOverlay ? 'Yes' : 'No' }}</li>
              </ul>
            </div>
            <p>Use the controls panel in Storybook to adjust sidebar properties and see how the behavior changes.</p>
          </div>
        </div>
      </div>
    `,
	}),
};

// Default sidebar with icon mode
export const Default: Story = {
	args: {
		variant: 'sidebar',
		collapsibleMode: 'icon',
		isCollapsible: true,
		isOverlay: false,
	},
	render: (args) => ({
		props: {
			...args,
			items: defaultItems,
		},
		template: `
      <div class="flex h-[400px] border">
        <hlm-sidebar
          ${argsToTemplate(args)}
        >
          <hlm-sidebar-header>
            <hlm-sidebar-brand>
              <ng-icon hlm name="lucideSquare" class="h-6 w-6" />
              <div class="flex flex-col">
                <span class="text-sm font-semibold text-foreground">Acme Inc</span>
                <span class="text-xs text-muted-foreground">Enterprise</span>
              </div>
            </hlm-sidebar-brand>
          </hlm-sidebar-header>

          <hlm-sidebar-nav class="mt-4">
            @for(item of items; track item.icon) {
              <hlm-sidebar-item [label]="item.label">
                <ng-icon hlm [name]="item.icon" class="h-4 w-4" />
              </hlm-sidebar-item>
            }
          </hlm-sidebar-nav>
        </hlm-sidebar>

        <div class="flex-1">
          <hlm-sidebar-content-header [withBorder]="true">
            <hlm-sidebar-trigger class="mt-2 ml-2" />
            <span class="ml-4">Default Sidebar</span>
          </hlm-sidebar-content-header>
          <div class="p-6">
            <h2 class="text-2xl font-bold mb-4">Standard Sidebar</h2>
            <p>Basic sidebar with icon collapsible mode.</p>
          </div>
        </div>
      </div>
    `,
	}),
};

// Floating sidebar
export const Floating: Story = {
	args: {
		variant: 'floating',
		collapsibleMode: 'icon',
		isCollapsible: true,
		isOverlay: false,
	},
	render: (args) => ({
		props: {
			...args,
			items: defaultItems,
		},
		template: `
      <div class="flex h-[400px] border">
        <hlm-sidebar
          ${argsToTemplate(args)}
        >
          <hlm-sidebar-header>
            <hlm-sidebar-brand>
              <ng-icon hlm name="lucideSquare" class="h-6 w-6" />
              <div class="flex flex-col">
                <span class="text-sm font-semibold text-foreground">Acme Inc</span>
                <span class="text-xs text-muted-foreground">Enterprise</span>
              </div>
            </hlm-sidebar-brand>
          </hlm-sidebar-header>

          <hlm-sidebar-nav class="mt-4">
            @for(item of items; track item.icon) {
              <hlm-sidebar-item [label]="item.label">
                <ng-icon hlm [name]="item.icon" class="h-4 w-4" />
              </hlm-sidebar-item>
            }
          </hlm-sidebar-nav>
        </hlm-sidebar>

        <div class="flex-1">
          <hlm-sidebar-content-header [withBorder]="true">
            <hlm-sidebar-trigger class="mt-2 ml-2" />
            <span class="ml-4">Floating Sidebar</span>
          </hlm-sidebar-content-header>
          <div class="p-6">
            <h2 class="text-2xl font-bold mb-4">Floating Sidebar</h2>
            <p>Sidebar that floats above the content with a subtle shadow.</p>
          </div>
        </div>
      </div>
    `,
	}),
};

// Inset sidebar
export const Inset: Story = {
	args: {
		variant: 'inset',
		collapsibleMode: 'icon',
		isCollapsible: true,
		isOverlay: false,
	},
	render: (args) => ({
		props: {
			...args,
			items: defaultItems,
		},
		template: `
      <div class="flex h-[400px] border">
        <hlm-sidebar
          ${argsToTemplate(args)}
        >
          <hlm-sidebar-header>
            <hlm-sidebar-brand>
              <ng-icon hlm name="lucideSquare" class="h-6 w-6" />
              <div class="flex flex-col">
                <span class="text-sm font-semibold text-foreground">Acme Inc</span>
                <span class="text-xs text-muted-foreground">Enterprise</span>
              </div>
            </hlm-sidebar-brand>
          </hlm-sidebar-header>

          <hlm-sidebar-nav class="mt-4">
            @for(item of items; track item.icon) {
              <hlm-sidebar-item [label]="item.label">
                <ng-icon hlm [name]="item.icon" class="h-4 w-4" />
              </hlm-sidebar-item>
            }
          </hlm-sidebar-nav>
        </hlm-sidebar>

        <div class="flex-1">
          <hlm-sidebar-content-header [withBorder]="true">
            <hlm-sidebar-trigger class="mt-2 ml-2" />
            <span class="ml-4">Inset Sidebar</span>
          </hlm-sidebar-content-header>
          <div class="p-6">
            <h2 class="text-2xl font-bold mb-4">Inset Sidebar</h2>
            <p>Sidebar that's inset within the main content area.</p>
          </div>
        </div>
      </div>
    `,
	}),
};

// Offcanvas sidebar
export const Offcanvas: Story = {
	args: {
		variant: 'sidebar',
		collapsibleMode: 'offcanvas',
		isCollapsible: true,
		isOverlay: false,
	},
	render: (args) => ({
		props: {
			...args,
			items: defaultItems,
		},
		template: `
      <div class="flex h-[400px] border">
        <hlm-sidebar
          ${argsToTemplate(args)}
        >
          <hlm-sidebar-header>
            <hlm-sidebar-brand>
              <ng-icon hlm name="lucideSquare" class="h-6 w-6" />
              <div class="flex flex-col">
                <span class="text-sm font-semibold text-foreground">Acme Inc</span>
                <span class="text-xs text-muted-foreground">Enterprise</span>
              </div>
            </hlm-sidebar-brand>
          </hlm-sidebar-header>

          <hlm-sidebar-nav class="mt-4">
            @for(item of items; track item.icon) {
              <hlm-sidebar-item [label]="item.label">
                <ng-icon hlm [name]="item.icon" class="h-4 w-4" />
              </hlm-sidebar-item>
            }
          </hlm-sidebar-nav>
        </hlm-sidebar>

        <div class="flex-1">
          <hlm-sidebar-content-header [withBorder]="true">
            <hlm-sidebar-trigger class="mt-2 ml-2" />
            <span class="ml-4">Offcanvas Sidebar</span>
          </hlm-sidebar-content-header>
          <div class="p-6">
            <h2 class="text-2xl font-bold mb-4">Offcanvas Sidebar</h2>
            <p>Sidebar that slides out of view when collapsed.</p>
          </div>
        </div>
      </div>
    `,
	}),
};

// Non-collapsible sidebar
export const NonCollapsible: Story = {
	args: {
		variant: 'sidebar',
		collapsibleMode: 'none',
		isCollapsible: false,
		isOverlay: false,
	},
	render: (args) => ({
		props: {
			...args,
			items: defaultItems,
		},
		template: `
      <div class="flex h-[400px] border">
        <hlm-sidebar
          ${argsToTemplate(args)}
        >
          <hlm-sidebar-header>
            <hlm-sidebar-brand>
              <ng-icon hlm name="lucideSquare" class="h-6 w-6" />
              <div class="flex flex-col">
                <span class="text-sm font-semibold text-foreground">Acme Inc</span>
                <span class="text-xs text-muted-foreground">Enterprise</span>
              </div>
            </hlm-sidebar-brand>
          </hlm-sidebar-header>

          <hlm-sidebar-nav class="mt-4">
            @for(item of items; track item.icon) {
              <hlm-sidebar-item [label]="item.label">
                <ng-icon hlm [name]="item.icon" class="h-4 w-4" />
              </hlm-sidebar-item>
            }
          </hlm-sidebar-nav>
        </hlm-sidebar>

        <div class="flex-1">
          <hlm-sidebar-content-header [withBorder]="true">
            <span class="ml-4">Non-Collapsible Sidebar</span>
          </hlm-sidebar-content-header>
          <div class="p-6">
            <h2 class="text-2xl font-bold mb-4">Non-Collapsible Sidebar</h2>
            <p>Sidebar that doesn't collapse (note the absence of the trigger button).</p>
          </div>
        </div>
      </div>
    `,
	}),
};

// Overlay sidebar (mobile)
export const Overlay: Story = {
	args: {
		variant: 'sidebar',
		collapsibleMode: 'offcanvas',
		isCollapsible: true,
		isOverlay: true,
	},
	render: (args) => ({
		props: {
			...args,
			items: defaultItems,
		},
		template: `
      <div class="flex h-[400px] border">
        <hlm-sidebar
          ${argsToTemplate(args)}
        >
          <hlm-sidebar-header>
            <hlm-sidebar-brand>
              <ng-icon hlm name="lucideSquare" class="h-6 w-6" />
              <div class="flex flex-col">
                <span class="text-sm font-semibold text-foreground">Acme Inc</span>
                <span class="text-xs text-muted-foreground">Enterprise</span>
              </div>
            </hlm-sidebar-brand>
          </hlm-sidebar-header>

          <hlm-sidebar-nav class="mt-4">
            @for(item of items; track item.icon) {
              <hlm-sidebar-item [label]="item.label">
                <ng-icon hlm [name]="item.icon" class="h-4 w-4" />
              </hlm-sidebar-item>
            }
          </hlm-sidebar-nav>
        </hlm-sidebar>

        <div class="flex-1">
          <hlm-sidebar-content-header [withBorder]="true">
            <hlm-sidebar-trigger class="mt-2 ml-2" />
            <span class="ml-4">Overlay Sidebar</span>
          </hlm-sidebar-content-header>
          <div class="p-6">
            <h2 class="text-2xl font-bold mb-4">Overlay Sidebar</h2>
            <p>Sidebar that uses overlay mode (perfect for mobile).</p>
          </div>
        </div>
      </div>
    `,
	}),
};

// With submenus/groups
export const WithGroups: Story = {
	args: {
		variant: 'sidebar',
		collapsibleMode: 'icon',
		isCollapsible: true,
		isOverlay: false,
	},
	render: (args) => ({
		props: {
			...args,
			teamItems: [{ label: 'Members' }, { label: 'Invites' }, { label: 'Roles' }],
		},
		template: `
      <div class="flex h-[500px] border">
        <hlm-sidebar
          ${argsToTemplate(args)}
        >
          <hlm-sidebar-header>
            <hlm-sidebar-brand>
              <ng-icon hlm name="lucideLayers" class="h-6 w-6" />
              <span>Acme Inc</span>
            </hlm-sidebar-brand>
          </hlm-sidebar-header>

          <hlm-sidebar-nav class="mt-4">
            <hlm-sidebar-group>
              <hlm-sidebar-group-label label="Dashboard">
                <ng-icon hlm name="lucideLayoutDashboard" class="h-4 w-4 text-muted-foreground" />
              </hlm-sidebar-group-label>
              <hlm-sidebar-group-content>
                <hlm-sidebar-item label="Overview" />
                <hlm-sidebar-item label="Analytics" />
                <hlm-sidebar-item label="Reports" />
              </hlm-sidebar-group-content>
            </hlm-sidebar-group>

            <hlm-sidebar-group>
              <hlm-sidebar-group-label label="Team">
                <ng-icon hlm name="lucideUsers" class="h-4 w-4 text-muted-foreground" />
              </hlm-sidebar-group-label>
              <hlm-sidebar-group-content>
                @for(item of teamItems; track item.label) {
                  <hlm-sidebar-item [label]="item.label"/>
                }
              </hlm-sidebar-group-content>
            </hlm-sidebar-group>
          </hlm-sidebar-nav>
          <hlm-sidebar-footer
              title="User Name"
              subtitle="user@example.com"
              hlmMenuBarItem
              brnMenuItem
            >
              <ng-icon hlm name="lucideUser" class="h-5 w-5 text-muted-foreground" />
          </hlm-sidebar-footer>
        </hlm-sidebar>

        <div class="flex-1">
          <hlm-sidebar-content-header [withBorder]="true">
            <hlm-sidebar-trigger class="mt-2 ml-2" />
            <span class="ml-4">Sidebar with Groups</span>
          </hlm-sidebar-content-header>
          <div class="p-6">
            <h2 class="text-2xl font-bold mb-4">Sidebar with Collapsible Groups</h2>
            <p>This example shows a sidebar with expandable/collapsible groups.</p>
          </div>
        </div>
      </div>
    `,
	}),
};
