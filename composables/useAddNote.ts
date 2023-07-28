const useAddNote = () => {
  const note = ref(null)
  const loading = ref(false)
  let onSuccessCallback = null
  const onSuccess = func => {
    onSuccessCallback = func
  }

  const addNote = async ({ title, content }) => {
    loading.value = true

    const { data } = await useFetch('/api/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        title: title,
        content: content,
      },
    })

    if (!data) {
      throw new Error('Error adding note')
    }

    loading.value = false
    note.value = data.value
    if (onSuccessCallback) onSuccessCallback()
  }

  return { note, loading, onSuccess, addNote }
}

export default useAddNote
