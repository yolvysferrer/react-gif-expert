import React, { useState } from 'react'
import { AddCategory,GifGrid } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch'])
  
  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;
    setCategories([newCategory,...categories]);
  }

  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory onNewCategory={onAddCategory}/>

        {categories.map((category) => 
        <GifGrid key = {category} category={category}/>
        )};     

    </>
  )
}


// RXch6Ibs8Pn6W1pErdYe8Xa83MUQkDdQ API KEY