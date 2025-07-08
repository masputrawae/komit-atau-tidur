interface SidebarItems {
  id: string;
  label: string;
  order: number;
}

export const SIDEBAR: SidebarItems[] = [
  {
    id: 'main-menu',
    label: 'Main Menu',
    order: 1,
  },
  {
    id: 'second-menu',
    label: 'Second Menu',
    order: 2
  }
]