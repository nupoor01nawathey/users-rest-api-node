const mongoose = require('mongoose'),
      Schema   = mongoose.Schema; // how data to be strucutred

      
// add GeoJSON later
const GeoSchema = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }    
});


const UserSchema = new Schema({
    name: { 
        type: String, 
        required: [ true, 'Name field is required' ] 
    },
    rank: { 
        type: String 
    },
    available: {
        type: Boolean, 
        default: false
    },
    geometry: GeoSchema
});

const User     = mongoose.model('User', UserSchema);
module.exports = User;