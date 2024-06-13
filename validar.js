const usuarios = [

{
login: 'admin',
pass: 'admin'
},
{
    login: 'mara',
    pass: 'mara'
}

]
    let botao = document.getElementById('btnlogar');

    botao.addEventListener('click', function logar(){

        let pegaUsuarios = document.getElementById('usuario').value

        let pegasenha  = document.getElementById('senha').value

        let validaLogin = false
        
        for(let i in usuarios){
            if(pegaUsuarios == usuarios [i].login && pegasenha == usuarios [i].pass){
            validaLogin = true
            break
            }
        }if(validaLogin == true){
            location.href ='home.html'
        }else{
            alert('Usuário ou senha incorretos')
        }

    
    } 
)



