//const music = new Audio('https://opengameart.org/sites/default/files/merry_early_christmas_0.mp3')
//const music = new Audio('https://opengameart.org/sites/default/files/Christmas%20Special%203.wav')
const music = new Audio('https://opengameart.org/sites/default/files/christmass_theme.mp3')
const effect = new Audio('https://opengameart.org/sites/default/files/8-Bit%20Sample.mp3')

document.addEventListener('click', () => {
  music.loop = true
  music.play()
}, { once: true })

document.addEventListener('input', (e) => {
  const section = e.target.closest('section')
  const correct = section.getAttribute('answer').toLowerCase() == e.target.value?.toLowerCase()
  if (correct) {
    effect.play()
    section.toggleAttribute('correct', true)
    e.target.readOnly = true
    requestAnimationFrame(() => {
      section.nextElementSibling.scrollIntoView({
        behavior: 'smooth'
      })
    })
  }
})

