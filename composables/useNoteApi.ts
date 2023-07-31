import { create } from 'domain'

const useNoteApi = () => {
  const result = ref(null)
  const loading = ref(false)
  let onSuccessCallback = null
  const onSuccess = func => {
    onSuccessCallback = func
  }

  const deleteNote = async id => {
    if (loading.value) return

    const previousNotes = ref([])
    const { data: notes } = useNuxtData('notes')

    loading.value = true

    const { data } = await useFetch(`/api/notes/${id}`, {
      method: 'DELETE',
      onRequest() {
        previousNotes.value = notes.value

        notes.value = notes.value.filter(note => note.id !== id)
      },
      onRequestError() {
        notes.value = previousNotes.value
      },
      async onResponse() {
        await refreshNuxtData('notes')
      },
    })

    loading.value = false
    result.value = data.value

    if (onSuccessCallback) onSuccessCallback()
  }

  const editNote = async ({ title, content, id }) => {
    if (loading.value) return

    const route = useRoute()
    const previousNotes = ref([])
    const { data: notes } = useNuxtData('notes')

    loading.value = true

    const { data } = await useFetch(`/api/notes/${id}`, {
      key: 'editNote',
      method: 'PATCH',
      body: {
        title,
        content,
      },
      onRequest() {
        previousNotes.value = notes.value

        notes.value = notes.value.map(note => {
          if (note.id === id) {
            return {
              ...note,
              title,
              content,
            }
          }

          return note
        })
      },
      onRequestError() {
        notes.value = previousNotes.value
      },
      async onResponse() {
        if (route.fullPath === '/') {
          await refreshNuxtData('notes')
        } else {
          await refreshNuxtData('note')
        }
      },
    })

    if (!data) {
      throw createError({
        statusCode: 404,
        message: 'Not found',
      })
    }

    loading.value = false
    result.value = data.value
    if (onSuccessCallback) onSuccessCallback()
  }

  const addNote = async ({ title, content }) => {
    if (loading.value) return

    const previousNotes = ref([])
    const { data: notes } = useNuxtData('notes')

    loading.value = true

    const { data } = await useFetch('/api/notes', {
      key: 'addNote',
      method: 'POST',
      body: {
        title,
        content,
      },
      onRequest() {
        previousNotes.value = notes.value // Store the previously cached value to restore if fetch fails.

        notes.value.unshift({
          title,
          content,
        }) // Optimistically update the notes.
      },
      onRequestError() {
        notes.value = previousNotes.value // Rollback the data if the request failed.
      },
      async onResponse() {
        await refreshNuxtData('notes') // Invalidate todos in the background if the request succeeded.
      },
    })

    if (!data) {
      throw new Error('Error adding note')
    }

    loading.value = false
    result.value = data.value
    if (onSuccessCallback) onSuccessCallback()
  }

  return { result, loading, onSuccess, addNote, editNote, deleteNote }
}

export default useNoteApi
