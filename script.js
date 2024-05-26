function firstChar(text) {
  // your code here
	text = text.trim();
	const c = text.charAt(0);
	return c;
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
