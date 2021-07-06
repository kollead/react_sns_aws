const express = require('express');
const router = express.Router();
const {Post, Image, User, Comment} = require('../models')
const {isLoggedIn} = require("./middleware");

router.post('/', isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.create({
        content: req.body.content,
        userId: req.user.id,
      });
    const fullPost = await Post.findOne({
      where: {id: post.id},
      include: [{
        model: Image,
      },{
        model: Comment,
      },{
        model: User,
      }]
    });
    res.status(201).json(fullPost);
  } catch (error) {
    console.error(error);
    next(error);
  }
});
router.delete('/:postId/comment', isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: {id: req.params.postId},
    })
    if (!post) {
      return res.status(403).send('존재하지 않는 게시물입니다.')
    }
    const comment = await Comment.create({
      content: req.body.content,
      PostId: req.params.postId,
      UserId: req.user.id,
    })
    res.status(201),json(comment);
  } catch (error) {
    console.error(error);
    next(error);
  }
})

module.exports = router;