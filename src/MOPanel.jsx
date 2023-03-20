import React from "react";
import AntibioticList from "/home/momochan/MoneraDash/src/antibiotic_list";

class AntibioticPanel extends React.Component {
  constructor(){
    const input = document.querySelector('.input-tarefa');
    const panels = document.querySelector('.panels');
  }
// cria a lista base para inserir os antimicrobianos
  createList(){
    const li = document.querySelector('li');
    return li
  }
// limpa o input
  clearInput(){
    input.value='';
    input.focus();
  }
// cria os botões para limpar o input
  createClearButton(li) {
    li.innerText += '';
    const clearButton = document.createElement('button');
    clearButton.innerText='Apagar';
    clearButton.setAttribute('class', 'clear');
    clearButton.setAttribute('title', 'Clear previous data');
    li.appendChild(clearButton);
  }

  createPanel(R, S, I){
    const li = createList();
    let panelInput = {Resistant:R, Sentitive: S, Intermediate: I}; 
    li.innerText= ['R: ', panelInput.Resistant, 'S: ', panelInput.Sensitive, 'I: ', panelInput.Intermediate];
    panels.appendChild(li);
    clearInput();
    createClearButton();
    savePanel();
  }  

  savePanel(){
    const liPanel = panels.querySelectorAll('li');
    const panelData = [];

    for (let panel of liPanel) {
      let panelText = panel.innerText;
      panelText = panelText.replace('Apagar', '').trim();
      panelData.push(panelText);
    }

    const panelJSON = JSON.stringify(panelData);
    localStorage.setItem('Panels', panelJSON);
  }

  returnSavedPanel(){
    const panels = localStorage.getItem('Panels');
    const panelList = JSON.parse(panels);

    for (let panels of panelList) {
      createPanel(panels[1], panels[3], panels[5]);
    }
  }

  render(){
  input.addEventListener('keypress', function(e){
    if (e.keyCode === 13) {
      if (!input.value) return;
      createPanel(input.value);
    }
  });
  }

};