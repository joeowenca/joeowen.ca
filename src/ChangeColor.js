function ChangeColor() {
    const headerText = document.getElementById('header-text')
    const dropDownMenu = document.getElementById('dropdown-open')
    const location = window.location.hash

    // Scroll position information
    let scrollPos = document.documentElement.scrollTop || document.body.scrollTop
    let height = (window.innerHeight / 3)
    let alpha = (scrollPos / height)
    
    // Color white if not on the home page
    if(location !== "#/") {
        headerText.style.color = "rgb(255, 255, 255)"
        dropDownMenu.style.color = "rgb(255, 255, 255)"
    
    // Color black if on the home page
    } else {
        // Set color to scroll position if within scroll bounds
        if (scrollPos < height) {
            headerText.style.color = "rgb(" + (alpha * 255) + "," + (alpha * 255) + "," + (alpha * 255) + ")"
            dropDownMenu.style.color = "rgb(" + (alpha * 255) + "," + (alpha * 255) + "," + (alpha * 255) + ")"
        } else {
            headerText.style.color = "rgb(255, 255, 255)"
            dropDownMenu.style.color = "rgb(255, 255, 255)"
        }
    }
}
  
export default ChangeColor