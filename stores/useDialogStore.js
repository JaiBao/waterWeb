// stores/useDialogStore.js

const emailDialog = ref(false)

export const useDialogStore = () => {
  function openEmailDialog() {
    emailDialog.value = true
  }

  function closeEmailDialog() {
    emailDialog.value = false
  }

  return { emailDialog, openEmailDialog, closeEmailDialog }
}
