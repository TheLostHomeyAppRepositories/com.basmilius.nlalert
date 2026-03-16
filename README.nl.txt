NL Alert houdt je op de hoogte wanneer er een noodmelding is uitgegeven voor jouw omgeving. De app controleert elke minuut de NL Alert API en kijkt of er een actief alert invloed heeft op de locatie van jouw Homey.

Zodra een nieuw alert wordt gedetecteerd, vuurt een flow-trigger af zodat je direct kunt reageren — zet lampen aan, stuur een notificatie, of activeer een andere automatisering die je hebt ingesteld.

Flow cards:

- Trigger: vuurt af wanneer er een nieuw NL Alert is ontvangen voor jouw locatie. Geeft het alertbericht, het ID, de starttijd en de eindtijd mee als flow-tokens.
- Conditie: controleert of er momenteel een actief NL Alert is voor jouw locatie.
- Actie: haalt alle actieve NL Alerts op voor jouw locatie en geeft het aantal, het eerste alertbericht en een volledige JSON-lijst mee als flow-tokens.

De app gebruikt de ingestelde locatie van jouw Homey om te bepalen of een alert invloed op jou heeft. Er is geen aanvullende configuratie nodig.
