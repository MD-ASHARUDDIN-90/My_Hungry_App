export const data = [
    {
      quest : "What is React?",
      ans : "React is a front-end JavaScript library developed by Facebook in 2011.It follows the component based approach which helps in building reusable UI components.It is used for developing complex and interactive web and mobile UI.Even though it was open-sourced only in 2015, it has one of the largest communities supporting it.",
      isClick : false
    },
    {
      quest : "List some of the major advantages of React.",
      ans : "It increases the application’s performance. It can be conveniently used on the client as well as server side. Because of JSX, code’s readability increases. React is easy to integrate with other frameworks like Meteor, Angular, etc. Using React, writing UI test cases become extremely easy",
      isClick : false
    },
    {
      quest : "What are the limitations of React?",
      ans : "React is just a library, not a full-blown framework. Its library is very large and takes time to understand .It can be little difficult for the novice programmers to understand. Coding gets complex as it uses inline templating and JSX",
      isClick : false
    },
    {
      quest : " What is JSX?",
      ans : "JSX is a shorthand for JavaScript XML. This is a type of file used by React which utilizes the expressiveness of JavaScript along with HTML like template syntax. This makes the HTML file really easy to understand. This file makes applications robust and boosts its performance.",
      isClick : false
    },
    {
      quest : "What do you understand by Virtual DOM? Explain its works?",
      ans : "A virtual DOM is a lightweight JavaScript object which originally is just a copy of the real DOM. It is a node tree that lists the elements, their attributes and content as Objects and their properties. React’s render function creates a node tree out of the React components. It then updates this tree in response to the mutations in the data model which is caused by various actions done by the user or by the system",
      isClick : false
    },
    {
      quest : "“In React, everything is a component.” Explain .",
      ans : "Components are the building blocks of a React application’s UI. These components split up the entire UI into small independent and reusable pieces. Then it renders each of these components independent of each other without affecting the rest of the UI.",
      isClick : false
    },
    {
      quest : "What is the purpose of render() in React?",
      ans : "Each React component must have a render() mandatorily. It returns a single React element which is the representation of the native DOM component. If more than one HTML element needs to be rendered, then they must be grouped together inside one enclosing tag such as <form>, <group>,<div> etc. This function must be kept pure i.e., it must return the same result each time it is invoked.",
      isClick : false
    },
    {
      quest : " What is Props?",
      ans : "Props is the shorthand for Properties in React. They are read-only components which must be kept pure i.e. immutable. They are always passed down from the parent to the child components throughout the application. A child component can never send a prop back to the parent component. This help in maintaining the unidirectional data flow and are generally used to render the dynamically generated data.",
      isClick : false
    },
    {
      quest : "What is an event in React?",
      ans : "In React, events are the triggered reactions to specific actions like mouse hover, mouse click, key press, etc. Handling these events are similar to handling events in DOM elements. But there are some syntactical differences like. Events are named using camel case instead of just using the lowercase. Events are passed as functions instead of strings.The event argument contains a set of properties, which are specific to an event. Each event type contains its own properties and behavior which can be accessed via its event handler only.",
      isClick : false
    },
    {
      quest : " What do you understand by refs in React?",
      ans : "Refs is the short hand for References in React. It is an attribute which helps to store a reference to a particular React element or component, which will be returned by the components render configuration function. It is used to return references to a particular element or component returned by render(). They come in handy when we need DOM measurements or to add methods to the components.",
      isClick : false
    },
  ]