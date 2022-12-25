function createAssemblyLine() {
    return {
        hasClima(myCar) {
            myCar.temp = 21;
            myCar.tempSettings = 21;
            myCar.adjustTemp = () => {
                if (myCar.temp < myCar.tempSettings) {
                    myCar.temp++;
                } else if (myCar.temp > myCar.tempSettings) {
                    myCar.temp--;
                }
            };
        },

        hasAudio(myCar) {
            myCar.currentTrack = { naem: null, artist: null };
            myCar.nowPlaying = () => {
                console.log(`Now playing '${myCar.currentTrack.name}' by ${myCar.currentTrack.artist}`);
            };
        },

        hasParktronic(myCar) {
            myCar.checkDistance = (distance) => {
                distance = Number(distance);
                if (distance < 0.10) {
                    console.log('Beep! Beep! Beep!');
                } else if (distance >= 0.10 && distance < 0.25) {
                    console.log('Beep! Beep!');
                } else if (distance >= 0.25 && distance < 0.50) {
                    console.log('Beep!');
                }
            };
        }
    }
}




const assemblyLine = createAssemblyLine();
const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(myCar);