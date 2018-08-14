const mongoose = require('mongoose'),
      Schema   = mongoose.Schema; // how data to be strucutred

const UserSchema = new Schema({
    name: { type: String, required: [ true, 'Name field is required' ] },
    rank: { type: String },
    available: {type: Boolean, default: false}
    
    // add GeoLocation later
});

const User     = mongoose.model('User', UserSchema);
module.exports = User;