import { use } from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

const users = [
  { 
    userName: "TomasFernandez123", 
    mail: "tomifer47@gmail.com",
    initialIsFollowing: true 
  },
  { 
    userName: "midudev",
    mail: "tomifer47@gmail.com",
    initialIsFollowing: false
  }]

export function App () {
  return (
    <section className="App">
        {
          users.map(({ userName, mail, initialIsFollowing}) => (
            <TwitterFollowCard 
              key={userName} 
              userName={userName} 
              mail={mail} 
              initialIsFollowing={initialIsFollowing}
            />
          )) 
        }
    </section>
  )
}
