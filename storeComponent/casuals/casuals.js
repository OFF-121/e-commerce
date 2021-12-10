
import CartImages from '../../reUse/cartImages';
import CasualImages from './casualmages'

import './casuals.css'

export default function Casuals() {

    return (
        <div className="CartImageMainContainer">
          
            {CasualImages.map((item,index)=>{
               return (
                   <CartImages 
                   key={index}
                   id={index}
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
