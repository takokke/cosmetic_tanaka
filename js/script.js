// PAGE-TOPボタンの実装
$(function() {
    let btnTop = $("#page-top");
    $(window).scroll(function () {
       if ($(this).scrollTop() > 156) {
            btnTop.fadeIn(300);
       } else {
            btnTop.fadeOut(300);
       }
    })

//上に戻る
    btnTop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
})

//  ヘッダーのaタグスクロール(about)
$(function() {
    const to_about = $("#to_about")
    to_about.click(function () {
        $('body,html').animate({
            scrollTop: 630
        }, 500);
    })

//  ヘッダーのaタグスクロール(active)

    const to_active = $("#to_active")
    to_active.click(function() {
        $('body,html').animate({
            scrollTop: 1100
        }, 500)
    })
//  ヘッダーのaタグスクロール(contact)
    const to_contact = $("#to_contact")
    to_contact.click(function() {
        $('body,html').animate({
            scrollTop :1550
        }, 500)
    })
})
