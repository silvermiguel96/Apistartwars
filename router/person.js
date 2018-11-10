const PERSON_BASE = "/apis";
const starward = require('../resources/star.json')
module.exports = function(app){
    
    app.get( `${PERSON_BASE}/person` , function(req, res){
        res.json(starward)
    })

    app.get( `${PERSON_BASE}/person/:id`, function(req, res){
        const id = req.params.id;
        const stars = starward.filter(star=>star.id === id);
        res.json(stars);   
    })
}