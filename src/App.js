import React from 'react';
import Main from './components/Main/main.component';


function App() {

  return (
    <div className="App">
        <Main/>
    </div>
  );
}/*
var date = Date.now();

var tweets =  [
  {id: 1, user: "Jolan Taelman", body:"Tweet 1", date: date, comments: [{id: 1, body: "comment 1", user: "username", createdAt: date, commenterPicture: "http://via.placeholder.com/20x20"} ] },
  {id: 2, user: "Jolan Taelman", body:"Tweet 2", date: date, comments: [] },
  {id: 3, user: "Jolan Taelman", body:"Tweet 3", date: date, comments: [] },
];


function deleteTweetfunc(id){
  var newtweets = tweets;
  var startposition = id - 1
  console.log(newtweets)
  var aa = newtweets.splice(startposition, 1);
  console.log(aa)
  console.log(newtweets)
  tweets = newtweets;
}*/

export default App;
