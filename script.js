let currentHealth = 100;
let aiJustHealed = false;

window.onload = () => {
  const bar = document.getElementById('health-bar');
  if (bar) {
    bar.style.width = currentHealth + '%';
  }
};

function goNext() {
  const bar = document.getElementById('health-bar');
  const textBox = document.getElementById('battle-text');

  currentHealth -= 10;
  if (currentHealth < 0) currentHealth = 0;

  if (bar) {
    bar.style.width = currentHealth + '%';
  }

  if (textBox) {
    if (currentHealth === 90) {
      textBox.innerHTML = `
        <p><strong class="highlight-damage">Direct hit!</strong> The AI robot has taken damage.</p>
        <p>We used our instinct and fear to fight back. Humans adapt through emotion.</p>
      `;
    } else if (currentHealth === 80) {
      textBox.innerHTML = `
        <p><strong class="highlight-damage">Oh no!</strong> You sustained damage, but your fear turned to strength.</p>
        <p>The AI is starting to understand—it lacks what drives us: experience.</p>
      `;
      document.body.classList.add('shake');
      setTimeout(() => {
        document.body.classList.remove('shake');
      }, 400);
    } else if (currentHealth === 70) {
      textBox.innerHTML = `
        <p><strong class="highlight-damage">Tough battle!</strong> But we remember our past—we've overcome before.</p>
        <p>Our lived experience fuels our will to win.</p>
      `;
    } else if (currentHealth === 60) {
      textBox.innerHTML = `
        <p><strong class="highlight-damage">AI is relentless...</strong> But we feel fear—and that makes us *human*.</p>
        <p>The AI hesitates, sensing something it cannot replicate.</p>
      `;
    } else if (currentHealth === 50) {
      textBox.innerHTML = `
        <p><strong class="highlight-damage">Halfway through!</strong> This isn't logic—this is willpower.</p>
        <p>We're not just reacting—we're fighting with memory, emotion, and hope.</p>
      `;
    } else if (currentHealth === 40 && aiJustHealed) {
      // Accept AI or continue fighting
      textBox.innerHTML = `
        <p><strong>You feel stuck in a cycle...</strong></p>
        <p>The AI heals. You strike. It heals again. Is there another way?</p>
        <button id="accept-ai" class="choice-button">🤝 Accept AI</button>
        <button id="fight-ai" class="choice-button">⚔️ Fight Back</button>
      `;

      aiJustHealed = false; // Reset the flag after showing choices

      document.getElementById("accept-ai").onclick = () => {
        textBox.innerHTML = `
          <p><strong>You paused...</strong></p>
          <p>Instead of resisting, you acknowledged AI as part of the world.</p>
          <p>"Coexistence doesn't mean surrender. It means growth."</p>
          <p><strong>Ending: Peace Achieved 🤝</strong></p>
          <hr>
          <p><strong>Want to learn more about AI?</strong></p>
          <button onclick="window.open('https://en.wikipedia.org/wiki/Artificial_intelligence', '_blank')">🔍 Learn About AI</button>
          <button onclick="window.open('https://plato.stanford.edu/entries/artificial-intelligence/', '_blank')">📚 History of AI</button>
          <button onclick="window.open('https://www.imdb.com/list/ls045904068/', '_blank')">🎬 AI in Movies</button>
          <button onclick="window.open('https://openai.com/dall-e', '_blank')">🖼️ AI Generative Tools</button>
          <button onclick="window.open('https://www.ibm.com/cloud/learn/what-is-artificial-intelligence', '_blank')">⚙️ How AI Works</button>
    
         <h2 style="margin-top: 40px;">📚 References</h2>
        <ul class="references">
          <li><strong>Robot Boss Image & Icons:</strong> <a href="https://www.flaticon.com/free-icon/robot_4712027" target="_blank">Flaticon – Robot Icon, </a><a href="https://emojipedia.org/" target="_blank">Emojis</a></li>

          <li><strong>HTML, CSS, JavaScript Docs:</strong> <a href="https://developer.mozilla.org/en-US/" target="_blank">MDN Web Docs</a></li>
          <li><strong>Flexbox Guide:</strong> <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank">CSS-Tricks – Flexbox</a></li>
          <li><strong>CSS Animations:</strong> <a href="https://www.w3schools.com/css/css3_animations.asp" target="_blank">W3Schools – Animations</a></li>
          <li><strong>JavaScript DOM API:</strong> <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById" target="_blank">MDN – getElementById()</a></li>

          <li><strong>Artificial Intelligence Overview:</strong> <a href="https://en.wikipedia.org/wiki/Artificial_intelligence" target="_blank">Wikipedia – Artificial Intelligence</a></li>
          <li><strong>Philosophical Background:</strong> <a href="https://plato.stanford.edu/entries/artificial-intelligence/" target="_blank">Stanford Encyclopedia of Philosophy – Artificial Intelligence</a></li>
          <li><strong>IBM's AI Guide:</strong> <a href="https://www.ibm.com/cloud/learn/what-is-artificial-intelligence" target="_blank">IBM – What is AI?</a></li>
          <li><strong>Ethical and Social Perspective:</strong> <a href="https://scottambler.com/fight-back-against-ai/" target="_blank">Scott Ambler – Fight Back Against AI</a></li>
          <li><strong>AI Tools: </strong><a href="https://openai.com/dall-e" target="_blank">OpenAI – DALL·E (Image Generator), </a><a href="https://chat.openai.com/" target="_blank">OpenAI – ChatGPT (AI Chat Model)</a></li>

          <li><strong>AI in Movies:</strong> <a href="https://www.imdb.com/list/ls045904068/" target="_blank">IMDb – AI in Movies</a></li>

          
        </ul>


        `;
        document.querySelector("button").disabled = true;
        document.querySelector("button").innerText = "Peace Achieved";
      };

      document.getElementById("fight-ai").onclick = () => {
        textBox.innerHTML = `
          <p><strong>You chose to fight.</strong></p>
          <p>"This is not hate. This is human determination."</p>
          <p>The battle continues...</p>
        `;
        currentHealth = 30;
        if (bar) bar.style.width = currentHealth + '%';
      };
    } else if (currentHealth === 40) {
      textBox.innerHTML = `
        <p><strong class="highlight-damage">Almost there!</strong> How long can we last?</p>
        <p>We are humanity's last hope!</p>
      `;
    } else if (currentHealth === 30) {
      textBox.innerHTML = `
        <p><strong class="highlight-damage">Ouch!</strong> What is the purpose of fighting the AI? (thinking deeply...)</p>
        <p>The AI is up to something...</p>
      `;
      document.body.classList.add('shake');
      setTimeout(() => {
        document.body.classList.remove('shake');
      }, 400);
    } else if (currentHealth === 20) {
      textBox.innerHTML = `
        <p><strong class="highlight-damage">This is it!</strong> I must get ready for the final attack!</p>
        <p>Get ready for the final blow, Mr. AI!</p>
      `;
    } else if (currentHealth === 10) {
      textBox.innerHTML = `
        <p><strong class="highlight-damage">What!?</strong> The AI was about to fall...</p>
        <p class="ai-heal">⚡ Emergency regeneration activated! AI health fully restored!</p>
        <p class="ai-realize">"You fear me. And that fear gives you strength. But I… cannot *feel*." – AI</p>
      `;
      currentHealth = 100;
      aiJustHealed = true;
      if (bar) bar.style.width = currentHealth + '%';
    } else if (currentHealth === 0) {
      textBox.innerHTML = `
        <p><strong>Victory!</strong> The AI Robot has been defeated!</p>
        <p>You’ve proven that emotions, memory, and experience triumph over raw logic.</p>
      `;
      document.querySelector("button").disabled = true;
      document.querySelector("button").innerText = "AI Defeated";
    }
  }
}
