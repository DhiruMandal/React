import Card from './components/card.jsx';

const App = () => {
  return (
    <div className='parent'>
      <Card  user = 'Dhiru' age ={21} img = 'https://images.unsplash.com/photo-1756806382059-6887c67e2009?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card  user = 'Rajaram' age ={25} img='https://images.unsplash.com/photo-1745943374767-642a6d7a15ea?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    </div>
  );
};

export default App;
