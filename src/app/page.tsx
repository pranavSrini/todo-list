'use client'
import React, {useState} from 'react';
import Item from '../components/item';


//let itemNames = ['OOP Project', 'HCI Project', 'HIS315K', 'HIS315L'];

export default function Home() {

  const [count, setCount] = useState(1);
  const [ct, ab] = useState(1);

  function increment(inp: any){
      setCount(inp => inp + 1);
      console.log(inp);
      //ct = count;
  }

  function test(inp: any){
    ab(inp => inp + 1);
    console.log(inp);
    //ct = count;
}

  return (
      <div>
          {<Item 
          name =  {'OOP'}
          func = {increment}
          bool = {count}
          ></Item>}
          {<Item 
          name =  {'HCI'}
          func = {test}
          bool = {ct}
          ></Item>}
      </div>
  );
}
