import React, { useState } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Button from './Button';

const App = () => {
  const [pets, setPets] = useState([]);

  // const handleClick = () => {
  //   if (index < pets.length) {
  //     setIndex(index + 1)
  //     console.log(index)
  //     SVGElementInstanceList(pets[index])
  //   }
  // }

  return (
    <div className="App">
      <Header title='Nuuhkukuonot' />
      <Content />
      <Footer>
        <Button id="hrt" icon={`heart`} />
        <Button id="bknhrt" icon={`heart-broken`} />
      </Footer>
    </div>
  );
}

export default App;
