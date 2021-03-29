document.getElementById("number_text").addEventListener("input", function () {
	let number_text = this.value.replace(/[^0-9]{0,}/g, "").split("").reverse();
	let str = "";
	const kanji = ["", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
	if (parseInt(number_text[(number_text.length - 1)]) !== 0) {
		for (const key in keta.keta) {
			if (number_text[key] !== undefined) {
				number_text[key] = parseInt(number_text[key]);
				let keta_str = keta_fn(parseInt(keta.keta[key].zero));
				let pattern = new RegExp(keta_str,"g");
				console.log(key,str);
				if (number_text[key] == 0) {
						//str = str;
				} else if (number_text[key] == 1) {
					if(!str.match(pattern)){
						str = keta.keta[key].name.match(/[十|百|千]/) ? keta.keta[key].name + keta_str + str : kanji[number_text[key]] + keta.keta[key].name + keta_str +str;
					}else{
						str = keta.keta[key].name.match(/[十|百|千]/) ? keta.keta[key].name + str  : kanji[number_text[key]] + keta.keta[key].name + str;
					}
				} else {
					if(!str.match(pattern)){
						str = kanji[number_text[key]] + keta.keta[key].name + keta_str + str;
					}else{
						str = kanji[number_text[key]] + keta.keta[key].name + str;
					}
				}
			}
		}
	} else {
		alert("先頭文字に0が付いています");
	}
	document.getElementById("view").innerHTML = str;
});

function keta_fn(key){
	let str ="";
	if(key>=4 && key%4>0){
		str = keta.keta[(parseInt((key/4))*4)].name;
	}
	return str;
}
