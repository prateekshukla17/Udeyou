const { Router } = require('express');
const adminRouter = Router();

adminRouter.post('/signup', async function (req, res) {
  res.json({
    message: 'admin signup endpoint',
  });
});

adminRouter.post('/signin', async function (req, res) {
  res.json({
    message: 'admin signin endpoint',
  });
});

adminRouter.post('/course', async function (req, res) {
  res.json({
    message: 'admin course endpoint',
  });
});

adminRouter.post('/changecourse', async function (req, res) {
  res.json({
    message: 'admin change course endpoint',
  });
});

module.exports = {
  adminRouter: adminRouter,
};
