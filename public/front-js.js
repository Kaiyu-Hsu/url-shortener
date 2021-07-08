const copyBtn = document.querySelector('#copyBtn')
const copyUrl = document.querySelector('#randomUrl')

function copy() {
  console.log(copyUrl)
  window.getSelection(copyUrl)
  document.execCommand("copy")
  alert("複製成功!")
  console.log('end')
}

copyBtn.addEventListener('click', event => {
  
  const target = event.target
  console.log(target)
  if(target) {
    copy()
  }
})
