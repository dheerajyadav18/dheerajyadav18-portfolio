import React from "react";
import "./TalkCard.scss";

export default function TalkCard({ talkDetails }) {
  return (
    <div>
      <div className="container">
        <div className="size">Data Structures And Algorithms</div>
        <div className="size">Problem Solving</div>
        <div className="size">Website Development</div>
        <div className="size">Database Management System</div>
        <div className="size">Computer Networks</div>
        <div className="size">Open Source (basics)</div>
        <div className="size">Object Oriented Programming</div>
        <div className="size">UI/UX Designing</div>
        <div className="size">Influencer</div>
        <div className="size">Figma Prototyping</div>
        <div className="size">Editing</div>
        <div className="size">Traveling</div>
      </div>
      <h1>Services<br /></h1>
      <p>THESE ARE SOME OF THE SERVICES I OFFER. REACH OUT TO ME IF I CAN HELP YOU WITH ANY!</p>
      <div className="container">
        <div className="size">Website Development</div>
        <div className="size">Web Design</div>
        <div className="size">Photography</div>
        <div className="size">Editing</div>
        <div className="size">Blog Posting</div>
        <div className="size">Figma Prototyping</div>
        <div className="size">UI/UX</div>
        <div className="size">Email Marketing</div>
      </div>
    </div>
  );
}
