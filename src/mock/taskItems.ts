import { TASK_STATUSES } from '~/constants'
import { type TaskItem } from '~/types'

export const taskItems: TaskItem[] = [{
  id: '1',
  title: 'Finish Weekly Report',
  description: '',
  createdAt: '',
  status: TASK_STATUSES.PENDING
}, {
  id: '2',
  title: 'Review Authentication Module Code',
  description: '',
  createdAt: '',
  status: TASK_STATUSES.PENDING
}, {
  id: '3',
  title: 'Meeting with Development Team',
  description: '',
  createdAt: '',
  status: TASK_STATUSES.PENDING
}, {
  id: '4',
  title: 'Update Project Documentation',
  description: '',
  createdAt: '',
  status: TASK_STATUSES.PENDING
}, {
  id: '5',
  title: 'Research New Charting Library',
  description: '',
  createdAt: '',
  status: TASK_STATUSES.PENDING
}]
