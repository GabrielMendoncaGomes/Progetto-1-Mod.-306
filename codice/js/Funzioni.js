function maggiorenne(){
	if(document.getElementById("Maggiorenne").checked){
		document.getElementById("AutoritaParentaleSpan").hidden = true;
		
		var x = document.getElementsByName("AutoritaParentale");
		for (var i = 0; i < x.length; i++) {
			x[i].hidden = true;
		}
	}else{
		document.getElementById("AutoritaParentaleSpan").hidden = false;
		var x = document.getElementsByName("AutoritaParentale");
		for (var i = 0; i < x.length; i++) {
			x[i].hidden = false;
		}
	}
}
function situazioneProfessionale(){
	if(document.getElementById("SituazioneProfessionale").value=="Studente"){
		var x = document.getElementsByName("Studente");
		for (var i = 0; i < x.length; i++) {
			x[i].hidden = false;
		}
		var x = document.getElementsByName("Lavoro");
		for (var i = 0; i < x.length; i++) {
			x[i].hidden = true;
		}
	}else if(document.getElementById("SituazioneProfessionale").value=="Lavoro"){
		var x = document.getElementsByName("Studente");
		for (var i = 0; i < x.length; i++) {
			x[i].hidden = true;
		}
		var x = document.getElementsByName("Lavoro");
		for (var i = 0; i < x.length; i++) {
			x[i].hidden = false;
		}

	}
	
}
function cantone(){
	if(document.getElementById("NazioneSelect").value=="CH"){
		document.getElementById("Cantone").hidden = false;
	}else
		document.getElementById("Cantone").hidden = true;
	
	if(document.getElementById("NazioneSelectGenitore").value=="CH"){
		document.getElementById("CantoneGenitore").hidden = false;
	}else
		document.getElementById("CantoneGenitore").hidden = true;
}

//controlla se ci sono dei numeri in una stringa
function controlloNumeri(id){
	var string = document.getElementById(id).value;
	var numero = false;
	
	for(var i = 0; i<string.length; i++){
		var lettera=parseInt(string.substring(i, i+1));
		if(!isNaN(lettera))
			numero = true;
	}
	return numero;
}
//controlla se c'é almeno uno spazio(true) altrimenti da false 
function controlloSpazio(id){
	var string = document.getElementById(id).value.trim();
	
	if(string.length <= string.replace(/ /g,'').length)
		return true;
	else 
		return false;
}
//non funziona
/*
function creaSelectAnno(selezione){
	var max = new Date().getFullYear()-10;
	var min = max -50;
	
	var select = document.getElementById('"'+selezione+'"');
	for (var i = min; i<=max; i++){
		var opt = document.createElement('option');
		var text = document.createTextNode(i);
		opt.value = i;
		opt.appendChild(text);
		select.appendChild(opt);
	}
	select.value = max;
}*/
function verificaJS(){
	var errore = false;
	/****************************************
	*controllo i dati del diretto interesato*
	*****************************************/
	//Controllo il nome e cognome 
	if(document.getElementById("NomeCognome").value != ""){
		//controllo che ci sia almeno uno spazio
		if(controlloSpazio("NomeCognome")){
			document.getElementById("NomeCognomeErrore").innerHTML = "*Inserire nome e cognome";
			errore=true;
		}
		//controllo che non ci siano numeri 
		else if(controlloNumeri("NomeCognome") == true){
			document.getElementById("NomeCognomeErrore").innerHTML = "*Inserire solo lettere";
			errore=true;
		}else
			document.getElementById("NomeCognomeErrore").innerHTML ="";
	}else{
		document.getElementById("NomeCognomeErrore").innerHTML = "*Campo richiesto";
			errore=true;
	}


	//controllo la data
	if(document.getElementById("DataDiNascita").value != ""){
	
	}else{
		document.getElementById("DataDiNascitaErrore").innerHTML = "*Campo richiesto";
		errore=true;
	}


	//controllo la nazionalità
	if(document.getElementById("Nazionalita").value != ""){
		//controllo che non ci siano spazi
		if(controlloSpazio("Nazionalita") == false){
			document.getElementById("NazionalitaErrore").innerHTML = "*Inserire solo una nazionalita";
			errore=true;
		}//controllo che non ci siano numeri 
		else if(controlloNumeri("Nazionalita") == true){
			document.getElementById("NazionalitaErrore").innerHTML = "*Inserire solo lettere";
			errore=true;
		}else
			document.getElementById("NazionalitaErrore").innerHTML = "";
	}else{
		document.getElementById("NazionalitaErrore").innerHTML = "*Campo richiesto";
			errore=true;
	}
	

	//controllo l'indirizzo
	if(document.getElementById("Indirizzo").value != ""){
		//controllo che non ci siano numeri 
		if(controlloNumeri("Indirizzo") == true){
			document.getElementById("IndirizzoErrore").innerHTML = "*Inserire solo lettere";
			errore=true;
		}else
			document.getElementById("IndirizzoErrore").innerHTML = "";
	}else
		document.getElementById("IndirizzoErrore").innerHTML = "*Campo richiesto";

	
	//controllo il numero dell indirizzo 
	if(document.getElementById("Numero").value == ""){
		document.getElementById("NumeroErrore").innerHTML = "*Campo richiesto";
		errore=true;
	}else
		document.getElementById("NumeroErrore").innerHTML = "";
	

	//controllo Il domicilio
	if(document.getElementById("Domicilio").value != ""){
		//controllo che non ci siano numeri 
		if(controlloNumeri("Domicilio") == true){
			document.getElementById("DomicilioErrore").innerHTML = "*Inserire solo testo";
			errore=true;
		}else
			document.getElementById("DomicilioErrore").innerHTML = "";
	}else{
		document.getElementById("DomicilioErrore").innerHTML = "*Campo richiesto";
			errore=true;
	}
	

	//controllo il CAP
	if(document.getElementById("CAP").value == ""){
		document.getElementById("CAPErrore").innerHTML = "*Campo richiesto";
			errore=true;
	}else
		document.getElementById("CAPErrore").innerHTML = "";
	

	//controllo il numero di telefono cellulare
	if(document.getElementById("TelefonoCellulare").value != ""){
		var regExp = /[0-9]/g;
		if(regExp.test(document.getElementById("TelefonoCellulare").value)){
			document.getElementById("TelefonoCellulareErrore").innerHTML = "";
			//errore=false;
		}else{
			document.getElementById("TelefonoCellulareErrore").innerHTML = "Inserire un numero di telefono valido";
			errore=true;
		}
	}else{
		document.getElementById("TelefonoCellulareErrore").innerHTML = "*Campo richiesto";
			errore=true;
	}
	
	//controllo il numero di telefono cellulare
	if(document.getElementById("TelefonoCasa").value != ""){
		var regExp = /[0-9]/g;
		if(regExp.test(document.getElementById("TelefonoCasa").value)){
			document.getElementById("TelefonoErrore").innerHTML = "";
			//errore=false;
		}else{
			document.getElementById("TelefonoErrore").innerHTML = "Inserire un numero di telefono valido";
			errore=true;
		}
		
	}else{
		document.getElementById("TelefonoErrore").innerHTML = "*Campo richiesto";
		errore=true;
	}
	
	//controllo l'mail
		if(document.getElementById("Email").value != ""){
			var regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
			if(regExp.test(document.getElementById("Email").value))
				document.getElementById("EmailErrore").innerHTML = "";
			else{
				document.getElementById("EmailErrore").innerHTML = "Inserire un email valido";
				errore=true;
			}
		}else{
			document.getElementById("EmailErrore").innerHTML = "*Campo richiesto";
			errore=true;
		}
	/*************************************
	*controllo i dati del genitore/tutore*
	*************************************/
	if(document.getElementById("Maggiorenne").checked == false){
		//Controllo per il nome e cognome 
		if(document.getElementById("NomeCognomeGenitore").value != ""){
			//controllo che ci sia almeno uno spazio
			if(controlloSpazio("NomeCognomeGenitore")){
				document.getElementById("NomeCognomeGenitoreErrore").innerHTML = "*Inserire nome e cognome";
				errore=true;
			}
			//controllo che non ci siano numeri 
			else if(controlloNumeri("NomeCognomeGenitore") == true){
				document.getElementById("NomeCognomeGenitoreErrore").innerHTML = "*Inserire solo lettere";
				errore=true;
			}else
				document.getElementById("NomeCognomeGenitoreErrore").innerHTML ="";
		}else{
			document.getElementById("NomeCognomeGenitoreErrore").innerHTML = "*Campo richiesto";
			errore=true;
		}
		
		//controllo l'indirizzo
		if(document.getElementById("IndirizzoGenitore").value == ""){
			document.getElementById("IndirizzoGenitoreErrore").innerHTML = "*Campo richiesto";
			errore=true;
		}else
			document.getElementById("IndirizzoGenitoreErrore").innerHTML = "";
		
		//controllo il numero dell indirizzo 
		if(document.getElementById("NumeroGenitore").value == ""){
			document.getElementById("NumeroGenitoreErrore").innerHTML = "*Campo richiesto";
			errore=true;
		}else
			document.getElementById("NumeroGenitoreErrore").innerHTML = "";
		
		//controllo Il domicilio
		if(document.getElementById("Domicilio").value != ""){
			//controllo che non ci siano numeri 
			if(controlloNumeri("DomicilioGenitore") == true){
				document.getElementById("DomicilioGenitoreErrore").innerHTML = "*Inserire solo testo";
				errore=true;
			}else
				document.getElementById("DomicilioGenitoreErrore").innerHTML = "";
		}else{
			document.getElementById("DomicilioGenitoreErrore").innerHTML = "*Campo richiesto";
			errore=true;
		}
	
		//controllo il CAP
		if(document.getElementById("CAPGenitore").value == ""){
			document.getElementById("CAPGenitoreErrore").innerHTML = "*Campo richiesto";
			errore=true;
		}else
			document.getElementById("CAPGenitoreErrore").innerHTML = "";
		
		//controllo il numero di telefono cellulare
		if(document.getElementById("TelefonoCellulareGenitore").value != ""){
			var regExp = /[0-9]/g;
			if(regExp.test(document.getElementById("TelefonoCellulareGenitore").value ))
				document.getElementById("TelefonoCellulareGenitoreErrore").innerHTML = "";
			else{
				document.getElementById("TelefonoCellulareGenitoreErrore").innerHTML = "Inserire un numero di telefono valido";
				errore=true;
			}
		}else{
			document.getElementById("TelefonoCellulareGenitoreErrore").innerHTML = "*Campo richiesto";
			errore=true;
		}
		
		//controllo il numero di telefono cellulare
		if(document.getElementById("TelefonoCasaGenitore").value != ""){
			var regExp = /[0-9]/g;
			if(regExp.test(document.getElementById("TelefonoCasaGenitore").value))
				document.getElementById("TelefonoCasaGenitoreErrore").innerHTML = "";
			else{
				document.getElementById("TelefonoCasaGenitoreErrore").innerHTML = "Inserire un numero di telefono valido";
				errore=true;
			}
		}else{
			document.getElementById("TelefonoCasaGenitoreErrore").innerHTML = "*Campo richiesto";
			errore=true;
		}
		
		//controllo l'mail
		if(document.getElementById("EmailGenitore").value != ""){
			var regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
			if(regExp.test(document.getElementById("EmailGenitore").value))
				document.getElementById("EmailGenitoreErrore").innerHTML = "";
			else{
				document.getElementById("EmailGenitoreErrore").innerHTML = "Inserire un email valido";
				errore=true;
			}
		}else{
			document.getElementById("EmailGenitoreErrore").innerHTML = "*Campo richiesto";
			errore=true;
		}
	}
	/***********************************************
	*controllo i dati del ultima scuola frequentata*
	***********************************************/
	if(document.getElementById("Denominazione").value == ""){
		document.getElementById("DenominazioneErrore").innerHTML = "*Campo richiesto";
		errore=true;
	}else
		document.getElementById("DenominazioneErrore").innerHTML = "";
	
	if(document.getElementById("SedeScuola").value == ""){
		document.getElementById("SedeScuolaErrore").innerHTML = "*Campo richiesto";
		errore=true;
	}else
		document.getElementById("SedeScuolaErrore").innerHTML = "";
	/**************************************
	*Controllo la situazione professionale*
	**************************************/
	if(document.getElementById("SituazioneProfessionale").value=="Studente"){
		if(document.getElementById("ScuolaSP").value == ""){
			document.getElementById("ScuolaErrore").innerHTML = "*Campo richiesto";
			errore=true;
		}else
			document.getElementById("ScuolaErrore").innerHTML = "";
		
		if(document.getElementById("SedeScuolaSP").value == ""){
			document.getElementById("SedeScuolaSPErrore").innerHTML = "*Campo richiesto";
			errore=true;
		}else if(controlloNumeri("SedeScuolaSP")){
			document.getElementById("SedeScuolaSPErrore").innerHTML = "*Inserire solo testo";
			errore=true;
		}else
			document.getElementById("SedeScuolaSPErrore").innerHTML = "";
		
	}else if(document.getElementById("SituazioneProfessionale").value=="Lavoro"){
		if(document.getElementById("Professione").value == ""){
			document.getElementById("ProfessioneErrore").innerHTML = "*Campo richiesto";
			errore=true;
		}else if(controlloNumeri("SedeScuolaSP")){
			document.getElementById("ProfessioneErrore").innerHTML = "*Inserire solo testo";
			errore=true;
		}else
			document.getElementById("ProfessioneErrore").innerHTML = "";
	}
	if(errore == true){
		document.getElementById("salvataggio").hidden = false;
	}
	

}




























