function getHistory()
{
	return document.getElementById("history-value").innerText;
}
function History(num)
{
	document.getElementById("history-value").innerText=num;
}
function getOutput()
{
	return document.getElementById("output-value").innerText;
}
function Output(num)
{
	if(num==="")
  {
		document.getElementById("output-value").innerText=num;
	}
	else
  {
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}	
}
function getFormattedNumber(num){
	if(num==="-"){
		return "";
	}
	let n = Number(num);
	let value = n.toLocaleString("en");
	return value;
}
function reverseNumberFormat(num)
{
	return Number(num.replace(/,/g,''));
}
let operator = document.getElementsByClassName("operator");
for(let i =0;i<operator.length;i++)
{
	operator[i].addEventListener('click',function()
  {
		if(this.id==="clear")
    {
			console.log(history);
			console.log(output);
		}
		else if(this.id==="backspace")
    {
			let output=reverseNumberFormat(getOutput()).toString();
			if(output)
      {
				output= output.substr(0,output.length-1);
				console.log(output);
			}
		}
		else
    {
			let output=getOutput();
			let history=getHistory();
			if(output===""&&history!=="")
      {
				if(isNaN(history[history.length-1]))
        {
					history= history.substr(0,history.length-1);
				}
			}
			if(output!=="" || history!=="")
      {
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
				if(this.id==="=")
        {
					let result=eval(history);
				 console.log(result);
				 console.log(history);
				}
				else 
        {
					history=history+this.id;
					console.log(history);
					console.log(output);
				}
			}
		}
		
	});
}
let number = document.getElementsByClassName("number");
for(let i =0;i<number.length;i++)
{
	number[i].addEventListener('click',function()
  {
		let output=reverseNumberFormat(getOutput());
		if(output!==NaN)
    {
			output=output+this.id;
			console.log(output);
		}
	});
}
