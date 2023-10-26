
// 스크롤 값 나타나는 함수
let section_3_img_box = document.querySelector('.section_3_img_box');
let section_3_text_box = document.querySelector('.section_3_text_box');
let section_4_cup = document.querySelector('.section_4_cup');

window.addEventListener('scroll', () => {
    let scroll_value = window.scrollY;
    console.log(scroll_value)
    if (scroll_value > 500) {
        section_3_img_box.style.animation = 'section_3_img_box_slide 2s ease forwards';
        section_3_text_box.style.animation = 'section_3_text_box_slide 2s ease forwards';

    }
    else {
        section_3_img_box.style.animation = 'section_3_img_box_slide_del 2s ease forwards';
        section_3_text_box.style.animation = 'section_3_text_box_slide_del 2s ease forwards';
    }
    if (scroll_value > 1050) {
        section_4_cup.style.animation = 'section_4_cup 3.5s normal forwards';
    }
    else{
        section_4_cup.style.animation = 'section_4_cup_del 3.5s normal forwards';

    }
})

// 스크롤 값 나타나는 함수
