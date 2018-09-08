function off() {
    document.getElementById("overlay").style.display = "none";
}
function setTotal(){
    var flag=0;
    var total = 10.50;
	if(document.getElementById("pp1").checked)     {total+=2.50;}
	else if(document.getElementById("pp2").checked){total+=3.50;}
	else if(document.getElementById("pp3").checked){total+=1.50;}
	else if(document.getElementById("pp4").checked){total+=3.50;}
	else										   {flag=1;alert("Voce nao escolheu um prato principal");}
//alert(flag);
    if(document.getElementById("ac1").checked){total+=0.50;}
	if(document.getElementById("ac2").checked){total+=0.50;}
	if(document.getElementById("ac3").checked){total+=2.50;}
	if(document.getElementById("ac4").checked){total+=1.50;}
//alert(flag);
    if(document.getElementById("drp1").value == "Fatec") {total*=0.8;}
	if(document.getElementById("drp1").value == "Unip")  {total*=1;}
	if(document.getElementById("drp1").value == "Ufscar"){total*=0.5;}
	else                                                {total*=1;}
//alert(flag);
//alert(total);
    if(flag==1){
    	alert("Voce nao preencheu os campos necessarios");
    }else{
    	document.getElementById("overlay").style.display = "block";
    	document.getElementById("result").innerHTML = ("R$"+total.toFixed(2));
    	}
}
