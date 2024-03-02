function newImage() {
    let newImage = document.createElement('img')
    newImage.src = 'assets/green-character.gif'
    newImage.style.position = 'fixed'
    newImage.style.left = '100px'
    newImage.style.bottom = '100px'
    document.body.append(newImage)
}

newImage()















let pineTree = document.createElement('img')
pineTree.src = 'assets/pine-tree.png'
pineTree.style.position = 'fixed'
pineTree.style.left = '450px'
pineTree.style.bottom = '200px'
document.body.append(pineTree)

let tree = document.createElement('img')
tree.src = 'assets/tree.png'
tree.style.position = 'fixed'
tree.style.left = '200px'
tree.style.bottom = '300px'
document.body.append(tree)

let pillar = document.createElement('img')
pillar.src = 'assets/pillar.png'
pillar.style.position = 'fixed'
pillar.style.left = '350px'
pillar.style.bottom = '100px'
document.body.append(pillar)

let crate = document.createElement('img')
crate.src = 'assets/crate.png'
crate.style.position = 'fixed'
crate.style.left = '150px'
crate.style.bottom = '200px'
document.body.append(crate)

let well = document.createElement('img')
well.src = 'assets/well.png'
well.style.position = 'fixed'
well.style.left = '500px'
well.style.bottom = '425px'
document.body.append(well)

let sword = document.createElement('img')
sword.src = 'assets/sword.png'
sword.style.position = 'fixed'
sword.style.left = '500px'
sword.style.bottom = '405px'
document.body.append(sword)

sword.addEventListener('dblclick', function(){
    sword.remove()
})

let shield = document.createElement('img')
shield.src = 'assets/shield.png'
shield.style.position = 'fixed'
shield.style.left = '165px'
shield.style.bottom = '185px'
document.body.append(shield)

shield.addEventListener('dblclick', function(){
    shield.remove()
})

let staff = document.createElement('img')
staff.src = 'assets/staff.png'
staff.style.position = 'fixed'
staff.style.left = '600px'
staff.style.bottom = '100px'
document.body.append(staff)

staff.addEventListener('dblclick', function(){
    staff.remove()
})