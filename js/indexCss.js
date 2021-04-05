$(document).ready(function(){
    let ww = $(window).width();
    let wh = $(window).height();
    
    const skill_pc = function(){
        $('.html_skill').css({ top: '10%', left: '20%', });
        $('.css_skill').css({ top: '55%', left: '20%', });
        $('.js_skill').css({ top: '35%', left: '35%', }, );
        $('.java_skill').css({ top: '10%', left: '50%', });
        $('.ps_skill').css({ top: '55%', left: '60%', });
        $('.ill_skill').css({ top: '35%', left: '75%', });
    }
    
    const skill_tab = function(){
        $('.html_skill').css({ top: '5%', left: '30%', });
        $('.css_skill').css({ top: '5%', left: '60%', });
        $('.js_skill').css({ top: '30%', left: '40%', });
        $('.java_skill').css({ top: '55%', left: '30%', });
        $('.ps_skill').css({ top: '60%', left: '60%', });
        $('.ill_skill').css({ top: '80%', left: '45%', });
    }
    
    if( ww >= 1550 ){
        $('section').css({ height: wh, minHeight: 930, maxHeight: wh, });
        $('.section_5').css({ height: wh-100, minHeight: 830, maxHeight: wh-100, });
        $('.avail_skill_box').css({ height: 500, });
        skill_pc();
    }else if(ww < 1550 && ww >= 1200){
        $('section').css({ height: wh, minHeight: 700, maxHeight: 790, });
        $('.section_5').css({ height: wh-100, minHeight: 600, maxHeight: 690, });
        $('.avail_skill_box').css({ height: ($('section').height() * 0.45), });
        skill_pc();
    }else if(ww < 1200 && ww >= 1025){
        $('section').css({ height: wh, minHeight: 600, maxHeight: 790, });
        $('.section_5').css({ height: wh-100, minHeight: 500, maxHeight: 690, });
        $('.avail_skill_box').css({ height: ($('section').height() * 0.45), });
        skill_pc();
    }else if(ww < 1025 && ww >= 768){
        $('section').css({ height: wh, minHeight: 768, maxHeight: 800, });
        $('.section_1').css({ height: wh, minHeight: 768, maxHeight: 1366, });
        $('.section_5').css({ height: wh-140, minHeight: 668, maxHeight: 700, });
        $('.avail_skill_box').css({ height: ($('section').height() * 0.45), maxHeight: 400, });
        skill_pc();
    }else if(ww < 768 && ww >= 500){
        $('section').css({ height: wh, minHeight: 768, maxHeight: wh, });
        $('.section_1').css({ height: wh, minHeight: 512, maxHeight: wh, });
        $('.section_5').css({ height: wh-100, minHeight: 668, maxHeight: wh-100, });
        $('.avail_skill_box').css({ height: ($('section').height() * 0.6), maxHeight: ($('section').height() * 0.45), });
        skill_tab();
    }else{
        $('section').css({ height: wh, minHeight: wh, maxHeight: wh, });
        $('.section_5').css({ height: wh-60, minHeight: wh-60, maxHeight: wh-60, });
        $('.avail_skill_box').css({ height: ($('section').height() * 0.7), maxHeight: ($('section').height() * 0.45), });
        skill_tab();
    }
   
    
    $(window).resize(function(){
        ww = $(window).width();
        wh = $(window).height();
        if( ww >= 1500 ){
            $('section').css({ height: wh, minHeight: 930, maxHeight: 790, maxHeight: wh, });
            $('.section_5').css({ height: wh-100, minHeight: 830, maxHeight: 690, maxHeight: wh-100, });
            $('.avail_skill_box').css({ height: 500, });
            skill_pc();
        }else if(ww < 1500 && ww >= 1200){
            $('section').css({ height: wh, minHeight: 700, maxHeight: 790, });
            $('.section_5').css({ height: wh-100, minHeight: 600, maxHeight: 690, });
            $('.avail_skill_box').css({ height: ($('section').height() * 0.45), });
            skill_pc();
        }else if(ww < 1200 && ww >= 1025){
            $('section').css({ height: wh, minHeight: 600, maxHeight: 790, });
            $('.section_5').css({ height: wh-100, minHeight: 500, maxHeight: 690, });
            $('.avail_skill_box').css({ height: ($('section').height() * 0.45), });
            skill_pc();
        }else if(ww < 1025 && ww >= 768){
            $('section').css({ height: wh, minHeight: 768, maxHeight: 800, });
            $('.section_1').css({ height: wh, minHeight: 768, maxHeight: 1366, });
            $('.section_5').css({ height: wh-140, minHeight: 668, maxHeight: 700, });
            $('.avail_skill_box').css({ height: ($('section').height() * 0.45), maxHeight: 400, });
            skill_pc();
        }else if(ww < 768 && ww >= 500){
            $('section').css({ height: wh, minHeight: 768, maxHeight: wh, });
            $('.section_1').css({ height: wh, minHeight: 512, maxHeight: wh, });
            $('.section_5').css({ height: wh-100, minHeight: 668, maxHeight: wh-100, });
            $('.avail_skill_box').css({ height: ($('section').height() * 0.6), maxHeight: ($('section').height() * 0.45), });
            skill_tab();
        }else{
            $('section').css({ height: wh, minHeight: 667, maxHeight: wh, });
            $('.section_1').css({ height: wh, minHeight: wh, maxHeight: wh, });
            $('.section_5').css({ height: wh-60, minHeight: 607, maxHeight: 607, });
            $('.avail_skill_box').css({ height: ($('section').height() * 0.7), maxHeight: ($('section').height() * 0.45), });
            skill_tab();
        }
    });
    
});