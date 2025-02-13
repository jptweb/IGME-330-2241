import { randomElement } from "./utils.js";

const words1 = [];

const words2 = [];

const words3 = [];

//This will be called once the whole page loads
let init = () => {
    loadBabble();
}

//Gets a lnk to the json file and gets ready to read it
let loadBabble = () => {
    const url = "data/babble-data.json";
    const xhr = new XMLHttpRequest();
    xhr.onload = babbleLoaded;
    xhr.onerror = e => console.log(`In onerror - HTTP Status Code = ${e.target.status}`);
    xhr.open("GET",url);
    xhr.send();
}

//Parses the json file, adds its contents to the words arrays, and initializes the buttons
let babbleLoaded = (e) => {
    console.log(`In onload - HTTP Status Code = ${e.target.status}`);

    const json = JSON.parse(e.target.responseText);

    const keys = Object.keys(json);

    for (let k of keys)
    {
        for (let i of json[k])
        {
            if (k == "firstwords")
            {
                words1.push(i);
            }
            if (k == "secondwords")
            {
                words2.push(i);
            }
            if (k == "thirdwords")
            {
                words3.push(i);
            }
        }
    }

    //The first button
    const button = document.querySelector("#btn-gen-1");
    button.addEventListener("click", () => {generateTechno(1)});
    
    //The second button
    const button2 = document.querySelector("#btn-gen-5");
    button2.addEventListener("click", () => {generateTechno(5)});

    //Generate techno on start up/reload
    generateTechno(1);
}

//Generates random techno from the arrays randomly
let generateTechno = (x) => {
    //Single technobabble
    if (x==1)
    {
        let word1 = words1[randomElement(words1)];
        let word2 = words2[randomElement(words2)];
        let word3 = words3[randomElement(words3)];
    
        let coolOutput = document.querySelector("#output");
        coolOutput.textContent = (word1 + " " + word2 + " " + word3);
    }

    //Multi technobabble
    if (x==5)
    {
        let firstwords = ["", "", "", "", ""];
        for (let i = 0; i < firstwords.length; i ++)
        {
            firstwords[i] = words1[randomElement(words1)];
        }

        let secondwords = ["", "", "", "", ""];
        for (let i = 0; i < firstwords.length; i ++)
        {
            secondwords[i] = words2[randomElement(words2)];
        }

        let thirdwords = ["", "", "", "", ""];
        for (let i = 0; i < firstwords.length; i ++)
        {
            thirdwords[i] = words3[randomElement(words3)];
        }

        const coolString = `${firstwords[0]} ${secondwords[0]} ${thirdwords[0]}
        ${firstwords[1]} ${secondwords[1]} ${thirdwords[1]}
        ${firstwords[2]} ${secondwords[2]} ${thirdwords[2]}
        ${firstwords[3]} ${secondwords[3]} ${thirdwords[3]}
        ${firstwords[4]} ${secondwords[4]} ${thirdwords[4]}`;

        let coolOutput = document.querySelector("#output");
        coolOutput.textContent = coolString;
        coolOutput.setAttribute('style', 'white-space: pre;');
    }
}

init();




