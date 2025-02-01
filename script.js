//PARTICLES
particlesJS('particles-js', {
  particles: {
    number: { value: 20 },
    shape: {
      type: 'image',
      image: {
        src: 'https://pngimg.com/uploads/autumn_leaves/autumn_leaves_PNG3603.png',
        width: 50,
        height: 50,
      },
    },
    move: {
      direction: 'bottom',
      out_mode: 'out',
      speed: 2,
    },
    opacity: { value: 0.1 },
  },
})

//COUNTDOWN
function createBoxes(container, numDigits) {
  container.innerHTML = ''
  for (let i = 0; i < numDigits; i++) {
    let span = document.createElement('span')
    span.classList.add('digit')
    span.innerText = '0'
    container.appendChild(span)
  }
}

function updateBoxes(container, value) {
  const digits = container.querySelectorAll('.digit')
  const strValue = value.toString().padStart(digits.length, '0')

  digits.forEach((digit, index) => {
    if (digit.innerText !== strValue[index]) {
      digit.innerText = strValue[index]
      digit.style.transform = 'scale(1.2)'
      setTimeout(() => (digit.style.transform = 'scale(1)'), 110)
    }
  })
}

function updateCountdown() {
  const targetDate = new Date('August 11, 2025 00:00:00').getTime()
  const now = new Date().getTime()
  const timeLeft = targetDate - now

  if (timeLeft <= 0) {
    document.getElementById('countdown').innerHTML = "🎉 Time's Up!"
    return
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

  updateBoxes(document.getElementById('days-box'), days)
  updateBoxes(document.getElementById('hours-box'), hours)
  updateBoxes(document.getElementById('minutes-box'), minutes)
  updateBoxes(document.getElementById('seconds-box'), seconds)

  setTimeout(updateCountdown, 1000)
}

createBoxes(document.getElementById('days-box'), 2)
createBoxes(document.getElementById('hours-box'), 2)
createBoxes(document.getElementById('minutes-box'), 2)
createBoxes(document.getElementById('seconds-box'), 2)

updateCountdown()
