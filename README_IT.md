## DESCRIZIONE
Questa libreria ha lo scopo di permettere l'utilizzo delle ``viewport unit`` anche sui browser che non le interpretano.
Supporta l'utilizzo di tutte le unità ``(vh | vw | vmin | vmax)`` combinate con tutte le proprietà del ``CSS3`` che le supportano ``(height | width | font-size | padding | ecc...)``.

Per fare ciò semplicemente basta aggiungere al div interessato il seguente attributo:

``A-B="X"``

Dove: 
  * ``A`` può essere una delle quattro viewport unit. ``(vh | vw | vmin | vmax)``
  * ``B`` può essere una qualsiasi proprietà del ``CSS3`` supportata. ``(height | width | font-size | padding | ecc...)``
  * ``X`` può essere un valore numerico qualsiasi che indica la percentuale rispetto all'unità sopra indicata. ``(10 | 20 | 50 | 100 | ecc...)``

Esempio:
```html
<div vh-height="100" vw-width="100">
	Questo div riempie lo schermo sia in larghezza che in altezza
</div>
```	
Per fare ciò la libreria usa il ``supporto nativo`` delle ``viewport unit`` quando il browser lo permette, mentre quando non disponibili utilizza ``JavaScript`` per adattare l'unità di misura alla pagina.
Per motivi di tempo, il codice ``JavaScript`` della libreria utilizza alcune ``API`` della libreria ``jQuery`` (Qualsiasi versione di ``jQuery`` è supportata).

``Quando e se avrò tempo, scriverò una versione della libreria in JavaScript puro.``

## PERSONALIZZAZIONE
Siccome le proprietà che supportano le ``viewport unit`` sono relativamente molte ho creato un programma in ``C++11`` che permette di selezionare le proprietà e le unità che servono al vostro progetto per creare una versione della libreria ``ad-hoc`` più leggera.

Per fare ciò basterà aprire il file ``"viewport-generator.cpp"`` e rimuovere/aggiungere le ``proprietà`` e le ``viewport unit`` da ``X`` e da ``Y`` e ``ricompilare`` il sorgente.
Verranno quindi generati due file ``"viewport.css"`` e ``"viewport.js"`` pronti per essere usati nel vostro progetto.

## INCLUSIONE LIBRERIA
Aggiungi il seguente codice all'interno dei tag ``<head></head>``:
```html
<link rel="stylesheet" href="viewport.min.css">
<script src="viewport.min.js"></script>
```
oppure:
```html
<link rel="stylesheet" href="viewport.css">
<script src="viewport.js"></script>
```	
## ESEMPIO DI INCLUSIONE DELLA LIBRERIA ALL'INTERNO DI UNA PAGINA
```html
<!DOCTYPE HTML>
<html>
<head>
	<title>Viewport Test</title>
	<link rel="stylesheet" href="./css/viewport.min.css">
	<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
	<script src="./js/viewport.min.js"></script>
</head>
<body style="margin: 0;padding: 0;border: 0;">
	<div vh-height="100" vw-width="100" style="background-color:#ff0000;">
		Questo rosso div riempie lo schermo sia in larghezza che in altezza.
	</div>
</body>
</html>
```	
