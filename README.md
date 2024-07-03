# DocuShare

## Introduction
DocuShare is a comprehensive document management system that allows users to sign up, sign in, and manage their documents. Users can add, delete, and rename documents, as well as edit document content. Additionally, documents can be downloaded in DOC and PDF formats.

## Features
User Authentication: Secure user sign-up and sign-in functionalities.
Document Management: Add, delete, and rename documents.
Document Editing: Edit document content with a rich text editor.
File Downloads: Download documents in DOC and PDF formats.
Technologies Used
+ Front End: React JS
+ Back End: Node JS
+ Database: MongoDB

## Installation
Follow these steps to set up the project locally:

### Prerequisites
+ Node.js and npm installed on your machine
+ MongoDB installed and running

### Steps

Clone the repository:

``` bash
git clone https://github.com/yourusername/docushare.git
cd docushare
```

Install dependencies for the server:

``` bash
cd server
npm install
```

Install dependencies for the client:

``` bash
cd ../client
npm install
```

Set up environment variables:
+ Create a .env file in the server directory and add the following:

``` env
MONGODB_URI=your_mongodb_uri
```

Start the server:

``` bash
cd ../server
npm start
```

Start the client:

``` bash
cd ../client
npm start
```

Usage
+ Open your browser and go to http://localhost:3000.
+ Sign up for a new account or sign in with an existing account.
+ Use the document display page to add, delete, and rename documents.
+ Edit the content of your documents.
+ Download documents in DOC or PDF format.

