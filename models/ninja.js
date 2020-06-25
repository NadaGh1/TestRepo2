const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create ninja Schema on Model
const NinjaSchema = new Schema({
  name:{
    type:String,
    required:[true,'Name field is required']
  },
  rank:{
    type:String
  },
  available:{
    type:Boolean,
    default:false
  }

});

const Ninja = mongoose.model('ninja',NinjaSchema);

//export the Model
module.exports = Ninja;
