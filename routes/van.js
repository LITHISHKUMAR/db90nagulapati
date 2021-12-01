var express = require('express'); 
const van_controlers= require('../controllers/van'); 
var router = express.Router(); 

// A little function to check if we have an authorized user and continue on 
//or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/* GET vans */ 
router.get('/', van_controlers.van_view_all_Page ); 

router.get('/detail', van_controlers.van_view_one_Page); 
router.get('/create', van_controlers.van_create_Page); 
router.get('/update',secured,  van_controlers.van_update_Page); 
router.get('/delete', van_controlers.van_delete_Page); 

module.exports = router;