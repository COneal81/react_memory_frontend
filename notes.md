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
    d. Check to see if seed data is coming in dev tools