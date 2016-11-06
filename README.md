# Advertiser-Challenge
This a javascript web app to call JSON and XML based API following the revealing module pattern - constructor

[Demo](http://challenge.com.s3-website-us-west-2.amazonaws.com)


## Development server

You could use an web server to run the app but in case you have node.js `http-server` could be handy to use
```
$ npm install -g http-server 
```

```
$ cd root project
$ http-server -c-1
```

Then run the local server on `http://127.0.0.1:8080`

## Run tests 


```
$ cd root project
$ npm install
$ npm run test
```
Please note if you don't wanna have unit test running then no need to have `node_modules` installed and feel safe to delete the `package.json` and `karma.conf.js` file

## TODO on scale
1- Use module formats (CommonJs || AMD)
3- Use bundeler (Webpack || Browerify)
2- Use CDN
3- Minify assets
3- minimize HTTP requests
4- Use Compression
