//add a function for button functionality -- done
//on click, add text data as an unordered list item -- done 
//add checkbox functionalaity -- done
// on click cross off or desaturate item and move to a separated portion of the bottom -- done
//could potentially combine the list tag with the check input tag??? -- done
//add delete functionality
//only show delete button when hovering over item
//add edit funtionality
//create a separate div for each item
//adjust checkbox size and appearance
//add data structure for items
//proceduralize code
//create a local server



const button = document.getElementById("Enter"); //enter button
const list = document.getElementById("list"); // list ul
const removed = document.getElementById("removed"); //removed ul
const item = document.getElementById("item"); //fetches the user text input element

button.onclick = function()
{
    const type = document.createElement('input'); //creates a generic input element
    const list_item = document.createElement('li'); //creates a list item
    type.setAttribute("type", "checkbox"); //sets input type to checkbox
    type.setAttribute("class", "check");
    list_item.appendChild(type); //appends the checkbox to the list item
    list_item.appendChild(document.createTextNode(item.value)); //creates and appends text data to the list item
    
    list.appendChild(list_item); //apends list item to the list

    

    item.value = "";
    
    const del = document.createElement('button');
    del.setAttribute("type", "button");
    del.appendChild(document.createTextNode("Delete"));
    del.setAttribute("class", "del-button");
    list_item.appendChild(del);
    del.onclick = function(){

        list_item.remove();
    };
    
    type.addEventListener("click", function(){

        if(list_item.parentElement == list)
        {
            list_item.remove();
            removed.appendChild(list_item);
        }
        else
        {
            list_item.remove();
            list.appendChild(list_item);
        }

    });


};
