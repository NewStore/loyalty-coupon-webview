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
- set up a lambda to middleman the loyalty provider and WebView, see `src/sample_data/loyalty_response.json` for an example
- modify `constants.js` variable `loyaltyUrl` to point to your lambda
- run `npm run build`
- to bundle all css and js files into `index.html` run `npx gulp`
- host the resulting `index.html` from `/build` somewhere of your choosing
- set tenant config value `cart.more.loyaltyProgram` per the linked docs

Docs: https://docs.newstore.net/docs/development/configuration/config-aa-loyalty-rewards.html#config-aa-loyalty-rewards
