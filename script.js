function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {
       // Traitez les données comme vous le souhaitez
       console.log(data);
       /// ON ECRIT LE CODE ICI ! 
       let website = data.website;

       let nomJournal = website.nameJournal;
      console.log(nomJournal);

      getElementById (themes)
      
       
       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici