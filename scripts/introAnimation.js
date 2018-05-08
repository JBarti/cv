window.onload = () => {


    let x = 0;
    document.getElementsByClassName('tag__open')[0].innerHTML = ""
    document.getElementsByClassName('tag__close')[0].innerHTML = ""
    document.getElementsByClassName('intro__text')[0].innerHTML = ""

    function type(word, tag, continueFunc) {
        let size = word.length
        let counter = 0
        function recursion(word, tag, continueFunc) {
            let element = document.getElementsByClassName(tag)[0];
            if (counter < size) {
                element.innerHTML = element.innerHTML.slice(0, -1)
                element.innerHTML += word[counter]
                element.innerHTML += '_'
                setTimeout(() => { recursion(word, tag, continueFunc) }, 70)
                counter++
            } else {
                element.innerHTML = element.innerHTML.slice(0, -1)
                if (continueFunc)
                    continueFunc()
            }
        }
        recursion(word, tag, continueFunc)
    }

    type('<coder>', 'tag__open',
        () => {
            type('Not Tech Support!', 'intro__text',
                () => {
                    type('</coder>', 'tag__close')
                })
        });



    (() => {
        let nums = document.getElementsByClassName('text__num')[0]
        for (let i = 0; i <= 34; i++) {
            nums.innerHTML += `${i}\n`
        }
    })()



    function selectFile(buttonElement, text) {
        buttonElement.onclick = () => {
            document
                .getElementsByClassName('window__text')[0]
                .innerHTML = text;
            buttonElement.classList.add('file__selected')
            document
                .getElementsByClassName('file__selection')[0]
                .innerHTML = buttonElement.innerHTML;
        }
    }

    selectFile(document.getElementsByClassName('file__about')[0], textTest)


    var selectTab = (function () {
        var current = null;
        return function select(tab) {
            if (current) {
                current.style.display = 'none';
            }
            tab.style.display = 'inline';
            current = tab
        }
    })()

    selectTab(document.getElementsByClassName('sidebar__files')[0])
    document.getElementsByClassName('icon__files')[0].onclick = () => {
        selectTab(document.getElementsByClassName('sidebar__files')[0])
    }
    document.getElementsByClassName('icon__search')[0].onclick = () => {
        selectTab(document.getElementsByClassName('sidebar__search')[0])
    }
    document.getElementsByClassName('icon__source')[0].onclick = () => {
        selectTab(document.getElementsByClassName('sidebar__source')[0])
    }
    document.getElementsByClassName('icon__debug')[0].onclick = () => {
        selectTab(document.getElementsByClassName('sidebar__debug')[0])
    }
}