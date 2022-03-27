import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <h3>Question: How react works?</h3>
            <p>Answer: To work with react we need two packages. React and React DOM.When we write a component it is a pure javascript component. This javascript code need to covert in HTML code. To do this task we need react.And to inject the HTML code to index.html. We need React Dom. Then we see our website in the browser. Thats how react work.</p>

            <h3>Question: Difference between Props and state?</h3>
            <p>Answer:</p>
            <p>Props: </p>
            <ul>
                <li>Props are immutable</li>
                <li>You can pass properties from parent components</li>
                <li>Determine the view upon creation, and then they remain static</li>
                <li>Both are accessible as attributes of the component class and compose components with a different representation </li>
            </ul>
            <p>State:</p>
            <ul>
                <li>State are mutable</li>
                <li>You can define states in the component itself</li>
                <li>The state is set and updated by the object.</li>
                <li>Both are accessible as attributes of the component class and compose components with a different representation.</li>
            </ul>
        </div>
    );
};

export default Footer;