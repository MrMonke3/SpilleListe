window.onload = function() {
    loadGames()
    
}


document.getElementById('nameInput').addEventListener('keydown', function(event) {
if (event.key === 'Enter') {
    addGameData()
}   
})

function openGameStateMenu(buttonElement) {
    let parentElement = buttonElement.parentElement.parentElement;

    let gameStateListDiv = parentElement.querySelector('.gameStateListDiv');
    if (gameStateListDiv) {
        gameStateListDiv.classList.toggle('active');
    }
    let gameStateList = gameStateListDiv.querySelector('.gameStateList');
    if (gameStateList) {
        gameStateList.classList.toggle('active');
    }  
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
                
                var gameSlotStateLabelBtn = document.createElement('input');
                gameSlotStateLabelBtn.type = 'button'
                gameSlotStateLabelBtn.className = 'hiddenbutton'
                gameSlotStateLabelBtn.style.border = '0%'
                gameSlotStateLabelBtn.addEventListener('click', function() {
                    openGameStateMenu(this);
                }) 
                

                gameSlotStateLabelImg.style.width = '50px';



                    //gameStateList
                    let gameSlotStateListDiv = document.createElement('div');
                    gameSlotStateListDiv.className = 'gameStateListDiv';
                    gameSlotStateListDiv.id = 'gameStateListDiv';
                    
                    let gameSlotStateList = document.createElement('ul');
                    gameSlotStateList.className = 'gameStateList';
                    gameSlotStateList.id = 'gameStateList';


                    //playing btn
                    let gameSlotStateListLiPlaying = document.createElement('li');
               
                        let gameSlotStateListLabelPlaying = document.createElement('label');
                    
                            let gameSlotStateListBtnPlaying = document.createElement('input');
                            gameSlotStateListBtnPlaying.type = 'button';
                            gameSlotStateListBtnPlaying.className = 'hiddenbutton';
                            gameSlotStateListBtnPlaying.addEventListener('click', () => changeGameState(gameData));

                            let gameSlotStateListImgPlaying = document.createElement('img');
                            gameSlotStateListImgPlaying.src = ('Assets/PlayingIconTransparent.png');
                            gameSlotStateListImgPlaying.width = '50'

                            
                    gameSlotStateListLabelPlaying.appendChild(gameSlotStateListBtnPlaying);
                    gameSlotStateListLabelPlaying.appendChild(gameSlotStateListImgPlaying);
                
                    gameSlotStateListLiPlaying.appendChild(gameSlotStateListImgPlaying);


                    // not playing btn
                    let gameSlotStateListLiNotPlaying = document.createElement('li');

                        let gameSlotStateListLabelNotPlaying = document.createElement('label');

                            let gameSlotStateListBtnNotPlaying = document.createElement('input');
                            gameSlotStateListBtnNotPlaying.type = 'button';
                            gameSlotStateListBtnNotPlaying.className = 'hiddenbutton';
                            gameSlotStateListBtnNotPlaying.addEventListener('click', () => changeGameState(gameData));

                            let gameSlotStateListImgNotPlaying = document.createElement('img');
                            gameSlotStateListImgNotPlaying.src = ('Assets/NotPlayingIconTransparent.png');
                            gameSlotStateListImgNotPlaying.width = '50'


                    gameSlotStateListLabelNotPlaying.appendChild(gameSlotStateListBtnNotPlaying);
                    gameSlotStateListLabelNotPlaying.appendChild(gameSlotStateListImgNotPlaying);
                
                    gameSlotStateListLiNotPlaying.appendChild(gameSlotStateListLabelNotPlaying);


                    // finished playing btn
                    let gameSlotStateListLiFinishedPlaying = document.createElement('li');

                            let gameSlotStateListLabelFinishedPlaying = document.createElement('label');

                                let gameSlotStateListBtnNotFinishedPlaying = document.createElement('input');
                                gameSlotStateListBtnNotFinishedPlaying.type = 'button';
                                gameSlotStateListBtnNotFinishedPlaying.className = 'hiddenbutton';
                                gameSlotStateListBtnNotFinishedPlaying.addEventListener('click', () => changeGameState(gameData));

                                let gameSlotStateListImgFinishedPlaying = document.createElement('img');
                                gameSlotStateListImgFinishedPlaying.src = ('Assets/FinishedPlayingIconTransparent.png');
                                gameSlotStateListImgFinishedPlaying.width = '50'

                                
                  
                    gameSlotStateListLabelFinishedPlaying.appendChild(gameSlotStateListBtnNotFinishedPlaying);
                    gameSlotStateListLabelFinishedPlaying.appendChild(gameSlotStateListImgFinishedPlaying);
            
                    gameSlotStateListLiFinishedPlaying.appendChild(gameSlotStateListLabelFinishedPlaying);


                    // Delete btn
                    let gameSlotStateListLiDelete = document.createElement('li');

                        let gameSlotStateListLabelDelete = document.createElement('label');

                            let gameSlotStateListBtnDelete = document.createElement('input');
                            gameSlotStateListBtnDelete.type = 'button';
                            gameSlotStateListBtnDelete.className = 'hiddenbutton';
                            gameSlotStateListBtnDelete.addEventListener('click', () => changeGameState(gameData));

                            let gameSlotStateListImgDelete = document.createElement('img');
                            gameSlotStateListImgDelete.src = ('Assets/AddButtonTransparent.png');
                            gameSlotStateListImgDelete.width = '50'


                    gameSlotStateListLabelDelete.appendChild(gameSlotStateListBtnDelete);
                    gameSlotStateListLabelDelete.appendChild(gameSlotStateListImgDelete);

                    gameSlotStateListLiDelete.appendChild(gameSlotStateListLabelDelete);
                    
                    
            //appending ul to state
            if (gameData.gameState === 'playing') {
                gameSlotStateList.appendChild(gameSlotStateListLiDelete);
                gameSlotStateList.appendChild(gameSlotStateListLiNotPlaying);
                gameSlotStateList.appendChild(gameSlotStateListLiFinishedPlaying);
            } else if (gameData.gameState === 'notplaying') {
                gameSlotStateList.appendChild(gameSlotStateListLiDelete);
                gameSlotStateList.appendChild(gameSlotStateListLiFinishedPlaying);
                gameSlotStateList.appendChild(gameSlotStateListLiPlaying);
            }
            else if (gameData.gameState === 'finishedplaying') {
                gameSlotStateList.appendChild(gameSlotStateListLiDelete);
                gameSlotStateList.appendChild(gameSlotStateListLiPlaying);
                gameSlotStateList.appendChild(gameSlotStateListLiNotPlaying);
            } else {
                alert('couldnt find gameState for GameStateList')
            }
            ;

            gameSlotStateListDiv.appendChild(gameSlotStateList);

        // putter alle slots sammen
            gameSlotStateLabel.appendChild(gameSlotStateLabelImg);
            gameSlotStateLabel.appendChild(gameSlotStateLabelBtn);

            gameSlotState.appendChild(gameSlotStateLabel);
            gameSlotState.appendChild(gameSlotStateListDiv);


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

