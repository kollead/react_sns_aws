const express = require('express');
const { Post, Image, Comment, User, Hashtag } = require('../models');
const router = express.Router();
const { Op } = require('sequelize');

router.get('/:hashtag', async(req, res, next) => { //GET /user/1/posts
  try {
    const where = {};
    if (parseInt(req.query.lastId, 10)) {
      where.id = { [Op.lt] : parseInt(req.query.lastId, 10)}
    }
    const posts = await Post.findAll({
      where,
      limit: 10,
      order: [
        ['createdAt', 'DESC'],
      ],
      include: [{
        model: Hashtag,
        where: {name: decodeURIComponent(req.params.hashtag)}
      },{
        model: User,
        attributes: ['id', 'nickname'],
      }, {
        model: Image,
      }, {
        model: Comment,
        include: [{
          model: User,
          attributes: ['id', 'nickname'],
        }]
      }, {
        model: User, 
        as: 'Likers',
        attributes: ['id'],
      }, {
        model: Post,
        as: 'Retweet',
        include: [{
          model: User,
          attributes: ['id', 'nickname'],
        }, {
          model: Image,
        }]
      }],
    });
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error); 
  }    
});

module.exports = router;