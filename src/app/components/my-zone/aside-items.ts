
import { IAsideSections } from "./my-zone.interface";

export const asideItems: IAsideSections[] = [
  {
    title: 'Documentation',
    code: '3',
    items: [{
      name: 'New Document',
      iconName: 'library_add',
      tooltip: 'Create a new space for your documentation',
      codeItem: '3nd'
    }, {
      name: 'Documents List',
      iconName: 'list_alt',
      tooltip: 'All my documentations',
      codeItem: '3dl'
    }, {
      name: 'Deleted Documents',
      iconName: 'restore_from_trash',
      tooltip: 'Documents that you deleted',
      codeItem: '3dd'
    }]
  },
  {
    title: 'Search your files',
    code: '4',
    items: [{
      name: 'Search',
      iconName: 'search',
      tooltip: 'Search your task, documentations and more...',
      codeItem: '4s'
    }]
  },
  {
    title: 'Tasks',
    code: '5',
    items: [{
      name: 'New Task',
      iconName: 'post_add',
      tooltip: 'Add a new Task',
      codeItem: '5nt'
    }, {
      name: 'Tasks List',
      iconName: 'list_alt',
      tooltip: 'All my task',
      codeItem: '5lt'
    }, {
      name: 'Tasks deleted',
      iconName: 'restore_from_trash',
      tooltip: 'Task that i deleted',
      codeItem: '5dt'
    }]
  }
]
