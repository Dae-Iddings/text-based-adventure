
let story;
function getStory(name) {
  return {
    currentScene: "attack",
    attack: {
        title: 'The Bell Witch',
        story: `${name}, you awake in the middle of the night to a low rumbling. It increases as a women dressed in a white 19th century nightgown rises from your floor. You immediately recognize her as the Bell Witch a witch said to haunt your town as far back as 1817. The rumbling stops as she begins pacing unaware of your presents and crys out. Her voice surrounds you.`,
        dialogue: '"Betty? Oh where is my Betty? Please help me find my Betty. I know John Bell stole my betty"',
        choices: [
            {
                choice: 'Offer to help',
                destination: 'help'
            },
            {
                choice: 'Scream',
                destination: 'scream'
            }
        ]


    },
help: {
    title: 'Choose Kindness',
    story: 'She stops in her tracks and turns to you. Before disappearing and says',
    dialogue: '"The secrets to where my Betty is lie in John Bell\'s journal find it before its too late."',
    choices: [
        {
        choice: 'Continue to the next morning',
        destination: 'museum'
        }
    ]
},
scream: {
    title: 'Game Over',
    story: 'The witch turns to you with rage in her eyes. Her voices turns to screams so loud they drown out your own. Your house begins to shake.',
    dialogue: '"You\'re working with him? You Helped him hurt my Betty. You will Pay"',
    choices: [
        {
            choice: 'Game Over! Click to restart',
            destination: 'attack'
        }
    ]
},
museum: {
    title: 'Museum',
    story: 'The next morning you head to the town museum to find out more about the Bell witch. The museum is a small single room. On the left if a large quilt. In front of you is a glass case filled with pictures of the Bell family. On the right is a bookshelf. Where would you like to look?',
    //dialogue: 'test',
    choices: [
        {
            choice: 'Left',
            destination: 'quilt'
        },
        {
            choice: 'Forward',
            destination: 'glassCase'
        },
        {
            choice: 'Right',
            destination: 'bookshelf'
        }
    ]
},
quilt: {
    title: 'Bird Quilt',
    story: 'A large quilt hangs on the wall in front of you. Its intricate pattern forms a large black crow. The plaque next it reads',
    dialogue: 'Betsy Bell was an avid quilter. It is believed she created this quilt after being haunted with visions of the Bell Witch',
    choices: [
        {
            choice: 'Look at something else',
            destination: 'museum'
        }
    ]
}
}
}

document.addEventListener('DOMContentLoaded', function() {
    let button = document.querySelector('#start-button')
    let content = document.querySelector('#content')
    button.addEventListener('click', function() {
      let name = document.querySelector('#name-input')
      story = getStory(name.value)
      renderScene()
    })
  })
function renderScene() {
    let dialogue =''; 
    if (story[story.currentScene].dialogue) {
        dialogue = story[story.currentScene].dialogue;
    }
    content.innerHTML = `
     <h1>${story[story.currentScene].title}</h1>
     <p>${story[story.currentScene].story}</p>
     <p><i>${dialogue}</i></p>
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
    story.currentScene = inputs[i].getAttribute('data-destinations');
    renderScene();
    return;
}
}
story.currentScene = story[story.currentScene].defaultDestination
renderScene();
}
function getInputs() {
    let input = '';
    if (!story[story.currentScene].choices) {
        return '';
    }
    for (let i = 0; i < story[story.currentScene].choices.length; i++) {
        input += `
        <div>
        <input data-destinations=${story[story.currentScene].choices[i].destination} id='radio${i}' type='radio' name='choices'/>  
        <label for='radio${i}'>${story[story.currentScene].choices[i].choice}</label>
        </div>
        `
    }
    return input;
} 