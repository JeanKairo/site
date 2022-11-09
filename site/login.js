function entrar(){
    let usuario=document.querySelector('#usuario')
    let usuerLabel=document.querySelector('#userLabel')

    let senha=document.querySelector('#senha')
    let senhaLabel=document.querySelector('#senhaLabel')

    // let msgError=document.querySelector('msgError')
    let listaUser=[]

    let userValid={
        nome:'',
        user:'',
        senha:'',
    }
    listaUser=JSON.parse(localStorage.getItem('listaUser'))
    console.log(listaUser)
    listaUser.forEach((item)=>{
        if(usuario.value==item.userCad && senha.value==item.senhaCad)
        userValid={
            nome: item.nomeCad,
            user: item.userCad,
            senha: item.senhaCad
        }
        console.log(userValid)
    })

    if(usuario.value==userValid.user && senha.value == userValid.senha){
        alert('logou')
    }else{
        alert('erro')
    }
}
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