function newPlayableCharacter(x, y) {
    const element = newImage('assets/BackwardsStaticGIF.gif')
    element.style.zIndex = 1;

    function handleDirectionChange(direction) {
        if (direction === null) {
            element.src = `assets/BackwardsStaticGIF.gif`
        }
        if (direction === 'west') {
            element.src = `assets/SidewaysLeftGIF.gif`
        }
        if (direction === 'westStop') {
            element.src = `assets/SidewaysLeftStaticGIF.gif`
        }
        if (direction === 'north') {
            element.src = `assets/ForwardsGIF.gif`
        }
        if (direction === 'northStop') {
            element.src = `assets/ForwardsStaticGIFNew.gif`
        }
        if (direction === 'east') {
            element.src = `assets/SidewaysRightGIF.gif`
        }
        if (direction === 'eastStop') {
            element.src = `assets/SidewaysRightStaticGIF.gif`
        }
        if (direction === 'south') {
            element.src = `assets/BackwardsGIF.gif`
        }
        if (direction === 'southStop') {
            element.src = `assets/BackwardsStaticGIF.gif`
        }
    }

    move(element).withArrowKeys(x, y, handleDirectionChange)

    return {
        element: element
    }
}

function newImage(url){
    let image = document.createElement('img')
    image.src = url
    image.style.position = 'absolute'
    document.body.append(image)
    return image
}