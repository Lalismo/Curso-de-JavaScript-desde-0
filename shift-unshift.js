// Methods that modify the origal array (Mutability)

// shift()
const colors = ['yellow', 'blue','red']
const removedColors = colors.shift()

console.log(colors)
console.log(removedColors)

// unshift()
const newColors = colors.unshift('pink', 'purple')

console.log(colors)
console.log(newColors)

const song=['come a little closer','wash my sing away']
const newSong = 'Lean On'
function MagangingAPlaylist(song,newsong){
    song.shift()
    song.unshift(newsong)
    return song
}

const updatedPlaylist = MagangingAPlaylist(song, newSong)
console.log('Updated playlist:', updatedPlaylist)