# Advertiser-Challenge
This a javascript web app to call JSON and XML based API

## Development server

You could use an web server to run the app but in case you have node.js `http-server` could be handy to use
```
$ npm install -g http-server 
```

```
$ cd root project
$ http-server -c-1
```

Then run the local server on `http://127.0.0.1:8080/www/`

## Run tests 


```
$ cd root project
$ npm install
$ npm run test
```
Please note if you don't wanna have unit test running then no need to have `node_modules` installed and feel safe to delete the `package.json` and 'karma.conf.js' file

## TODO on scale
1- Minify assets
2- Use CDN
3- minimize HTTP requests
4- Use Compression