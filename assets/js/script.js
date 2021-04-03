// selecting all required elements

const wrapper = document.querySelector('.wrapper'),
toast = wrapper.querySelector('.toast'),
wifiIcon = wrapper.querySelector('.icon'),
title = wrapper.querySelector('span')
subTitle = wrapper.querySelector('p'),
closeIcon = wrapper.querySelector('.close-icon')

window.onload = () => {
    // Sending GET requisition. If response equals to 200, online; else, offline.
    function ajax () {
        let xhr = new XMLHttpRequest()
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true)
        xhr.onload = (event) => {
            if ([200, 201].includes(xhr.status)) {
                toast.classList.remove('offline')
                title.innerText = 'Você está online'
                subTitle.innerText = 'Woow, conectado!'
                wifiIcon.innerHTML = '<img src="./assets/icons/002-wifi.svg" alt="wifi">'

                closeIcon.onclick = () => wrapper.classList.add('hide')

                setTimeout(() => { // auto-closing
                    wrapper.classList.add('hide')
                }, 5000)
            } else {
                offline()
            }
        }
        xhr.onerror = () => {
            offline()
        }
        xhr.send()
    }

    function offline () {
        wrapper.classList.remove('hide')
        toast.classList.add('offline')
        title.innerText = 'Oops... você está offline'
        subTitle.innerText = 'Verifique sua conexão com a internet'
        wifiIcon.innerHTML = '<img src="./assets/icons/001-no-signal.svg" alt="wifi">'
    }

    setInterval(() => {
        ajax ()
    }, 500)
}