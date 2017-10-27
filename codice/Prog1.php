<!DOCTYPE HTML>  
<html>
	<head>
		<script src="js/Funzioni.js"></script>
		<title>Progetto 1</title>
		<style>
			span{
				color:red;
			}
		</style>
	</head>
	<body> 
		
		<form action="controllo.php"  method="post">
			<table>
				<tr>
					<td><div>Dati del diretto interessato </div></td>
				</tr>
				<tr>	
					<td><input type="text" id="NomeCognome" name="NomeCognome" placeholder="Nome Cognome"  ></td>
					<td><span id="NomeCognomeErrore"></span></td>
				</tr>
				<tr>		  
					<td><label>Data di nascita</label></td>
				</tr>
				<tr>	
					<td><input type="date" id="DataDiNascita" name="DataDiNascita"></td>
					<td><span id="DataDiNascitaErrore"></span></td>
				</tr>
				<tr>			
					<td><label>Sesso</label></td>
				</tr>
				<tr>
					<td><input type="radio" name="Sesso" value="male" checked>M</td>
				</tr>
				<tr>
					<td><input type="radio" name="Sesso" value="female">F</td>
				</tr>
				<tr>			
					<td><input type="text" id="Nazionalita" name="Nazionalita" placeholder="Nazionalità" ></td>
					<td><span id="NazionalitaErrore"></span></td>
				</tr>
				<tr>
					<td><input type="text" id="Indirizzo" name="Indirizzo" placeholder="Indirizzo"></td>
					<td><input type="number" id="Numero" name="Numero" placeholder="Numero" min=0></td>
				</tr>
				<tr>			
					<td><span id="IndirizzoErrore"></span></td>
					<td><span id="NumeroErrore"></span></td>
				</tr>
				<tr>			
					<td><input type="text" id="Domicilio" name="Domicilio" placeholder="Domicilio"></td>
					<td><input type="number" id="CAP" name="CAP" placeholder="CAP"></td>
					<td><label id="Cantone"></label></td>
					<td colspan="2"><label id="Nazione"></label></td>
				</tr>
				<tr>
					<td><span id="DomicilioErrore"></span></td>
					<td><span id="CAPErrore"></span></td>
				</tr>
				<tr>
					<td><input type="text" id="TelefonoCellulare" name="TelefonoCellulare" placeholder="Telefono Cellulare"></td>
					<td><input type="text" id="TelefonoCasa" name="TelefonoCasa" placeholder="Telefono Casa"></td>
				</tr>
				<tr>
					<td><span id="TelefonoCellulareErrore"></span></td>
					<td><span id="TelefonoErrore"></span></td>
				</tr>
				<tr>			
					<td><input type="email" id="Email" name="Email" placeholder="Email"></td>
				</tr>
				<tr>
					<td><span id="EmailErrore"></span></td>
				</tr>
				<tr>			
					<td><br>
						<input type="checkbox" id="Maggiorenne" name="Maggiorenne" onClick="maggiorenne()">
						<label for="Maggiorenne">Maggiorenne</label>
					</td>
				</tr>
				<tr>		
					<td><div id="AutoritaParentaleSpan" >Dati autorità parentale</div></td>
				</tr>
				
				<tr>
						<td><input type="text" id="NomeCognomeGenitore" placeholder="Nome Cognome" name="AutoritaParentale"></td>
						<td>	
							<select id="Ruolo" name="AutoritaParentale">
								<option value="Padre">Padre</option>
								<option value="Madre">Madre</option>
								<option value="Tutore">Tutore</option>
							</select>	
						</td>
				</tr>
				<tr>			
					<td><span id="NomeCognomeGenitoreErrore" name="AutoritaParentale"></span></td>
				</tr>
				<tr>			
					<td><input type="text" id="IndirizzoGenitore" placeholder="Indirizzo" name="AutoritaParentale"></td>
					<td><input type="number" id="NumeroGenitore" placeholder="Numero" min=0 name="AutoritaParentale"></td>
				</tr>
				<tr>
					<td><span id="IndirizzoGenitoreErrore" name="AutoritaParentale"></span></td>
					<td><span id="NumeroGenitoreErrore" name="AutoritaParentale"></span></td>
				</tr>
				<tr>			
					<td><input type="text" id="DomicilioGenitore" placeholder="Domicilio" name="AutoritaParentale"></td>
					<td><input type="number" id="CAPGenitore" placeholder="CAP" name="AutoritaParentale"></td>
					<td><label id="CantoneGenitore" name="AutoritaParentale"></label></td>
					<td><label id="NazioneGenitore" name="AutoritaParentale"></label></td>
				</tr>
				<tr>		
					<td><span id="DomicilioGenitoreErrore" name="AutoritaParentale"></span></td>
					<td><span id="CAPGenitoreErrore" name="AutoritaParentale"></span></td>
				</tr>
				<tr>			
					<td><input type="text" id="TelefonoCellulareGenitore" placeholder="Telefono Cellulare" name="AutoritaParentale"></td>
					<td><input type="text" id="TelefonoCasaGenitore" placeholder="Telefono Casa" name="AutoritaParentale"></td>
				</tr>
				<tr>
					<td><span id="TelefonoCellulareGenitoreErrore" name="AutoritaParentale"></span></td>
					<td><span id="TelefonoCasaGenitoreErrore" name="AutoritaParentale"></span></td>
				</tr>
				<tr>			
					<td><input type="email" id="EmailGenitore" placeholder="Email" name="AutoritaParentale"></td>
					<td><span id="EmailGenitoreErrore" name="AutoritaParentale"></span></td>
				</tr>
				
				<tr>		
					<td><br><div>Scuole</div></td>
				</tr>
				<tr>
					<td>
						<select id="Scuola" name ="Scuola">
							<option value="Elementare">Elementare</option>
							<option value="Media">Media</option>
							<option value="Superiore">Superiore</option>
						</select>
					</td>
				</tr>
				<tr>			
					<td><input type="text" id="Denominazione" name="Denominazione" placeholder="Denominazione" ></td>
					<td><span id="DenominazioneErrore"></span></td>
				</tr>
				<tr>
					<td><input type="text" id="SedeScuola" name="SedeScuola" placeholder="Sede"></td>
					<td><select id="Anno" name="Anno" onload="creaSelectAnno('Anno')"></select></td>
				</tr>
				<tr>
					<td><span id="SedeScuolaErrore"></span></td>
				</tr>
				<tr>		
					<td><br><div>Situazione Professionale</div><td>
				</tr>
				<tr>
					<td>
						<select id="SituazioneProfessionale" name="SituazioneProfessionale" onchange="situazioneProfessionale()">
							<option value="Studente" selected>Studente</option>
							<option value="Lavoro">Lavoro</option>
						</select>
					</td>
				</tr>
				<tr>
					<td><input type="text" id="ScuolaSP" placeholder="Scuola"  name="Studente"></td>
					<td><span id="ScuolaErrore" name="StudenteErrore"></span></td>
				</tr>
				<tr>
					<td><input type="text" id="SedeScuolaSP" placeholder="Sede" name="Studente"></td>
					<td><span id="SedeScuolaSPErrore" name="StudenteErrore"></span></td>
				</tr>
				<tr>
					<td><select id="AnnoScuola" name="Studente"></select></td>
				</tr>
				<tr>
					<td><input type="text" id="Professione" placeholder="Professione" name="Lavoro" hidden="true"></td>
					<td><span id="ProfessioneErrore" name="Lavoro" hidden="true"></span><br>
				</tr>
				<tr>
					<td>
						<input type="radio" id="Apprendista" value="Apprendista" name="Lavoro" checked hidden="true">
						<label for="Apprendista" name="Lavoro" hidden="true">Apprendista</label>
					</td>
					<td><select id="AnnoLavoro" name="Lavoro" hidden="true"></select></td>
				</tr>
				<tr>
					<td>
						<input type="radio" id="Professionista" value="Professionista" name="Lavoro" text="Professionista" hidden="true">
						<label for="Professionista" name="Lavoro" hidden="true">Professionista</label>
					</td>
				</tr>
				<tr>
					<td>
						<input type="radio" id="Indipendente" value="Indipendente" name="Lavoro" text="Indipendente" hidden="true">
						<label for="Indipendente" name="Lavoro" hidden="true">Indipendente</label>
					</td>
				</tr>
				<tr>			
					<td colspan="4"><textarea rows="4" cols="100" maxlength="239" id="Osservazioni" placeholder="Osservazioni" ></textarea></td>
				</tr>
				<tr>
					<td><input type="Button" onClick="verificaJS()" value="Controlla"></td>
					<br>
				</tr>
				<tr>
					<td><input type="submit" id="salvataggio" value="Salva" hidden="true"></td>
				</tr>
			</table>
		</form> 
		<script src="js/cantoni e nazioni.js"></script>
		
	</body>
</html>