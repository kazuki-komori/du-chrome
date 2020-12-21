const getElement = () => {
  const element = document.getElementsByClassName('course-name')
  console.log(element[0].innerHTML)
}

getElement()
