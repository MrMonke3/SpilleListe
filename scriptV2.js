document.getElementById('nameInput').addEventListener('keydown', function(event) {
if (event.key === 'Enter') {
    addGameData()
}   
})

function addGameData() {

    var gameName = document.getElementById('nameInput').value;
    var gameState = document.querySelector('input[name=gameState]:checked').value;
    var gameCompany = document.querySelector('input[name=gameCompany]:checked').value;

    if (gameName.trim() !== '') {

        var gameData = {
            gameName: gameName,
            gameState: gameState,
            gameCompany: gameCompany,
        };

    addgametoUI(gameData);
    
    // resetter values

    document.getElementById('nameInput').value = '';

    } else {
        alert('skrive navn idiot');
    }


}

function addgametoUI(gameData) {

// base Slot
    var gameSlot = document.createElement('div');
        if (gameData.gameCompany == 'steam') {
            gameSlot.className = 'steamGameSlot'
        }
        else if (gameData.gameCompany == 'xbox') {
        gameSlot.className = 'xboxGameSlot'
        }
        else if (gameData.gameCompany == 'epic') {
        gameSlot.className = 'epicGameSlot'
        } else {
        alert('company not recognised on start')
        return;
        }

        // CompanySlot
            var gameSlotCompany = document.createElement('div')
                if (gameData.gameCompany == 'steam') {
                    gameSlotCompany.className = 'steamGameSlotCompany'
                    var gameSlotCompanyImg = document.createElement('img')
                    gameSlotCompanyImg.src = 'Assets/SteamLogoRaw.webp'
                    gameSlotCompanyImg.className = 'gameSlotCompanyImg'

                    // flytt til under var etter jeg har lagd img til alle slotsa
                    gameSlotCompany.appendChild(gameSlotCompanyImg);
                }

                else if (gameData.gameCompany == 'xbox') {
                gameSlotCompany.className = 'xboxGameSlotCompany'
                    var gameSlotCompanyImg = document.createElement('img')
                        gameSlotCompanyImg.src = 'Assets/xboxlogoRaw.png'
                        gameSlotCompanyImg.className = 'gameSlotCompanyImg'

                        gameSlotCompany.appendChild(gameSlotCompanyImg);

                }

                else if (gameData.gameCompany == 'epic') {
                gameSlotCompany.className = 'epicGameSlotCompany'

                } 
            
           

        // NameSlot
            var gameSlotName = document.createElement('div')
                gameSlotName.textContent = gameData.gameName;
                gameSlotName.className = 'gameName';

            
        // StateSlot
            var gameSlotState = document.createElement('div')
                gameSlotState.className = 'gameSlotState';
                

            var gameSlotStateLabel = document.createElement('label')


            var gameSlotStateLabelImg = document.createElement('img')
                if (gameData.gameState == 'playing') {
                    gameSlotStateLabelImg.src = 'Assets/PlayingIconTransparent.png';
                    gameSlotStateLabelImg.addEventListener('click', () => changeGameState(gameData));

                }
                else if (gameData.gameState == 'notplaying') {
                    gameSlotStateLabelImg.src = 'Assets/NotPlayingIconTransparent.png';
                    gameSlotStateLabelImg.addEventListener('click', () => changeGameState(gameData));

                }
                else if (gameData.gameState == 'finishedplaying') {
                    gameSlotStateLabelImg.src = 'Assets/FinishedPlayingIconTransparent.png';
                    gameSlotStateLabelImg.addEventListener('click', () => changeGameState(gameData));

                } else {
                    alert('gamestatenotfound');
                    return;
                }


                gameSlotStateLabelImg.style.width = '50px';
                
                var gameSlotStateLabelBtn = document.createElement('button');
                gameSlotStateLabelBtn.className = 'hiddenbutton'

                //gameSlotStateLabelBtn.className = 'gameSlotStateLabelBtn'
                

        // putter alle slots sammen
            gameSlotStateLabel.appendChild(gameSlotStateLabelImg);
            gameSlotStateLabel.appendChild(gameSlotStateLabelBtn);

            gameSlotState.appendChild(gameSlotStateLabel);


            gameSlot.appendChild(gameSlotCompany)
            gameSlot.appendChild(gameSlotName)
            gameSlot.appendChild(gameSlotState)

        
    // eksporterer slots til riktige containers
        if (gameData.gameState == 'playing') {
            document.getElementById('spillsomspilles').appendChild(gameSlot);
        }
        else if (gameData.gameState == 'notplaying') {
            document.getElementById('spillsomkanspilles').appendChild(gameSlot);

        }
        else if (gameData.gameState == 'finishedplaying') {
            document.getElementById('spillsomerspilt').appendChild(gameSlot);

        } else {
            alert('gamestatenotfound on final export')
        }


}

function changeGameState(gameData) {
    alert('gamestate wants to change')
}