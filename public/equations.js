//Equations Page

    //Common vaiables
    let a = document.getElementById("ain")
    let b = document.getElementById('bin')
    let c = document.getElementById('cin')
    let answer1 = document.getElementById('solin1')
    let answer2 = document.getElementById('solin2')
    let a2 = document.getElementById('a2')
    let b2 = document.getElementById('b2')
    let c2 = document.getElementById('c2')
   
   
       //Functions
   const solveQuad = () => {
       let an = parseInt(a.value)
       let bn = parseInt(b.value)
       let cn = parseInt(c.value)
       let squreRooted = Math.sqrt((bn * bn) - (4 * an * cn))
       let resultP = (0 - bn + squreRooted) / (2 * an)
       let resultN = (0 - bn - squreRooted) / (2 * an)
       answer1.value = resultP
       answer2.value = resultN
   }
   
   const solvePyth = () => {
    if(c2.value === '' && b2.value !== '' && a2.value !== ''){
        let a = a2.value
        let b = b2.value
        let c = (a * a) + (b * b)
        c = Math.sqrt(c)
        c2.value = c
    }else if(b2.value === '' && a2.value !== '' && c2.value !== ''){
        let a = a2.value
        let c = c2.value
        let b = (c * c) - (a * a)
        b = Math.sqrt(b)
        b2.value = b
    }else if(a2.value === '' && b2.value !== '' && c2.value !== ''){
        let b = b2.value
        let c = c2.value
        let a = (c * c) - (b * b)
        a = Math.sqrt(a)
        a2.value = a
    }else {
        alert('Invalid Variables')
    }
   }

   const clearQuad =() => {
       a.value = ''
       b.value = ''
       c.value = ''
       answer1.value = ''
       answer2.value = ''
   }
   const clearPyth =() => {
    a2.value = ''
    b2.value = ''
    c2.value = ''
}




       //Event Listeners
   
   document.getElementById('solve').addEventListener('click', solveQuad)
   document.getElementById('solvep').addEventListener('click', solvePyth)
   document.getElementById('cl1').addEventListener('click', clearQuad)
   document.getElementById('cl2').addEventListener('click', clearPyth)