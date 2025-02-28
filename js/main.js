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

const mainSelects = document.querySelectorAll('.main-select');

if (mainSelects.length) {
    mainSelects.forEach(el => {
        const inp = el.querySelector('input');
        const text = el.querySelector('.main-select__btn span');
        const list = el.querySelectorAll('ul li');

        if (list.length) {
            list.forEach(btn => {
                btn.onclick = () => {
                    inp.value = btn.textContent;
                    text.textContent = btn.textContent;
                }
            })
        }
    })
}

const formRanges = document.querySelectorAll('.form-range');

if (formRanges.length) {
    formRanges.forEach(range => {
        let rangeS = range.querySelectorAll("input[type=range]"),
            line = range.querySelector('.line'),
            min = parseFloat(rangeS[0].min),
            max = parseFloat(rangeS[0].max);

        const handleRange = () => {
            let slide1 = parseFloat(rangeS[0].value),
                slide2 = parseFloat(rangeS[1].value);
        
            if (slide1 > slide2) [slide1, slide2] = [slide2, slide1];
        
            line.style.left = ( 100 * ( slide1 - min ) ) / max + '%';
            line.style.width = 100 * (slide2 - slide1) / max + '%';
        };

        handleRange();

        rangeS.forEach(el => {
            el.oninput = handleRange;
        });
    })
}

const stepCards = document.querySelectorAll('.step-card');

if (stepCards.length) {
    stepCards.forEach(card => {
        const btn = card.querySelector('button.main-btn');
        const list = card.querySelectorAll('ul li');

        if (list.length) {
            list.forEach((el, elID) => {
                if (elID > 3) {
                    el.style.display = 'none';
                }
            })

            btn.onclick = () => {
                list.forEach(el => {
                    el.style.display = 'flex';
                })

                btn.style.display = 'none';
            }
        }
    })
} 

const projectExample = new Swiper('.project-example .swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    allowTouchMove: false,
    navigation: {
        nextEl: '.project-example .next-btn',
        prevEl: '.project-example .prev-btn',
    }
})