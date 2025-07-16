import React from 'react'
import "./styyles.css"
import CapsuleCard from '../CapsuleCard';

const sampleCapsule = {
  title: "Time Capsule to Myself",
  message: "Hello, future me!",
  emoji: ":))))",
  backgroundColor: "#33527cff",
  customBackground: null,
  tags: ["future", "note", "personal"],
  deliveryDate: "2025-12-25",
  privacy: "public",
  notifyEmail: true,
  surpriseMode: false,
  images: ["https://www.shutterstock.com/shutterstock/photos/159086927/display_1500/stock-photo-black-rowan-berries-on-branches-with-red-leaves-on-an-abstract-background-of-autumn-159086927.jpg"],
  voiceRecording: null,
  location: null,
};

function CapsuleContent() {
  return (
    <div> <CapsuleCard data={sampleCapsule} isPreview={true}/></div>
  )
}

export default CapsuleContent;