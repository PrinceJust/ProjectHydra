import ActionButton from './ui/buttons'

const App = () => {

  const handleClick = () => {
    console.log('Clicked!')
  }

  return (
   <>
    <ActionButton variant="default" btnSize="md" click={ handleClick } text="DEFAULT" />
    <ActionButton variant="info" btnSize="md" click={ handleClick } text="INFO" />
    <ActionButton variant="warning" btnSize="md" click={ handleClick } text="WARNING" />
    <ActionButton variant="danger" btnSize="md" click={ handleClick } text="DANGER" />
   </>
  );
}

export default App;
