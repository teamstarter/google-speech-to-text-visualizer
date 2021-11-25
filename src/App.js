import { useState } from 'react'
import 'tachyon'

function App() {
  const [users, setUsers] = useState({})
  const [conversation, setConversation] = useState()

  const handleJson = (e) => {
    const json = JSON.parse(e.target.value)
    const users = json.results.reduce((acc, item) => {
      return { [item.channelTag]: null, ...acc }
    }, {})

    setUsers(users)
    setConversation(json)
  }

  const handleUserName = (e) => {
    const userTag = e.target.name
    const newUser = { ...users }
    newUser[userTag] = e.target.value

    setUsers(newUser)
  }

  return (
    <div className="App">
      <div>
        <label>Json</label>
        <input type="textarea"
          name="textValue"
          onChange={handleJson}
        />
      </div>


      {Object.keys(users).map(user => {
        return (
          <div>
            <label>User n°{user}</label>
            <input type="text"
              name={user}
              onChange={handleUserName}
            />
          </div>
        )
      })}
      {Object.entries(users).map(([id, userName]) => <div>User {id} - {userName}</div>)}


      <div className="pa4">

        {conversation && conversation.results.map(message => {
          return (
            <div>{message.resultEndTime}-{users[message.channelTag]} : {message.alternatives.map(text => text.transcript)} </div>
          )
        })}

      </div>

    </div>
  );
}

export default App;
