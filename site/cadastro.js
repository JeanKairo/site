// let btn=document.querySelector('#verSenha')

// btn.addEventListener('click',()=>{
//     let inputSenha= document.querySelector('#senha')

//     if(inputSenha.getAttribute('type')=='password'){
//         inputSenha.setAttribute('type','text')
//     }else{
//         inputSenha.setAttribute('type','password')
//     }
// })
// let btnConfirm=document.querySelector('#verConfirmSenha')
// btnConfirm.addEventListener('click',()=>{
//     let inputConfirmSenha=document.querySelector('#confirmSenha')

//     if(inputConfirmSenha.getAttribute('type')=='password'){
//         inputConfirmSenha.setAttribute('type','text')
//     }else{
//         inputConfirmSenha.setAttribute('type','password')
//     }
// })
var validNome=false

// var usuario=document.querySelector('#usuario') 
// var labelUsuario=document.querySelector('#labelUsuario')
// var validUsuario=false

// var senha=document.querySelector('#senha')
// var labelSenha=document.querySelector('#labelSenha')
// var validSenha=false

// var Csenha=document.querySelector('#Csenha')
// var labelCofirmarSenha=document.querySelector('#labelConfirmarSenha')
// var validCsenha=false

// var msgError=document.querySelector('#msgError')
// var msgSucess=document.querySelector('#msgSucess')




function render(){
    nome.addEventListener('keyup' ,()=>{
        if(nome.value.length<=2){
            labelNome.setAttribute('style','color:red')
            labelNome.innerHTML='Nome *Insira pelo menos 3 caracteres'
            validNome=false
        }else{
            labelNome.setAttribute('style','color:green')
            validNome=true
            labelNome.innerHTML='Nome'
        }
    })
    

    usuario.addEventListener('keyup' ,()=>{
        if(usuario.value.length<=2){
            labelUsuario.setAttribute('style','color:red')
            labelUsuario.innerHTML='Usuário *Insira pelo menos 3 caracteres'
            validUsuario=false
        }else{
            labelUsuario.setAttribute('style','color:green')
            validUsuario=true
            labelUsuario.innerHTML='Usuário'
        }
        })

    senha.addEventListener('keyup' ,()=>{
            if(senha.value.length<=5){
                labelSenha.setAttribute('style','color:red')
                labelSenha.innerHTML='Senha *Insira pelo menos 6 caracteres'
                validSenha=false
            }else{
                labelSenha.setAttribute('style','color:green')
                labelSenha.innerHTML='Senha'
                validSenha=true
            }
        
        
        
    Csenha.addEventListener('keyup' ,()=>{
            if(Csenha.value!=senha.value){
                labelCofirmarSenha.setAttribute('style','color:red')
                labelCofirmarSenha.innerHTML='As senhas não correspondem'
                validCsenha=false
            }else{
                labelCofirmarSenha.setAttribute('style','color:green')
                labelCofirmarSenha.innerHTML='Confirmar senha'
                validCsenha=true
            }   
        })
          
        })
    
}
function cadastrar(){
    if(validNome && validUsuario && validCsenha && validSenha){
        // msgSucess.setAttribute('style','display:block')
        // msgSucess.innerHTML='<strong>Cadastrando...</strong>'
        let listaUser = JSON.parse(localStorage.getItem('listaUser')||'[]')
        listaUser.push(
        {
            nomeCad: nome.value,
            userCad: usuario.value,
            senhaCad: senha.value
        }
        )
        localStorage.setItem('listaUser',JSON.stringify(listaUser))
        alert('cadastrado')
        window.location.href('http://127.0.0.1:5501/login.html?usuario=&senha=')
    }else{
        // msgError.setAttribute('style','display:block')
        // msgError.innerHTML='<strong>Cadastrando...</strong>'
        alert('preencha os campos corretamente')
    }
}

