var mazeBlocks = []

function mazeGenerator(){
    for (let i = 0; i < 500; i++) {
        x = random(0, width)
        y = random(0, height)
        mmwh = [10, 40]
        w = choose(mmwh)
        h = choose(mmwh)
        var block = createSprites(x, y, w, h)
        block.shapecColor = RGB(35, 27, 0)
        mazeBlocks.push(block)
        drawSprites()
    }
    
}

function choose(array){
    arr = []
    for (let index = 0; index < array.length; index++) {
        var element = array[index]
        arr.push(element)
    }
    
    for (let i = 0;i < arr.length; i++) {
        var l = 0
        var x = array[i];
        if(l === x){
            return l
        }
        else{
            var l = random(Math.min(arr), Math.max(arr))
        }
    }
}