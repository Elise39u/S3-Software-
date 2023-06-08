# Anaylse usabillty testing 
Ik heb met 4 mensen die ik ken en close to heart zijn usabillty tesitng gedaan.      
Ik heb iedere gevraagd de volgende 3 taken te doen om de applicatie van mij te testen.      
Sommige test heb ik uitegevoert omdat de communicatie via discord ging. Ik heb alleen dan gedaan wat mijn tester zei.     
Alleen de taken die zijn geplanned waren:      
1. Taak 1 het toevoegen van een song aan de applicatie (Add song) (Ook liet ik de mensen de songs vooraf kiezen omdat tegen te gaan)      
1. Taak 2 Toevoegen van difficulties. (Dit touched Edit song aangezien op toevoegen je het id mist voor difficulties)      
1. Taak 3 Deleten van je toegevoegde song (Dit touched de delete functie)      
        
#Links naar de testen
Door github file size limit heb ik de testen geupload als verbogen links op youtube.         
*Een notitie door een fout bij Elif zijn eerste test zijn op sommige testen de chrome task te zien.    
Was het vergeten uit te zetten*        
De links kan je hieronder vinden:     
## Alco     
[Alco Taak 1 Add song](https://www.youtube.com/watch?v=WoVxjpGrTVs)        
[Alco Taak 2 Add difficulties](https://www.youtube.com/watch?v=rioJuYDTFWk)        
[Alco Taak 3 Delete song](https://www.youtube.com/watch?v=M59nwtN7pXQ)      
## Linsday         
[Lindsay Taak 1 Add Song](https://www.youtube.com/watch?v=XNcejmMUqBw)        
[Lindsay Taak 2 Add difficulties](https://www.youtube.com/watch?v=OZduiyepJI4)      
[Lindsay Taak 3 Delete Song](https://www.youtube.com/watch?v=VMG4HsN4JFQ)       
## Elif       
[First try with Elif. Met hem probeerde ik de teste als eerste vandaar de fouten](https://www.youtube.com/watch?v=tnFUQEEn-Ew)        
[Elif Taak 1 Add Song](https://www.youtube.com/watch?v=Fg0jkIaH7ic)        
[Elif Taak 2 Add difficulties](https://www.youtube.com/watch?v=qoFZ554cGQU)         
[Elif Taak 3 Delete Song](https://www.youtube.com/watch?v=u8lg6eqSK5g)       
## Lilliya      
[Lilliya Taak 1 Add Song](https://www.youtube.com/watch?v=aRR3bjYEwVQ)        
[Lilliya Taak 2 Add difficulties](https://www.youtube.com/watch?v=31x-Wamq-_A)         
[Lilliya Taak 3 Delete Song](https://www.youtube.com/watch?v=9unYgxrOQTs)        
         
Uit dit kwamen natuurlijk een aantal punten naar voren die mij opvielen maar ook me testers.     
Laat ik de punten is per kopje bespreken    
# Feedback van testers
Voor ik begin moet ik iets wel toegeven wat ik niet aan de testers heb vertelt. 
Iedereen heeft me project diva zien spelen alleen niemand weet hoe de rating werkt. 
2 dingen zijn niet vertelt met het idee om te kijken hoe mensen dat aanpakken:    
- Star rating in project diva gaat meestal zo dat. Easy < Normal < Hard < Extreme. In sommige gevallen is Extreme hoger dan Extra Extreme maar dat komt zelden voor. De rest is wel altijd lager      
- Op het invoeren van een difficulty kan je kiezen tussen 0 en 15. Dit kwam ook wel een beetje terug als issues maar is iets wat ik niet zei. Puur omdat in Pjd de rating ligt tussen 0 - 10. In sommige modded gevallen kan het oplopen. Het max wat ik ooit heb gezien is 15 vandaar die keuze.     
     
Dat levert niet op dat er wel wat feedback punten waren die zijn als volgt:
## Error en Succes Handeling      
Eigenlijk maakte iedereen wel een opmerking over de handling in de applicatie.      
Dit vooral gericht dat het niet duidelijke was of iets slaagde of faalde.     
Meeste gaven aan dat de pagina te lang was voor add song en bij de edit song modal vooral.     
Ook kwam er nog paar keer voorbij als tip om het te doen als Delete Song. Daar zag je direct resultaat.    

Tips die ik heb gekregen zijn:     
- Zou je niet op een succesfull add song een redirect terug kunnen doen naar de song overzicht     
- Bijvoorbeeld zou het optie zijn als je op submit klikt om terug naar boven te worden gescrollt automatische. Voor het geval van een error?
- De difficultie update schijnt pas bij 2x te werken?
     
Na mensen zo te gezien hebben kan ik snappen waar de feedback vandaan komt.    
Dus altijd waardevol om mee te nemen.      
## De difficulties issue
Er waren een paar problemen bij mensen met de difficulties. Zoals eerder gezegd zijn er 2 dingen express weggehouden om te kijken wat het resultaat werd.     
Het invoeren van tussen 0 - 15 leverde wel wat problemen op bij testers. Ik kreeg namelijke bij iedereen de vraag: Elise waarom wordt het automatische terug gezet naar een 0.     
Na het uitleggen kreeg ik dus de tip om in *cursief te zetten van rating kan tussen 0 en 15 worden ingevuld*       
Besides dat kwam ook al het eedere probleem naar boven van dat op een of andere manier de difficulties niet worde geupdate.     
Dat vergt dus nog some bug fixing.     
## Adding song issues
Ook waren hier nog een paar issues die ik eigenlijk over het hoofd heb gezien     
Laat ik die issues nog even kort door nemen     
### Adding non image files 
Tijdens het toevoegen van een song bij alco kreeg ik de volgende vraag van hem.     
Elise wat als je is de artmd.ini kiest als song logo in plaats van een image.      
Natuurlijk kon ik zeggen dat hoort niet maar dacht als dat jouw keuze is dan sure. Dus we gingen uploaden en tot suprise van mij het werkte. Dit is natuurlijk niet de bedoeling en het hoort eigenlijk alleen maar:     
- Web files
- Png
- Jpg
- Jpeg
    
Te kunen gebruiken niet enige andere extensises. Dus dat is genoteerd om nog mee te nemen voor bug fixing. Tot slot had ik er zelf niet aan gedacht.      
### De redirect issue.     
Lilliya liet me eigenlijk zien waarom voornamelijke de handeling van success en errors beter moet op beide de Add song pagina en Edit song modal.      
In lilliyas taak 1 zie je eigenlijk de issue en wat er gebeurt. Na het toevoegen van een song gebeurt er eingelijk voor de gebruiker niks.     
Dus wat doet ze. Ze klikt nog een keer en nog een keer. Dus ik had gezegd Lilliya schat je hoeft niet 3x te klikken en ze zei oh. Dit laat zien dat de UX in de pagina eigenlijk toch best nog tegen valt voor de gebruikers. Dus een possible redirect op een success zou hier een goede tip zijn zoals al is aangegeven.      
      
## Verder feedback
Eigenlijk waren dit de main issues voor de functies die momenteel in de applicatie zitten. Delete song was tot verassing aardig snel te snappen bij elke tester. De icontjes waren tot slot makkelijke en goed te begrijpen. Elif gaf ook aan dat het handig was dat ze oplichten als je erover heen hovert.      
     
Toch kwam nog de vraag bij Elif, Alco en Lindsay van waarom zijn bepaalde links er als ze niks kunnen doen nog. Ik heb gezegd ja ik snap de issue maar momenteel zijn dat features die nog komen. Bij een paar kan je zien in de videos dat ze kliken op de info icoon. Dat niks doet. In verdere iteraties wordt dit dus een info pagina van de song. Dus als gezegd ik snap de vraag van de testers maar het is toch iets om mee te nemen mocht ik dit in productie gooien.     
      
Elif en Lilliya hadden nog een suggestie voor mij. Is het misschien niet een idee om een dropdown menu te maken van je game section in add song. Tot slot zeiden ze dat ik had aangegeven dat er meer een bepaalde set of games is. Toen ze dit aangaven dacht ik eigenlijk is dat wel slim om meetenemen. Vandaar de opmerking hier nog.    

# Conclusie testing
Voor volgende ietraties is een ding duidelijke. Handeling moet anders en UX vriendelijker. Nu is alleen de Delete song echt goed af en duidelijke te begrijpen. Hier en daar zijn er dus ook nog problemen die gefixt moeten worden voor productie. Zoals de file issue in add song als voorbeeld.     
     
Ook zal er moeten worden gekeken waarom difficulties niet goed updaten. Dit komt miss door de state issues met React.js maar zal ook verder onderzoeking nodig hebben. Mochten we gaan redirecten op een success edit. Dan zal de difficulties ook daadwerlijke moeten worden geupdate.    
     
Als laatste is het toch denk ook mooi om de suggestie van Elif en Lilliya mee te nemen voor de game selection. Tot slot zijn maar een bepaald aantal games beschikbaar. Dus het miss ook idd slimmer om te zeggen als UX wise van:      
We hebben Game A, Game B, Game C en Game D. Meerdere keuzes mogelijke      
Dit helpt namelijke ook nieuwe gebruikers die niet zoveel weten van project diva met het kiezen van een game. UX wise denk ik dat op deze kleine details misschien toch aardig wat winst te halen is en het aardig kan helpen in de applicatie. 
