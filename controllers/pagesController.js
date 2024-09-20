const User = require('../models/User');
const bcrypt = require('bcrypt');
const saltRounds = 7;

const renderDashboard = async (req, res) => {
    let user = null;
    if (req.cookies.userId) {
        user = await User.findById(req.cookies.userId);
    }

    if (user) {
        res.render('dashboard', { user });
    } else {
        res.redirect('/login');
    }
};
const renderSignup = async (req, res) => {
    let user = null;
    if (req.cookies.userId) {
        user = await User.findById(req.cookies.userId);
    }
    res.render('signup',{user});
};


const renderLogin = async(req, res) => {
    let user = null;
    if (req.cookies.userId) {
        user = await User.findById(req.cookies.userId);
    }
    res.render('login', { user });
};

const renderProfile = async (req, res) => {
    let user = null;
    if (req.cookies.userId) {
        user = await User.findById(req.cookies.userId);
        if (!user) {
            console.log("User not found");
            return res.redirect('/login'); 
        }
    } else {
        return res.redirect('/login'); 
    }
    res.render('profile', { user });
};


const signUpCon = async (req, res) => {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
        console.log("User already registered");
        return res.redirect('/signup');
    }

    if (req.body.password === req.body.conPass) {
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });
        await newUser.save();
        res.cookie('userId', newUser._id.toString());
        res.redirect('/dashboard');
    } else {
        console.log("Passwords do not match.");
        res.redirect('/signup');
    }
};

const logInCon = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
        const match = await bcrypt.compare(req.body.password, user.password);
        if (match) {
            res.cookie('userId', user._id.toString());
            return res.redirect('/dashboard');
        }
    }
    res.redirect('/login');
};

const renderProducts =async(req, res) => {
    let user = null;
    if (req.cookies.userId) {
        user = await User.findById(req.cookies.userId);
    }
    res.render('products', { user });
};

const renderOrders = async(req, res) => {
    let user = null;
    if (req.cookies.userId) {
        user = await User.findById(req.cookies.userId);
    }
    res.render('orders', { user });
};

const renderSettings = async(req, res) => {
    let user = null;
    if (req.cookies.userId) {
        user = await User.findById(req.cookies.userId);
    }
    res.render('settings', { user });
};

const renderLogOut = (req, res) => {
    res.clearCookie('userId');
    res.redirect('/login');
}

module.exports = {
    renderDashboard,
    renderLogin,
    renderSignup,
    renderProfile,
    renderProducts,
    renderSettings,
    renderOrders,
    signUpCon,
    logInCon,
    renderLogOut
};
