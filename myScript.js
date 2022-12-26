document.addEventListener('DOMContentLoaded', function() {
    let button = document.querySelector('#start-button');
    let input = document.querySelector('#name-input');
    let content = document.querySelector('#content');
    button.addEventListener('click', function() {
     content.innerHTML = `
     <h1>Chapter Two</h2>
     <p>You are a journalist sitting at your desk coved notes, thinking abut how it has been three months since your last big scoop, the interview of Instagram scammer Loretta Lasher. Your thoughts are interrupted the sound of your phone ringing. It's your cousin Julie.</p>
     <p><i>'Hello ${input.value}. I need your help a witch visited me last night and told me I had five days to find her beloved or else. Can you please come help me investigate?'</i></p>
     <div>
     <input id='radio1' type='radio' name='choices'/>  
     <label for='radio1'>Of course I'll help you</label>
     </div>
     <div>
      <input id='radio2' type='radio' name='choices'/> 
     <label for='radio2'>No theres a story of a cat stuck in a tree I have to cover</label>
     <div>
     <button>Continue</button>
      `
    })
})
   