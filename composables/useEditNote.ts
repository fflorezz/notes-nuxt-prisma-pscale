const useEditNote = () => {
  const editModal = useEditModal()
  const stateNote = useNote()

  const editNote = note => {
    stateNote.value = note
    editModal.value = true
  }

  return { editNote }
}

export default useEditNote
