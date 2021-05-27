const Router = require('express-promise-router');

const router = Router();

const healthResponse = async (req, res, next) => {
  res.send('Alive!!');
};
router.get('/health', healthResponse);

module.exports = router;
