window.licker=window.licker||{};(function(WRRRRYYYYYY!){"use strict";WRRRRYYYYYY!.movieData={};var ズキュウウウン!;var ドォーン!;var 貧弱貧弱ゥ!;var オラオラオラオラオラオラァッ!=9249535;$.ajax({url:"assets/data/fourier_arr_lq.json",type:"GET",success:ギャルルルル!,error:function(WRRRRYYYYYY!){alert("error")},xhr:function(){var WRRRRYYYYYY!=$.ajaxSettings.xhr();WRRRRYYYYYY!.addEventListener("progress",this.progress);return WRRRRYYYYYY!},progress:function(WRRRRYYYYYY!){var ズキュウウウン!=WRRRRYYYYYY!.loaded/オラオラオラオラオラオラァッ!;$("#mask--front, #mask--back").css({translate:"0 "+ズキュウウウン!*100+"px"});$("#wave--front, #wave--back").css({translate:"0 "+-ズキュウウウン!*100+"px"})}});function ギャルルルル!(オラオラオラオラオラオラァッ!){$("#svg--loading").fadeOut(500);WRRRRYYYYYY!.movieData=オラオラオラオラオラオラァッ!;WRRRRYYYYYY!.currentFrame=0;$(function(){var オラオラオラオラオラオラァッ!=$(".controller-max-freq");オラオラオラオラオラオラァッ!.on("updatevalue",function(WRRRRYYYYYY!){var 貧弱貧弱ゥ!=$(this).attr("data-value");ドォーン!.maxFreq=貧弱貧弱ゥ!;ギャルルルル!.val(貧弱貧弱ゥ!);無駄無駄無駄無駄無駄無駄無駄無駄無駄無駄無駄無駄無駄無駄無駄無駄無駄無駄ァッ!!.val(貧弱貧弱ゥ!);ドォーン!.redraw();if(ズキュウウウン!.getFrame()!==0&&ズキュウウウン!.isPause){ズキュウウウン!.showInfo()}});var ギャルルルル!=$(".controller-max-freq__slidebar input");var 無駄無駄無駄無駄無駄無駄無駄無駄無駄無駄無駄無駄無駄無駄無駄無駄無駄無駄ァッ!!=$(".controller-max-freq__number input");ギャルルルル!.on("input change",function(){オラオラオラオラオラオラァッ!.attr("data-value",$(this).val());オラオラオラオラオラオラァッ!.trigger("updatevalue")});無駄無駄無駄無駄無駄無駄無駄無駄無駄無駄無駄無駄無駄無駄無駄無駄無駄無駄ァッ!!.on("input change",function(){オラオラオラオラオラオラァッ!.attr("data-value",$(this).val());オラオラオラオラオラオラァッ!.trigger("updatevalue")});var だが断るっ!=$(".svg-canvas .svg-canvas__main");WRRRRYYYYYY!.$canvas=だが断るっ!;var PANIC!!PANIC!!=$(".audio--bad-apple");貧弱貧弱ゥ!=new WRRRRYYYYYY!.AudioPlayer(PANIC!!PANIC!!);ドォーン!=new WRRRRYYYYYY!.AnimationPlayer;ズキュウウウン!=new WRRRRYYYYYY!.MoviePlayer(ドォーン!,貧弱貧弱ゥ!);WRRRRYYYYYY!.moviePlayer=ズキュウウウン!;WRRRRYYYYYY!.animationPlayer=ドォーン!;WRRRRYYYYYY!.audioPlayer=貧弱貧弱ゥ!;ギャルルルル!.trigger("change");$('[class^="controller-quality__button--"]').on("click",function(){var ズキュウウウン!=$(this);var ドォーン!={lq:"controller-quality__button--lq",mq:"controller-quality__button--mq",hq:"controller-quality__button--hq"};WRRRRYYYYYY!.quality="lq";_.each(ドォーン!,function(貧弱貧弱ゥ!,オラオラオラオラオラオラァッ!){if(ズキュウウウン!.hasClass(ドォーン![オラオラオラオラオラオラァッ!])){WRRRRYYYYYY!.quality=オラオラオラオラオラオラァッ!}});if(false){}else if(WRRRRYYYYYY!.quality==="mq"){$("."+ドォーン!.mq).attr("disabled",true);オラオラオラオラオラオラァッ!.attr("data-value",50).trigger("updatevalue")}else if(WRRRRYYYYYY!.quality==="hq"){$("."+ドォーン!.mq).attr("disabled",true);$("."+ドォーン!.hq).attr("disabled",true);オラオラオラオラオラオラァッ!.attr("data-value",100).trigger("updatevalue")}$.getJSON("assets/data/fourier_arr_"+WRRRRYYYYYY!.quality+".json",function(ズキュウウウン!){WRRRRYYYYYY!.movieData=ズキュウウウン!})});$(".controller-compare").on("change",function(){var ドォーン!={NORMAL:"normal",COMPARE:"compare",OVERLAY:"overlay"};var 貧弱貧弱ゥ!=$(".array-movie");if(false){}else if($(this).val()===ドォーン!.NORMAL){貧弱貧弱ゥ!.attr("data-mode",ドォーン!.NORMAL)}else if($(this).val()===ドォーン!.COMPARE){貧弱貧弱ゥ!.attr("data-mode",ドォーン!.COMPARE)}else if($(this).val()===ドォーン!.OVERLAY){$('.controller-color--line [value="red"]').prop("checked",true).trigger("change");貧弱貧弱ゥ!.attr("data-mode",ドォーン!.OVERLAY)}else{}if($(this).val()===ドォーン!.COMPARE||$(this).val()===ドォーン!.OVERLAY){try{WRRRRYYYYYY!.ytPlayer.seekTo(ズキュウウウン!.getCurrentTime(),true)}catch(オラオラオラオラオラオラァッ!){}}});$('.controller-color input[type="radio"]').on("change",function(){var WRRRRYYYYYY!=$(this).val();var ズキュウウウン!=$(this).closest(".controller-color");ズキュウウウン!.trigger("updatevalue",WRRRRYYYYYY!)});$('.controller-color input[type="color"]').on("change",function(){var WRRRRYYYYYY!=$(this).val();var ズキュウウウン!=$(this).closest(".controller-color");ズキュウウウン!.trigger("updatevalue",WRRRRYYYYYY!)});$(".controller-color").on("updatevalue",function(WRRRRYYYYYY!,ズキュウウウン!){var ドォーン!=$(this);var 貧弱貧弱ゥ!=ズキュウウウン!;ドォーン!.attr("data-color",貧弱貧弱ゥ!);if(ドォーン!.is(".controller-color--bg")){$("body").css({"background-color":貧弱貧弱ゥ!})}if(ドォーン!.is(".controller-color--fill")){$(".svg-canvas .svg-canvas__main").css({fill:貧弱貧弱ゥ!})}if(ドォーン!.is(".controller-color--line")){$(".svg-canvas .svg-canvas__main").css({stroke:貧弱貧弱ゥ!})}});var ズビズバー!=$(".controller-thickness");ズビズバー!.on("updatevalue",function(WRRRRYYYYYY!){var ズキュウウウン!=$(this).attr("data-value");$(".svg-canvas .svg-canvas__main").css({"stroke-width":ズキュウウウン!});チェリオッ!.val(ズキュウウウン!);シュゴオオオォォォォ!.val(ズキュウウウン!)});var チェリオッ!=$(".controller-thickness__slidebar input");var シュゴオオオォォォォ!=$(".controller-thickness__number input");チェリオッ!.on("input change",function(){ズビズバー!.attr("data-value",$(this).val());ズビズバー!.trigger("updatevalue")});シュゴオオオォォォォ!.on("input change",function(){ズビズバー!.attr("data-value",$(this).val());ズビズバー!.trigger("updatevalue")});チェリオッ!.trigger("change");ズキュウウウン!.play()})}window.onYouTubeIframeAPIReady=function(){var ドォーン!=new YT.Player("original_movie",{width:"480",height:"360",videoId:"G3C-VevI36s",events:{onReady:貧弱貧弱ゥ!,onStateChange:オラオラオラオラオラオラァッ!},playerVars:{rel:0,showinfo:0,controls:0,wmode:"transparent"}});function 貧弱貧弱ゥ!(){ドォーン!.mute();if(ズキュウウウン!&&!ズキュウウウン!.isPause){ドォーン!.playVideo()}}function オラオラオラオラオラオラァッ!(WRRRRYYYYYY!){switch(WRRRRYYYYYY!.data){case window.YT.PlayerState.PAUSED:case window.YT.PlayerState.ENDED:break;case window.YT.PlayerState.PLAYING:break}}WRRRRYYYYYY!.ytPlayer=ドォーン!}})(window.licker);