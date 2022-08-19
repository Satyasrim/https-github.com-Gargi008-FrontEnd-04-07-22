const content=document.body;
content.append("heyaaa let's dance")
//content.appendChild("heyaaa let's dance") // can't add string using append child

const oneMoreDiv=document.createElement("div")
oneMoreDiv.textContent="holaaaaaaa"
content.append(oneMoreDiv)

