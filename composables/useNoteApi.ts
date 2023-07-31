import type { Api, Note } from '~/types'
import type { UseFetchOptions } from 'nuxt/app'

export default (): Api => {
  let onSuccessCallback: (() => void) | null = null
  const result: Ref<any | null> = ref(null)
  const loading: Ref<any | null> = ref(false)
  const onSuccess = (func: () => void) => {
    onSuccessCallback = func
  }
  const previousNotes: Ref<Note[]> = ref([])
  const { data: notes } = useNuxtData('notes')

  const deleteNote = async (id: string) =>
    manageFetch(`/api/notes/${id}`, {
      method: 'DELETE',
      onRequest() {
        previousNotes.value = notes.value
        notes.value = notes.value.filter((_note: Note) => _note.id !== id)
      },
      onRequestError() {
        notes.value = previousNotes.value
      },
      async onResponse() {
        await refreshNuxtData('notes')
      },
    })

  const editNote = async (note: Note) =>
    manageFetch(`/api/notes/${note.id}`, {
      key: 'editNote',
      method: 'PATCH',
      body: {
        title: note.title,
        content: note.content,
      },
      onRequest() {
        previousNotes.value = notes.value
        notes.value = notes.value.map((_note: Note) => {
          if (_note.id === note.id) {
            return {
              ...note,
              title: note.title,
              content: note.content,
            }
          }
          return _note
        })
      },
      onRequestError() {
        notes.value = previousNotes.value
      },
      async onResponse() {
        const route = useRoute()
        if (route.fullPath === '/') {
          await refreshNuxtData('notes')
        } else {
          await refreshNuxtData('note')
        }
      },
    })

  const addNote = async (note: Omit<Note, 'id'>) =>
    manageFetch('/api/notes', {
      key: 'addNote',
      method: 'POST',
      body: {
        title: note.title,
        content: note.content,
      },
      onRequest() {
        previousNotes.value = notes.value

        notes.value.unshift({
          title: note.title,
          content: note.content,
        })
      },
      onRequestError() {
        notes.value = previousNotes.value
      },
      async onResponse() {
        await refreshNuxtData('notes')
      },
    })

  const manageFetch = async (url: string, options: UseFetchOptions) => {
    if (loading.value) return

    loading.value = true

    try {
      const { data } = await useFetch(url, options)

      if (!data) {
        throw createError({
          statusCode: 404,
          message: 'Not found',
        })
      }

      result.value = data.value

      if (onSuccessCallback) onSuccessCallback()
    } catch (error: any) {
      throw createError({
        statusCode: 500,
        message: error.message,
      })
    } finally {
      loading.value = false
    }
  }

  return { result, loading, onSuccess, addNote, editNote, deleteNote }
}
