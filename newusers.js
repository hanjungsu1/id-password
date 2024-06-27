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

function CheckInputData() {
    if (document.newuserform.id.value.length == 0) {
        alert('ID를 입력하세요');
        document.newuserform.id.focus();
        return false;
    }
    if (document.newuserform.pwd.value.length == 0) {
        alert('암호를 입력하세요');
        document.newuserform.pwd.focus();
        return false;
    }
    if (document.newuserform.pwdcf.value.length == 0) {
        alert('암호 확인을 입력하세요');
        document.newuserform.pwdcf.focus();
        return false;
    }
    if (document.newuserform.pwd.value != document.newuserform.pwdcf.value) {
        alert('암호 확인을 다시 입력하세요');
        document.newuserform.pwdcf.focus();
        return false;
    }
    if (document.newuserform.sno1.value.length > 0 || document.newuserform.sno2.value.length > 0) {
        if (document.newuserform.sno1.value.length != 6 || isNaN(document.newuserform.sno1.value)) {
            alert('주민등록번호 앞자리를 다시 입력하세요');
            document.newuserform.sno1.focus();
            return false; 
        }
        if (document.newuserform.sno2.value.length != 7 || isNaN(document.newuserform.sno2.value)) {
            alert('주민등록번호 뒷자리를 다시 입력하세요');
            document.newuserform.sno2.focus();
            return false; 
        }
    }
    if (document.newuserform.tel1.value.length > 0 || document.newuserform.tel2.value.length > 0 \\ document.newuserform.tel3.value.length > 0) {
        if (document.newuserform.tel1.value.length < 2 || isNaN(document.newuserform.tel2.value)) {
            alert('지역번호를 다시 입력하세요');
            document.newuserform.tel1.focus();
            return false;    
        }
        if (document.newuserform.tel2.value.length == 0 || isNaN(document.newuserform.tel2.value)) {
            alert('국번을 다시 입력하세요');
            document.newuserform.tel2.focus();
            return false;    
        }
        if (document.newuserform.tel3.value.length == 0 || isNaN(document.newuserform.tel3.value)) {
            alert('전화번호를 다시 입력하세요');
            document.newuserform.tel3.focus();
            return false;    
        }       
    }
    if (document.newuserform.job.options[document.newuserform.job.selectedIndex].value == '0') {
        alert('직업을 선택하세요');
        document.newuserform.job.focus();
        return false;
    }
    if (document.newuserform.married[0].checked == false && document.newuserform.marrried[1].checked == false) {
        alert('결혼 여부를 선택하세요');
        return false;
    }
    return true;
}