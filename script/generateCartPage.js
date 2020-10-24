import { getData } from './getData.js';
import userData from './userData.js';

const generateCartPage = () => {

    if(location.pathname.includes('cart')){
        getData.cart(userData.cartlist, (data) => console.log(data));
    }







};
export default generateCartPage;