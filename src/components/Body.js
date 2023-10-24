
import RestourentCard from './RestourentCard';
import data from '../../mock.json';

const Body=()=>{
  // console.log(data)
  const {sections}=data;
  
   return (<>
      <div className='flex flex-wrap justify-center'>
      {sections.SECTION_SEARCH_RESULT.map(result=>(
        <RestourentCard {...result?.info} key={result?.info?.resId}/>
      ))}
      </div>
    </>)
}

export default Body;