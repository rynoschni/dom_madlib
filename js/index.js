'use strict';

const placeholder = document.querySelectorAll('.placeholder');
const nameInput = document.querySelectorAll('.name-input');
const nounInput = document.querySelectorAll('.noun-input');
const verbInput = document.querySelectorAll('.verb-input');
const adjInput = document.querySelectorAll('.adj-input');
const name = document.querySelectorAll('.name');
const noun = document.querySelectorAll('.noun');
const verb = document.querySelectorAll('.verb');
const adj = document.querySelectorAll('.adj');
const submit = document.getElementById('submit');
const random = document.getElementById('random');
const container = document.querySelector('.container');

const randomNames = ['Billy Bob', "Just Just'n", 'Ron Sheid', 'Cave Dolon', 'Crazy-eyes Chris', "Neck Brack'n Britt", 'Luke Duke', 'Hal Jordan', 'Kato', 'Jack Burton', 'Lo Pan', 'Dade Murphy']
const randomNouns = ['soup', 'tounge', 'platform', 'highway', 'menu', 'internet', 'video', 'memory', 'tooth', 'clothes', 'shirt', 'pants']
const randomVerbs = ['creep', 'plead', 'price', 'persuade', 'climb', 'demand', 'appeal', 'negotiate', 'test', 'commit', 'enjoy', 'surprise']
const randomAdj = ['superficial', 'delirious', 'reasonable', 'vulgar', 'nifty', 'unsightly', 'slow', 'logical', 'painful', 'little', 'dusty', 'pushy']
let randomIndex = Math.floor(Math.random() * 12);


const nameArray = [];
const nounArray = [];
const verbArray = [];
const adjArray = [];

container.classList.add('hide');

placeholder.forEach((item) => {
    item.innerHTML = " -------- "
})



submit.addEventListener('click', (e) => {
    e.preventDefault()
    container.classList.remove('hide');

    nameInput.forEach(item => {
        nameArray.push(item.value);
    })
    nounInput.forEach(item => {
        nounArray.push(item.value);
    })
    verbInput.forEach(item => {
        verbArray.push(item.value);
    })
    adjInput.forEach(item => {
        adjArray.push(item.value);
    })

    name.forEach((item, index) => {
        if (nameArray[index] === '') {
            item.innerHTML = generateRandomWord(randomNames);
        } else {
            item.innerHTML = nameArray[index];
        }
    });
    noun.forEach((item, index) => {
        if (nounArray[index] === '') {
            item.innerHTML = generateRandomWord(randomNouns);
        } else {
            item.innerHTML = nounArray[index];
        }
    });
    verb.forEach((item, index) => {
        item.innerHTML = verbArray[index];
        if (verbArray[index] === '') {
            item.innerHTML = generateRandomWord(randomVerbs);
        } else {
            item.innerHTML = verbArray[index];
        }
    });
    adj.forEach((item, index) => {
        item.innerHTML = adjArray[index];
        if (adjArray[index] === '') {
            item.innerHTML = generateRandomWord(randomAdj);
        } else {
            item.innerHTML = adjArray[index];
        }
    })
})


random.addEventListener('click', (e) => {
    e.preventDefault();

    nameInput.forEach(item => {
        item.value = generateRandomWord(randomNames);
    });
    nounInput.forEach(item => {
        item.value = generateRandomWord(randomNouns);
    });

    verbInput.forEach(item => {
        item.value = generateRandomWord(randomVerbs)
    });

    adjInput.forEach(item => {
        item.value = generateRandomWord(randomAdj);
    })
})
// function fillArray(inputList, array) {
//     nodeList.forEach(item => {
//         array.push(item.value);
//     })
// }

// function displayWord(word, array) {
//     word.forEach((item, index) => {
//         item.innerHTML = array[index];
//     })
// }

function generateRandomWord(array) {
    return array[Math.floor(Math.random() * 12)]
}