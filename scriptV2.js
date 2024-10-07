window.onload = function() {
    loadGames()
    
}


document.getElementById('nameInput').addEventListener('keydown', function(event) {
if (event.key === 'Enter') {
    addGameData()
}   
})

function openGameStateMenu() {
    document.getElementById('gameStateList').classList.toggle('active')
    
    document.getElementById('gameStateListDiv').classList.toggle('active')
    
}


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

    saveGameData(gameData);

    // resetter values

    document.getElementById('nameInput').value = '';

    } else {
        alert('skriv navn idiot');
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
                }

                else if (gameData.gameCompany == 'xbox') {
                gameSlotCompany.className = 'xboxGameSlotCompany'
                    var gameSlotCompanyImg = document.createElement('img')
                        gameSlotCompanyImg.src = 'Assets/xboxlogoRaw.png'
                        gameSlotCompanyImg.className = 'gameSlotCompanyImg'

                }

                else if (gameData.gameCompany == 'epic') {
                gameSlotCompany.className = 'epicGameSlotCompany'
                    var gameSlotCompanyImg = document.createElement('img')
                        gameSlotCompanyImg.src = 'Assets/EpicgamesRaw.jpg'
                        gameSlotCompanyImg.className = 'gameSlotCompanyImg'

                } 
            
            gameSlotCompany.appendChild(gameSlotCompanyImg);

            
           

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
                }
                else if (gameData.gameState == 'notplaying') {
                    gameSlotStateLabelImg.src = 'Assets/NotPlayingIconTransparent.png';
                }
                else if (gameData.gameState == 'finishedplaying') {
                    gameSlotStateLabelImg.src = 'Assets/FinishedPlayingIconTransparent.png';
                } else {
                    alert('gamestatenotfound');
                    return;
                }

                gameSlotStateLabelImg.addEventListener('click', () => changeGameState(gameData));
                gameSlotStateLabelImg.style.width = '50px';
                
                var gameSlotStateLabelBtn = document.createElement('input');
                gameSlotStateLabelBtn.type = 'button'
                gameSlotStateLabelBtn.className = 'hiddenbutton'
                gameSlotStateLabelBtn.style.border = '0%'
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



function saveGameData(gameData) {
    var games = [];

    // loader data, kommenter ut for å slette alle spill 
    games = JSON.parse(localStorage.getItem('games')) || [];

    games.push(gameData);

    localStorage.setItem('games', JSON.stringify(games));
}

function loadGames() {
    
    // loader gamedata fra localstorage
    var games = JSON.parse(localStorage.getItem('games')) || [];

    // adder hvert game
    games.forEach(function(gameData) {
        addgametoUI(gameData);
    });
}

function changeGameState(gameData) {
    alert('gamestate wants to change')
}