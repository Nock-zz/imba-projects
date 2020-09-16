## Express Server

One good reason to set up a local server with https is to enable local testing that conforms as closely as possible to a production server.

Another good reason is to enable chrome dev tools to be fully used for the development and testing of the web application.

For full details on how to set up an express server under https see https://hackernoon.com/set-up-ssl-in-nodejs-and-express-using-openssl-f2529eab5bb.

Chrome dev tools can be used to develop applications by attaching the source files through Sources > Filesystem > Add Folder to workspace. However, because of Cross-Origin Resource Sharing (CORS) issues the source files cannot be accessed through file:///path-to-source-file/source-file. Instead the files must be served through a web server.
In particular, if export and import ES2015 features are used in dev tools then a web server appraoch is required.

For more details see [mdn cors article](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Who_should_read_this_article)




### Setup Steps
Install express with:
    npm i express.

Set up server.js --- see server.js file for information
create the https certificate openssl exception with the command line:

    openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 3650

Create the .p12 certificate file with the following command:

    openssl pkcs12 -export -out cert.p12 -inkey key.pem -in cert.pem

### Update Chrome/Brave certificate exceptions
Import the .p12 file under Edit > Preferences --> Manage certificates --> Your certificates import
add the cert.p12 and enter the password.

Finally, to overcome the 'Your Connection Is Not Private Error' you need to go to brave://flags and chrome://flags and set allow-insecure-localhost to enabled.

Additional links:
* Convert pem files to p12 files [stackoverflow: Convert pem files to p12 files](https://stackoverflow.com/questions/13732826/convert-pem-to-crt-and-key)
* Adding permanent SSL certificate exception in Chrome [linkedin: Add permanent SSL certificate exception in Chrome](https://www.linkedin.com/pulse/add-permanent-ssl-certificate-exception-chrome-andrey-batyrenko/)
