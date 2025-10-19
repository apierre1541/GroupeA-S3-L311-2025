window.addEventListener("DOMContentLoaded", (event) => {
    let is_run = true; // Commentaire : Variable qui contrôle si l'horloge et le changement de couleur sont actifs

    init(); // Commentaire : Appel de la fonction principale qui initialise le script

    function init(){
        document.querySelector('.button').addEventListener('click', (event) => {
            is_run = !is_run; // Commentaire : Inverse l'état du bouton pause/play
            
            if ((' ' + document.querySelector('.button').className + ' ').indexOf('pause') > -1) {
                document.querySelector('.button').setAttribute('class', 
                    document.querySelector('.button').getAttribute('class').replace(' pause', ''));
                // Commentaire : Retire la classe 'pause' si elle existe
            } else {
                document.querySelector('.button').setAttribute('class', 
                    document.querySelector('.button').getAttribute('class') + ' pause');
                // Commentaire : Ajoute la classe 'pause' si elle n'existe pas
            }
        });

        setInterval(function(){
            if(is_run){
                let oDate = new Date();
                document.querySelector('#hours').innerHTML = adjustTimer(oDate.getHours());
                document.querySelector('#minutes').innerHTML = adjustTimer(oDate.getMinutes());
                document.querySelector('#seconds').innerHTML = adjustTimer(oDate.getSeconds());
                // Commentaire : Affiche l'heure, les minutes et les secondes dans la page

                document.querySelector('body').style.background = randomHexColor(
                    document.querySelector('#hours').innerHTML, 
                    document.querySelector('#minutes').innerHTML, 
                    document.querySelector('#seconds').innerHTML
                );
                // Commentaire : Change la couleur de fond en fonction de l'heure
            }
        }, 1000);
    }

    function adjustTimer(timer){
        return (timer < 10 ? '0'+timer : timer.toString());
        // Commentaire : Ajoute un zéro devant les nombres inférieurs à 10
    }

    function randomHexColor(x, y, z){
        return "rgb(" + Math.floor(parseInt(x)/100 * 256) + "," + Math.floor(parseInt(y)/100 * 256) + "," + Math.floor(parseInt(z)/100 * 256) + ")";
    // Commentaire : Génère une couleur RGB dynamique à partir de l'heure, des minutes et des secondes
    }
});