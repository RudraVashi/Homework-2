const express = require('express');
const router = express.Router();
const db = require('../database/database');




router.get("/add", (req, res) => {
    res.render('add-recipe', { title: 'Add a Recipe' });
});

router.post("/add", (req, res) => {
    console.log(req.body); // Debugging: Check if protein_type is being received

    let sql = `INSERT INTO recipes (name, ingredients, prep_time, cook_time, protein_type) VALUES (?, ?, ?, ?, ?)`;

    db.query(sql, [req.body.name, req.body.ingredients, req.body.prep_time, req.body.cook_time, req.body.protein_type], (err, result) => {
        if (err) throw err;
        res.redirect('/recipes');
    });
});


router.get("/", (req, res) => {
    const sql = "SELECT * FROM recipes ORDER BY protein_type, name";
    db.query(sql, (err, results) => {
        if (err) throw err;

        // Organize recipes into categories based on protein_type
        const categorizedRecipes = results.reduce((categories, recipe) => {
            if (!categories[recipe.protein_type]) {
                categories[recipe.protein_type] = [];
            }
            categories[recipe.protein_type].push(recipe);
            return categories;
        }, {});

        res.render("recipieListings", { title: "Recipe Listings", categorizedRecipes });
    });
});

router.get("/:id", (req, res) => {
    let sql = `SELECT * FROM recipes WHERE id = ?`;
    db.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        if (result.length === 0) {
            return res.status(404).send("Recipe not found");
        }
        res.render("recipes", { title: result[0].name, recipe: result[0] });
    });
});

router.get("/add", (req, res) => {
    let sql = "SELECT name FROM ingredients"; 
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.render('addRecipes', { title: 'Add a Recipe', ingredients: results });
    });
});

module.exports = router;
