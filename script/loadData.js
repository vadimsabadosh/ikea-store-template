import { getData } from './getData.js'; 



   

export const loadData = () => {


    
    
    if(location.pathname.includes('cart')){
        getData.cart(cartlist, (data) => console.log(data));
    }

    //getData.catalog((data) => console.log(data));
    //getData.subcatalog('Декор', (data) => console.log(data));

    
};