import Form from './Components/Form/Form';
import Output from './Components/Output/Output';
import { useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  const addUser = (name, age) => {
    // console.log(data);
    setData(prevState => {
      const updated = [...prevState];
      updated.unshift({ id: Math.random().toString(), user: name, age: age });
      return updated;

      // return [...prevState, {id: Math.random().toString(), user:name, age: age}];

    })
  }

  let content = '';

  if (data.length > 0) {
    content = <Output testdata={data} />;
  }

  return (
    <>
      <Form test={addUser} />
      {/* <Output testdata={data} /> */}
      {content}
    </>
  );
}

export default App;
