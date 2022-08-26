

function submit() {
    let obj = {

        name: document.getElementById('name').value,
        email: document.getElementById('Email').value,
        mobile: document.getElementById('phone').value,
        topic: document.getElementById('topic').value,
        msg: document.getElementById('msg').value
    }

    localStorage.setItem('userData', JSON.stringify(obj))

    alert('Your Form is Successfully Submit')

    let container = document.getElementById('child-2')
    container.innerHTML = null
    container.style.border = 'none'
    container.style.boxShadow = 'none'

    const img = document.createElement('img');
    img.src = 'https://i.ibb.co/x1ty6H2/Screenshot-2022-08-25-at-8-43-46-PM.png'
    img.style.width = '100%'


    container.append(img)


}