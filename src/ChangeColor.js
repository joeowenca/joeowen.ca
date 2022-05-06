function ChangeColor() {
    const headerText = document.getElementById('header-text')
    const dropDownMenu = document.getElementById('dropdown-open')
    const location = window.location.hash
    
    if(location !== "#/") {
        headerText.style.color = "rgb(255, 255, 255)"
        dropDownMenu.style.color = "rgb(255, 255, 255)"
    } else {
        headerText.style.color = "rgb(0, 0, 0)"
        dropDownMenu.style.color = "rgb(0, 0, 0)"
    }
}
  
export default ChangeColor