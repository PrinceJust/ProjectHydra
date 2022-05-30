import ActionButton from './ui/buttons';

const App = () => {

  const handleClick = () => {
    console.log('Clicked!')
  }

  return (
   <>
    <ActionButton variant='default' sizes='sm' click={handleClick} text='DEFAULT'/>
    <ActionButton variant='info' sizes='sm' click={handleClick} text='INFO'/>
    <ActionButton variant='warning' sizes='sm' click={handleClick} text='WARNING'/>
    <ActionButton variant='danger' sizes='sm' click={handleClick} text='DANGER'/>
   </>
  );
}

export default App;
