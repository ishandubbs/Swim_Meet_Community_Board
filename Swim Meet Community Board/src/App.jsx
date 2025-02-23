import React from 'react';
import './App.css';
import EventCard from './EventCard';
import events from './Events';


const App = () => {

  return (
    <div className="App">
      <h1>Swim Meet Community Board</h1>
      <h2>Showcasing all of the upcoming swim meets in/nearby Georgia!</h2>
      <div className='events-grid'>
        {events.map(event => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
      
    </div>
  );
};

export default App