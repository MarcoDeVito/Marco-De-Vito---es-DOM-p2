
**Traccia 1:**
- Partendo da una pagina HTML con un titolo principale ed un pulsante, scrivere un programma che al click del pulsante, permetta di cambiare il colore del testo del titolo utilizzando l'array dei colori
- Array di colori:
`let colors = ['red', 'black', 'green', 'blue', 'yellow'];`


**Traccia 3:**
Avremo due elementi HTML:
- un pulsante che ci consentira' di ordinare i contatti
- un contenitore, in cui verranno visualizzati i contatti
`<button id="btnAsc">Ordina in modo crescente</button>
<div class="wrapper"></div>`

Ordinare in ordine alfabetico un elenco di contatti:
- al primo click del pulsante, verranno ordinati dalla A alla Z
- al secondo click del pulsante, verranno ordinati dalla Z alla A
- dato un'array di partenza:
`contacts = [
    { 'id': 1, 'name': 'Nicola'},
    { 'id': 2, 'name': 'Fabio'},
    { 'id': 3, 'name': 'Luca'},
    { 'id': 4, 'name': 'Giulia'}
] `

*EXTRA:*
- Inserire un secondo pulsante che permetta di ordinarli in base all'id del contatto
- Inserire un terzo pulsante che permetta di nascondere o visualizzare tutta la lista dei contatti
