var Van = require('../models/van'); 
 

// for a specific van. 
exports.van_detail =async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Van.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle Van create on POST. 
exports.van_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Van(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 

    document.name = req.body.name; 
    document.brand = req.body.brand; 
    document.price = req.body.price; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};  
 
// Handle van delete form on DELETE. 
exports.van_delete = async function(req, res) { 
        console.log("delete "  + req.params.id) 
        try { 
            result = await Van.findByIdAndDelete( req.params.id) 
            console.log("Removed " + result) 
            res.send(result) 
        } catch (err) { 
            res.status(500) 
            res.send(`{"error": Error deleting ${err}}`); 
        } 
}; 
 
// Handle van update form on PUT. 
exports.van_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
    ${JSON.stringify(req.body)}`) 
        try { 
            let toUpdate = await Van.findById( req.params.id) 
            // Do updates of properties 
            if(req.body.name)  
                   toUpdate.name = req.body.name; 
            if(req.body.price) toUpdate.price = req.body.price; 
            if(req.body.brand) toUpdate.brand = req.body.brand; 
            let result = await toUpdate.save(); 
            console.log("Sucess " + result) 
            res.send(result) 
        } catch (err) { 
            res.status(500) 
            res.send(`{"error": ${err}: Update for id ${req.params.id} 
    failed`); 
        } 
    }; 
// List of all Vans 
exports.van_list = async function(req, res) { 
    try{ 
        theVans = await Van.find(); 
        res.send(theVans); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};
// VIEWS 
// Handle a show all view 
exports.van_view_all_Page = async function(req, res) { 
    try{ 
        theVans = await Van.find(); 
        res.render('van', { title: 'Van Search Results', results: theVans }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

exports.van_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Van.findById( req.query.id) 
        res.render('vandetail',  
{ title: 'Van Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
exports.van_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('vancreate', { title: 'Van Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
exports.van_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Van.findById(req.query.id) 
        res.render('vanupdate', { title: 'Van Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
exports.van_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await Van.findById(req.query.id) 
        res.render('vandelete', { title: 'Van Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 