const cat_img = document.getElementById('cat')
const dog_img = document.getElementById('dog_img')
const cat_btn = document.getElementById('cat_btn')
const dog_btn = document.getElementById('dog_btn')

cat_btn.addEventListener('click', () => {
    fetch('https://aws.random.cat/meow')
    .then(res => res.JSON())
    .then (data => {
        cat_img.innerHTML = `<img src="${data.file}"/>`
    })
})