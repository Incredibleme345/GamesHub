const rigthButton =  document.getElementById('right-js');
const leftButton = document.getElementById('left-js');
const container = document.getElementById('container');
const outcome = document.getElementById('paragraph-js');
let isGameOver = false;

let leftClick;
let clickedButton2;
let clickedButton;

function checkGameStatus(isGameOver) {
    //while(!isGameOver) {
    let defaultImage = `./images/Designer.jpeg`
    // Rendering html on JavaScript
    container.innerHTML = `

        <h1>The Forbidden Jungle</h1>
        <div class="congrats">
            <h1>Congratulations!</h1>
        </div>
        <div class="pop-up-box" id="popUpBox">
            <div class='scenes' id='scene-js'>Scene 1: The Fork in the Path</div>
                <button class="left" id="left-js" >A narrow trail with thick vines and eerie sounds.</button>
                <button class="right" id="right-js">A wider trail with faint animal tracks.</button>
            </div>
        </div>

        <div class='start-maassege' id='resetMassege'>
            <p class='reset-para' id='resetParagraph'>
                Press Restart to play the game again</p>
            <button class='restart-button' id='restartButton'>Reset</button>
        </div>
        <div class="slide-image">
            <div class="image" id="change-image">
                <img src=${defaultImage} alt="C:\Users\ephra\Downloads\Designer.jpeg" id="image">
            </div>
            <p class="paragraph" id='paragraph-js'>
                As you step into the jungle, the path splits into two directions
  
            </p>
            <p class='paragraph'id='second-paragraph-js'></p>
            <button class='option-button' id='optionButton'>options</button>
        </div>
`;
    // Add event lister on the page for when youclick on the body of the page
    document.addEventListener('click', (event) => {
        // check if you cluick an element that counten the following id's
        if (event.target.id == 'left-js') {
            clickedButton = 'clickedLeftButton';
            console.log('left');
        } else if (event.target.id == 'right-js') {
            console.log('right');
            clickedButton = 'clickedRightButton';
        } else if (event.target.id == 'restartButton') {
            location.reload();
        } else if (event.target.id == 'optionButton') {
            popUpBox.style.visibility = 'visible';
        }
        // For the first scine check if you have clicked in the right option button
        if (clickedButton == 'clickedRightButton') {
            document.getElementById('paragraph-js').innerHTML = `You dodge a few lurking animals but 
            manage to proceed deeper into the jungle.`;

            document.getElementById('second-paragraph-js').innerHTML = `You reach a small clearing with a shimmering pool of water. It looks cool and refreshing, but there’s a faint whisper in the air warning you to keep moving.`;
            document.getElementById('image').src =  `./images/Designer2.jpeg`;
            popUpBox.style.visibility = 'hidden';
            // Second scine
            if (event.target.id == 'optionButton') {
                console.log('clicked option button');
                document.getElementById('scene-js').innerHTML = `Scene 2: The Shadow Pool`;
                popUpBox.style.visibility = 'visible';
                document.getElementById('left-js').innerHTML ='Drink from the pool.';
                document.getElementById('right-js').innerHTML = 'Ignore the pool and keep walking.';

                document.addEventListener('click', (event) => {
                    
                    if (event.target.id == 'right-js') {
                        console.log('cliked the right option')
    
                        document.getElementById('image').src =  `./images/Designer4.jpeg`;
                        document.getElementById('paragraph-js').innerHTML = `Ignore: You resist the temptation, noticing strange bones scattered near the pool. You quickly move forward, alive and wary.`
                        document.getElementById('second-paragraph-js').innerHTML = `A towering stone door blocks your way. An inscription glows on the surface, and a voice booms:
                        "To proceed, answer this: What has no weight but can still knock you down?"`
                        popUpBox.style.visibility = 'hidden'; 

                        document.addEventListener('click', (event) => {
                            if (event.target.id == 'optionButton') {
                                document.getElementById('image').src =  `./images/Designer4.jpeg`;
                                console.log('clicked option button');
                                document.getElementById('scene-js').innerHTML = `Scene 3: The Riddle Keeper`;
                                popUpBox.style.visibility = 'visible';
                                document.getElementById('left-js').innerHTML ='Answer: "Wind."';
                                document.getElementById('right-js').innerHTML = 'Answer: "Fear."';
                                document.getElementById('paragraph-js').innerHTML = `Ignore: You resist the temptation, noticing strange bones scattered near the pool. You quickly move forward, alive and wary.`;
                                document.getElementById('second-paragraph-js').innerHTML = `A towering stone door blocks your way. An inscription glows on the surface, and a voice booms:
                                "To proceed, answer this: What has no weight but can still knock you down?"`;

                                document.addEventListener('click', (event) => {
                                    if (event.target.id == 'left-js') {
                                        document.getElementById('paragraph-js').innerHTML = `A towering stone door blocks your way. An inscription glows on the surface, and a voice booms:
                                        "To proceed, answer this: What has no weight but can still knock you down?"`;
                                        document.getElementById('second-paragraph-js').innerHTML = `"Wind": The door creaks open, and you step into the inner sanctum.`;
                                        document.getElementById('image').src =  `./images/Designer (6).jpeg`;
                                        resetMassege.style.visibility = 'hidden';

                                        document.addEventListener('click', (event) => {
                                            if (event.target.id == 'optionButton') {
                                                document.getElementById('paragraph-js').innerHTML = `"Wind": The door creaks open, and you step into the inner sanctum.`;
                                                document.getElementById('second-paragraph-js').innerHTML = `You finally find the Amulet of Life, glowing on a pedestal. But as you reach for it, the ground trembles, and two exits appear.`;
                                                document.getElementById('scene-js').innerHTML = `Final Scene: The Treasure Chamber`;
                                                document.getElementById('image').src =  `./images/Designer (6).jpeg`;
                                                resetMassege.style.visibility = 'hidden';
                                                document.getElementById('left-js').innerHTML ='Take the left exit, toward a glowing corridor.';
                                                document.getElementById('right-js').innerHTML = 'Take the right exit, into the shadows.';

                                                document.addEventListener('click', (event) => {
                                                    if (event.target.id == 'right-js') {
                                                        document.getElementById('second-paragraph-js').innerHTML = `Right Exit: The shadows conceal a hidden passage that leads you to safety. You escape with the Amulet of Life, victorious!`;
                                                        document.getElementById('paragraph-js').innerHTML = `You finally find the Amulet of Life, glowing on a pedestal. But as you reach for it, the ground trembles, and two exits appear.`;
                                                        document.getElementById('image').src =  `./images/Designer (8).jpeg`;
                                                        console.log('the endeeeeeeeeeeeeeeeee')
                                                        resetMassege.style.visibility = 'hidden';
                                                        document.getElementById('optionButton').innerHTML = `Play Again`;

                                                        document.addEventListener('click', (event) => {
                                                            if (event.target.id == 'optionButton') {
                                                                document.getElementById('optionButton').innerHTML = `Play Again`;
                                                                location.reload();
                                                                resetMassege.style.visibility = 'hidden';
                                                                popUpBox.style.visibility = 'hidden'
    
                                                            }
                                                        })
 

                                                    } else if (event.target.id == 'left-js') {
                                                        isGameOver = true;
                                                        console.log('hello false');
                                                        console.log('its game over');
                                                        resetMassege.style.visibility = 'visible'
                                                        popUpBox.style.visibility = 'hidden';
                                                        document.getElementById('paragraph-js').innerHTML =`You finally find the Amulet of Life, glowing on a pedestal. But as you reach for it, the ground trembles, and two exits appear.`;
                                                        document.getElementById('second-paragraph-js').innerHTML = `Left Exit: The glowing corridor is a trap! It collapses, and you are crushed. Game Over.`;
                                                    }
                                                })
                                            } 

    
                                        })
                                    } else if (event.target.id == 'right-js') {
                                        isGameOver = true;
                                        resetMassege.style.visibility = 'visible';
                                        popUpBox.style.visibility = 'hidden';
                                        document.getElementById('paragraph-js').innerHTML = `A towering stone door blocks your way. An inscription glows on the surface, and a voice booms:
                                        "To proceed, answer this: What has no weight but can still knock you down?"`;
                                        document.getElementById('second-paragraph-js').innerHTML = `"Fear": The door remains shut. A trap is triggered, and darts fly from the walls, ending your journey. Game Over.`;
                                    }
                            }) 

                            }
                        });

                        } else if (event.target.id == 'left-js'){
                            console.log('cliked the left option');
        
                            isGameOver = true;
                            console.log('its game over');
                            document.getElementById('paragraph-js').innerHTML = `Drink: The water is cursed! As you take a sip, your body starts to wither, and you collapse. Game Over.`;
                            resetMassege.style.visibility = 'visible';
                            popUpBox.style.visibility = 'hidden';
                            }
                            })
                            // close the second scine
                            } else if (event.target.id == 'left-js'){
                                isGameOver = true;
                                document.getElementById('paragraph-js').innerHTML = `Drink: The water is cursed! As you take a sip, your body starts to wither, and you collapse. Game Over.`;
                                resetMassege.style.visibility = 'visible';
                                popUpBox.style.visibility = 'hidden';
                            }
                        // first condition on the if it is game over
                    } else if (event.target.id == 'left-js'){
                        console.log('cliked the left option');
                        isGameOver = true;
                        console.log('its game over');
                        document.getElementById('paragraph-js').innerHTML = `Drink: The water is cursed! As you take a sip, your body starts to wither, and you collapse. Game Over.`;
                        resetMassege.style.visibility = 'visible';
                        popUpBox.style.visibility = 'hidden';
                    }
        
                })
};
checkGameStatus(isGameOver);

