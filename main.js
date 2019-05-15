// "use strict"
var domElem = {};

var adressBook = [
	{prefixe:"monsieur", nom:"durand",prenom:"jacque",telephone:"0142568956"},
	{prefixe:"madame", nom:"doe",prenom:"kely",telephone:"0156234523"},
	{prefixe:"monsieur", nom:"jack",prenom:"karl",telephone:"01562344523"}

]


$





function refresh() 
{
	domElem.ulElem.empty() ;
	for(let i =0;i<adressBook.length;i++)
	{
		

		// var adress =adressBook[i].prefixe+ " "+adressBook[i].nom + " " +adressBook[i].prenom +" "+ adressBook[i].telephone;
		var adress = adressBook[i].nom + " " +adressBook[i].prenom ;
		
		var li = $('<li>');
		var bouton = $('<a>');
		bouton.attr("href","#");
		// li.innerHTML='adresse ajouter ';
		bouton.text(adress);
		bouton.attr("class","modif");  
		li.append(bouton) ;
		domElem.ulElem.append(li);

		bouton.data("index",i);
		bouton.on('click',afficherDetail);
	}


}
	
 function addConctact() {
 	adressBook.push(createConctact());
 	refresh();
 	clear();
	domElem.ajouterAdresse.hide();
 }

 function clear() {
	 adressBook= [];
 }


function sauver() {
	
	addConctact();
	
}




function afficher() {

	var currentMode = $(this).data().mode ;
	domElem.ajouterAdresse.data("mode",currentMode) ;
	if(currentMode == "update")
	{
		var currentContact=adressBook[domElem.modiBtn.data().index];

		//console.log(currentContact);
  
		switch(currentContact.prefixe) {
			case "Madame":
			domElem.inputprefixe.val(1) ;
			break;
			case"Monsieur":
			domElem.inputprefixe.val(2);
			break;
			case"mademoiselle":
			domElem.inputprefixe.val(3);
		}
		domElem.inputnom.val(currentContact.nom);
		domElem.inputprenom.val(currentContact.prenom);
		console.log(domElem.inputelephone) ;
		domElem.inputelephone.val(currentContact.telephone);
		
	}
	



	domElem.ajouterAdresse.show();

}

function createConctact() {
	var contact={};


	switch(domElem.inputprefixe.val()) {
		case "1":
		contact.prefixe="Madame" ;
		break;
		case"2":
		contact.prefixe="Monsieur";
		break;
		case"3":
		contact.prefixe="mademoiselle";
	}
	contact.nom=domElem.inputnom.val();
	contact.prenom=domElem.inputprenom.val();
	contact.telephone=domElem.inputelephone.val();
	
	return contact;
		}

	function afficherDetail() {
		


		console.log(adressBook[$(this).data().index ]);
		var currentContact=(adressBook[$(this).data().index ])
		 
		domElem.h3Elem.text(currentContact.prefixe +" "+currentContact.nom
		 +" " +currentContact.prenom) 
			
		$('.telephone').text(adressBook[$(this).data().index ].telephone);
		
		domElem.modiBtn.data("index",[$(this).data().index ]);

	
		
	}	

	function update() {
		// if(currentContact==)
		//  currentContact=domElem.modiBtn.data().index
		// adressBook[currentContact]=createConctact()
		
	}


	function modifier() {
		
	//update()
	return 0;
	
	}


$(function() 
{

 	domElem.ajouterAdresse=$("#add-and-update");
 	
 	domElem.inputprefixe=$('#mrmd');
	 domElem.inputnom =$('#nom');
	 domElem.inputprenom=$('#prenom');
	 domElem.inputelephone=$('#telephone');

	
	 domElem.sauveBtn= $("#sauver");
	domElem.ulElem=$("ul");
	domElem.liElem=$("li");
	domElem.adetail=$("#details");

	domElem.h3Elem=$("h3");
	domElem.modiBtn=$("#modif");
	domElem.effacer=$(".fa-trash-restore-alt");


	domElem.ajouterAdresse.hide();
	// $.jStorage.get(domElem.nom,domElem.prenom,domElem.telephone);
	console.log(domElem);
	$('#addButton').click(afficher);
	$("#sauver").click(sauver)


	$('#modif').click(afficher);
	domElem.effacer.click(clear);
	refresh() ;

});     