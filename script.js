document.addEventListener('input', (e) => {
  const section = e.target.closest('section')
  section.toggleAttribute('correct', section.getAttribute('answer').toLowerCase() == e.target.value?.toLowerCase())
})