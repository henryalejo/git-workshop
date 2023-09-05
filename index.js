const App = () => {

  /**
   *   Function to call the random user API
   */
  const fetchUsers = async () => {
    return  await fetch('https://randomuser.me/api/?results=10')
    .then((response)=>{
        if(response.ok) {
            return  response.json();
        }
    })
    .then((data) => {
        return data.results;
    })
    .catch((err) => {
        console.log (`error: ${err}`);
    }); 
  }

  /**
   * State to store users inforamtion
   */
  const [users, setUsers] = React.useState([]);
  
  /**
   * We add the randomuser data to the users state
   */ 
  React.useEffect(() => {
      if (users.length <= 0) {
          fetchUsers().then(randomUsers => { setUsers(randomUsers)});
      }   
  });

  /**
   * Only to display the JSON with the users information in the console
   */
  React.useEffect(() => {console.log(users)}, [users]);

  return (
    <div className="App">
      <h1>The Social Network</h1>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));




