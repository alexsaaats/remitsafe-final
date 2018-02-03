// var db = require("../../models");
//
// module.exports = function (app) {
//     //  All the Routes for the backend
// //  Login
//     app.get("/", function (req, res) {
//         // res.send("hello");
//         console.log("hello");
//         db.users.findOne({
//             where: {
//                 full_name: "Full Name Here"
//             }
//         }).then(function () {
//             res.send("Added");
//         });
//         db.vendors.create({});
//         db.buyers.create({});
//     });
//
//
// // app.post("/", function (req, res) {
// //     const signMeIn = req.body;
// //     console.log(signMeIn);
// // //    Send them to their appropriate dashboard
// // //    Is the backend taking care of this on login or handle here?
// //
// // });
//
//
//
//
//
//
// //  Vendor Dashboard
//     app.get("/a_authenticated/dashboard", function (req, res) {
//
//     });
//
//
// //  Global Initial Registration
//     app.post("/register" , function (req, res) {
//         const newGuy = req.body;
//         console.log(newGuy);
//         //  Check to see if they are allready registered. If so
//         for (var i = 0; i < db.users.email.length; i++) {
//             if (newGuy.email === db.users.email) {
//                 res.send('Denied');
//             }
//         }  //  If not in the DB than add them to it
//         db.users.create(newGuy).then(function () {
//             //    If they are a buyer redirect them to next step
//             if(newGuy.role === 'buyer') {
//                 //  also create for the Buyer table
//                 // db.buyers.create(newGuy)   not done here
//                 res.send("Buyer")
//             } else { // else they are a vendor and they go to different page
//                 // also crete for the vendor table
//                 // db.vendors.create(newGuy)    not done here
//                 res.send("Vendor")
//             }
//         })
//     });
//
// //  Buyer Registration
// };
//
//
