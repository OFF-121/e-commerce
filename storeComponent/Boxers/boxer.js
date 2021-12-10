
import CartImages from '../../reUse/cartImages';


import BoxersImages from './boxerImage';

export default function Boxer() {

    return (
        <div className="CartImageMainContainer">
          
            {BoxersImages.map((item)=>{
               return (
                   <CartImages 
                   key={item.id}
                   id={item.id}
                   name={item.name}
                    about={item.about} 
                    img={item.img} 
                    price={item.price}
                    />
               );
            })}
        </div>
    )
}
