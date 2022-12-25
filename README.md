# ☕ Coffee Blog - Node.js project

## 🔎 Overview
This Web site represents a Mvc (Model, View, Controller) type Node.js application of a Coffee Blog
The Blog is capable of displaying(GET), creating(PUT) and deleting(DELETE) blog entries for coffee geeks 
harnessing the power of Node.js - Express.js - MongoDB 

## 📋 Project Structure and Database Handling:
Model - Simple Blog entries contains - title, snippet and blog body

View  - Rendered HTML (ejs) used for dynamic code injections, CSS

Controller – Express.js application rendering  views, partials and database information and handling all requests for the DB.

## 🔧 Running the site 
1. Download/clone the project from the repository.
2. Open the project's folder via Visual Studio (Recommended) or other npm supported IDE.
3. make sure you have npm Node.js package installed on the IDE.
4. open the terminal on the main folder path and run the command node app

## 🎥 Demo
1.Home page with one blog

<img width="643" alt="image" src="https://user-images.githubusercontent.com/87472603/209483003-00c204d0-309d-4b23-a73b-b5ce07d2f850.png">

2.specific blog entry

<img width="646" alt="image" src="https://user-images.githubusercontent.com/87472603/209483012-2ee7552b-b8e6-40f9-9cfc-5b93e9e0f376.png">

3.home page after deleting the entry using delete button

<img width="656" alt="image" src="https://user-images.githubusercontent.com/87472603/209483019-cb95c575-4a6c-437c-9aa9-5db2272dbe2f.png">

4.Creating new blog 

<img width="685" alt="image" src="https://user-images.githubusercontent.com/87472603/209483029-ceebe0f2-7ca6-472b-a8c8-5bc4df85be73.png">

5.few blogs sorted by timestamp (from new to old)

<img width="636" alt="image" src="https://user-images.githubusercontent.com/87472603/209483050-59b918bd-e739-43c3-b5ec-6c59cc6bfcef.png">

### 📚 Database
All blog entries are saved in MongoDB 

<img width="948" alt="image" src="https://user-images.githubusercontent.com/87472603/209483065-b6f2d903-72ec-49ef-b3f1-d7f1644254ec.png">

I used Mongoose in my project for convenience 

### :construction: Coming Soon
user implementation
