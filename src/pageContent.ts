// Content for each page - replace with your actual content from notes
export interface PageData {
  question: string;
  answer?: string; // Case-insensitive answer (for single answer pages)
  content?: string; // Content for single answer pages
  answers?: { [key: string]: string }; // Multiple answers mapped to their content (for pages with multiple answers)
  timerSeconds?: number; // Optional: seconds for timer (only for page 3)
  timerButtonText?: string; // Optional: text above timer button
}

export const pageContents: { [key: number]: PageData } = {
  1: {
    question: 'Hvor mange boede i din lejlighed inden jeg flyttede ind?',
    answer: '1',
    content: `
      <h2>Barfredsvej</h2>
      <p>Det var her, vi to flyttede sammen.
      I denne lille lejlighed åbnede du dit hjem op, og stille og roligt blev det til vores hjem. Jeg kan stadig huske følelsen af at træde ind og vide, at nu var det ikke bare et sted, jeg kom på besøg – det var her, vi hørte til sammen.</p>
      <p>Jeg elskede den lejlighed. Den var hyggelig, tryg og fuld af os. Der var ikke meget plads, men der var varme, grin og en følelse af nærhed, som næsten blev forstærket af, at vi var så tæt på hinanden hele tiden. Vi delte hverdagen på få kvadratmeter og lærte hinandens vaner at kende – hvordan det er rigtigt at bo sammen, både når det er nemt, og når det kræver lidt ekstra tålmodighed.</p>
      <p>Noget af det, jeg husker allerbedst, var vores lille fælles kontor. Det var måske ikke stort, men det var helt perfekt. Dine kreative ting havde deres plads, og mit skrivebord stod klar til gaming og fordybelse. Vi kunne sidde side om side, hver for sig – sammen. Du i dine kreative projekter og mig foran skærmen, uden at det føltes som afstand. Det var bare roligt, trygt og enormt hyggeligt.</p>
      <p>

Lejligheden var lille. Meget lille. Nogle gange for lille. Men selv når pladsen var trang, føltes den aldrig tom. Den var fyldt med små øjeblikke og stille stunder, som jeg stadig bærer med mig.</p>
<p>Lejligheden lærte mig, at et hjem ikke handler om størrelsen på rummene, men om hvem man deler dem med. Og selvom det var det helt rigtige valg at flytte videre, vil den lejlighed altid have en særlig plads hos mig. For det var dér, vi for alvor blev “os”.</p>
<p>Næste sted du skal hen for du lige en ledetråd om her: Da jeg skulle møde dem var jeg nervøs. Grinet og spist der blev. Simon er der næsten hver Lørdag.</p>
    `,
  },
  2: {
    question: 'Hvilken Anime var den første vi så sammen?',
    answer: 'Spy x Family',
    content: `
      <h2>Familien Möller</h2>
      <p>Første gang jeg skulle med hjem til dine forældre, var jeg mega nervøs. Det viste sig hurtigt, at det slet ikke var nødvendigt. Din familie er så imødekommende, og jeg blev taget rigtig godt imod fra første øjeblik. Der blev allerede joket med mig fra dag ét, og det fik mig til at føle mig tryg med det samme.</p>
      <p>Jeg er enormt taknemmelig for, at du syntes, jeg var værd at tage med hjem til dine forældre. Det betød mere for mig, end jeg tror, du ved. Hver gang vi er hjemme hos dem, hygger jeg mig, og jeg føler mig altid velkommen. Det er et sted, jeg holder af at komme, fordi det er en del af dig og dit liv.</p>
      <p>Næste sted du skal hen for du lige en ledetråd om her: Et sted med udsigt, stilhed og minder. Her kan der også hvis man er heldig se nordlys fra. (Nogen boller også tit der oppe)</p>
    `,
  },
  3: {
    question: 'På en skala fra 1 til 10 hvor meget elsker jeg dig???? Hvor 10 er det højeste <3?',
    answer: '10',
    timerSeconds: 20, 
    timerButtonText: 'Inden du for næste gåde synes jeg lige du skal have en pause og lige sidde og slappe af i 20 sekunder.', 
    content: `
      <h2>Pikker bakken</h2>
      <p>Her har vi været mange gange. Vi har kigget efter nordlys og delt mange øjeblikke sammen. Men der er én ting ved Pikker bakken, som altid vil sidde i mig.</p>
      <p>Det var dér, vi sad og spiste Burger King og snakkede om Blob. Et par dage efter vi mistede den. Det var et tungt og følelsesladet øjeblik, som jeg stadig husker tydeligt den dag i dag. Det gjorde ondt at miste Blob. Onkere, end jeg havde forestillet mig.</p>
      <p>Jeg tænker stadig nogle gange på, hvad Blob kunne være blevet til. Det er en tanke, der aldrig helt forsvinder. Men selv i noget så svært, var vi sammen. Vi sad dér, delte sorgen og var der for hinanden. Og på en mærkelig måde tror jeg, at det bragte os tættere sammen.</p>
      <p>Det var ikke noget, der gjorde os svagere – tværtimod. Det gjorde os stærkere. Stærkere som par, stærkere som os. Og det er noget, jeg stadig bærer med mig.</p>
      <h3>Jeg elsker dig ❤️</h3>

      <p>Næste sted du skal hen for du lige en ledetråd om her: Det er tæt på gågaden, og meget tæt på tandlægerne og en vin forhandler ved navn Jens</p>
    `,
  },
  4: {
    question: 'Hvad elskede jeg mest ved denne lejlighed?',
    answer: 'Fælles kontor',
    content: `
      <h2>Jernbanen</h2>
      <p>Det var vores anden lejlighed, som vi flyttede ind i sammen. Det var en stor beslutning, da vi valgte at tage skridtet – men det var også en god en.</p>
      <p>Vi havde fælles kontor, og for første gang havde vi både vaskemaskine og tørretumbler. Godt nok noget, der ikke altid virkede helt, som det skulle, men vi havde det, og det betød noget. Og så var der badeværelset. Kæmpestort. Det elskede jeg virkelig.</p>
      <p>Der var selvfølgelig også ting, jeg ikke elskede. At vi ikke måtte have kæledyr var hårdt, og derfor endte vi med at være hos Rina og Anders i to uger for at passe Lili. Men selv det blev til to hyggelige uger, som jeg ser tilbage på med et smil.</p>
      <p>Lejligheden lå super tæt på gågaden, hvilket var fedt. Men den lå også alt for tæt på en træls bar, som man ikke kunne undgå at høre. Alt i alt er jeg glad for, at vi flyttede derfra – men jeg er også glad for, at vi havde den tid der. Det var endnu et skridt for os, og endnu et sted, der var med til at forme det, vi er i dag.</p>

      <p>Næste sted du skal hen for du lige en ledetråd om her: Det sted man ser mest sød ud i en Lidl Julesweater og hvor de stadig ikke har shuffleboard...</p>
    `,
  },
  5: {
    question: 'På en skala fra 1 til 100 hvor sød så jeg ud i min Lidl Julesweater? Hvor 100 er det højeste <3?',
    answers: {
      '100': `

        <h2>Terminalen</h2>
        <p>Vi har grint, vi har skabt, vi har støttet hinanden, og vi har holdt hinanden oppe, selv når det har været svært. Og selv i de små, helt almindelige øjeblikke – som et spil kort hos min mor, keramik hos Cozy, eller bare en time bowling – føler jeg mig hjemme. Hjemme hos dig, og hjemme med os.</p>
        <p>Tak for alle minderne, både de store og de små. Jeg glæder mig til alle de nye, vi skal lave sammen. Jeg elsker dig, og jeg elsker alt det, vi har sammen ❤️</p>

        <p>Kom ind og sig hej til mig jeg står klar her inde</p>
        <p>ps. Godt du er klar til at tabe, for jeg er klar til at vinde</p>
        <h3>Jeg elsker dig ❤️ GLÆDEELIG ÅRSDAG MUSSEPIGE</h3>
      `,
    },
  },
};