const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("home",{ title: "Recipe Site" }); 
});


/* GET home page. */
router.get('/home', function(req, res, next) {
    res.render('home', { title: 'Home' });
  });
  
/* GET add recipes page. */
router.get('/addRecipes', function(req, res, next) {
    res.render('addRecipes', { title: 'Add Your Own' });
});

/* The 2 above get requests were added with help of copilot*/

module.exports = router;