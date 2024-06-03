const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageController');
const { savePage, getPage } = pageController;

router.post('/', savePage);
router.get('/:pageId', getPage);

module.exports = router;
