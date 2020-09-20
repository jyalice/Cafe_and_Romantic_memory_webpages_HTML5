// set innerHTML for the aside part
window.onload=()=>{
	function createStr(start,end){
		let str='';
		for(let i=start;i<=end;i++){
				str+=(i%2===1)?`
					<div class="polaroid rotate_left">
						<img src="images/${i}.jpg" alt="">
					</div>
					`:`
					<div class="polaroid rotate_right">
						<img src="images/${i}.jpg" alt="">
					</div>
					`
		}
		return str;
	}
	document.querySelectorAll('aside')[0].querySelector('div').innerHTML=createStr(1,7);
	document.querySelectorAll('aside')[1].querySelector('div').innerHTML=createStr(8,14);
	document.querySelectorAll('aside')[2].querySelector('div').innerHTML=createStr(15,21);
}