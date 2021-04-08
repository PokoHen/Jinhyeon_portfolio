$(document).ready(function(){
        
    /* 메뉴 버튼 활성화 */
    $('.menu_btn').click(function(){
        $('.menu_box').css({ zIndex: 9, minWidth: 80, }).animate({ width: 'toggle', }, 400, 'linear');
        $('img.ham').transition({ rotateX: '90deg', });
        $('img.closeBtn').transition({ rotateX: '0deg', });
    });
    $('.close_btn').click(function(){
        $('.menu_box').css({ zIndex: -1, }).animate({ width: 'toggle', minWidth: 80, }, 400, 'linear');
        $('img.ham').transition({ rotateX: '0deg', });
        $('img.closeBtn').transition({ rotateX: '90deg', });
    });
    
    let data_menu = 0;
    $('.menu_text>p').each(function(index){
        $(this).attr('data-menu', index);
    }).click(function(){
        data_menu = $(this).attr('data-menu');
        $('html, body').stop().animate({ 
            scrollTop: $('section').eq(data_menu).offset().top, 
        });
        $('.menu_box').css({ zIndex: -1, }).animate({ width: 'toggle', minWidth: 80, }, 400, 'linear');
        $('img.ham').transition({ rotateX: '0deg', });
        $('img.closeBtn').transition({ rotateX: '90deg', });
    });
    
    /* 옆으로 나오는 스킬들 */
    let scrTop = $('html, body').scrollTop();
    let sec_2 = $('.section_2').offset().top;
    let sec_3 = $('.section_3').offset().top;
    
    $(window).resize(function(){ sec_2 = $('.section_2').offset().top; })
    
    const menu_change = function(scrTop, sec_2){
        if(scrTop >= sec_2-150){
            $('.menu_btn, .menu_box').delay(0).addClass('menu_blue', 300);
            $('.ham').attr('src', 'img/common/menuBarUnder.png');
            $('.closeBtn').attr('src', 'img/common/menuCloseUnder.png');
        }else{
            $('.menu_btn, .menu_box').delay(0).removeClass('menu_blue', 300);
            $('.ham').attr('src', 'img/common/menuBarFirst.png');
            $('.closeBtn').attr('src', 'img/common/menuCloseFirst.png');
        }
    }
    menu_change(scrTop, sec_2);
    
    const up_skill_pc = function(){
        $('.html_skill').animate({ top: '10%', left: '20%', opacity: 1, }, 300);
        $('.css_skill').animate({ top: '55%', left: '20%', opacity: 1, }, 300);
        $('.js_skill').delay(100).animate({ top: '35%', left: '35%', opacity: 1, }, 300);
        $('.java_skill').delay(200).animate({ top: '10%', left: '50%', opacity: 1, }, 300);
        $('.ps_skill').delay(300).animate({ top: '55%', left: '60%', opacity: 1, }, 300);
        $('.ill_skill').delay(400).animate({ top: '35%', left: '75%', opacity: 1, }, 300);
        $('.react_skill').delay(500).animate({ top: 0, opacity: 1, }, 300);
        $('.aws_skill').delay(600).animate({ top: 0, opacity: 1, }, 300);
        $('.oracle_skill').delay(700).animate({ top: 0, opacity: 1, }, 300);
    }
    
    const up_skill_tab = function(){
        $('.html_skill').animate({ top: '5%', left: '30%', opacity: 1, }, 300);
        $('.css_skill').animate({ top: '5%', left: '60%', opacity: 1, }, 300);
        $('.js_skill').delay(100).animate({ top: '30%', left: '40%', opacity: 1, }, 300);
        $('.java_skill').delay(200).animate({ top: '55%', left: '30%', opacity: 1, }, 300);
        $('.ps_skill').delay(300).animate({ top: '60%', left: '60%', opacity: 1, }, 300);
        $('.ill_skill').delay(400).animate({ top: '80%', left: '45%', opacity: 1, }, 300);
        $('.react_skill').delay(500).animate({ top: 0, opacity: 1, }, 300);
        $('.aws_skill').delay(600).animate({ top: 0, opacity: 1, }, 300);
        $('.oracle_skill').delay(700).animate({ top: 0, opacity: 1, }, 300);
    }
    
    let ww = $(window).width();
    
    $(window).resize(()=>{ ww = $(window).width(); })
    
    if(scrTop >= sec_3-500 && ww >= 768 ){
        up_skill_pc();
    }else if(scrTop >= sec_3-300 && ww < 768){
        up_skill_tab();
    }
    
    $(window).scroll($.throttle( 100, function(){
        scrTop = $('html, body').scrollTop();
        menu_change(scrTop, sec_2);
        if(scrTop >= sec_3-300 && ww >= 768){
            up_skill_pc();
        }else if(scrTop >= sec_3-300 && ww < 768){
            up_skill_tab();
        }
    }));
    
    /* 트로피 클릭 */
    let data_tropy = 0;
    
    $('.trophy_box').each(function(index){
        $(this).attr('data-tropy', index);
    }).click(function(){
        data_tropy = $(this).attr('data-tropy');
        $('.trophy_on').removeClass('trophy_active');
        $('.trophy').removeClass('trophy_disappear');
        $(this).children('img.trophy_on').addClass('trophy_active');
        $(this).children('img.trophy').addClass('trophy_disappear');
        
        $('.prot_box').fadeOut(200).removeClass('prot_box_active');
        $('.prot_box').eq(data_tropy).fadeOut(0,0).fadeIn(200).addClass('prot_box_active');
    });
    
    let mode_jud = 0;
    $('.mode_btn').click(function(){
        
        if(mode_jud == 0){
            ++mode_jud;
            $(this).html('데이모드').addClass('dark');
            $(this).siblings('div.prot_img').children('img.prot_none').removeClass('prot_active');
            $(this).siblings('div.prot_img').children('img.prot_none').eq(mode_jud).addClass('prot_active');
        }else if(mode_jud == 1){
            --mode_jud;
            $(this).html('다크모드').removeClass('dark');
            $(this).siblings('div.prot_img').children('img.prot_none').removeClass('prot_active');
            $(this).siblings('div.prot_img').children('img.prot_none').eq(mode_jud).addClass('prot_active');
        }
        
    });
    
    /* 한페이지 스크롤 */
    let event_scroll = false;
    let wheeltime = false;
    $('section').each(function(index){
        $(this).on('mousewheel DOMMouseScroll', function(e){
            
            /* 마우스 휠 */
            if(wheeltime==true){
                return;
            }
            setTimeout(function(){
                wheeltime=false;
            }, 500)
            wheeltime=true;
            /* originalEvent는 사파리를 위해*/
            const E = e.originalEvent;
            delta = 0;
            if(E.detail){
                delta = E.detail * -40;
            }else{
                delta = E.wheelDelta;
            }
            /* 마우스 휠을 아래로 내렸을 경우 */
            if(delta < 0 && !event_scroll){
                event_scroll = true;
                $('html, body').stop().animate({
                    scrollTop: $(this).next().offset().top, 
                }, 500, function(){
                    event_scroll = false;
                });
            }
            if(delta > 0 && !event_scroll){
                event_scroll = true;
                $('html, body').stop().animate({
                    scrollTop: $(this).prev().offset().top, 
                }, 500, function(){
                    event_scroll = false;
                });
            }
        });
    });
    
    /* 탑버튼 */
    
    $('.top_btn').click(function(){
        $('html, body').animate({scrollTop: 0, });
    });
    
    /* 텝 about */
    let tab_name = '';
    
    $('.tab_about_btn>li').each(function(){
        $(this).click(function(){
            $('.tab_about_btn>li').removeClass('on_tab');
            tab_name = $(this).attr('class');
            $('.edu, .lice').removeClass('tab_on');
            $(this).addClass('on_tab');
            if( tab_name == "tab_edu" ){
                $('.edu').addClass('tab_on');
            }else{
                $('.lice').addClass('tab_on');
            }
            
        });
    });
    
}); //end 