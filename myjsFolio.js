
// parametrage des button du debut

document.getElementById('cvButton').addEventListener('click', function() {
    // redirige vers my cv
    window.open('CvDjibril.pdf', '_blank'); //Cette fonction ouvre une nouvelle fenêtre ou un nouvel onglet avec l'URL spécifiée. Le paramètre '_blank' permet d'ouvrir le lien dans un nouvel onglet pour que la page actuelle reste ouverte.
} );

document.getElementById('linkedinButton').addEventListener('click', function() {
    // redirige vers my linkedin
    window.open('https://www.youtube.com/results?search_query=mrbeast', '_blank'); //reste a mettre le lien vers ma page linkedin :)
} );

document.getElementById('instagramButton').addEventListener('click', function() {
    // redirige vers my insta
    window.open('https://www.instagram.com/fougni_guin.djibril/', '_blank');
} );


// parametrage des liens en dessous

document.getElementById('instaaa').addEventListener('click', function() {
    window.open('https://www.instagram.com/fougni_guin.djibril/', '_blank');
});
document.getElementById('linked').addEventListener('click', function() {
    window.open('https://www.youtube.com/results?search_query=mrbeast', '_blank'); //reste a mettre le lien vers ma page linkedin :)
} );

// envoie de l'email
document.getElementById('maill').addEventListener('click', function(event) {
    event.preventDefault();   //Empêcher le comportement par défaut du lien

    //Construire le lien mailto avec l'adresse email, l'objet et le corps du message
    var email = "djibdesilue15html.css@gmail.com";
    var subject = "objet de l'email";
    var body = "Bonjour, \n\nVoici un exemple de corps d'email.\n\nCordialement.";

    var mailToLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

//Ouvrir le client de messagerie avec le lien mailto
    window.location.href = mailToLink;
});

