var btn = document.getElementById("btn");
var cognomi = [];

btn.addEventListener("click", function () {
  var listaCognomi = document.getElementById("listaCognomi");
  var cognome= document.getElementById("cognome").value;

  listaCognomi.innerHTML = "";

//tolowercase imposta di trattare tutto come se fosse una stringa minuscola
  cognome = cognome.toLowerCase();
  cognomi.push(cognome); //cognomi[array.length] = cognome

  cognomi.sort(); //A-Z < a-z

  for (var i = 0; i < cognomi.lenght; i++) {
    listaCognomi.innerHTML += "<li>" + cognomi[i] + "</li>";
  }

  for (var i = 0; i < cognomi.length; i++) {
    if (cognomi[i] == cognome)
    document.getElementById("indice").innerHTML = "il nuovo elemento è in posizione"  + (i+1);

  }

});
