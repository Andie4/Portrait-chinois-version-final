//pour l'envoie des données du formulaire //
var clavierAnalogie = document-querySelector ('#analogie');
var clavierValeurAnalogie = document.querySelector( '#valeurAnalogie');
var clavierImage = document. querySelector('#image');
var clavierExplication = document.querySelector( '#explication');
var clavierCourriel = document. querySelector('#courriel');

document.querySelector('#envoyer').addEventListener('click', function (event) {
    event. preventDefault ();
    var nouvElement = document. createElement ('section');
    nouvelElement.innerHTML = "<h1>Si j'étais " + clavierAnalogie.value + " je serais…. </h1>" +
        "<h2y"+ clavierValeurAnalogie.value + "'</hzx" +
        "<img src='" + clavierImage.value + "'></img>" +
        "cp class='justification'>" + clavierExplication. value + "</p>";

    document. querySelector ('ajouter').appendChild (nouvelElement);

});
//API 
document.querySelector('.form-btn').addEventListener('click', function(){
    let url = 'http://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=caneval&courriel=andrea.caneval@edu.univ-eiffel.fr&amessage=Si j\'étais' + analogieNom.value + 'je serais ' + analogieValeur.value + 'car ' + analogieExplication.
value + 'Urlimage' +imageInput.value
console.log(url)

    fetch(urlVisitee).then(function(response) {
    response. json (). then (function (data) {
        console.log ("Réponse reçue : ")
        console.log (data);
    })
    })

})

//pour faire aparaitre et disparaitre les mentions 
function showMentions() {
    document.getElementById('mentions').style.display = 'block';
}
    
function hideMentions() {
    document.getElementById('mentions').style.display = 'none';
}