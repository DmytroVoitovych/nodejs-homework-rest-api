const express = require('express');
const {ctrGet, ctrGetId, ctrPost, ctrDell, ctrPut, ctrPatch  } = require('../../controlers/index'); 
const check = require('../../check/funcCheck');
const checkFormatId = require('../../validation/funcValidateId');

const router = express.Router();

router.get('/', check(ctrGet));

router.get(`/:id`, checkFormatId, check(ctrGetId));

router.post('/', check(ctrPost));

router.delete('/:id', checkFormatId, check(ctrDell));

router.put('/:id', checkFormatId, check(ctrPut));

router.patch('/:id/favorite', checkFormatId, check(ctrPatch));

module.exports = router;
