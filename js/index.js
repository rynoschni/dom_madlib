'use strict';

const placeholder = document.querySelectorAll('.placeholder');
const nounInput = document.querySelectorAll('.noun-input');
const verbInput = document.querySelectorAll('.verb-input');
const adjInput = document.querySelectorAll('.adj-input');
const noun = document.querySelectorAll('.noun');
const verb = document.querySelectorAll('.verb');
const adj = document.querySelectorAll('.adj');
const submit = document.getElementById('submit');
const random = document.getElementById('random');
const container = document.querySelector('.container');

const randomNouns = ['soup', 'tounge', 'platform', 'highway', 'menu', 'internet', 'video', 'memory', 'tooth', 'clothes', 'shirt', 'pants']
const randomVerbs = ['creep', 'plead', 'price', 'persuade', 'climb', 'demand', 'appeal', 'negotiate', 'test', 'commit', 'enjoy', 'surprise']
const randomAdj = ['superficial', 'delirious', 'reasonable', 'vulgar', 'nifty', 'unsightly', 'slow', 'logical', 'painful', 'little', 'dusty', 'pushy']
let randomIndex = Math.floor(Math.random() * 12);


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

    nounInput.forEach(item => {
        nounArray.push(item.value);
    })
    verbInput.forEach(item => {
        verbArray.push(item.value);
    })
    adjInput.forEach(item => {
        adjArray.push(item.value);
    })

    noun.forEach((item, index) => {
        if (nounArray[index] === '') {
            item.innerHTML = generateRandomWord(randomNouns);
        } else {
            item.innerHTML = nounArray[index];
        }
    });
    verb.forEach((item, index) => {
        item.innerHTML = verbArray[index];
    });
    adj.forEach((item, index) => {
        item.innerHTML = adjArray[index];
    })
})


random.addEventListener('click', (e) => {
    e.preventDefault();

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