import React from 'react';
import Accordian from './components/Accordian';
import Search from './components/Search';
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
  return (
    <div>
      {/* <Accordian items={items} /> */}
      <Search />
    </div>
  )
}

export default App;