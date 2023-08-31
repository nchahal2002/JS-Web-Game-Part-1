// background tiles
function backgroundTile(src, left, bottom, width, height) {
    for(let h = 0; h< height; h++) {
        for(let w = 0; w < width; w++) {
            newImage(src, left + w*100, bottom + h*100)
        }
    }
}

// function to create new images for display page
function newImage(src, left, bottom) {
    let localDoc = document.createElement('img')
    localDoc.src = src
    localDoc.style.position = 'fixed'
    localDoc.style.left = left
    localDoc.style.bottom = bottom
    document.body.append(localDoc)
    return localDoc
}

// function to create new items for the display page
function newItem(src, left, bottom) {
   let localItem = newImage(src, left, bottom)

    localItem.addEventListener('dblclick', function () {
        localItem.remove()
    })
}

// code for background display
let horizon = window.innerHeight / 1.75
let heightOfSky = window.innerHeight-horizon
let heightOfGrass = horizon

let sky = backgroundTile('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100)
let grass = backgroundTile('assets/grass.png',0, 0, window.innerWidth/100, heightOfGrass/100)

// start of the main code
let greenCharacter  = newImage('assets/green-character.gif', '100px', '100px')
let pineTree        = newImage('assets/pine-tree.png', '450px', '200px')
let tree            = newImage('assets/tree.png', '200px', '300px')
let pillar          = newImage('assets/pillar.png', '350px', '100px')
let crate           = newImage('assets/crate.png', '150px', '200px')
let well            = newImage('assets/well.png', '500px', '425px')
let sword           = newItem('assets/sword.png', '500px', '405px')
let sheild          = newItem('assets/shield.png', '165px', '185px')
let staff           = newItem('assets/staff.png', '600px', '100px')
