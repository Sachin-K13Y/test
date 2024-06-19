import React from 'react'
import EventCard from '../components/MainEventCard.jsx'
import { useState } from 'react';
const events = [
    {
      title: 'Hackofest',
      date: 'July 5, 2024',
      images: [
        'https://assets.devfolio.co/hackathons/748cbead053240aeba0e3f0fe1181ba1/assets/cover/388.jpeg'
       
      ],
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id quidem dolorem soluta. Quibusdam possimus earum blanditiis nobis, cupiditate ipsum ad corrupti voluptates similique dolores porroLorem ipsum dolor sit, amet consectetur adipisicing elit. Id quidem dolorem soluta. Quibusdam possimus earum blanditiis nobis, cupiditate ipsum ad corrupti voluptates similique dolores porroLorem ipsum dolor sit, amet consectetur adipisicing elit. Id quidem dolorem soluta. Quibusdam possimus earum blanditiis nobis, cupiditate ipsum ad corrupti voluptates similique dolores porroLorem ipsum dolor sit, amet consectetur adipisicing elit. Id quidem dolorem soluta. Quibusdam possimus earum blanditiis nobis, cupiditate ipsum ad corrupti voluptates similique dolores porroLorem ipsum dolor sit, amet consectetur adipisicing elit. Id quidem dolorem soluta. Quibusdam possimus earum blanditiis nobis, cupiditate ipsum ad corrupti voluptates similique dolores porroLorem ipsum dolor sit, amet consectetur adipisicing elit. Id quidem dolorem soluta. Quibusdam possimus earum blanditiis nobis, cupiditate ipsum ad corrupti voluptates similique dolores porro',
    },
    {
      title: 'Hackofest',
      date: 'August 15, 2024',
      images: [
        'https://assets.devfolio.co/hackathons/748cbead053240aeba0e3f0fe1181ba1/assets/cover/388.jpeg'
       
      ],
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id quidem dolorem soluta. Quibusdam possimus earum blanditiis nobis, cupiditate ipsum ad corrupti voluptates similique dolores porroLorem ipsum dolor sit, amet consectetur adipisicing elit. Id quidem dolorem soluta. Quibusdam possimus earum blanditiis nobis, cupiditate ipsum ad corrupti voluptates similique dolores porroLorem ipsum dolor sit, amet consectetur adipisicing elit. Id quidem dolorem soluta. Quibusdam possimus eahttps://assets.devfolio.co/hackathons/748cbead053240aeba0e3f0fe1181ba1/assets/cover/388.jpeghttps://assets.devfolio.co/hackathons/748cbead053240aeba0e3f0fe1181ba1/assets/cover/388.jpegrum blanditiis nobis, cupiditate ipsum ad corrupti voluptates similique dolores porro',
    },
  
  ];
const Events = () => {
    const [selectedImage, setSelectedImage] = useState(null);
  return (
  
    <div className="mt-[100px] bg-gray-900 py-10 px-3 w-screen">
    {/***********EVENTS SECTION********** */}
    <h1 className="text-[#F2F2F2] text-3xl font-semibold border-l-4 border-[#F96D00] px-3">Events</h1>

    <div className="flex flex-wrap">
      {events.map((event, index) => (
        <EventCard
          key={index}
          title={event.title}
          images={event.images}
          description={event.description}
        />
      ))}
    </div>
  </div>
  )
}

export default Events