document.onkeydown = KeyPress;
function KeyPress(e) {
  const evtobj = window.event ? window.event : e;
  if (evtobj.keyCode === 75 && evtobj.shiftKey && evtobj.ctrlKey && evtobj.altKey && evtobj.metaKey) {
    console.log('YEAAAAHHHHH !!\r\nKorhanola Rulesssss !\r\n\______________\r\nPFFFFFFF !');
    const regex = /\b(\w+(?![^<>]*>))\b/g;
    const b = document.body;
    b.innerHTML = b.innerHTML.replace(regex, 'pfffff');
  }
}