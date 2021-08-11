"use strict";

function randomDiap(n,m) {
        return Math.floor(Math.random()*(m-n+1))+n;
}

function mood(colorsCount) {
    var colors=[ '', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ];

    console.log( 'цветов: ' + colorsCount );
    for ( var i=1; i<=colorsCount; i++ ) {
        var n = randomDiap(1, colors.length - 1);
        var colorName = colors.splice(n, 1)[0];

        var addedColors = [{
            red: 'красный',
            orange: 'оранжевый',
            yellow: 'желтый',
            green: 'зеленый',
            blue: 'голубой',
            blue2: 'синий',
            purple: 'фиолетовый'
          }];
        console.log( colorName );
    }
}

mood(3);