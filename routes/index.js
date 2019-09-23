const express = require('express');
const fs = require('fs');
const router = express.Router();
const { SHA3 } = require('sha3');
const multer = require('multer')();
const Web3 = require('web3');

router.get('/', function(req, res, next) {
  res.render('index', {});
});

router.post('/', [multer.single('file')], (req, res) => {
  const contractInterface = JSON.parse(fs.readFileSync('./etrustable-contracts/build/contracts/Documents.json', 'utf8'));
  const contractAbi = contractInterface['abi'];

  web3 = new Web3(new Web3.providers.HttpProvider(process.env.WEB3_HTTP_PROVIDER));
  let documents = new web3.eth.Contract(contractAbi, process.env.CONTRACT_ADDRESS);

  const hash = new SHA3(512);
  let fileDigest = null;
  // let contentDigest = null;

  if (req.file) {
    fileDigest = hash.update(req.file.buffer, 'binary').digest('hex');
  }

  // if (req.body.content) {
  //   contentDigest = hash.update(req.body.content).digest('hex');
  // }

  documents.methods.getDocumentByFileDigest(fileDigest).call((error, result) => {
    const valid = ('valid' in result) && result['valid']
    const id = 0;
    res.render('index', {
      'id': id,
      'fileDigest': fileDigest,
      // 'contentDigest': contentDigest,
      'error': error,
      'valid': valid
    });
  });
})

module.exports = router;
