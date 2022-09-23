const express = require('express');
const {ctrGet, ctrGetId, ctrPost, ctrDell, ctrPut  } = require('../../controlers/index'); 
const check = require('../../check/funcCheck');

const router = express.Router();

router.get('/', check(ctrGet));

router.get(`/:id`,check(ctrGetId));

router.post('/', check(ctrPost));

router.delete('/:id', check(ctrDell));

router.put('/:id',check(ctrPut));

module.exports = router;
