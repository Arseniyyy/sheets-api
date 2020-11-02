# App built with google-sheets-api technology
<<<<<<< HEAD

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
This project is application which can authentiate users with Google oAuth 2.0 and make requests to the [Google Sheets API](https://developers.google.com/sheets/api/quickstart/nodejs)

## Technologies
Project is created with:
* [Google Sheets API](https://developers.google.com/sheets/api/quickstart/nodejs)
* [Google Oauth 2.0 authentication](https://github.com/googleapis/google-api-nodejs-client#oauth2-client)
* [Google App Engine](https://cloud.google.com/appengine/docs/standard/nodejs/building-app/deploying-web-service)

## Setup
```
git clone https://github.com/Arseniyyy/sheets-api.git

```
then
```
npm install
npm run start:dev
```
The app will be working on port 8080
Go to http://localhost:8080

## Important
You should to download you credentials.json file from https://console.cloud.google.com/apis/credentials to google's folder in project. It's important because without it app won't be work fine and authentication will be crashed