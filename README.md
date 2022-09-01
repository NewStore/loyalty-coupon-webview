Newstore Associate App Loyalty Coupon Webview Template

In this repo is a WebView template used in the NewStore Associate App. The WebView is a screen that can be navigated to during checkout to view fetched customer loyalty details, as well as apply fetched coupons to the cart. 

Demo:
https://user-images.githubusercontent.com/16912353/183439836-74de9d9d-2c80-497e-998d-c23671c49216.mp4

Install software:
- Node.js - `https://nodejs.org/en/`
- create-react-app - run `npx create-react-app my-app`

Local development:
- run `npm i` to install dependencies
- run `npm start` to start the development server, making the WebView available at `http://localhost:3000`
- NOTE: The NewStore Associate App injects `window.NEWSTORE` variables into the WebView. These are not available when testing locally on your computer in a web browser.
- Example responses are provided for local development/testing in `src/sample_data`

Setup for live use:
- run `npm i` to install dependencies
- set up a lambda to middleman the loyalty provider and WebView, see `src/sample_data/loyalty_response.json` for an example. The lambda should be an HTTPS endpoint
- modify `src/constants.js` variable `loyaltyUrl` to point to your lambda
- run `npm run build`, a `build` directory will be created resembling the following structure:
   ```/build
        manifest.json
        asset-manifest.json
        index.html
        /static
            /js
                main.[hash].js
                main.[hash].js.LICENSE.txt
            /css
                main.[hash].css
    ```
- feel free to delete `asset-manifest.json` and `main.[hash].js.LICENSE.txt`, they're unnecessary
- host the rest of the files on s3 in the same directory structure to preserve file paths
- set tenant config value `cart.more.loyaltyProgram` to be the s3 URL for `index.html` per the linked docs

Docs: https://docs.newstore.net/docs/development/configuration/config-aa-loyalty-rewards.html#config-aa-loyalty-rewards

Troubleshooting:
- `rm -rf node_modules`
- `npm i`