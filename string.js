let main = document.querySelector("main")

let strHTML1 = `<p>1.  This is the <a href="#">String</a> with HTML.</p>`
let strHTML2 = `<p>2.  This is the <a href="#">String</a> with HTML.</p>`
let strHTML3 = `<p>3.  This is the <a href="#">String</a> with HTML.</p>`
let strHTML4 = `<p>4.  This is the <a href="#">String</a> with HTML.</p>`
let strHTML5 = `<p>5.  This is the <a href="#">String</a> with HTML.</p>`
let strHTML6 = `<p>6.  This is the <a href="#">String</a> with HTML.</p>`

//OPTION 1:  main has to be an HTML element, not a text node.  There are drawbacks if you're injecting many things  -  too slow
main.innerHTML = strHTML1

//OPTION 2: Using a document fragment
//document.createDocumentFragment()
//new DocumentFragment()
//innerHTML not available on a document fragment
//need to create actual dom nodes to append
//Great if you're using nodes, not html elements
//Great to use inside a loop, append after the loop
let frag = new DocumentFragment()
frag.append(strHTML2)
main.appendChild(frag)

//OPTION 3:  new DomParser()
let parser = new DOMParser()
let doc = parser.parseFromString(strHTML3, "text/html")
//doc.documentElement - whole HTML Document so be careful
main.appendChild(doc.body.firstChild)

//OPTION 4:  range.createContextualFragment()
let frag2 = document.createRange().createContextualFragment(strHTML4)
main.appendChild(frag2)

//OPTION 4B:  range.createContextualFragment()
let range = document.createRange()
range.setStart(main, 1) //start after the first child
range.setEnd(main, 2) //end after the second child
let frag3 = range.createContextualFragment(strHTML5)
range.insertNode(frag3)

//OPTION 5:  insertAdjacentHTML()
main.insertAdjacentHTML("afterbegin", strHTML6)