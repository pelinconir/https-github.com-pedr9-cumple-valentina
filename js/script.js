
function abrirSorpresa(){

    // Crear explosión de luces

    for(let i = 0; i < 180; i++){

        let fuego = document.createElement("div");

        fuego.className = "particula";

        fuego.innerHTML = [
            "✨",
            "⭐",
            "💫",
            "🎆"
        ][Math.floor(Math.random()*4)];


        fuego.style.left = "50%";
        fuego.style.top = "50%";


        document.body.appendChild(fuego);



        let x = (Math.random()-0.5) * 900;
        let y = (Math.random()-0.5) * 900;



        fuego.animate([

            {
                transform:"translate(0,0) scale(1)",
                opacity:1
            },

            {
                transform:
                `translate(${x}px,${y}px) scale(0)`,
                opacity:0
            }

        ],{

            duration:1600,
            easing:"ease-out"

        });



        setTimeout(()=>{

            fuego.remove();

        },1600);


    }



    // Cambiar a la segunda página

    setTimeout(()=>{

        window.location.href="sorpresa.html";

    },1800);


}

function lluviaMagica(){


    const objetos = [

        "🌹",
        "🌸",
        "🌺",
        "💖",
        "💕",
        "🍦",
        "✨",
        "⭐"

    ];



    setInterval(()=>{


        let elemento = document.createElement("div");


        elemento.innerHTML =
        objetos[
            Math.floor(Math.random()*objetos.length)
        ];



        elemento.style.position="fixed";

        elemento.style.top="-60px";

        elemento.style.left=
        Math.random()*100+"vw";



        elemento.style.fontSize =
        (25 + Math.random()*35)+"px";



        elemento.style.zIndex="50";



        document.body.appendChild(elemento);



        let giro =
        Math.random()*720;



        elemento.animate([

            {

                transform:
                "translateY(0) rotate(0deg)",

                opacity:1

            },


            {

                transform:
                `translateY(110vh) rotate(${giro}deg)`,

                opacity:0

            }


        ],{


            duration:
            (5 + Math.random()*5)*1000,


            easing:"linear"


        });



        setTimeout(()=>{

            elemento.remove();

        },10000);



    },250);



}

function crearBrillos(){


    setInterval(()=>{


        let brillo=document.createElement("div");


        brillo.innerHTML="✨";


        brillo.style.position="fixed";

        brillo.style.left=
        Math.random()*100+"vw";


        brillo.style.top=
        Math.random()*100+"vh";


        brillo.style.fontSize="25px";

        brillo.style.zIndex="40";


        document.body.appendChild(brillo);



        brillo.animate([

            {
                opacity:0,
                transform:"scale(0)"
            },

            {
                opacity:1,
                transform:"scale(1.5)"
            },

            {
                opacity:0,
                transform:"scale(0)"
            }

        ],{

            duration:2000

        });



        setTimeout(()=>{

            brillo.remove();

        },2000);



    },500);


}