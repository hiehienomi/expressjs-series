var mongo = require("mongoose");
Schema = mongo.Schema;

CategorySchema = Schema({
        name: {
            type: String,
            default: 'No Name'
        },
        sort: {
            type: Number
        }
});

Category = mongo.model('categories', CategorySchema);
module.exports = Category;