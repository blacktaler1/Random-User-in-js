

// api
const API = 'https://randomuser.me/api/?results=9'

// for leader
const overlay = document.getElementById('overlay')
const Loader = (toggle) =>{
    if(toggle){
        overlay.classList.remove('hidden')
    }
    else {
        overlay.classList.add('hidden')
    }
}

const getData = (recourse) =>{
    return new Promise((resolve, reject) =>{
        const request = new XMLHttpRequest()
        request.addEventListener('readystatechange', () => {
            if(request.readyState < 4){
                Loader(true)
            }else if(request.readyState == 4 && request.status == 200){
                const data = JSON.parse(request.responseText)
                resolve(data.results)
                Loader(false)

            } else if(request.request == 4){
                reject('error')
                Loader(false)
            }
        })


        request.open('GET', recourse)
        request.send()
    })
}
const reload = () =>{
    getData(API).then((data) => {
        UpdateUi(data)
    }).catch((data) =>{
        console.log('catch', data)
    })

}
document.addEventListener('DOMContentLoaded', reload)