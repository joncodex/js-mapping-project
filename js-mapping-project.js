


let clientele = []




function submitform() {


    let client = {}

    let inputname = document.getElementById('inputname').value
    let inputemail= document.getElementById('inputemail').value
    client.name = inputname;
    client.email = inputemail;
    clientele.push(client)

    document.getElementById('inputname').value = '';
    document.getElementById('inputemail').value = '';



        // CREATE THE ELEMENTS
    let jsdiv = document.createElement('div')
    // let jssn = document.createElement('button')
    let jsclientname = document.createElement('h2')
    let jsclientemail = document.createElement('p')
   


    // ASSIGN CLASS TO ElemenTS
    jsdiv.classList.add('jsdiv')
    jsclientname.classList.add('jsclientname')
    jsclientemail.classList.add('jsclientemail')
    // jssn.classList.add('jssn')


    // ASSIGN VALUES TO THEM
    let jsdivcontainer = document.getElementById('clientdetails')
    jsclientname.innerHTML = clientele.length +'.' +' ' + inputname
    jsclientemail.innerHTML = client.email
    // jssn.innerHTML = clientele.length




    // APPEND THEM
    jsdivcontainer.appendChild(jsdiv)
    jsdiv.appendChild(jsclientname)
    jsdiv.appendChild(jsclientemail)
    


    
    
    
    


    


    console.log(clientele)




   

}
