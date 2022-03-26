import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      



      <div>
       <h5>Q:How does react work?</h5>
       <p>Answer: React is a javascript library,it is not framework it create user interfaces in a predictable and efficient way using declarative code. it to help build single page application , mobile apps and build complex app.react designs simple views for each state in your application and react will efficiently update and render just the right component when your data changes. React automatically updates the associated DOM element when we change data on a React element.React reads these objects and uses them to create HTML elements on the virtual DOM, after which it gets synced with the real DOM</p>
       <h5>Q:How does usestate work?</h5>
       <p>Answer:useState is a Hook that allows you to have state variables in functional components.State generally refers to data or properites that need to be tracking in an application.To use the useState Hook, we first need to import it into our component.To use the useState Hook, we first need to import it into our component.We initialize our state by calling useState in our function component.React keeps track of these state variables and ensures they stay up-to-date on subsequent re-renders of the component .The useState() is a Hook that allows you to have state variables in functional components.</p>
      </div>
    </div>
  );
}

export default App;
