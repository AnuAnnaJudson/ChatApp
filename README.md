A full stack Chat app using node js and react as backend and front end also using https://chatengine.io

Sign up to create a new account in https://chatengine.io the project ID needs to be used bothe in baclkend and frontend for the application to work fine

Created backend using simple node js code
* created a single API usng which users can be logged in to the chat engine
* use the https://rest.chatengine.io to know how to use the restapis associated with the chate engine
* here usng the Get or create user inside  the users to build the put request which will create user if doesnt exist
*  To use the out rest api as in this project pass the private key from https://chatengine.io which you get once logged in and create a project.

### Run the app using:### **npm run start**

Created front-end using *npm create vite@latest*
(use npm run dev to start the application)
(continue to install dependencies, give a project name, choose react and javascript when prompted to get the boiler plate.)
* remove ReactStrictmode from main.jsx since it doesn't work well with websockets.
* installled dependencies *npm i react-chat-engine-advanced* and axios
* the chatpage comes built in from the above dependency
### Run the app using *npm run dev* ###


#### note: replace the xxxxxxx with the project ID in front end and private key in backend ####
##### Here there is a request.rest file which can be used to test your api provided you need to install the rest vs code extension #####