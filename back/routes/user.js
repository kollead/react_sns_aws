const express =  require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const { Op } = require('sequelize');
const { User, Post, Image, Comment } = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middleware');
const db = require('../models');

const router = express.Router();

router.get('/', async (req, res, next) => {
  console.log("req.headers: ", req.headers);
  try {
    if (req.user) {
      const fullUserWithoutPassword = await User.findOne({
        where: {id: req.user.id},
        attributes: {
          exclude: ['password'],
        },
        include: [{
          model: Post,
          attributes: ['id'],
        }, {
          model: User,
          as: 'Following',
          attributes: ['id'],
        }, {
          model: User,
          as: 'Follower',
          attributes: ['id'],
        }]
      });
      res.status(200).json(fullUserWithoutPassword);
    } else {
      res.status(200).json(null);
    }
  } catch(error) {
    console.error(error);
    next(error);
  }
});

router.post('/', isNotLoggedIn, async (req, res, next) => {
  try {
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      }
    });
    if(exUser) {
      return res.status(403).send('사용중인 이메일입니다');
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
  });
  res.status(200).send('ok');
  } catch (error) {
      console.error(error);
      next(error);
  }
});

router.post('/login', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (error, user, info) => {
    if (error) {
      console.error(error);
      return next(error);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      const fullUserWithoutPassword = await User.findOne({
        where: {id: user.id},
        attributes: {
          exclude: ['password']
        },
        include: [{
          model: Post,
          attributes: ['id'],
        }, {
          model: User,
          as: 'Following',
          attributes: ['id'],
        }, {
          model: User,
          as: 'Follower',
          attributes: ['id'],
        }]
      })
      return res.status(200).json(fullUserWithoutPassword);
    });
  })(req, res, next);
});

router.post('/logout', isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.status(200).send('ok');
});

router.patch('/nickname', isLoggedIn, async (req, res, next) => {
  try {
    await User.update({
      nickname: req.body.nickname,
    }, {
      where: {id: req.user.id},
    });
    res.status(200).json({nickname: req.body.nickname});
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.patch('/:userId/follow', isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findOne({where: {id: req.params.userId}});
    if (!user) {
      res.status(403).send("존재하지 않는 계정은 팔로우 할 수 없습니다.");
    }
    await user.addFollower(req.user.id);
    res.status(200).json({UserId: parseInt(req.params.userId, 10)});
  } catch (error) {
    console.error(error);
    next(error)
  }
});

router.delete('/:userId/unfollow', isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findOne({where: {id: req.params.userId}});
    if (!user) {
      res.status(403).send("존재하지 않는 계정은 언팔로우 할 수 없습니다.");
    }
    await user.removeFollower(req.user.id);
    res.status(200).json({UserId: parseInt(req.params.userId, 10)});
  } catch (error) {
    console.error(error);
    next(error)
  }
});

router.get('/followers', isLoggedIn, async (req, res, next) => {
  try {
    console.log("팔로워 들어옴");
    const user = await User.findOne({where: {id: req.user.id}});
    const followers = await user.getFollower({
      limit: parseInt(req.query.limit),
    });
    res.status(200).json(followers);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get('/followings', isLoggedIn, async (req, res, next) => {
  try {
    console.log("팔로윙 들어옴");
    const user = await User.findOne({where: {id: req.user.id}});
    const followings = await user.getFollowing({
      limit: parseInt(req.query.limit),
    });
    res.status(200).json(followings);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete('/follower/:userId', isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findOne({where: {id: req.params.userId}});
    if (!user) {
      res.status(403).send("존재하지 않는 계정은 언팔로우 할 수 없습니다.");
    }
    await user.removeFollowing(req.user.id);
    res.status(200).json({UserId: parseInt(req.params.userId, 10)});
  } catch (error) {
    console.error(error);
    next(error)
  }
});

router.get('/:userId', async (req, res, next) => { // GET /user/1
  try {
    const fullUserWithoutPassword = await User.findOne({
      where: {id: req.params.userId},
      attributes: {
        exclude: ['password'],
      },
      include: [{
        model: Post,
        attributes: ['id'],
      }, {
        model: User,
        as: 'Following',
        attributes: ['id'],
      }, {
        model: User,
        as: 'Follower',
        attributes: ['id'],
      }]
    });
    if (fullUserWithoutPassword) {
      const data = fullUserWithoutPassword.toJSON();
      data.nickname= fullUserWithoutPassword.nickname;
      data.Posts = data.Posts.length;
      data.Follower = data.Follower.length;
      data.Following = data.Following.length;
      console.log("/:userId 들어옴");
      console.log("userInfo: ", data);
      res.status(200).json(data);
    } else {
      res.status(404).json('존재하지 않는 사용자입니다.');
    }
    
  } catch(error) {
    console.error(error);
    next(error);
  }
});

router.get('/:userId/posts', async(req, res, next) => { //GET /user/1/posts
  try {
    const where = {UserId: req.params.userId};
    if (parseInt(req.query.lastId, 10)) {
      where.id = { [Op.lt] : parseInt(req.query.lastId, 10)}
    }
    const posts = await Post.findAll({
      where,
      limit: 10,
      order: [
        ['createdAt', 'DESC'],
        [Comment, 'createdAt', 'DESC'],
      ],
      include: [{
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