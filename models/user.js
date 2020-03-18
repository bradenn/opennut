let mongoose = require('mongoose');
let bcrypt = require('bcrypt');

let UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    display: String,
    bio: String,
    password: String,
    date: String
});

UserSchema.statics.authenticate = function (username, password) {
    return new Promise((resolve, reject) => {
        User.findOne({username: username})
            .exec(function (err, user) {
                if (err) {
                    reject(err)
                } else if (!user) {
                    let err = new Error('User not found.');
                    err.status = 401;
                    reject(err);
                }
                bcrypt.compare(password, user.password, function (err, result) {
                    if (result === true) {
                        resolve(user);
                    } else {
                        reject("Error: Unknown")
                    }
                })
            });
    });
};

UserSchema.pre('save', function (next) {
    let user = this;
    if (!user.isModified('password')) return next();
    bcrypt.hash(user.password, 10, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
    });
});

let User = mongoose.model('User', UserSchema);

module.exports = User;
