function ScrollTransition() {
  const header = document.getElementById('header')
  const showcase = document.getElementById('showcase')
  const headerImg = document.getElementById('header-img')
  const headerText = document.getElementById('header-text')
  const dropDownMenu = document.getElementById('dropdown-open')

  // If 'showcase' isn't loaded, don't run
  if (showcase !== null) {
    let scrollPos = document.documentElement.scrollTop || document.body.scrollTop

    // Calculate current (Scroll Position / Heigh) for background alpha
    let height = (window.innerHeight / 3)
    let alpha = (scrollPos / height)

    // Update header background color
    showcase.style.backgroundColor = "rgba(26, 26, 26, " + alpha + ")"
    headerText.style.color = "rgb(" + (alpha * 255) + "," + (alpha * 255) + "," + (alpha * 255) + ")"
    dropDownMenu.style.color = "rgb(" + (alpha * 255) + "," + (alpha * 255) + "," + (alpha * 255) + ")"

    // Hide header image
    if (alpha >= 1) {
      headerImg.classList.remove('hidden')
      headerText.classList.remove('hidden')
      header.style.backgroundColor = "rgba(26, 26, 26, 1)"
    } else {
      headerImg.classList.add('hidden')
      headerText.classList.add('hidden')
      header.style.backgroundColor = "rgba(26, 26, 26, 0)"
    }
  }
}

export default ScrollTransition