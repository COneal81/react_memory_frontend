1. Create React app using npx create-react-app name_of_your_project.  
    a. If you do not see an nodes_modules file, then run npm install.
    b. Check to see if everything loaded and run npm start.
2. In App.js
    a. Change from a function to a class App
    b. Add a render() and put the return() inside of the render.
    c. Add componentDidMount 
        1. class App extends React.Component{
                componentDidMount() {
                    fetch("http://127.0.0.1:3000/api/v1/memories")
                .then(r => r.json())
                .then(console.log)
                }
    d. Check to see if seed data is coming in dev tools (You will remove the componentWillMount() immediately.  This is just to confirm that your data is coming through.)

3. Initialize a git repo for frontend repository on github.com
    a. name it the same as the backend. ex. im_bored_backend and im_bored_frontend
    b. in terminal, git init
    c. in terminal, choose 2nd option on github, 1st line (git remote add origin git@github.com:COneal81/im_bored_frontend.git)
    d. in terminal, git add .
    e. in terminal, git commit -m'Inital setup'
    f. in terminal, choose 2nd option on github, 2nd line (git push -u origin master) Connect your API to your frontend!
4. You want to start building with React and Redux.  Otherwise you will have to go back and make changes.
    a. Redux
