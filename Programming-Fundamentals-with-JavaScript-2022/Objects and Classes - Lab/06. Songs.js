function songs(arr) {
    let numberOfSOngs = Number(arr.shift());
    let typeSongList = arr.pop();
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let songsArr = [];
    
    for (let i = 0; i < numberOfSOngs; i++) {
        let [typeList, name, time] = arr[i].split('_');
        let currentSongObj = new Song(typeList, name, time);
        songsArr.push(currentSongObj);
    }

    if (typeSongList === 'all') {
        songsArr.forEach((i) => console.log(i.name));
    } else {
        let filtered = songsArr.filter((i) => i.type === typeSongList);
        filtered.forEach((i) => console.log(i.name));
    }
    
}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']);
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);