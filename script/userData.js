
import {getLocalStorage, setLocalStorage} from './storage.js';




const userData = {
    wishlistData: getLocalStorage('wishlist'),
    get wishlist() {
        return this.wishlistData;
    },
    set wishlist(id){
        if(this.wishlistData.includes(id)){
            
            const index = this.wishlistData.indexOf(id);
            this.wishlistData.splice(index, 1);
        }else{
            this.wishlistData.push(id);
        }
        setLocalStorage('wishlist', this.wishlist);
        
    },
    
    cartlistData: getLocalStorage('cartlist'),

    get cartlist() {
        return this.cartlistData;
    },
    set cartlist(id) {   
        let obj = this.cartlistData.find(item => item.id === id);
        if (obj) {
            obj.count++;
        }else{
            obj = {
                id,
                count : 1,
            };
            this.cartlistData.push(obj);
        }
        setLocalStorage('cartlist', this.cartlist);
    }
}
export default userData;