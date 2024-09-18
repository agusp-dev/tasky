export type TaskStatus = 'PENDING' | 'COMPLETED'

export interface TaskItem {
  id: string,
  title: string,
  description: string,
  createdAt: string,
  status: TaskStatus
}

export type Filter = {
  id: number,
  key: 'ALL' | 'PENDING' | 'COMPLETED',
  title: string
}
