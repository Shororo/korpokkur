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
                <div class="col-6 col-md-4 vh-35 p-2 cardImgWrp">
                <img src="${url}" class="cardImg" style="box-shadow: 5px 5px 20px #00000052;">
                </div>
                `;
                $(".insta-card").append(this.html);
            }
        });
    } catch (error) {
        alert(error);
    }
    
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
	
    $("#mailform").on("click",function() {
    		$("form").slideToggle();
	});
});