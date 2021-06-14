const s = location.search.match(/^\?(\d{1,2})/)
if (s) {
	const n = parseInt(s[1])
	const list = Base64.decode("CuOAkDAx44CRVGhlIExhc3QgU3Vuc2V0CuOAkDAy44CRUGVhY2VmdWwgV2FycmlvcgrjgJAwM-OAkUZvbGxvdyBNZQrjgJAwNOOAkUJlbmVmYWN0b3IK44CQMDXjgJFVbmZvcmdpdmVuCuOAkDA244CRRC1EYXkK44CQMDfjgJFGdWxseSBMb2FkZWQK44CQMDjjgJFObyBTdXJyZW5kZXIK44CQMDnjgJFMaW5lIG9mIERlZmVuc2UK44CQMTDjgJFUaGUgUG9pbnQgb2YgTm8gUmV0dXJuCuOAkDEx44CRWmVybyBWaXNpYmlsaXR5CuOAkDEy44CRVGhlIEZhY2Ugb2YgQmF0dGxlCuOAkDEz44CRRHV0eSBDYWxscwrjgJAxNOOAkVRoZSBMb2Fkc3RhcgrjgJAxNeOAkUkgV2lsbCBDcnVzaCBZb3UK44CQMTbjgJFUaGUgRm9ybG9ybiBPdXRwb3N0CuOAkDE344CRRHJhZ29uJ3MgTGFuZHMK44CQMTjjgJFCbGFjayBTZWEK44CQMTnjgJFFdiBDaGlzdHIndGEgTGFvdSEgKEJvbnVzIFRyYWNrKQrjgJAyMOOAkVRoZSBSZWQgV2luZSAoQm9udXMgVHJhY2spCuOAkDIx44CRTmlkdWQgQXZ2YXMgKEJvbnVzIFRyYWNrKQ").split("\n")
	document.title = list[n].substring(4)
	document.body.innerHTML = `<h1 style="line-height: 3.14rem; font-weight: normal">${list[n]}</h1><br /><audio autoplay="autoplay" controls="controls"><source src="/ajjwvijx/${list[n].substring(1, 3)}" type="audio/mp4" /></audio><br />`
} else {
	document.body.innerHTML = `<h1 style="line-height: 3.14rem; font-weight: normal">404 Not Found</h1>`
}
