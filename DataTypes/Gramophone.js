'use strict';

function Gramophone(nameBand, nameAlbum, song) {



    let durationInSeconds = (nameAlbum.length * nameBand.length) * song.length / 2
    let fullRotation = Math.ceil(durationInSeconds / 2.5);
    
    console.log(`The plate was rotated ${fullRotation} times.`)
}
Gramophone(['Black Sabbath', 'Paranoid', 'War Pigs'])