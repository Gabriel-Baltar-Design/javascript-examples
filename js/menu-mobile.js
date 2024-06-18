export default function initMenuMobile() {
    const menuButton = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelector('[data-menu="list"]');

    function openMenu(event) {
        event.preventDefault();

        menuList.classList.add('active');
        menuButton.classList.add('active');

        outsideClick(menuList, () => {
            menuList.classList.remove('active');
            menuButton.classList.remove('active');
        });
    }

    menuButton.addEventListener('click', openMenu);

    function outsideClick(element, callback) {
        const html = document.documentElement;
        const outside = 'data-outside';

        if (!element.hasAttribute(outside)) {
            element.setAttribute(outside, '');

            setTimeout(() => {
                html.addEventListener('click', handleOutsideClick);
            });

            function handleOutsideClick(event) {
                if (!element.contains(event.target)) {
                    element.removeAttribute(outside);
                    html.removeEventListener('click', handleOutsideClick);
                    callback();
                }
            }
        }
    }
}
