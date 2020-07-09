// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (request, arr_idx, newPreset = undefined) => {
    if (arr_idx < 0 || arr_idx > presets.length) {
        return [404]
    } else {
        if (request === 'PUT'){
            presets[arr_idx] = newPreset
            return [200, presets[arr_idx]]
        } else if (request === 'GET') {
            return [200, presets[arr_idx]]
        } else {
            return [400]
        }
    }
}
//console.log(presetHandler('GET', 3))
// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
