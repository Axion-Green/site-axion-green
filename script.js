$(document).ready(function(){
    //menu-celular-view
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    //navbar/menu
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    //scrollbutun-up
     $('.scroll-up-btn').click(function(){
         $('html').animate({scrollTop: 0});
     });

    //slide-img-home
    imgHome();
    //slide-selo
    selo();
    //slide-mapa
    imgMap();
    //home-typing
    var typed = new Typed(".typing", {
        strings:["Inclusão", "Exelência", "Prosperidade","Sustentabilidade","Inovação"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });
    //home section-typing
    var typed = new Typed(".typing-2", {
        strings:[" o Meio ambiente", "a Vida", "o Futuro","a Sustentabilidade","a Inovação"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });
    //problemas section typing
    var typed = new Typed(".typing-3", {
        strings: [" o Meio ambiente", "a Vida", "o Futuro", "a Sustentabilidade", "a Inovação"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});
//validar-login
function validar(){
    let usuario = document.getElementById("usuario").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value

    if (usuario=="" && email =="" && senha ==""){
        alert("preencha os campos, varifique se não deixou nada em branco")
    }else{
        //bnt-entrar
        window.open('mapeamento.html')
        window.location.href = "mapeamento.html";
        window.close()
    }
}
//cadastro
function validarContato(){
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let mensagem = document.getElementById("mensagem").value
    var mensagemCompleta = "Nome: " + nome + "\n" + "Email: " + email + "\n" + "Mensagem: " + mensagem +"\n" +"\n" + "Mensagem enviada com sucesso!";
    if (nome=="" && email =="" && mensagem==""){
        alert("preencha os campos, verifique se não deixou nada em branco")
    }else{
        alert(mensagemCompleta);
    }
}
//btn-cadastro
var btnCadastro = document.getElementById("btn-cadastro").addEventListener("click", ()=>{
    //window.location.href = "cadastro.html";
    window.open('cadastro.html')
    //window.close();
});
//slide-img-function-selo
function selo(){
    if (window.location.pathname === "/selo.html") {
        var img = ['./img/marcadaguaselo.png', './img/mapa.png', './img/tipos-de-cabos-eletricista.jpg', './img/planta luz.jpeg'];
        var count = 0;
        var time = 2500;
        function showImage() {
        document.getElementById('img-car').src = img[count];
        count++;
        if (count === img.length) {
            count = 0;
        }
        setTimeout(showImage, time);
        }
        showImage();
    };
};
function imgHome(){
    if (window.location.pathname === "/index.html"){
        var imagens = [    './img/img1-car.png',    './img/img2-car.png',    './img/img3-car.png',    './img/img4-car.png'];
        var Index = 0;
        var time = 2500;
        function slideShow() {
            document.getElementById('image-car').src = imagens[Index];
            Index++;
            if (Index == imagens.length) {
                Index = 0;
            }
            setTimeout(slideShow, time);
        } 
        slideShow(); 
    }
};
function imgMap(){
    if (window.location.pathname === "/index.html"){
        var imagens = [    './img/sebastiao-Salgado.webp',    './img/mapeamento-osasc.png'];
        var Index = 0;
        var time = 2500;
        function slideShow() {
            document.getElementById('image-map').src = imagens[Index];
            Index++;
            if (Index == imagens.length) {
                Index = 0;
            }
            setTimeout(slideShow, time);
        } 
        slideShow(); 
    }
};