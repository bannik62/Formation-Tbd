$().ready(function() {
    $("#validForm").validate({
    rules : {
      prenom : {
        required : true
      },
      nom : {
        minlength : 2
      },	
      login : {
        required : true,
        mail : true
      },
      bonjour : {
        required : true,
        minlength :7
        
      }
    },
    messages : {
      prenom : "Veuillez fournir un prénom",
      nom : "Veuillez fournir un nom de minimum trois lettres",
      login : "L'email est incorrect",
      bonjour:"Veuillez dire bonjour",
    }
   });

   
  });

  jQuery.validator.addMethod(
    "password",
    function(value, element) {
      return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value);
    },
"le mot de passe doit contenir <ul><li>Au moins une lettre minuscule et majuscule</li><li>Au moins un chiffre</li><li>Au moins huit caractères</li> </ul> "
);


