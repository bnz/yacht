export const rulesStyles = () => {
  document.body.classList.add('rules')

  return () => {
    document.body.classList.remove('rules')
  }
}
