# dev-vanilla-js-template

This sets out basic web files as a template for a new web project.

Note that to use chrome dev tools and ES6 export and import you must declare the index.js (top .js file) using a type of "module" and not the usual "text/javascript".

````just before <\body> in html:   <script type="module" src="./index.js"></script>````

It is not necessary to declare the imported .js files (e.g. kexport.js, lexport.js).

Finally you must use the express web server to display the data in the browser and not file:///path/index.html as the browser will block the use of modules if we do not use a web server.

### Installation steps
1. Clone the repository

2. delete .git with:

    ````rm -rf .git````

3. Use ````ln -s source_dir target_dir```` to attach the development directory to the web server public directory

4. Start the web server in the express-server directory with ````node server.js````

5. Launch the html via localhost with:
````https://localhost:8080/target_dir/````
