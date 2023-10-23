Node.js sample code

## Reqired versions
1. Node >=14.x
2. NPM >=6.4.1



## Before start
You have to rename `example.env` file `.env` with credentials
Required keys:
```$xslt
DB_URL=
JWT_SECRET_KEY=
EMAIL_USER=
EMAIL_PASSWORD=
```


## How to start development mode
After you create env file, run
1. `npm install` to install all dependencies
2. `npm run start:dev` to run bot with local environment


### Structure of folders
```$xslt
- common // folder contain all common elements: custom functions, Re-used functions.
- config // folder contain all the third-party config files 
- middlewares // folder contain all middleware functions: jwt verification, custom middlewares
- helpers // contains constant values, third-party functions: JWT, Mail  
- models // contain all Database schemas and models
- routes // contain all application routings.
- services // contain all business logics for application.
- template // contain all template for notification and verifications.
- validators // validation for all apis.
```
