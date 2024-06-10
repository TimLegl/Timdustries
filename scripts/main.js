/* Without Arrow Functions
document.addEventListener('DOMContentLoaded', function() {
  const logoBig = document.getElementById('company-logo');

  function klasseRotierenHinzufuegen() {
    logoBig.classList.add('rotieren');
  }

  function klasseRotierenEntfernen() {
    logoBig.classList.remove('rotieren');
  }

  logoBig.addEventListener('mouseenter', function() {
    klasseRotierenHinzufuegen();
  });

  logoBig.addEventListener('mouseleave', function() {
    if (logoBig.classList.contains('rotieren')) {
      setTimeout(klasseRotierenEntfernen, 5000);
    }
  });
});
*/

/* Ohne Parameter
document.addEventListener('DOMContentLoaded', () => {
  const logoBig = document.getElementById('company-logo');

  const klasseRotierenHinzufuegen = () => {
    logoBig.classList.add('rotieren');
  };

  const klasseRotierenEntfernen = () => {
    logoBig.classList.remove('rotieren');
  };

  logoBig.addEventListener('mouseenter', klasseRotierenHinzufuegen);

  logoBig.addEventListener('mouseleave', () => {
    if (logoBig.classList.contains('rotieren')) {
      setTimeout(klasseRotierenEntfernen, 5000);
    }
  });
});
*/

// V20 Kopie
// Mit Parametern
document.addEventListener('DOMContentLoaded', () => {
  // Variablendeklaration
  const logoBig = document.getElementById('company-logo');
  const logoSmall = document.getElementById('selfmade-icon');
  let isRunning = false;

  // Funktionen
  const klasseRotierenHinzufuegen = (elementName) => {
    elementName.classList.add('rotieren');
  };

  const klasseRotierenEntfernen = (elementName) => {
    elementName.classList.remove('rotieren');
  };

  const ereignisMouseEnter = (elementName) => {
    if(!isRunning) {
      isRunning = true;
      klasseRotierenHinzufuegen(elementName);
      if (elementName.classList.contains('rotieren')) {
        setTimeout(() => {
          klasseRotierenEntfernen(elementName);
          isRunning = false;
        }, 3000); // Muss mit Wert in Keyframe in CSS übereinstimmen, sonst passt Timing nicht
      } else {
        isRunning = false;
      }
    }
  };

  // Eventlistener hinzufügen und Funktionsaufruf mit dem jeweigen Element als Argument 
  logoBig.addEventListener('mouseenter', () => ereignisMouseEnter(logoBig));
  logoSmall.addEventListener('mouseenter', () => ereignisMouseEnter(logoSmall));

  const absendenElement = document.getElementById("absenden-element");
  let elementVorname = document.getElementById("vorname");
  let elementNachname = document.getElementById("nachname");
  let elementEmail = document.getElementById("email");
  let elementTelefon = document.getElementById("telefon");

  /*
  RegEx Default
  /abc

  Klammern
  [abc]  = Finde irgendein Zeichen innerhalb dieser Klammern
  [^abc] = Finde irgendein Zeichen NICHT innerhalb dieser Klammern. Caret bedeutet innerhalb einer Zeichen-Klasse [^...] NOT.
  [a-z0-9ß]{4,} = 4 oder mehr Zeichen von a-z oder 0-9 oder "ß"

  Matazeichen
  ^   = NICHT das folgende Zeichen. Hat innerhalb einer Zeichen-Klasse [...] die bedeutung NOT.

  \s  = Leerzeichen
  \d  = Zahlen von 0-9
  \.  = Genau 1 "." escaped mit "\" (weil der Punkt sonst ein beliebiges Zeichen bedeuten würde)
  \.(de|com)  = Ein Punkt mit genau "de" oder "com" darauf folgend

  Quantifizierer
  o{3} = Passt auf jede Zeichenfolge, die 3 aufeinanderfolgende "o" enthält
  i{3,} = Passt auf jede Zeichenfolge, die MINDESTENS 3 aufeinanderfolgende "i" enthält
  x{3,5} = Passt auf jede Zeichenfolge, die zwischen einschließlich 3 und 5 aufeinanderfolgende "x" enthält

  n+  = Passt auf jede Zeichenfolge die mindestens 1 "n" enthält
  
  Beispiele
  const emailMuster = /^[a-z]{4,}@[a-z]+(\.(de|com))$/i;
  ^ - Anker für den Anfang der Zeichenkette
  [a-z]{4,} - Mindestens 4 Buchstaben von a-z
  @ - Das @-Zeichen
  [a-z]+ - Eine oder mehrere Buchstaben von a-z (für den Teil vor der Top-Level-Domain)
  \. - Escapet Punkt, um den Punkt im regulären Ausdruck zu matchen
  (de|com) - Entweder "de" oder "com" (in einer Gruppe, um die Alternative zu definieren)
  $ - Anker für das Ende der Zeichenkette
  /i - Flag für case-insensitive Übereinstimmung
  Dieser reguläre Ausdruck überprüft, ob die Zeichenkette:

  /^[a-z0-9ß]{4}@(web|hotmail|outlook|gmail|proton)(\.(de|com))$/i;
  - /^  = Beginn des Strings
  - 4 Zeichen von a-z oder 0-9 oder ein "ß"
  - Gefolgt von einem "@"
  - Gefolgt von einem web oder hotmail oder...
  - Gefolgt von einem "." (escaped mit "\", da ein Punkt sonst für ein beliebiges Zeichen steht)
  - Gefolgt von einem de oder com
  - $   = Ende des Strings
  - /i  = Groß- und Kleinschreibung wird nicht berücksichtigt

  */
  const nachnameMuster = /^[a-zäöüßàáâãäåçèéêëìíîïðñòóôõöùúûüýÿæœ]{3,}$/i;
  const vornameMuster = /^[a-zäöüßàáâãäåçèéêëìíîïðñòóôõöùúûüýÿæœ]{2,}$/i;
  const emailMuster = /^[a-z0-9ß]{4,}@(web|hotmail|outlook|gmail|proton)(\.(de|com))$/i;
  const telefonMuster = /^\d{10,}$/;


  // Funktion für Fehlermeldung
  const zeigeFehlermeldung = (dasElement, meldung) => {
    // Dem Element die CSS-Klasse "fehlermeldungText" hinzufügen
    elementEmail.classList.add("fehlermeldungText");
    const bestehenderHinweis = document.querySelector(".hinweisRahmen");
    if(bestehenderHinweis) {
      bestehenderHinweis.remove()
    }
    // Container erstellen
    const hinweisContainer = document.createElement("div");
    // Container die CSS-Klassen für Rahmen, Dreieick am Rahmen und Text Styling hinzufügen
    hinweisContainer.classList.add("hinweisRahmen", "hinweisRahmenDreieck", "hinweisTextStyle");

    // Dem Element die CSS-Klasse für den ::placeholder-Style hinzufügen
    dasElement.classList.add("fehlermeldungText");


    // "hinweisText" statt "vornameHinweis", "nachnameHinweis"...
    const hinweisText = document.createElement("p");  // p-Element erstellen
    // Variable mit Wert der Meldung befüllen (2. Parameter)
    hinweisText.textContent = meldung;
    // Meldung im Container einfügen
    hinweisContainer.appendChild(hinweisText);
    // Hinweis-Container hinter dem Input-Feld erstellen
    dasElement.insertAdjacentElement("afterend", hinweisContainer);
  };


  // Funktioniert mit "submit"-Event nicht, da Formular mittels preventDefault() nicht abgeschickt wird
  // Alternativ auf das "submit"-Element von dem Formular abfangen(nicht von dem Button)

  // FEHLER WENN MAN ENTER DRÜCKT WIRD MELDUNG GEZEIGT
  absendenElement.addEventListener("click", function(meinAbsendenEvent){
    meinAbsendenEvent.preventDefault();

    console.log("Der Submit Button wurde geklickt.");

    // VORNAME
    if(elementVorname.value === "") {
      //console.log("Das Vorname Eingabefeld ist leer");
      elementVorname.classList.add("fehlermeldungText");
      // placeholder-Inhalt, wenn Feld leer abgesendet wird
      elementVorname.setAttribute("placeholder", "Bitte Vornamen eingeben.");
    } else if(!vornameMuster.test(elementVorname.value)) {
      zeigeFehlermeldung(elementVorname, "Der Vorname entspricht nicht dem Muster. Mindestens 2 Zeichen und nur Buchstaben von A-Z.");
      // placeholder-Inhalt, sobald Fehlermeldung gezeigt wurde und Feldinhalt gelöscht wird
      elementVorname.setAttribute("placeholder", "Vorname");
      elementVorname.classList.add("fehlermeldungText");

    } else {
      // placeholder-Inhalt, wenn Muster richtig war und Feldinhalt wieder gelöscht wurde
      elementVorname.setAttribute("placeholder", "Vorname");
      elementVorname.classList.add("fehlermeldungText");
    }

    /* 
    AUSGELAGERT in Funktion zeigeFehlermeldung
    Bestehenden Hinweis entfernen
    const bestehenderHinweis = document.querySelector('.hinweisRahmen');
    if (bestehenderHinweis) {
      bestehenderHinweis.remove();
    }
    */

    // NACHNAME
    if(elementNachname.value === "") {
      // console.log("Das Nachname Eingabefeld ist leer");
      elementNachname.classList.add("fehlermeldungText");
      // placeholder-Inhalt, wenn Feld leer abgesendet wird
      elementNachname.setAttribute("placeholder", "Bitte Nachnamen eingeben.");
      // Prüfung auf Muster
      } else if(!nachnameMuster.test(elementNachname.value)) {
        zeigeFehlermeldung(elementNachname, "Der Nachname entspricht nicht dem Muster. Mindestens 3 Zeichen und nur Buchstaben von A-Z.");
        // placeholder-Inhalt, sobald Fehlermeldung gezeigt wurde und Feldinhalt gelöscht wird
        elementNachname.setAttribute("placeholder", "Nachname");
        elementNachname.classList.add("fehlermeldungText");
      } else {
        // placeholder-Inhalt, wenn Muster richtig war und Feldinhalt wieder gelöscht wurde
        elementNachname.setAttribute("placeholder", "Nachname");
        elementNachname.classList.add("fehlermeldungText");
      }
    
      /*
      elementNachname.classList.add("fehlermeldungText");

       Container erstellen (um Rahmen und Text gemeinsam entfernen zu können)
      const hinweisContainer = document.createElement("div");
      hinweisContainer.classList.add("hinweisRahmen", "hinweisRahmenDreieck");
      */

      /* Hinweis erstellen
      const nachnameHinweis = document.createElement("p");
      nachnameHinweis.classList.add("hinweisRahmenDreieck");
      nachnameHinweis.textContent = "Das Nachname Feld darf nicht leer sein.";

      // Rahmen der Fehlermeldung
      const fehlerBox = document.createElement("div");
      fehlerBox.classList.add("hinweisRahmen");
      fehlerBox.appendChild(nachnameHinweis);

      // Fehlermeldung hinzufügen
      elementNachname.insertAdjacentElement("afterend" ,fehlerBox);

      // Prüfung auf Regular Expression
    } else if(!nachnameMuster.test(elementNachname.value)) {
      console.log("Der Nachname entspricht nicht dem Muster.");

      // Container erstellen
      const hinweisContainer = document.createElement("div");
      hinweisContainer.classList.add("hinweisRahmen", "hinweisRahmenDreieck");

      // Hinweis erstellen
      const nachnameHinweis = document.createElement("p");
      nachnameHinweis.classList.add("hinweisRahmenDreieck");
      nachnameHinweis.textContent = "Der Nachname darf nur Buchstaben von A-Z enthalten und muss mindestens 3 Zeichen lang sein.";

      // Rahmen der Fehlermeldung
      const fehlerBox = document.createElement("div");
      fehlerBox.classList.add("hinweisRahmen");
      fehlerBox.appendChild(nachnameHinweis);
      
      // Fehlermeldung hinzufügen
      elementNachname.insertAdjacentElement("afterend" ,fehlerBox);
    }

    STANDARD FEHLERMELDUNG FELDER VON BROWSER BEARBEITEN
    elementEmail.setCustomValidity("Hobedierbsen.");
    elementEmail.reportValidity();
    */

    // E-MAIL
    if(elementEmail.value === "") {
    elementEmail.classList.add("fehlermeldungText");
    // placeholder-Inhalt, wenn Feld leer abgesendet wird
    elementEmail.setAttribute("placeholder", "Bitte E-Mail eingeben.");
    // Prüfung auf Muster
    } else if(!emailMuster.test(elementEmail.value)) {
      zeigeFehlermeldung(elementEmail, 'Die E-Mail entspricht nicht dem Muster. Mindestens 4 Zeichen von A-Z oder 0-9 einschließlich "ß", gefolgt von einem "@" und einer dieser Domains: "web|hotmail|outlook|gmail|proton", gefolgt von einem "." gefolgt von einem "de|com".');
      // placeholder-Inhalt, sobald Fehlermeldung gezeigt wurde und Feldinhalt gelöscht wird
      elementEmail.setAttribute("placeholder", "E-Mail");
      elementEmail.classList.add("fehlermeldungText");
    } else {
      // placeholder-Inhalt, wenn Muster richtig war und Feldinhalt wieder gelöscht wurde
      elementEmail.setAttribute("placeholder", "E-Mail");
      elementEmail.classList.add("fehlermeldungText");
    }

    // TELEFON
    if(elementTelefon.value === "") {
    elementTelefon.classList.add("fehlermeldungText");
    // placeholder-Inhalt, wenn Feld leer abgesendet wird
    elementTelefon.setAttribute("placeholder", "Bitte Telefon eingeben.");
    // Prüfung auf Muster
    } else if(!telefonMuster.test(elementTelefon.value)) {
      zeigeFehlermeldung(elementTelefon, "Die Telefonnummer entspricht nicht dem Muster. Mindestens 10 Zahlen von 0-9.");
      // placeholder-Inhalt, sobald Fehlermeldung gezeigt wurde und Feldinhalt gelöscht wird
      elementTelefon.setAttribute("placeholder", "Telefon");
      elementTelefon.classList.add("fehlermeldungText");
    } else {
      // placeholder-Inhalt, wenn Muster richtig war und Feldinhalt wieder gelöscht wurde
      elementTelefon.setAttribute("placeholder", "Telefon");
      elementTelefon.classList.add("fehlermeldungText");
    }
  });


  /* Funktion um Event Listener Eingabefeldern hinzuzufügen
  elementNachname.addEventListener("keyup", () => {
    let bestehenderHinweis = document.querySelector('.hinweisRahmen');
    // Prüft ob Wert in Eingabefeld und Hinweis vorhanden
    if(bestehenderHinweis) {
      // Entfernt Hinweis bei erfolgreicher Prüfung
      bestehenderHinweis.remove();
    }
  });
  */

  function eventListenerZuElementHinzufuegen(eingabefeldElement) {
    eingabefeldElement.addEventListener("keyup", () => {
      // Hinweis-Element auswählen
      let bestehenderHinweis = document.querySelector(".hinweisRahmen");
      if(bestehenderHinweis) {
        bestehenderHinweis.remove();
      }
    });
  }

  eventListenerZuElementHinzufuegen(elementNachname);
  eventListenerZuElementHinzufuegen(elementVorname);
  eventListenerZuElementHinzufuegen(elementEmail);
  eventListenerZuElementHinzufuegen(elementTelefon);



});


// Fehlermeldung bei allen Eingabefeldern erstellen
// RegEx einfügen um eingabe zu validieren
//https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
/*</fieldset>
  <p>
    <label for="n1">How old are you?</label>
    <!-- The pattern attribute can act as a fallback for browsers which
         don't implement the number input type but support the pattern attribute.
         Please note that browsers that support the pattern attribute will make it
         fail silently when used with a number field.
         Its usage here acts only as a fallback -->
    <input
      type="number"
      min="12"
      max="120"
      step="1"
      id="n1"
      name="age"
      pattern="\d+" />
  </p>
  <p>
    <label for="t1"
      >What's your favorite fruit?<span aria-label="required">*</span></label
    >
    <input
      type="text"
      id="t1"
      name="fruit"
      list="l1"
      required
      pattern="[Bb]anana|[Cc]herry|[Aa]pple|[Ss]trawberry|[Ll]emon|[Oo]range" /> </p>*/



      // FENSTER EINBAUEN DAS ANZEIGT DASS DATEN ERFOLGREICH ÜBERMITTELT WURDEN + FELDER LEEREN
