Newstore Associate App Loyalty Coupon Webview Template

In this repo is a WebView template used in the NewStore Associate App. The WebView is a screen that can be navigated to during checkout to view fetched customer loyalty details, as well as apply fetched coupons to the cart. 

NewStore customers who have implemented this webview:
- Lego
- Playboy

Demo:
https://user-images.githubusercontent.com/16912353/183439836-74de9d9d-2c80-497e-998d-c23671c49216.mp4

Install software:
- Node.js v20.11.0 - `https://nodejs.org/en/`
- install NVM node version manager to make node management easier

Local development:
- run `npm i` to install dependencies
- run `npm start` to start the development server, making the WebView available at `http://localhost:3000`
- NOTE: The NewStore Associate App injects `window.NEWSTORE` variables into the WebView. These are not available when testing locally on your computer in a web browser. Fallback data `webviewData` is provided in `src/App.js` to enable local development in your web browser
- To test in the NewStore Associate App, you will need to set the following configuration via API https://docs.newstore.net/api/configuration/apps/associate-app-config-api_config/
    ```
    "external_integration": {
        "cart.more.loyaltyProgram": {
            "url": "http://192.168.1.100:3000",
            "is_deeplink": false
        }
    }
    ```
- "url" should be the LAN IP address of your computer. The phone you are running the app on will have to be connected to the same LAN
- "is_deeplink" is always false (this extension point lets you open another iOS app via deeplink instead of a webview if true)
- Example responses are provided for local development/testing in `src/sample_data`
- When running the webview in your computer's web browser you will be able to log to the browser's console. When running the webview in the actual iphone app you do not have a console available to you, so instead you can log your data in the UI, or by using something like `alert(JSON.stringify(response))`

Setup for live use:
- run `npm i` to install dependencies
- Two lambdas will need to be set up to act as middleman between the webview and the customer's loyalty provider. See `src/sample_data/loyalty_response1.json` and `loyalty_response2.json` for response examples from these lambdas.
- modify `src/constants.js` variable `loyaltyUrl1` and `loyaltyUrl2` to point to your lambdas. Switch these variables based on whether you are building for staging or production.
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

Notes on hosting the webview static files and loyalty adapter lambda:
- Page that covers hosting the webview static files on S3 https://goodscloud.atlassian.net/wiki/spaces/DSRT/pages/3844898846/S3+bucket+settings
- CORS needs to be configured properly for the hosted static files. Video on how to enable CORS in AWS - https://www.youtube.com/watch?v=wGDiOkqtUWA
- The return value from the loyalty adapter lambda needs to be in this format -
    ```return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': json.dumps(response)
    }
    ```

Docs:
- https://docs.newstore.net/docs/development/configuration/config-aa-loyalty-rewards.html#config-aa-loyalty-rewards
- https://docs.newstore.net/api/configuration/apps/associate-app-config-api_config/

Troubleshooting:
- `rm -rf node_modules`
- `npm i`