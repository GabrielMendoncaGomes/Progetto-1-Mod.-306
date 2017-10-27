<?php
			
if ($_SERVER["REQUEST_METHOD"] == "POST") {	
	$file = "Espoprofessioni-2018.csv";
	$puntatore = fopen($file, "a");
	$dati = array(
		$NomeECognomeRagazzo = $_POST["NomeCognome"],
		$DataDiNascitaRagazzo = $_POST["DataDiNascita"],
		$Sesso = $_POST["Sesso"],
		$NazionalitàRagazzo = $_POST["Nazionalita"],
		$IndirizzoRagazzo = $_POST["Indirizzo"],
		$NumeroIndirizzoRagazzo = $_POST["Numero"],
		$DomicilioRagazzo = $_POST["Domicilio"],
		$CAPRagazzo = $_POST["CAP"],
		$CantoneRagazzo = $_POST["Cantone"],
		$NazioneRagazzo = $_POST["Nazione"],
		$TelefonoCellulareRagazzo = $_POST["TelefonoCellulare"],
		$TelefonoCasaRagazzo = $_POST["TelefonoCasa"],
		$EmailRagazzo = $_POST["Email"],
		
		$NomeECognomeGenitore = $_POST["AutoritaParentale"],
		/
									
		$TipoScuola = $_POST["Scuola"],
		$DenominazioneScuola = $_POST["Denominazione"],
		$SedeScuola = $_POST["SedeScuola"],
		$annoScuola =  $_POST["Anno"],
		
		$situazioneProfessionale =  $_POST["SituazioneProfessionale"],
									
		$ScuolaSituazioneProfessionale = $_POST["Studente"],
		
		$tipoLavoro = $_POST["Lavoro"],
	);
	fputcsv($puntatore, $dati);
	fclose($puntatore);
	
	header("Refresh:0; url=Prog1.php");
}	
?>