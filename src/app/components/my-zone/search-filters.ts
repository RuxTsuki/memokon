import { ISearchFilters } from './my-zone.interface';

export const SEARCH_FILTERS: ISearchFilters[] = [
  {
    title: 'Tasks',
    code: 'task'
  }, {
    title: 'Memos',
    code: 'memo'
  }, {
    title: 'Docs',
    code: 'doc'
  }, {
    title: 'Advance',
    code: 'advance',
    content: [
      {
        title: 'Date',
        code: 'date'
      }, {
        title: 'Word',
        code: 'word'
      }, {
        title: 'Content',
        code: 'word'
      }
    ]
  }
]
