var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var van_controller = require('../controllers/van'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/resource', api_controller.api); 
 
/// VAN ROUTES /// 
 
// POST request for creating a Van.  
router.post('/resource/vans', van_controller.van_create_post); 
 
// DELETE request to delete Van. 
router.delete('/resource/vans/:id', van_controller.van_delete); 
 
// PUT request to update Van. 
router.put('/resource/vans/:id', 
van_controller.van_update_put); 
 
// GET request for one Van. 
router.get('/resource/vans/:id', van_controller.van_detail); 
 
// GET request for list of all Van items. 
router.get('/resource/vans', van_controller.van_list); 
 
module.exports = router;