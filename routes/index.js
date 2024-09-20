const express = require('express');
const router = express.Router();
const pagesController = require('../controllers/pagesController');

router.get('/', pagesController.renderDashboard);
router.get('/dashboard', pagesController.renderDashboard);
router.get('/login', pagesController.renderLogin);
router.get('/signup', pagesController.renderSignup);
router.get('/profile', pagesController.renderProfile);
router.get('/products', pagesController.renderProducts);
router.get('/orders', pagesController.renderOrders);
router.get('/settings', pagesController.renderSettings);
router.get('/logout', pagesController.renderLogOut );

router.post('/signup', pagesController.signUpCon);
router.post('/login', pagesController.logInCon);

module.exports = router;
