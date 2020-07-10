function createCard(add_event, card_value, index, arr){
    var card_container = document.createElement("div");
    card_container.className = "card";
    var card_content = document.createElement("pre");
    card_content.className = 'card-content';
    card_content.innerHTML = card_value;
    card_container.appendChild(card_content);
    if(card_value != undefined && card_value != ""){
        if(add_event === false){
            card_content.addEventListener("click", cardClickEvent);
        }else if(add_event === true){
            var card_action = document.createElement('div');
            card_action.className = 'card-action';
            var copy_button = document.createElement('a');
            copy_button.className = 'waves-effect waves-light btn-small';
            copy_button.innerText = "Copy";
            copy_button.addEventListener('click', copyToClipBoard);
            card_action.appendChild(copy_button);
            card_container.appendChild(card_action);
        }
        document.getElementsByClassName('container')[0].appendChild(card_container);
    }
}

function createHelpCard(card_value, index, arr){
    var card_container = document.createElement("div");
    card_container.className = "card";
    card_container.style.backgroundColor = "#fab526"
    var card_content = document.createElement("pre");
    card_content.className = 'card-content';
    card_content.innerHTML = card_value;
    card_container.appendChild(card_content);
    if(card_value != undefined && card_value != ""){
        document.getElementsByClassName('container')[0].appendChild(card_container);
    }
}

function createLinkCard(card_value, index, arr){
    var card_container = document.createElement("div");
    card_container.className = "card";
    card_container.style.backgroundColor = "#00a872"
    var card_content = document.createElement("a");
    card_content.className = 'card-content center-align';
    card_content.innerHTML = '<p class="center-align"><u><b>Troubleshooter</b></u></hp>';
    card_content.setAttribute("href", card_value);
    card_content.setAttribute("target","_blank");
    card_content.style.color = "white";
    card_container.appendChild(card_content);

    if(card_value != undefined && card_value != ""){
        document.getElementsByClassName('container')[0].appendChild(card_container);
    }
}
