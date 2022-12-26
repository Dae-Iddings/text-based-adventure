
let story = {
    currentScene: "attack",
    attack: {
        title: 'Chapter One',
        story: 'You are a journalist sitting at your desk coved notes, thinking abut how it has been three months since your last big scoop, the interview of Instagram scammer Loretta Lasher. Your thoughts are interrupted the sound of your phone ringing. It\'s your cousin Julie.',
        dialogue: '"Hello y/n. I need your help a witch visited me last night and told me I had five days to find her beloved or else. Can you please come help me investigate?"',
        choices: [
            {
                choice: 'Of course I\'ll help you',
            },
            {
                choice: 'No theres a story of a cat stuck in a tree I have to cover'
            }
        ]


    }
};

document.addEventListener('DOMContentLoaded', function () {
    let button = document.querySelector('#start-button');
    let input = document.querySelector('#name-input');
    let content = document.querySelector('#content');
    button.addEventListener('click', renderScene)
})
function renderScene() {
    content.innerHTML = `
     <h1>${story[story.currentScene].title}</h1>
     <p>${story[story.currentScene].story}</p>
     <p><i>${story[story.currentScene].dialogue}</i></p>
     ${getInputs()}
     <button id="submit-button">Continue</button>
     `
    let button = document.querySelector('#submit-button')
    button.addEventListener('click', function () {
        getInputValues()
    })
}
function getInputValues() {
let inputs = document.querySelectorAll('input[type="radio"]');
for (let i = 0; i < inputs.length; i++) {
if (inputs[i].checked) {
    console.log(inputs[i]);
}
}
}
function getInputs() {
    let input = '';
    for (let i = 0; i < story[story.currentScene].choices.length; i++) {
        input += `
        <div>
        <input id='radio${i}' type='radio' name='choices'/>  
        <label for='radio${i}'>${story[story.currentScene].choices[i].choice}</label>
        </div>
        `
    }
    return input;
} 