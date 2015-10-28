

 pkgjson={




     name:'app-name',
     version:'0.0.1',
     private:true,//wont publish to repo
     scripts:{start:'node-app'},//mapps command to place in ap lifecycle where they should be run, predefine commands: start stop restart test, can be run like this: npm start

        deps: {express:3,jade:'*'}

 }

 //to run arb commands, use run-script: add commands to 'scripts obj and run: npm run-script command