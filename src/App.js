import React  , { useState } from 'react';
import Accordian from './components/Accordian';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
const App = () => {
  const items = [
    {
      title: 'What is react',
      content: 'React is a frontend javascript framework'
    },
    {
      title: 'Why use react',
      content: 'because it is a nice library among frontend developers'
    },
    {
      title: 'How do you use react react',
      content: 'by creating components'
    },
  ];
  const options = [
    {
      label: 'The Color Red',
      value: 'red'
    },
    {
      label: 'The Color Green',
      value: 'green'
    },
    {
      label: 'A shade of Blue',
      value: 'blue'
    }
  ];
  const [selected , setSelected] = useState(options[0]);
  return (
    <div>
      {/* <Accordian items={items} /> */}
      {/* <Search /> */}
      <Dropdown selected={selected} onSelectChange={setSelected} options={options}/>
    </div>
  )
}

export default App;