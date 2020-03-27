console.log('test divers');

tableau_dobjet = [
    { user : "myself",
    content : "ceci est un test" 
    },
    { user : "other",
    content : "ceci est un test 2" 
    },
    { user : "myself",
    content : "ceci est un nouveau test" 
    }
]

console.log(tableau_dobjet);

console.log(JSON.parse(tableau_dobjet)); // convertir un tableau en objet

/*

     but de l'API : 

     reception : recevoir un objet et le mettre dans un tableau a la suite

     emission : renvoyer le tableau entier de la conversation et/ou ne renvoyer que ce qui manque

     tableau user

     tableau message

     date 

     construire un objet list de message avec les donneés des 2 tableaux

*/ 

const user = [ "john", "paul", "jack" ]

const messages = [
    
    { 
        user : user[0],
        message : "contenu du message",
        date : Date.now()
    }
]







