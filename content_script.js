// I borrowed most of the code from here:
// https://github.com/panicsteve/cloud-to-butt

walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bwitnesses\b/g, "these dudes I know");
	v = v.replace(/\bWitnesses\b/g, "These dudes I know");
	
	v = v.replace(/\ballegedly\b/g, "kinda probably");
	v = v.replace(/\bAllegedly\b/g, "Kinda probably");
	
	v = v.replace(/\bNew Study\b/g, "Tumblr Post");
	v = v.replace(/\b[Nn]ew study\b/g, "Tumblr post");
	
	v = v.replace(/\bRebuild\b/g, "Avenge");
	v = v.replace(/\brebuild\b/g, "avenge");
	
	v = v.replace(/\bspace\b/g, "spaaace");
	v = v.replace(/\bSpace\b/g, "Spaaace");
	
	v = v.replace(/\bGoogle Glass\b/g, "Virtual Boy");
	
	v = v.replace(/\b[Ss]mart[Pp]hone\b/g, "Pokedex");
	
	v = v.replace(/\b(Senator|Sen\.)\b/g, "Elf-Lord");
	
	v = v.replace(/\bcar\b/g, "cat");
	v = v.replace(/\bCar\b/g, "Cat");
	v = v.replace(/\bcars\b/g, "cats");
	v = v.replace(/\bCars\b/g, "Cats");
	
	v = v.replace(/\bElection\b/g, "Eating contest");
	v = v.replace(/\belection\b/g, "eating contest");
	
	v = v.replace(/\bCongressional Leaders\b/g, "River Spirits");
	v = v.replace(/\bCongressional leaders\b/g, "River spirits");
	v = v.replace(/\bcongressional Leaders\b/g, "river Spirits");
	
	v = v.replace(/\bcould not be reached for comment\b/g, "is guilty and everyone knows it");
	
	v = v.replace(/\bthe cloud\b/g, "my butt");
	
	textNode.nodeValue = v;
}


