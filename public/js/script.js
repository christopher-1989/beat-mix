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
