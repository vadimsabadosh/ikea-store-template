import { getData } from './getData.js';
import generateSubCatalog from './generateSubCatalog.js';

const catalog = () => {
    const updateSubCatalog = generateSubCatalog();
    
    const btnBurger = document.querySelector('.btn-burger');
    const catalog = document.querySelector('.catalog');
    const subCatalog = document.querySelector('.subcatalog');
    const subCatalogHeader = document.querySelector('.subcatalog-header');
    const btnReturn = document.querySelector('.btn-return');

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.insertAdjacentElement('beforeend', overlay);

    function openMenu() { 
            catalog.classList.add('open');
            overlay.classList.add('active');
        }

    function closeMenu(){
        catalog.classList.remove('open');
        overlay.classList.remove('active');
        closeSubMenu();
    }

    const handlerCatalog = (event) => {
            event.preventDefault();
            const target = event.target;
            const itemList = target.closest('.catalog-list__item');
            if(itemList){
                getData.subCatalog(target.textContent, (data) => {
                    updateSubCatalog(target.textContent, data)
                    subCatalog.classList.add('subopen');
                });
                
            }
            if(target.closest('.btn-close')){
                closeMenu();
            }
        }

    function closeSubMenu() { 
        subCatalog.classList.remove('subopen');
    }


    btnBurger.addEventListener('click', openMenu);
    overlay.addEventListener('click', closeMenu);
    catalog.addEventListener('click', handlerCatalog);
    subCatalog.addEventListener('click', (e) => {
        const btnReturn = e.target.closest('.btn-return');
        if(btnReturn) closeSubMenu();
    });
}
export default catalog;