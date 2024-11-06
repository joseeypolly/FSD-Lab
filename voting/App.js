import React, { useState } from 'react';
import './App.css';
function App() {
// State to store vote counts for candidates
const [votes, setVotes] = useState({ IOT: 0, Datascience: 0, Cybersecurity: 0 });
// Handle vote for a candidate
const handleVote = (candidate) => {
setVotes({ ...votes, [candidate]: votes[candidate] + 1 });
};
return (
<div className="App">
<h1>Voting Application</h1>
<div className="candidates">
<h2>Vote for your favorite candidate:</h2>
<div>
<button onClick={() => handleVote('IOT')}>Vote for IOT</button>
<span>IOT: {votes.IOT}</span>
</div>
<div>
<button onClick={() => handleVote('Datascience')}>Vote for Datascience</button>
<span>Datascience: {votes.Datascience}</span>
</div>
<div>
<button onClick={() => handleVote('Cybersecurity')}>Vote for Cybersecurity</button>
<span>Cybersecurity: {votes.Cybersecurity}</span>
</div>
</div>
<h2>Current Results:</h2>
<ul>
<li>IOT: {votes.IOT}</li>
<li>Datascience: {votes.Datascience}</li>
<li>Cybersecurity: {votes.Cybersecurity}</li>
</ul>
</div>
);
}
export default App;