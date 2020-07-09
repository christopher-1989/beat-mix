// Drum Arrays
let kicks = [false, false, false,false,false,false,false,false,false,false,false,false,false,false,false,false]
let snares = [false, false, false,false,false,false,false,false,false,false,false,false,false,false,false,false]
let hiHats = [false, false, false,false,false,false,false,false,false,false,false,false,false,false,false,false]
let rideCymbals = [false, false, false,false,false,false,false,false,false,false,false,false,false,false,false,false]
let array_list = ['kicks', 'snares', 'hiHats', 'rideCymbals']

const toggleDrum = (input_arr, idx) => {
    if (!input_arr || idx < 0 || idx > 16) {
        // || !array_list.includes(input_arr)
        return
    }
    let arr_idx = array_list.indexOf(input_arr)
    switch (arr_idx) {
        case 0:
           return toggle(kicks, idx)
        case 1:
            return toggle(snares, idx)
        case 2:
            return toggle(hiHats, idx)
        case 3:
            return toggle(rideCymbals, idx)
        default:
            return
    }
}
const toggle = (arr, idx) => {
    if (arr[idx] === false){
        return arr[idx] = true
    } else if (arr[idx] === true) {
        return arr[idx] = false
    }
}

const clear = input_arr => {
    if (!input_arr) {
        return
    }
    if (array_list.includes(input_arr)) {
        let arr_idx = array_list.indexOf(input_arr)
        switch (arr_idx) {
            case 0:
            return kicks = [false, false, false,false,false,false,false,false,false,false,false,false,false,false,false,false]
            case 1:
                return snares = [false, false, false,false,false,false,false,false,false,false,false,false,false,false,false,false]
            case 2:
                return hiHats = [false, false, false,false,false,false,false,false,false,false,false,false,false,false,false,false]
            case 3:
                return rideCymbals = [false, false, false,false,false,false,false,false,false,false,false,false,false,false,false,false]
            default:
                return
    } 
    } else {
        return
    }
}

const invert = input_arr => {
    if (!input_arr) {
        return
    }
    if (array_list.includes(input_arr)) {
        let arr_idx = array_list.indexOf(input_arr)
        switch (arr_idx) {
            case 0:
                return helper(kicks)
            case 1:
                return helper(snares)
            case 2:
                return helper(hiHats)
            case 3: 
                return helper(rideCymbals)
            default:
                return
        }
        
        } else {
        return console.log('Not in array')
    }
    return arrayToInvert
}

const helper = arr => { 
    if (!helper) {
        return
    }
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === false) {
            arr[i] = true
        } else if (arr[i] === true) {
            arr[i] = false
        }
}
}
const getNeighborPads = (x, y, size) => {
    if (x >= size || y >= size || x <0 || y< 0){
        return []
    }
    let shiftLeft
    let shiftRight
    let shiftDown
    let shiftUp
    if (x === 0){
        shiftLeft = undefined
        shiftRight =  x+1
    } else if (x === (size -1)) {
        shiftRight = undefined
        shiftLeft = x-1
    } else {
        shiftRight = x+1
        shiftLeft = x-1
    }
    if (y === 0){
        shiftDown = undefined
        shiftUp =  y+1
    } else if (y === (size -1)) {
        shiftUp = undefined
        shiftDown = y-1
    } else {
        shiftUp = y+1
        shiftDown = y-1
    }
    const left = [shiftLeft, y]
    const right = [shiftRight, y]
    const up = [x, shiftUp]
    const down = [x, shiftDown]
    const finalArray = [left, up, right, down]
    const toReturn = []
    for (let i = 0; i < finalArray.length; i++){
        if (!finalArray[i].includes(undefined)){
            toReturn.push(finalArray[i])
        }
    }
    return toReturn

    
}

//console.log(getNeighborPads(0,0,5))