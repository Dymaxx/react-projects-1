import React from 'react';

const List = ({people}) => {
  return (
    <>
      {people.map((person) => {
        const {id,name,age,image} = person
        return(
          <section className='person' key={id}>
            <img src={image} alt={name}/>
            <div>
        <h4>{name}</h4>
        <p>{age}</p>
        
            </div>
          </section>
        )
      })
      }
    </>
  );
};

export default List;
