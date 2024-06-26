import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        setText(text.toUpperCase());
    };

    const handleLowClick = () => {
        setText(text.toLowerCase());
    };

    const handleClearClick = () => {
        setText('');
    };

    const handleCapitalizeClick = () => {
        const capitalizedText = text
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        setText(capitalizedText);
    };

    const handleCapitalizeSentencesClick = () => {
        const sentences = text.split(/([.!?]\s*)/).filter(Boolean);
        const capitalizedText = sentences.map(sentence => {
            return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
        }).join('');
        setText(capitalizedText);
    };

    const handleExtractEmailsClick = () => {
        const emails = text.match(/[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+/g);
        setText(emails ? emails.join(', ') : 'No emails found');
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const calculateReadingTime = (text) => {
        const words = text.split(/\s+/).filter((word) => word.length > 0).length;
        return (0.008 * words).toFixed(2);
    };

    const countSentences = (text) => {
        const sentences = text.split(/[.!?]+/).filter((sentence) => sentence.trim().length > 0);
        return sentences.length;
    };

    const handleCopyText = () => {
        navigator.clipboard.writeText(text);
        alert('Text copied to clipboard!');
    };

    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        id="mybox"
                        rows="8"
                        onChange={handleOnChange}
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                <button className="btn btn-secondary mx-1 my-1" onClick={handleLowClick}>
                    Convert to Lowercase
                </button>
                <button className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>
                    Clear Text
                </button>
                <button className="btn btn-success mx-1 my-1" onClick={handleCapitalizeClick}>
                    Capitalize Words
                </button>
                <button className="btn btn-warning mx-1 my-1" onClick={handleCapitalizeSentencesClick}>
                    Capitalize Sentences
                </button>
                <button className="btn btn-info mx-1 my-1" onClick={handleExtractEmailsClick}>
                    Extract Emails
                </button>
                <button className="btn btn-dark mx-1 my-1" onClick={handleCopyText}>
                    Copy Text
                </button>
            </div>
            <div className="container my-3">
                <h2>Text summary</h2>
                {text.length !== 0 ? (
                    <>
                        <p>{text.split(/\s+/).filter((word) => word.length > 0).length} words and {text.length} characters</p>
                        <p>{calculateReadingTime(text)} minutes read</p>
                        <p>{countSentences(text)} sentences</p>
                    </>
                ) : (
                    <p>Enter some text to analyze</p>
                )}
            </div>
        </>
    );
}

TextForm.propTypes = {
    heading: PropTypes.string
};
