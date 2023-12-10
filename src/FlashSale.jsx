import './flashsale.css'
import Card from './Card'

const FlashSale = () => {
  let arr=[1,2,3,4,5,6,7]
  return (
 
    <>
     <div className='darazclone__flashsale'>
      <div className="a">
        <p>ON Sale Now</p>
      </div>
      <div className="b">
        <p>Ending In </p>
        <p> <span className='countdown'>07</span>:<span className='countdown'>23</span>:<span className='countdown'>21</span> </p>
      </div>
      <div className="c">
        <h1>Flash Sale</h1>
      </div>
      <div className="d">
        <button>shop more</button>
      </div>

    </div>

     <div className='darazclone__flashsale-product'>
      
     {arr.map((item,index) => 
        <Card  item = {item} key={index} />
       )}
       <div className="darazclone__product-title">
      <h3>Just For You</h3>

      </div>
      {arr.map((item,index) => 
        <Card  item = {item} key={index} />
       )}
         <div className="darazclone__product-title">
      <h3>Latest Products</h3>

      </div>
      {arr.map((item,index) => 
        <Card  item = {item} key={index} />
       )}


  </div>
  

    </>

  
   
  )
}

export default FlashSale