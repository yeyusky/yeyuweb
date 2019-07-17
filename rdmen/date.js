function formdate(d){
    var y = d.getFullYear();
    var m =d.getMonth()+1;
	var day = d.getDate();
	return y + "-" + m + "-" + day;
}
exports.fd = formdate;
exports.mx=90;