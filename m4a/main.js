const hash = location.search.match(/^\?([\da-z]{128})/)
if (hash) {
	document.body.innerHTML = `<audio controls="controls"><source src="/m4a/${hash[1]}" type="audio/mp4" /></audio>`
} else {
	document.body.style = `margin: 2.7rem`
	document.body.innerHTML = `<h1 style="line-height: 3.14rem; font-weight: normal">404 Not Found</h1>`
}
