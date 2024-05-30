export const useUniversal = () => {
  // 電話
  const dialNumber = () => {
    window.location.href = 'tel:047375181'
  }

  return {
    dialNumber
  }
}
