const homeSwp = new Swiper('.home-swp', {
    slidesPerView: 1,
    spaceBetween: 0,
    allowTouchMove: false,
})

const homeChildSwp = new Swiper('.home-child-swp .swiper', {
    slidesPerView: 1,
    spaceBetween: 25,
    breakpoints: {
        1279: {
            spaceBetween: 75,
        },
        787: {
            spaceBetween: 65,
        }
    },
    navigation: {
        nextEl: '.home .swp-next',
        prevEl: '.home .swp-prev',
    },
    thumbs: {
        swiper: homeSwp,
    },
})

let tabs = document.querySelectorAll('.tab');
if (tabs.length) {
    tabs.forEach(tab => {
        let tab_btns = tab.querySelectorAll('button');
        let tab_items = tab.querySelectorAll('.tab_item');
        tab_btns.forEach((tab_btn, btn_idx) => {
            tab_btn.onclick = () => {
                if (!tab_items[btn_idx].classList.contains('active')) {
                    tab_items.forEach((tab_item, item_idx) => {
                        if (tab_item.classList.contains('active')) {
                            tab_item.classList.remove('active');
                            tab_item.classList.add('end-active')
                            setTimeout(() => {
                                tab_item.classList.remove('end-active')
                            }, 200);
                        }
                    })
                    setTimeout(() => {
                        tab_items[btn_idx].classList.add('active')
                    }, 200);
                }
                tab_btns.forEach(item => {
                    item.classList.remove('active')
                })
                tab_btn.classList.add('active')
            }
        })
    })
}

const designSwp = new Swiper('.design .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 5,
    loop: true,
    breakpoints: {
        1279: {
            mousewheel: true,
            direction: "vertical",
        }
    }
})

const phoneInp = document.querySelectorAll('input[type="tel"]');

if (phoneInp.length) {
    phoneInp.forEach(el => {
        IMask(el, {
            mask: '+{7} (000) 000 00 00',
        })
    });
}