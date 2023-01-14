
const questionsArray= 
[
    {question: `What is the correct JavaScript syntax to change the content of the HTML element below?<p id="demo">This is a demonstration.</p>`,
    choices: [` document.getElement("p").innerHTML = "Hello World!";`,` document.getElementByName("p").innerHTML = "Hello World!";`,` document.getElementByName("p").innerHTML = "Hello World!";`,` #demo.innerHTML = "Hello World!";`],
    correct:'choice'  },
    {question:`Delete C, D and E from the letters array.`,
    choices: [`letter.splice(2,5)`,`letters.splice(2,3)`,`letter.splice(2)`], 
    correct:'choices 1'},
    {question:`Complete the function sum such that it sums the 2 numbers it receives.`,
    choices:[`return x+y;`,`return x*y;`,`return x+y;`],
    correct:`choices0`},
    {Question:`What is the output of the code below?

    const result = Object.entries({
        id: 1,
        name: "Learn JavaScript"
    });
    
    console.log(result);`,
    choices:[``,`[["id", 1], ["name", "Learn JavaScript"]]`,''],
    correct:''},
    {question:`What is the result of the code below?

    const result = Object.values({
    id: 1,
    name: "Learn JavaScript"
    });
    
    console.log(result);`,
    choices:[`{1,"Learn Javascript"}`,`[1,"Learn Javascript"]`,`[["id",1],["name","Learn Javascript"]]`],
    correct:`choices1`},
    {question:`How do you get the last item of an array?

    const quarters = ['Q1', 'Q2', 'Q3', 'Q4'];
    quarters
    ;`,
    choice:[`.at(-quarters.length)`,`.at(1)`,`at(-1)`],
    correct:`choices2`},
    {question:`In which order will the names appear?
    
    function theLadies() {
        console.log("Eliza");
        setTimeout(function() {console.log("Peggy")}, 1000);
        setTimeout(function() {console.log("Angelica")}, 0);
        console.log("Theodosia");
    }theLadies()`,
    choices:[`Eliza, Theodosia, Angelica, Peggy`,`Eliza, Peggy, Angelica, Theodosia`,`Angelica, Eliza, Theodosia, Peggy`],
    correct:`choices1`},
];

