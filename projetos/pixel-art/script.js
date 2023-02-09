window.onload = () => {
  document.getElementsByClassName('color')[0].style.backgroundColor = 'black';
  document.getElementsByClassName('color')[1].style.backgroundColor = 'red';
  document.getElementsByClassName('color')[2].style.backgroundColor = 'blue';
  document.getElementsByClassName('color')[3].style.backgroundColor = 'green';
  //  4 - Adicione um botão para gerar cores aleatórias para a paleta de cores.
  const buttonColor = document.getElementById('button-random-color');
  const randomColors = () => {
    const allColors = document.getElementsByClassName('color');
    const colorBlack = document.getElementsByClassName('color')[0];
    const colorRed = document.getElementsByClassName('color')[1];
    const colorBlue = document.getElementsByClassName('color')[2];
    const colorGreen = document.getElementsByClassName('color')[3];
    for (let index = 1; index < allColors.length; index += 1) {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      if (allColors[index] === colorBlack) {
        document.className('color-1').style.backgroundColor = 'black';
      } else if (allColors[index] === colorRed) {
        document.getElementById('color-2').style.backgroundColor = `#${randomColor}`;
      } else if (allColors[index] === colorBlue) {
        document.getElementById('color-3').style.backgroundColor = `#${randomColor}`;
      } else if (allColors[index] === colorGreen) {
        document.getElementById('color-4').style.backgroundColor = `#${randomColor}`;
      }
    }
    seveColorsPalette();
  };
  buttonColor.addEventListener('click', randomColors);
  //  Implemente uma função usando localStorage para que a paleta de cores gerada aleatoriamente seja mantida após recarregar a página.
  //  1-Salvar as cores
  const seveColorsPalette = () => {
    const colorList = {
      color1: '#ffffff',
      color2: '#ffffff',
      color3: '#ffffff',
    };
    colorList.color1 = document.getElementById('color-2').style.backgroundColor;
    colorList.color2 = document.getElementById('color-3').style.backgroundColor;
    colorList.color3 = document.getElementById('color-4').style.backgroundColor;
    localStorage.setItem('colorPalette', JSON.stringify(colorList));
  };
  //  2- recuperar as cores
  const recoveryColorList = () => {
    if (localStorage.getItem('colorPalette')) {
      const status = JSON.parse(localStorage.getItem('colorPalette'));
      document.getElementById('color-2').style.backgroundColor = status.color1;
      document.getElementById('color-3').style.backgroundColor = status.color2;
      document.getElementById('color-4').style.backgroundColor = status.color3;
    }
  };
  recoveryColorList();
  //  Adicione à página um quadro contendo 25 pixels.
  function adicionaPixelBoard(size) {
    const pixelBoard = document.getElementById('pixel-board');
    //  console.log(pixelBoard);
    for (let index = 0; index < size; index += 1) {
      const pixels = document.createElement('div');
      pixels.className = 'linhas';
      pixelBoard.appendChild(pixels);
      for (let i = 0; i < size; i += 1) {
        const div = document.createElement('div');
        div.className = 'pixel';
        pixels.appendChild(div);
      }
    }
  }
  adicionaPixelBoard(5);
  //  8 - Defina a cor preta como cor inicial da paleta de cores
  const elementoColorBlack = document.getElementsByClassName('color')[0];
  elementoColorBlack.className += ' selected';
  //  9 - Crie uma função para selecionar uma cor na paleta de cores.
  const selecionaCor = () => {
    const cores = document.querySelectorAll('.color');
    for (const cor of cores) {
      cor.addEventListener('click', (event) => {
        const selectedCor = document.querySelector('.selected');
        if (selectedCor) {
          selectedCor.classList.remove('selected');
        }
        event.target.classList.add('selected');
      });
    }
  };
  selecionaCor();
  //  10 -Crie uma função que permita preencher um pixel do quadro com a cor selecionada na paleta de cores.
  const selecionaPixel = () => {
    // atrbuir a cor desse elemento ao elemento que foi clicado (event)
    const pixels = document.querySelectorAll('.pixel');
    for (const pixel of pixels) {
      pixel.addEventListener('click', (event) => {
        event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
      });
    }
  };
  selecionaPixel();
  // 11 - Crie um botão que retorne a cor do quadro para a cor inicial.
  const buttonClear = document.querySelector('#clear-board');
  const clearPixelBoard = () => {
    const pixelsOfBoard = document.querySelectorAll('.pixel');
    for (const pixel of pixelsOfBoard) {
      pixel.style.backgroundColor = 'white';
    }
  };
  buttonClear.addEventListener('click', clearPixelBoard);
};
