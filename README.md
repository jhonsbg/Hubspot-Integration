# Hubspot Integration Frontend

Web application that consumes the [Hubspot-Integration-Backend API](https://github.com/jhonsbg/Hubspot-Integration-Backend) to manage a database hosted in the Hubspot CRM. Application built with Angular.

> *It is recommended to run the [Hubspot-Integration-Backend API](https://github.com/jhonsbg/Hubspot-Integration-Backend) first.*

## Run application locally

- Clone this repository on your computer 
	- `git clone https://github.com/jhonsbg/Hubspot-Integration.git`

- Enter local repository
	- `cd  Hubspot-Integration`

- Dependencies installation
	- `npm install`

- Run service locally
	- `ng serve -o`

The last command opens the web application in a browser tab with the URL `http://localhost:4200/`.

------------

## Using application

The page has an initial view as follows

![image](https://user-images.githubusercontent.com/68089493/171983593-80f7ff4c-d86c-447d-be9c-eaecd49e6022.png)

This page queries the table that is hosted in the Hubspot CRM. 

**Create row::** To create a row, fill in the `First Name` `Last Name` and `Document ID` fields and click `Create`.

**Update Row:** To update a row, fill in the `First Name` `Last Name` and `Document ID` fields and click `Update` for the row you want to update. 

**Delete Row:** To delete a row, click on `Delete` of the row you want to delete.

> *Note: To show the changes made, the page must be reloaded.*
