const copyBtn = document.querySelector('#copyBtn')
const copyUrl = document.querySelector('#randomUrl')
const modal = document.querySelector('#exampleModal')

function copy() {
  window.getSelection().selectAllChildren(copyUrl)
  document.execCommand("copy")
  modal.innerHTML = `
    <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">複製網址成功!!</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
  `
}

copyBtn.addEventListener('click', event => {
  const target = event.target
  if(target) {
    copy()
  }
})
