$(function () {


    // close-nav
    function closeNav() {
        $('header').removeClass('j-header');
        $('header').removeClass('j-header-open');
        $('header').addClass('j-header-close');
        $('.j-text-black').css('color', '#000');
        $('.main-nav').hide();
    }

    function slideUpNav(){
        $('header').removeClass('j-header');
        $('header').removeClass('j-header-open');
        $('header').addClass('j-header-close');
        $('.j-text-black').css('color', '#000');
        $('.main-nav').slideUp("slow");
    }

    function slideDownNav(){
        $('header').addClass('j-header');
        $('header').addClass('j-header-open');
        $('header').removeClass('j-header-close');
        $('.j-text-black').css('color', '#000');
        $('.main-nav').slideDown();
    }

    var $win = $(window);

    /* =====================
      Navのスクロール機能
    ===================== */

    /*  Aboutのスクロール機能
    ------------------------- */
    $('#scroll-about').click(function () {
        var position = $('#about').offset().top;
        $('html, body').animate({
            'scrollTop': position
        }, 800);
    });

    /*  headerロゴ<h1>のスクロール機能
    ------------------------- */
    $('#scroll-top').click(function () {
        $('html, body').animate({
            'scrollTop': 0
        }, 1000);
    });

    /*  Navメニューのスクロール機能
    ------------------------- */
    $('.main-nav a').click(function () {
        var id = $(this).attr('href');
        var position = $(id).offset().top;
        if($('.main-nav a').index(this) == 1 ) {
            $('html, body').animate({
                'scrollTop': position
            }, 1000);
        } else {
            $('html, body').animate({
                'scrollTop': position - 30
            }, 1000);

    }
    });

    


    /* =====================
      NavのOpen / Close
    ===================== */

    /*  NavのOpen / Close
    ------------------------- */
    $('.open').click(function () {
        if ($('header').hasClass('j-header')) {
            slideUpNav();
        } else {
            slideDownNav();
        }
    });

    /*  li>aをクリックしたらNavを閉じる（ブレークポイントの設定済み）
    ------------------------- */
    var $win = $(window);

    $win.on('load resize', function () {
        var windowWidth = window.innerWidth;

        if (windowWidth < 1024) {
            $('.main-nav a').click(function () {
                closeNav();
            });
        }
    });


    
    
    /*  Nav以外の箇所をクリックしたらNavを閉じる（ブレークポイントの設定済み）
    ------------------------- */
    // マウスカーソルがメニュー上/メニュー外
    $win.on('load resize', function () {
        var windowWidth = window.innerWidth;

        if (windowWidth < 1024) {
            
            $('header').hover(function () {
                over_flg = true;
            }, function () {
                over_flg = false;
            });
        
            // メニュー領域外をクリックしたらメニューを閉じる
            $('body').click(function () {
                if (over_flg == false) {
                    closeNav();
                }
            });
            
        }
    });



    /* =====================
      スクロール時にNavの表示をする
    ===================== */

// var startPos = 0,
//     winScrollTop = 0;
// $(window).on('scroll', function () {
//     winScrollTop = $(this).scrollTop();
//     if (winScrollTop >= startPos) {
//         $('header').removeClass('j-header');
//         $('header').removeClass('j-header-open');
//         $('header').addClass('j-header-close');
//         $('.j-text-black').css('color', '#000');
//         $('header').stop().slideUp();
//         $('.main-nav').hide();
//     } else {
//         $('header').addClass('j-header');
//         $('header').addClass('j-header-open');
//         $('header').removeClass('j-header-close');
//         $('.j-text-black').css('color', '#000');
//         $('header').stop().slideDown();
//     }
//     startPos = winScrollTop;
// });



    var flag = "up";
    // scrollイベントを取得した際の処理を定義
    $(window).on("scroll", function () {
        // scrollTop()が「0」より大きい場合
        if ($(this).scrollTop() > 0) {
            // flag変数が「up」だった場合の処理
            if (flag === "up") {
                // ヘッダーバーに対して、stop()メソッドを実行してから、
                // animate()メソッドを実行
                $(".cb-header").stop().animate({
                    // topの位置を「-56px」から「0」になるまでアニメーション
                    backgroundColor: "#ffffff"
                    // アニメーション時間を「500ms」に設定
                }, 1000);
                $('header').removeClass('j-header-close');
                $('.j-text-black').css('color', '#000');
                $('header').addClass('j-header-shadow');
                // flag変数の値を「down」に変更
                flag = "down";
            }
            // scrollTop()が「0」の場合
        } else {
            // flag変数が「down」だった場合の処理
            if (flag === "down") {
                // ヘッダーバーに対して、stop()メソッドを実行してから、
                // animate()メソッドを実行
                $(".cb-header").stop().animate({
                    // topの位置を「0」から「-56px」になるまでアニメーション
                    backgroundColor: "rgba(255,255,255,0)"
                    // アニメーション時間を「500ms」に設定
                }, 1000);
                $('header').removeClass('j-header-close');
                $('.j-text-black').css('color', '#fff');
                $('header').removeClass('j-header-shadow');
                // flag変数の値を「up」に変更
                flag = "up";
            }
        }
    });



});