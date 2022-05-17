const Meal = require("./models/meal");

exports.createMeal = function(req, res){
  console.log(req.body)
    let newmeal = new Meal(req.body);
    newmeal.save(function(err, meal){
        if(err){
            res.status(400).json(err);
        }
        res.json(meal);
    });
};

exports.getMeals = function(req, res){
    Meal.find({}, function(err, meals){
        if(err){
            res.status(400).json(err);
        }
        res.json(meals);
    });
};

exports.getMeal = function(req, res) {
    Meal.findOne({_id: req.params.id}, function (err, meal) {
      if (err) {
        res.status(400).json(err);
      } 
      res.json(meal);
    }); 
};

exports.updateMeal = function(req, res) {
    Meal.findOneAndUpdate({_id: req.params.id}, req.body, {new: true},function (err, meal) {
      if (err) {
        res.status(400).json(err);
      } 
      res.json(meal);
    }); 
};

exports.deleteMeal = function(req, res) {
    Meal.findByIdAndRemove(req.params.id, function (err, meal) {
      if (err) {
        res.status(400).json(err);
      } 
      res.json(meal);
    }); 
};