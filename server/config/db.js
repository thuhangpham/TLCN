const mongoose = require('mongoose');
const config = require('./config');
var options = {
    useMongoClient: true,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
  };
mongoose.connect(config.DB_HOST, options)
.then(()=>{console.log('Connect successful!')})
.catch((err)=>{console.log(`Connect db err: ${err}`)});
module.exports = mongoose;