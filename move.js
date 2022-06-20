function move(element) {
    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom, callback){
        let direction = null;
        let x = left;
        let y = bottom;
        let moving = false;

        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
        
        //Much of this code was taken from the class's browser game assignment series, but I
        //changed it to fit a grid-based movement that would allow for a brief animation to play when the character moved.
        document.addEventListener('keydown', function(e){
            if(moving){
                return;
            }
            
            if(e.key === 'ArrowLeft' || e.key === 'a'){
                direction = 'west';
                x-=80;
                element.style.left = x + 'px';
                setTimeout(() => {
                    direction += 'Stop';
                    moving = false;
                    callback(direction)
                }, 200);
            }
            if(e.key === 'ArrowUp' || e.key === 'w'){
                direction = 'north';
                y+=80;
                element.style.bottom = y + 'px';
                setTimeout(() => {
                    direction += 'Stop';
                    moving = false;
                    callback(direction);
                }, 200);
            }
            if(e.key === 'ArrowRight' || e.key === 'd'){
                direction = 'east';
                x+=80;
                element.style.left = x + 'px';
                setTimeout(() => {
                    direction += 'Stop';
                    moving = false;
                    callback(direction)
                }, 200);
            }
            if(e.key === 'ArrowDown' || e.key === 's'){
                direction = 'south';
                y-=80;
                element.style.bottom = y + 'px';
                setTimeout(() => {
                    direction += 'Stop';
                    moving = false;
                    callback(direction)
                }, 200);
            }
            moving = true;
            callback(direction)
        })

    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}