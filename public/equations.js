//Equations Page

    //Common vaiables
    let a = document.getElementById("ain")
    let b = document.getElementById('bin')
    let c = document.getElementById('cin')
    let answer1 = document.getElementById('solin1')
    let answer2 = document.getElementById('solin2')
    let a2 = document.getElementById('')
   
   
   
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
   




       //Event Listeners
   
   document.getElementById('solve').addEventListener('click', solveQuad)
   