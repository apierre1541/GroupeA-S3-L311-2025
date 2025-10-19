<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Time</title><!-- Titre de la page affiché dans l'onglet du navigateur -->
    <!-- Importation de la police "Aldrich"-->
    <link href="https://fonts.googleapis.com/css?family=Aldrich" rel="stylesheet">
    <!-- Lien vers le fichier CSS pour le style de la page -->
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <!-- Conteneur principal de la page -->
    <div id="wrapper">
        <!-- Section interne pour le contenu -->
        <div class="inside">
            <!-- Affichage de l'horloge -->
            <div class="timer">
                <span id="hours">00</span> :
                <span id="minutes">00</span> :
                <span id="seconds">00</span>
            </div>
            <!-- Bouton de contrôle pour mettre l'horloge en pause ou la relancer -->
            <div class="controls">
                <!-- Le JS change l'état du bouton et son style -->
                <button class="button pause"></button>
            </div>
        </div>
    </div>
    <!-- Lien vers le fichier JavaScript pour faire fonctionner l'horloge -->
    <script src="assets/js/script.js"></script>
</body>
</html>