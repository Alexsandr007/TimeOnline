    document.getElementById("footer").addEventListener("click", function () {
        window.location.href = "privacyPolicy.html";
    });

    function isOpen(isOpen, menu, Icon) {
        Icon.classList = isOpen ? 'arrow-active' : 'arrow-default';
        menu.style.display = isOpen ? 'flex' : 'none';
    }

    var menus = [
        {
            menu: document.getElementById("11"),
            icon: document.getElementById("menu1"),
            isOpen: false
        },
        {
            menu: document.getElementById("22"),
            icon: document.getElementById("menu2"),
            isOpen: false
        },
        {
            menu: document.getElementById("33"),
            icon: document.getElementById("menu3"),
            isOpen: false
        },
        {
            menu: document.getElementById("44"),
            icon: document.getElementById("menu4"),
            isOpen: false
        },
        {
            menu: document.getElementById("55"),
            icon: document.getElementById("menu5"),
            isOpen: false
        }
    ];

    function selectorMenu(condition) {
        // Закрываем все меню
        const selectedMenu = menus[condition - 1];
        for (const menu of menus) {
            if (menu.menu.classList.contains("open_menu") && menu.isOpen == true && menu.menu != selectedMenu.menu) {
                menu.menu.classList.toggle('open_menu');
                menu.isOpen = false;
                isOpen(menu.isOpen, menu.menu, menu.icon);
            }
        }

        // Открываем выбранное меню и обновляем его состояние
        if (condition >= 1 && condition <= 5) {
            selectedMenu.menu.classList.toggle('open_menu');
            selectedMenu.isOpen = selectedMenu.menu.classList.contains('open_menu');
            isOpen(selectedMenu.isOpen, selectedMenu.menu, selectedMenu.icon);
        }
    }

    function MobileIsOpen(IsOpen, menu, Icon) {
        Icon.classList = IsOpen
            ? 'Mobile_arrow-active'
            : 'Mobile_arrow-default'
        if (IsOpen) {
            menu.style.display = 'flex';
        } else {
            menu.style.display = 'none';
        }
    }

    var menusMobile = [
        {menu: document.getElementById("m11"), icon: document.getElementById("Mmenu1"), isOpen: false},
        {menu: document.getElementById("m22"), icon: document.getElementById("Mmenu2"), isOpen: false},
        {menu: document.getElementById("m33"), icon: document.getElementById("Mmenu3"), isOpen: false},
        {menu: document.getElementById("m44"), icon: document.getElementById("Mmenu4"), isOpen: false},
        {menu: document.getElementById("m55"), icon: document.getElementById("Mmenu5"), isOpen: false}
    ];

    function selectorMobileMenu(condition) {
        const selectedMenu = menusMobile[condition - 1];
        for (const menu of menusMobile) {
            if (menu.menu.classList.contains("open") && menu.isOpen == true && menu.menu != selectedMenu.menu) {
                menu.menu.classList.toggle('open');
                menu.isOpen = false;
                MobileIsOpen(menu.isOpen, menu.menu, menu.icon);
            }
        }
        // Открываем выбранное меню и обновляем его состояние
        if (condition >= 1 && condition <= 5) {
            selectedMenu.menu.classList.toggle('open');
            selectedMenu.isOpen = selectedMenu.menu.classList.contains('open');
            MobileIsOpen(selectedMenu.isOpen, selectedMenu.menu, selectedMenu.icon);
        }
    }

    const toggleBtn = document.querySelector('.toggle_btn')
    const toggleBtnIcon = document.querySelector('.toggle_btn i')
    const menu_mobile = document.querySelector('.menu_mobile')

    toggleBtn.onclick = function () {
        menu_mobile.classList.toggle('open')
        const isOpen = menu_mobile.classList.contains('open')

        toggleBtnIcon.classList = isOpen
            ? 'fa-solid fa-xmark'
            : 'fa-solid fa-bars'
    }

    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.carousel');
        var options = {
            duration: 200,
            fullWidth: false,
            indicators: window.innerWidth < 900 ? true : false,
            padding: window.innerWidth < 1025 ? 50 : 500
        };
        var instances = M.Carousel.init(elems, options);
    });