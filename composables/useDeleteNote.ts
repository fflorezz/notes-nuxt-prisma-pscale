const useDeleteNote = () => {
  const router = useRouter()
  const loading = ref(false)

  const deleteNote = async id => {
    loading.value = true

    await useFetch(`/api/notes/${id}`, {
      method: 'DELETE',
    })
    router.go(0)
  }

  return { loading, deleteNote }
}

export default useDeleteNote
