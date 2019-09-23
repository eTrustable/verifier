# eTrustable Public Verifier

Follow these guidelines for getting eTrustable Public Verifier locally on your system. You can fork this project and use it for any purpose.

This project also runs here: https://verifier.etrustable.com

For information about eTrustable have a look at our Homepage: [https://etrustable.com](https://etrustable.com)

Our documentation is available under: [https://docs.etrustable.com](https://docs.etrustable.com)

## Download this repository

    git clone --recurse-submodules https://github.com/etrustable/verifier.git

## Install packages

    npm install

## Compile contracts

    cd contracts && ../node_modules/.bin/truffle compile

## Set environment variables

Create a `.env` file in the root directory and copy the contents of `.env.dist`. We strongly recommend as HTTP provider [infura.io](https://infura.io/docs) for simplicity but you can run your own Ethereum node locally or use any other provider.

    WEB3_HTTP_PROVIDER=https://rinkeby.infura.io/<your-token>
    CONTRACT_ADDRESS=0x5b0dA7EB8d3bd6F6A1Aa2c26c2Ad77d298509D12

## Run the app

    npm start

And then open http://localhost:3000/ in your browser
