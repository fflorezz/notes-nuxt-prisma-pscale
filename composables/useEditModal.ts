const useEditModal = () => {
  const isEditOpen = useState('isEditOpen')
  const note = useState('note')

  const editNote = _note => {
    note.value = _note
    isEditOpen.value = true
  }

  return { editNote }
}

export default useEditModal
