function copyToClipBoard(event){
    var range = document.createRange();
    range.selectNode(event.currentTarget.parentElement.parentElement.childNodes[0]);
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
}
