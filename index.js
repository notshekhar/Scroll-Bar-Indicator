let progress = document.querySelector('.progress')

let y = document.documentElement.scrollTop
let percent = y / document.documentElement.scrollHeight * 100
console.log(percent)
progress.style.width = `${percent}%`

window.onscroll = () => {
  let y = document.documentElement.scrollTop
  let percent = y / (document.documentElement.scrollHeight - document.documentElement.clientHeight)* 100
  console.log(percent)
  progress.style.width = `${percent}%`
}