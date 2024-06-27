function CheckNewId() {
    if (document.newuserform.id.value == ") {
        alert('ID를 입력하세요');
    }
    else {
        newwin = window.open(", ", 'width=300, height=200');
        newwin.document.write (document.newuserform.id.value + '<br>');
        newwin.document.write ('<input type="button" value="닫기" onclick="self.close()">');
    }
}

function removeBlank(theElement) {
    tempvalue = theElement.value;
    while (tempvalue.indexOf(' ') > 0) {
        tempvalue = tempvalue.replace(' ', ");
    }
    theElement.value = tempvalue;
}