var btn_last = document.getElementById("btn-last");
btn_last.onclick = function(){
	var crpage = document.getElementById("crpage").innerHTML;
	crpage = Number(crpage);
	if (crpage > 1) {
		var posts = document.getElementsByClassName("post");
		for (var i = 0; i < 6; i++) {
			temp = (crpage - 2)*6 + 1 + i;
			posts[i].children[0].innerText = "第"  + temp + "篇热门帖子";
			if(temp < 10){
				posts[i].children[3].innerText = "2016-02-0" + temp;
			}else{
				posts[i].children[3].innerText = "2016-02-" + temp;
			};
			
		};
		crpage -= 1;
		document.getElementById("crpage").innerHTML = crpage;
	};
}

var btn_next = document.getElementById("btn-next");
btn_next.onclick = function(){
	var crpage = document.getElementById("crpage").innerHTML;
	crpage = Number(crpage);
	if (crpage < 3) {
		var posts = document.getElementsByClassName("post");
		console.log(posts);
		for (var i = 0; i < 6; i++) {
			var temp = crpage*6 + 1 + i;
			posts[i].children[0].innerText = "第"  + temp + "篇热门帖子";
			if(temp < 10){
				posts[i].children[3].innerText = "2016-02-0" + temp;
			}else{
				posts[i].children[3].innerText = "2016-02-" + temp;
			};
		};
		crpage += 1;
		document.getElementById("crpage").innerHTML = crpage;
	};

}