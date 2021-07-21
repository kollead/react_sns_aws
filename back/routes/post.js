const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const {Post, Image, User, Comment} = require('../models');
const {isLoggedIn} = require("./middleware");

const router = express.Router();

try {
  fs.accessSync('uploads');
} catch (error) {
  console.log('uploads 폴더가 없으므로 생성합니다');
  fs.mkdirSync('uploads');

}

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname); //확장자 추출
      const basename = path.basename(file.originalname, ext);
      done(null, basename + '_' + new Date().getTime() + ext);
      done(null);
    },
  }),
  limits: { fileSize: 20*1024*1024 }, //20mb
});

router.post('/', isLoggedIn, upload.none(), async (req, res, next) => {
  try {
    const post = await Post.create({
        content: req.body.content,
        UserId: req.user.id,
      });
      if(req.body.image) {
        if(Array.isArray(req.body.image)) { //images
          const images = await Promise.all(req.body.image.map((image) => {
            Image.create({src: image});
          }))
          await post.addImages(image)
        } else { //1 image

        }
      }
    const fullPost = await Post.findOne({
      where: {id: post.id},
      include: [{
        model: Image,
      },{
        model: Comment,
        include: [{
          model: User,
          attributes: ['id', 'nickname'],
        }]
      },{
        model: User, 
        attributes: ['id', 'nickname'],
      },{
        model: User, 
        as: 'Likers',
        attributes: ['id'],
      }]
    });
    res.status(201).json(fullPost);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.patch('/:postId/like', isLoggedIn, async(req, res, next) => { // PATCH /post/postid/like
  try {
    const post = await Post.findOne({
      where: {id: req.params.postId}
    });
    if (!post) {
      return res.status(403).send('존재하지 않는 게시글입니다.');
    }
    await post.addLikers(req.user.id);
    res.json({PostId: post.id, UserId: req.user.id});
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete('/:postId/like', isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: {id: req.params.postId}
    });
    if (!post) {
      return res.status(403).send('존재하지 않는 게시글입니다.');
    }
    await post.removeLikers(req.user.id);
    res.json({PostId:post.id, UserId: req.user.id});
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete('/:postId', isLoggedIn, async (req, res, next) => {
  try {
    
    await Post.destroy({
      where: {id: req.params.postId},
      UserId: req.user.id,
    });
    res.status(200).json({PostId: parseInt(req.params.postId, 10)});
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/images', isLoggedIn, upload.array('image'), async(req, res, next) => {
  console.log(req.files);
  res.json(req.files.map((v) => v.filename));
});

router.post('/:postId/comment', isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: {id: req.params.postId},
    })
    if (!post) {
      return res.status(403).send('존재하지 않는 게시물입니다.')
    }
    const comment = await Comment.create({
      content: req.body.content,
      PostId: parseInt(req.params.postId, 10),
      UserId: req.user.id,
    })
    const fullComment = await Comment.findOne({
      where: {id: comment.id},
      include: [{
        model: User,
        attributes: ['id', 'nickname'],
      }],
    })
    res.status(201).json(fullComment);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;