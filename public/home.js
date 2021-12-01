//Variables 
const list = document.getElementById('urlList')
const submit = document.getElementById('postUrl')
const url = document.getElementById('url')
const musList = document.getElementById('musList')
const add = document.getElementById('add')
const musLink = document.getElementById('mus')

//Functionality 
const seedIt = () => {
axios.post('/api/seed')
}
//Songs
const displayMusic = () => {
    musList.innerHTML = ''

    axios.get('/api/songs')
    .then(res => {
        res.data.forEach(element => {
           let musicList = `<div class="mus-list">
               <h2><a href="${element.song_link}">${element.song_link}</a></h2>
               <button onclick="deleteSong(${element.song_id})">Delete</button>
               </div>
               `
            musList.innerHTML += musicList  
        });
         
    })
}

const deleteSong = (id) => {
    axios.delete(`/api/songs/${id}`)
        .then(() => displayMusic())
        .catch(err => console.log(err))
}

const addMusic = (x) => {
    x.preventDefault()
    let musStr = {
        link2: musLink.value
    }


    if(musLink.value !== ""){
        axios.post('/api/songs', musStr)
        .then(res => {
            displayMusic()
             musLink.value = ''
    }) 
    }else {
      alert('Must enter a song')
    }
}

const shuffleSongs = () => {
let shuffArr = []
    axios.get('/api/songs')
    .then(res => {
        res.data.forEach(element => {
            shuffArr.push(element.song_link)
        })
            let rando = Math.floor((Math.random() * shuffArr.length))
            window.open(`${shuffArr[rando]}`, '_blank')
        });
}


//Resources
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

const displayList = () => {
    list.innerHTML = ''


    axios.get('/api/resources')
    .then(res => {
        res.data.forEach(element => {
           let urlList = `<div class="url-list">
               <h2><a href="${element.link}">${element.link}</a></h2>
               <button onclick="deleteUrl(${element.resource_id})">Delete</button>
               </div>
               `
               console.log(`${element.resource_id}`)
               list.innerHTML += urlList
        });
    })
}
const deleteUrl = (id) => {
    axios.delete(`/api/resources/${id}`)
        .then(() => displayList())
        .catch(err => console.log(err))
}


// seedIt()
displayMusic()
displayList()
submit.addEventListener('click', insertIn)
add.addEventListener('click', addMusic)
document.getElementById('shuffle').addEventListener('click', shuffleSongs )