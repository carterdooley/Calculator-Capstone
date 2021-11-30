//Variables 
const list = document.getElementById('urlList')
const submit = document.getElementById('postUrl')
const url = document.getElementById('url')

//Functionality 
axios.post('/api/seed')



const displayList = () => {
    list.innerHTML = ''


    axios.get('/api/resources')
    .then(res => {
        res.data.forEach(element => {
           let urlList = `<div class="url-list">
               <h2><a>${element.link}</a></h2>
               <button onclick="deleteUrl(${element.resource_id})">Delete</button>
               </div>
               `
               console.log(`${element.resource_id}`)
               list.innerHTML += urlList
        });
    })
}

const insertIn = (x) => {
    x.preventDefault()

    let str = {
        link: url.value, 
    }
    console.log(str)

    if(url.value !== ""){
      axios.post('/api/resources', str)
      .then(res => {
          console.log(res)
            displayList()
            url.value = ''
      }) 
    }else {
        alert('Must enter a resource')
    }

    
}

function deleteUrl(id) {
    axios.delete(`/api/resources/${id}`)
        .then(() => displayList())
        .catch(err => console.log(err))
}



displayList()
submit.addEventListener('click', insertIn)
