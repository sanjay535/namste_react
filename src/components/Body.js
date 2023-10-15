import { useEffect, useState } from 'react';
import RestourentCard from './RestourentCard';
import { payLoad } from '../../constant';
import data from '../../mock.json';

const Body=()=>{
  // console.log(data)
  const {sections}=data;
  
   return (<>
      <div className='restourent-cards'>
      {sections.SECTION_SEARCH_RESULT.map(result=>(
        <RestourentCard {...result?.info} key={result?.info?.resId}/>
      ))}
      </div>
       
    </>)
}

export default Body;