    /* instagram */
$(function () {	
    try {
        this.name = "achon0807";
        $.ajax('https://www.instagram.com/' + this.name + '/', {
            timeout: 2000,
            datatype: 'html'
        }).then(function (data) {
            json_string = data.split("window._sharedData = ")[1];
            json_string = json_string.split("};</script>")[0] + "}";
            this.Arrya_data = JSON.parse(json_string);
            let datas = this.Arrya_data.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges;
            for (i in datas) {
                url = datas[i].node.display_url;
                this.html = `
                <div class="col-6 col-lg-3 p-2 news-height cardImgWrp">
                <img src="${url}" class="cardImg news-img" style="box-shadow: 5px 5px 20px #00000052;">
                </div>
                `;
                $(".insta-card").append(this.html);
            }
        });
    } catch (error) {
        alert(error);
    }
});

$(function(){
	//メールフォームの出現
  $("#mailform").on("click",function() {
  $(".googleform").slideToggle();
	});
							
				});
				
$(function(){
		
var timer = false;
  $(window).resize(function() {
      if (timer !== false) {
          clearTimeout(timer);
      }
      timer = setTimeout(function() {
      location.reload();
      }, 200);
  });
		
  var winW = $(window).width();
  var devW = 720;
  
  if (winW <= devW) {
    //720px以下の時の処理  
   //スマホ用navここから
   $(document).on('click',function(e) {
   if(!$(e.target).closest('.navigation').length) {
     // ターゲット要素の外側をクリックした時の操作
     			$("nav").slideUp();
			$(".nav-cover").slideUp();
   } else {
     // ターゲット要素をクリックした時の操作
     			$("nav").slideToggle();
			$(".nav-cover").slideToggle();
   }
	});
	//スマホ用navここまで
	
  } else {
    //720pxより大きい時の処理
    $(document).on('click',function() {
    	$("nav").slideToggle();
							});
							
		var startPos = 0,winScrollTop = 0;
$(window).on('scroll',function(){
    winScrollTop = $(this).scrollTop();
    if (winScrollTop >= startPos) {
        $('nav').slideUp();
    } else {
        $('nav').slideDown();
    }
    startPos = winScrollTop;
});

					  }
		
				});
		

$(function(){
		//assignment-sourceクラスが付与されている要素をクリックすると
		//詳細画面が開き、画像やテキストが代入されます
		$(".assignment-source").on("click", function(){ 
         	$(".item-img").attr("src", $(this).find(".assignment-img").attr("src"));
         	$(".item-title").text($(this).find(".assignment-title").text());
         	$(".item-price").text($(this).find(".assignment-price").text());
         	$(".item-text").text($(this).find(".assignment-text").text());
     			$(".shosai").css("display","block");
					$(".shosai-out").css("display","block");
								});
									
				//詳細画面外をクリックしたときに詳細画面を閉じます
		   $(".shosai-out").on("click",function() {
				$(".shosai").css("display","none");
				$(".shosai-out").css("display","none");
							});
});