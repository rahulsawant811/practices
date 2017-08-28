let HTMLChanger = (function(){
    let contents = 'Contents'

    let changeHTML = function(){
        let elem = document.getElementById('attr-to-change')
        elem.innerHTML = contents
    }

    return {
        callChangeHTML: function(){
            changeHTML()
            //console.log(contents)
            alert(contents)
        }
    }
})();

HTMLChanger.callChangeHTML() // Contents
console.log(HTMLChanger.contents) // undefined
