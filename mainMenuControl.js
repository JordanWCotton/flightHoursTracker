 const mongoose = require('mongoose');
 const User = mongoose.model('User');

 module.exports.mainMenu = (req, res) => {
     //If no user ID exists in JWT 
     if (!req.payload._id) {
         res.status(401).json({
             'message' : 'UnauthorizedError: Not admitted'
         });
     } else {
         
         User.findById(req.payload._id)
         .exec((err, user) => {
             res.status(200).json(user);
         });
     }
 };

 //MORE ERROR HANDLING TO COME