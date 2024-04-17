import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

interface EventProps {
  event: {
    title: string;
    description: string;
    date: string;
    location: string;
  };
}

const Event: React.FC<EventProps> = ({ event }) => {
  return (
    <div className="bg-white rounded-md shadow-md p-4">
      <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
      <p className="text-gray-600 mb-2">{event.description}</p>
      <div className="flex justify-between">
        <div className="flex items-center">
          <FaCalendarAlt className="text-gray-500 mr-1" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center">
          <FaMapMarkerAlt className="text-gray-500 mr-1" />
          <span>{event.location}</span>
        </div>
      </div>
    </div>
  );
};

export default Event;
