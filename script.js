function toCase(text) {

	if(text.length===0)
	{
		return "-";
	}
	let ans="";

	for(let i=0;i<text.length;i++)
		{
		  if(text.charAt(i)===" ")
		  {
			  ans+=" ";
			  continue;
		  }
			ans+= text.charAt(i).toLowerCase();
		}
	ans+="-";
	for(let i=0;i<text.length;i++)
		{
		  if(text.charAt(i)===" ")
		  {
			  ans+=" ";
			  continue;
		  }
			ans+= text.charAt(i).toUpperCase();
		}
	return ans;
}

// DO not change the code below

// const text = prompt("Enter text:");
// alert(toCase(text));
