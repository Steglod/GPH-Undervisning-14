console.log("Hello World", 2025, true);

/*
    Datatyper: tekst = string
                Tall = number
                Sant usant = boolean

    Variabler: const = Konstant Variabel
                let = Fleksibel Variabel
*/

const heroHeading = document.querySelector("#heroHeading")
heroHeading.textContent = "Velkommen"
heroHeading.style.color = "red"; // gir inline styling

console.log(heroHeading)

const content = "Loremn ipsum ripsum cosales woradosa aquavitales, wonder of rome, ripsen"
const heroParagraph = document.getElementById("heroParagraph")
heroParagraph.textContent = content
heroParagraph.classList.add("text")

console.log(heroParagraph)

const heroImg = document.querySelector ("#heroImg")
heroImg.src = "mappenavn/filnavn.filtype"
heroImg.alt = "placeholder bilde"

console.log(heroImg)

//
//

const about =document.querySelector ("#about")

    const aboutHeading = document.createElement("h2") // Lager nytt HTML-element
    aboutHeading.textContent = "Om Meg"
    console.log(aboutHeading)

        const aboutIntro = document.createElement("div")
        aboutIntro.classList.add("aboutIntro")

        const aboutIntroText = document.createElement("p")
        aboutIntroText.classList.add("introText")
        console.log(aboutIntroText)
        aboutIntroText.textContent = `Et eller annet tralalalala informasjon om meg`

        const aboutIntroImg = document.createElement("img")
        aboutIntroImg.src = ""
        aboutIntroImg.alt = "alt"
        aboutIntroImg.classList.add("introImg")

        console.log(aboutIntroImg)

    aboutIntro.appendChild(aboutIntroText)
    aboutIntro.appendChild(aboutIntroImg)

console.log(aboutIntro)
about.appendChild(aboutHeading) // legger nytt HTML-Element til i HTML
about.appendChild(aboutIntro)
console.log(about)

//console.log("Hello!");

//const heroTitle = document.querySelector("#heroTitle");
//console.log(heroTitle);

//heroTitle.style.color = "Red";

//const heroDescription = document.querySelector("#heroDescription");
//console.log(heroDescription);
