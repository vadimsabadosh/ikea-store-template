const catalog = () => {
    const btnBurger = document.querySelector('.btn-burger');
    const catalog = document.querySelector('.catalog');
    const btnClose = document.querySelector('.btn-close');
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

    function openSubMenu(e) {
            e.preventDefault();
            const itemList = e.target.closest('.catalog-list__item');
            if(itemList){
                subCatalogHeader.innerHTML = itemList.innerHTML;
                subCatalog.classList.add('subopen');
            }
        }

    function closeSubMenu() { 
        subCatalog.classList.remove('subopen');
    }


    btnBurger.addEventListener('click', openMenu);
    btnClose.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
    catalog.addEventListener('click', openSubMenu);
    btnReturn.addEventListener('click', closeSubMenu);
}
export default catalog;