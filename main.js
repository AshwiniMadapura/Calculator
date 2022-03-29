
// const displayContainer = document.getElementById('display')
// document.querySelectorAll('button').forEach((item) => {
//   item.addEventListener('click', (e) => {
//     displayContainer.innerHTML = e.target.textContent.trim();
//   })
// })

const displayContainer = document.getElementById('display')
document.querySelectorAll('.buttonDesign').forEach((item) => {
  item.addEventListener('click', (e) => {
    displayContainer.innerHTML = e.target.textContent.trim();
    console.log(displayContainer);
  })
})
