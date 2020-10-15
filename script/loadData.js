import { getData } from './getData.js'; 



    const cartlist =[
        {
            id: 'idd015',
            count: 3
        },
        {
            id: 'idd045',
            count: 1
        },
        {
            id: 'idd095',
            count: 2
        }
    ];

export const loadData = () => {


    
    if(location.hash){
        getData.item(location.hash.slice(1), (data) => console.log(data));
    }
    if(location.pathname.includes('cart')){
        getData.cart(cartlist, (data) => console.log(data));
    }

    //getData.catalog((data) => console.log(data));
    //getData.subcatalog('Декор', (data) => console.log(data));

    
};