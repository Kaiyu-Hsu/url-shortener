const copyBtn = document.querySelector('#copyBtn')
const copyUrl = document.querySelector('#randomUrl')

function copy() {
  window.getSelection(copyUrl.innerHTML)
  document.execCommand("copy")
}

copyBtn.addEventListener('click', event => {
  const target = event.target
  if(target) {
    copy()
  }
})
