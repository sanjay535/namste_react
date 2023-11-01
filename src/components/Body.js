
import RestourentCard from './RestourentCard';
import data from '../../mock.json';
import { addItem,clearCart } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

const Body=()=>{
  // console.log(data)
  
  const dispatch=useDispatch();
  const {sections}=data;

  const handleAddItem=()=>{
    dispatch(addItem("Paneer pakoda"));
  }
  const handleClearItem=()=>{
    dispatch(clearCart());
  }

   return (<>
      <button className='bg-blue-100 m-4' onClick={()=>handleAddItem()}>Add Dummy Item</button>
      <button className='bg-blue-100 m-4' onClick={()=>handleClearItem()}>Clear Dummy Item</button>
      <div className='flex flex-wrap justify-center'>
      {sections.SECTION_SEARCH_RESULT.map(result=>(
        <RestourentCard {...result?.info} key={result?.info?.resId}/>
      ))}
      </div>
    </>)
}

export default Body;