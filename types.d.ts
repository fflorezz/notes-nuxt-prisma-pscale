export interface Note {
  title: string
  content: string
  id: string
}

export interface Api {
  result: Ref<any | null>
  loading: Ref<boolean>
  onSuccess: (func: () => void) => void
  addNote: (note: Omit<Note, 'id'>) => Promise<void>
  editNote: (note: Note) => Promise<void>
  deleteNote: (id: string) => Promise<void>
}
