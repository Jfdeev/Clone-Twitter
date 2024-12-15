const express = require('express');
const router = express.Router();
const { Posts } = require('../models');

router.use(express.json());

//solicitar posts
router.get('/', async (req, res) => {
    const listOfPosts =  await Posts.findAll()
    res.json(listOfPosts);
});

//criar um post
router.post('/', async (req, res) => {
    const post = req.body;
    await Posts.create(post)
    res.json(result);
    
});

module.exports = router;