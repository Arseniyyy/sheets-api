# App built with google-sheets-api technology

## Table of contents
* [Working application](#working-application)
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Samples of using](#samples-of-using)

## Working application
The app is available at that [address](https://sheet-project-294316.el.r.appspot.com/)

## General info
This project is an application that can authenticate users with Google oAuth 2.0 and make requests to the [Google Sheets API](https://developers.google.com/sheets/api/quickstart/nodejs)

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
npm run tsc
npm run start:dev
```
The app will be working on port 8080
Go to http://localhost:8080

## Important
You should download your credentials.json file from https://console.cloud.google.com/apis/credentials to google folder in the project. It's important because without it the app won't be work fine and authentication will be crashed. After downloading you should change the redirect URI in your credentials.json file to http://localhost:8080/oauth2callback

## Samples of using
* https://sheet-project-294316.el.r.appspot.com/g - to authenticate with google
* https://sheet-project-294316.el.r.appspot.com/get?id=1I5I6utPwRz5Rp2RE4d4o1jKKUqotZ-pfWC-1isQ1x5c&range=main!A1:B3 - to get data from spreadsheet with id = 1I5I6utPwRz5Rp2RE4d4o1jKKUqotZ-pfWC-1isQ1x5c and range = main!A1:B3
* https://sheet-project-294316.el.r.appspot.com/batch-get?id=1I5I6utPwRz5Rp2RE4d4o1jKKUqotZ-pfWC-1isQ1x5c&ranges=main!A1:B2,main!D1:D2 - to get data from spreadsheet with id = 1I5I6utPwRz5Rp2RE4d4o1jKKUqotZ-pfWC-1isQ1x5c and ranges = main!A1:B2 and main!D1:D2
* https://sheet-project-294316.el.r.appspot.com/new-spreadsheet - to create a new spreadsheet

As you can see [above](#samples-of-using) to get data from spreadsheets you must input spreadsheet id and ranges (or range) as shown above
