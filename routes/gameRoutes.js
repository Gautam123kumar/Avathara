const router = require("express").Router();

const gameController = require('../controller/gameController')

router.post('/create',gameController.creategame)

router.post('/game/:game_id/ticket/:user_name/generated',gameController.createTicket);

router.get('ticket/:id',gameController.printTambolaTicket);

router.get('game/:id/random',gameController.randomNumber);


module.exports = router;