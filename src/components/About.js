import React from 'react';
import './About.css';  // Make sure to create this CSS file

export default function About() {
  return (
    <div className='container'>
      <div className='about-page'>
        <div className='about-text'>
          <h1>About TextUtils</h1>
          <p>TextUtils is a versatile online tool designed to assist users in manipulating and analyzing text conveniently. Whether you're a writer, student, or anyone who deals with text regularly, TextUtils offers a range of useful functions to enhance your workflow.</p>
          <h2>Key Features</h2>
          <ul>
            <li><strong>Text Transformation:</strong> Convert text to uppercase, lowercase, or capitalize sentences.</li>
            <li><strong>Character and Word Count:</strong> Quickly determine the number of characters and words in your text.</li>
            <li><strong>Reading Time Calculation:</strong> Estimate how long it takes to read your text based on average reading speed.</li>
            <li><strong>Email Extraction:</strong> Extract email addresses from text for easier contact management.</li>
          </ul>
          <h2>Why Choose TextUtils?</h2>
          <p>TextUtils is designed with simplicity and efficiency in mind, offering a user-friendly interface and powerful features that streamline text processing tasks. Whether you need to format text for publication, analyze content statistics, or extract information, TextUtils is your go-to tool.</p>
          <p>Experience the convenience of managing and manipulating text effortlessly with TextUtils!</p>
        </div>
        
        <div className='about-developer'>
          <h2>Developed by Sneha Arora</h2>
          <p>This application was developed by Sneha Arora. Her expertise in web development and passion for creating useful tools have brought TextUtils to life.</p>
          <img src="/picture.jpeg" alt="Sneha Arora" className="developer-image" />
        </div>
      </div>
    </div>
  );
}
