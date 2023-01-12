let name=document.querySelector('.name');
name.onblur = function () {
    let aa = 10 - name.value.length;
    if (aa < 0) {
        name.value = '';
        alert('Name must be between 4 and 10!');
    }
}


