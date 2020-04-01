
import { IAsideSections, IAsideItems } from "./my-zone.interface";

export const asideSections: IAsideSections[] = [
  {
    title: 'Workspace',
    code: '3',
    items: [{
      name: 'Notes / Memos',
      iconName: 'format_list_bulleted',
      tooltip: 'Create or list my recordatories',
      itemCode: '3nm'
    }, {
      name: 'Tasks',
      iconName: 'list_alt',
      tooltip: 'Create or list my tasks',
      itemCode: '3dl'
    }, {
      name: 'Docs',
      iconName: 'library_add',
      tooltip: 'Create or list my documents',
      itemCode: '3d'
    }]
  },
  {
    title: 'Search your files',
    code: '4',
    items: [{
      name: 'Search',
      iconName: 'search',
      tooltip: 'Search your task, Docs and more...',
      itemCode: '4s'
    }]
  }, {
    title: 'Custom Space',
    code: '5',
    items: [{
      name: 'New Custom Space',
      iconName: 'create_new_folder',
      tooltip: 'Create a new space',
      itemCode: '5ncs'
    }, {
      name: 'My Customs Spaces',
      iconName: 'view_module',
      tooltip: 'all my customs spaces',
      itemCode: '5mcs'
    }]
  },
  {
    title: 'Explore',
    code: '6',
    items: [{
      name: 'Search Docs',
      iconName: 'explore',
      tooltip: 'Search docs of people',
      itemCode: '6sd'
    }, {
      name: 'Trending',
      iconName: 'whatshot',
      tooltip: 'what is on trending',
      itemCode: '6t'
    }, {
      name: 'People',
      iconName: 'person_pin',
      tooltip: 'Search for people',
      itemCode: '6p'
    }]
  }, {
    title: '',
    code: '7',
    items: [{
      name: 'Settings',
      iconName: 'settings',
      tooltip: 'Your adjustments',
      itemCode: '7s'
    }, {
      name: 'Help',
      iconName: 'help',
      tooltip: 'Help with anything that you need',
      itemCode: '7h'
    }, {
      name: 'Feedback',
      iconName: 'feedback',
      tooltip: 'Send feedback',
      itemCode: '7f'
    }]
  }
]


export const asideItems: IAsideItems[] = [{
  name: 'Notes / Memos',
  iconName: 'format_list_bulleted',
  tooltip: 'Create or list my recordatories',
  itemCode: '3nm',
  urlName: '/notes'
}, {
  name: 'Tasks',
  iconName: 'list_alt',
  tooltip: 'Create or list my tasks',
  itemCode: '3dl',
  urlName: '/tasks'
}, {
  name: 'Docs',
  iconName: 'library_add',
  tooltip: 'Create or list my documents',
  itemCode: '3d',
  urlName: '/docs'
},{
  name: 'Search',
  iconName: 'search',
  tooltip: 'Search your task, Docs and more...',
  itemCode: '4s',
  urlName: '/search'
}]
