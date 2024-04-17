import React from 'react';
import Event from './Event';

const events = [
  {
    title: 'Evento 1',
    description: 'Descrição do evento 1',
    date: '25 de Abril de 2024',
    location: 'Localização 1',
  },
  {
    title: 'Evento 2',
    description: 'Descrição do evento 2',
    date: '30 de Abril de 2024',
    location: 'Localização 2',
  },
];

const EventsPage: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
      {events.map((event, index) => (
        <Event key={index} event={event} />
      ))}
    </div>
  );
};

export default EventsPage;
