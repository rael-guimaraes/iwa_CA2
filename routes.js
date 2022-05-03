const   express = require("express"),
        router = express.Router(),
        mealCtrl = require("./meal-controller");

router.post('/meals', mealCtrl.createMeal);
router.get('/meals', mealCtrl.getMeals);
router.get('/meals/:id', mealCtrl.getMeal);
router.put('/meals/:id', mealCtrl.updateMeal);
router.delete('/meals/:id', mealCtrl.deleteMeal);


module.exports = router;