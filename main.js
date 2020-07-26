let sl = {
    "й": "к",
    "ц": "е",
    "у": "н",
    "к": "г",
    "е": "ш",
    "н": "щ",
    "г": "з",
    "ш": "х",
    "щ": "ъ",
    "з": "ф",
    "х": "ы",
    "ъ": "в",
    "ф": "а",
    "ы": "п",
    "в": "р",
    "а": "о",
    "п": "л",
    "р": "д",
    "о": "ж",
    "л": "э",
    "д": "я",
    "ж": "ч",
    "э": "с",
    "я": "м",
    "ч": "и",
    "с": "т",
    "м": "ь",
    "и": "б",
    "т": "ю",
    "ь": "й",
    "б": "ц",
    "ю": "у"
};

let sldesc = {
    "к": "й",
    "е": "ц",
    "н": "у",
    "г": "к",
    "ш": "е",
    "щ": "н",
    "з": "г",
    "х": "ш",
    "ъ": "щ",
    "ф": "з",
    "ы": "х",
    "в": "ъ",
    "а": "ф",
    "п": "ы",
    "р": "в",
    "о": "а",
    "л": "п",
    "д": "р",
    "ж": "о",
    "э": "л",
    "я": "д",
    "ч": "ж",
    "с": "э",
    "м": "я",
    "и": "ч",
    "т": "с",
    "ь": "м",
    "б": "и",
    "ю": "т",
    "й": "ь",
    "ц": "б",
    "у": "ю",
    " ": " "
};

document.querySelector(".scriptor__btn").addEventListener("click", () => {
    let text = document.querySelector(".descriptor__input").value;
    let arrText = [];
    
    let scText = randText("");

    text = text.trim().toLowerCase();
    for (i of text) {
        arrText.push(i);
    }

    console.log(arrText);

    arrText.map((num, index) => {
        if (sl[num] != undefined) {
            scText += sl[num];
        } else {
            scText += " ";
        };
    });

    scText = randText(scText);

    document.querySelector(".result__input").value = scText;
});

document.querySelector(".descriptor__btn").addEventListener("click", () => {
    let text = document.querySelector(".descriptor__input").value;
    text = text.substring(3, text.length - 1);
    let arrText = [];
    let scText = "";
    text = text.trim().toLowerCase();
    for (i of text) {
        arrText.push(i);
    }

    console.log(arrText);

    arrText.map((num, index) => {
        if (sldesc[num] != undefined) {
            scText += sldesc[num];
        } else {
            scText += " ";
        };
    });

    scText = scText.substring(0, scText.length - 2);


    document.querySelector(".result__input").value = scText;
});

function randText(newScText) {
    let randInd = Math.round(Math.random()* 30);
    newScText += Object.keys(sl)[randInd];
    randInd = Math.round(Math.random()* 30);
    newScText += Object.keys(sl)[randInd];
    randInd = Math.round(Math.random()* 30);
    newScText += Object.keys(sl)[randInd];
    return newScText;
};



// Hello World



document.querySelector(".sc-copy").addEventListener("click", () => {
    document.querySelector(".descriptor__input").select();
    document.execCommand("copy");
});

document.querySelector(".result-copy").addEventListener("click", () => {
    document.querySelector(".result__input").select();
    document.execCommand("copy");
});