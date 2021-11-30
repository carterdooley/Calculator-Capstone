const { Axios } = require("axios")

//Variables 
const list = document.getElementById('urlList')
const submit = document.getElementById('postUrl')
const url = document.getElementById('url')

//Functionality 
axios.post('http://localhost:4000/seed')

const displayList = () => {
    axios.get('http://localhost:4000/resources')
    .then(res => {
        res.data.forEach(element => {
           let urlList = document.createElement('li')
           urlList.textContent = element
           list.append(urlList)
        });
    })
}

const insertIn = (x) => {
    x.preventDefault()

    let body = {
        name: url.value, 
    }

    if(url.value !== null){
      axios.post('localhost:4000/insert', body)
      .then(() => {
          console.log('Url Posted!')
            displayList()
      }) 
    }else {
        alert('Must enter a resource')
    }

    
}




displayList()
submit.addEventListener('click', insertIn)
