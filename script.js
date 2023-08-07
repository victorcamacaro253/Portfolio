let menuVisible=false;
const themeToggler=document.querySelector(".theme-toggler");




themeToggler.addEventListener("click",()=>{
	document.body.classList.toggle('dark-theme-variables');

	themeToggler.querySelector("span:nth-child(1)").classList.toggle('active');
	themeToggler.querySelector("span:nth-child(2)").classList.toggle('active');

});


//funcion que oculta o muestra el menu

function MostrarOcultarMenu(){
	if (menuVisible) {
		document.getElementById("nav").classList="";
		menuVisible=false;
	}else{
		document.getElementById("nav").classList="responsive";
		menuVisible=true;
	}
}

function seleccionar(){
	//oculto el menu un vez seleccionada una opcion
	document.getElementById("nav").classList="";
	menuVisible=false;

}

//funcion que aplica a las animaciones de la habilidades

function efectoHabilidades(){
	 var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
		habilidades[0].classList.add("PHP");
		habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("Javascript");
        habilidades[3].classList.add("SQL");
        habilidades[4].classList.add("REDES");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
	}
}



//detecto el srcolling para aplicar la animacion de la barra de habilidades

window.onscroll=function(){
	efectoHabilidades();

}

