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
      {users.length > 0 && <div id="usersList">
        {users.map((user, index) => (
           <div class="userBox">
            {/* Update user card to display: image, complete name, country and city */}
            <img src={`https://randomuser.me/api/portraits/med/men/12.jpg${''}`} class="userImage"/>
            <div class="data">
              <p class="userName">{`Oskar${''} Roussel${''}`}</p>
              <p class="ligth">{`México${''}, ${user.location.city}`}</p>
            </div>
          </div>
          ))
        }
      </div>
      }
      {/* Loader to show until we get the users */}
      {users.length <= 0 &&    <div id="usersList">
          <div id="userNumber" class="userBox">
              <div class="userImage greyLoad"></div>
              <p class="userName greyLoad voidText"></p>
          </div>
      </div>
      }  
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));




