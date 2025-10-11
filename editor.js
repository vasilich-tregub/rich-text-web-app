// the code for function fontSize(size) is borrowed from
// https://stackoverflow.com/questions/5868295/document-execcommand-fontsize-in-pixels#56103356

let textareaStyle;

window.addEventListener("load", (event) => {
    textareaStyle = document.defaultView.getComputedStyle(document.querySelector("#editor"));
    fontSizeSelector.value = parseFloat(textareaStyle.fontSize);
});

editor.addEventListener("click", (event) => {
    var sel = document.getSelection();
    var selFocusNode = sel.focusNode;
    var parentElem = selFocusNode.parentElement;
    if (parentElem.attributes)
        alert(parentElem.attributes[0].nodeName + "=\"" + parentElem.attributes[0].nodeValue + "\"");
});

function execCmd(command, value = null) {
    document.execCommand(command, false, value);
}

function fontSize(size) {

    var sel = document.getSelection(); // Gets selection

    var selectedHtml = "";
    if (sel.rangeCount) {
        var container = document.createElement("div");
        for (var i = 0, len = sel.rangeCount; i < len; ++i) {
            container.appendChild(sel.getRangeAt(i).cloneContents());
        }
        const children = container.getElementsByTagName("*")
        for(let child of children) {
            if(child.style.fontSize) {
                child.style.fontSize = `${size}px`
            }
        }
        selectedHtml = container.innerHTML;
    }

    let html = `<div style="font-size: ${size}px;">${selectedHtml}</div>`
    document.execCommand('insertHTML', false, html);
}

function toggleCodeView() {
    const editor = document.getElementById('editor');
    const codeView = document.getElementById('code-view');

    if (codeView.style.display === 'none') {
        codeView.value = formatHTML(editor.innerHTML);
        codeView.style.display = 'block';
        editor.style.display = 'none';
    } else {
        editor.innerHTML = codeView.value;
        codeView.style.display = 'none';
        editor.style.display = 'block';
    }
}

function formatHTML(html) {
    // Ensure all standalone tags are self-closed
    html = html.replace(/<br>/g, '<br/>')
               .replace(/<hr>/g, '<hr/>')
               .replace(/<img(.*?)>/g, '<img$1/>')
               .replace(/<input(.*?)>/g, '<input$1/>')
               .replace(/<meta(.*?)>/g, '<meta$1/>')
               .replace(/<link(.*?)>/g, '<link$1/>');
    
    return html;
}

function prepareContentForSave() {
    const editor = document.getElementById('editor');
    const hiddenContent = document.getElementById('hidden-content');
    const displayContent = document.getElementById('display-content');
    hiddenContent.value = formatHTML(editor.innerHTML);
    displayContent.innerHTML = hiddenContent.value;
}
