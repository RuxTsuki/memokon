
import { IAsideSections } from "./my-zone.interface";

export const asideItems: IAsideSections[] = [
  {
    title: 'Documentation',
    code: '3',
    items: [{
      name: 'New Document',
      iconName: 'library_add',
      tooltip: 'Create a new space for your documentation'
    }, {
      name: 'Documents List',
      iconName: 'list_alt',
      tooltip: 'All my documentations'
    }, {
      name: 'Deleted Documents',
      iconName: 'restore_from_trash',
      tooltip: 'Documents that you deleted'
    }]
  },
  {
    title: 'Search your files',
    items: [{
      name: 'Search',
      iconName: 'search',
      tooltip: 'Search your task, documentations and more...'
    }]
  },
  {
    title: 'Tasks',
    code: '3',
    items: [{
      name: 'New Task',
      iconName: 'post_add',
      tooltip: 'Add a new Task'
    }, {
      name: 'Tasks List',
      iconName: 'list_alt',
      tooltip: 'All my task'
    }, {
      name: 'Tasks deleted',
      iconName: 'restore_from_trash',
      tooltip: 'Task that i deleted'
    }]
  }
]
