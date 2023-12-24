document.addEventListener('input', (e) => {
  const section = e.target.closest('section')
  const correct = section.getAttribute('answer').toLowerCase() == e.target.value?.toLowerCase()
  if (correct) {
    section.toggleAttribute('correct', true)
    e.target.readOnly = true
    requestAnimationFrame(() => {
      section.nextElementSibling.scrollIntoView({
        behavior: 'smooth'
      })
    })
  }
})
