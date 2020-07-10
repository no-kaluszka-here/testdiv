var back_button = document.getElementById("back_button")
back_button.addEventListener('click',reverseBack)
function reverseBack(event){
    if(location_array.lastIndexOf(true) == 0){
        var result = all_data.map(category_array => { 
            //console.log("--------------", category_array)
            return category_array.location
        });
        var unique_result = [... new Set(result)]
        document.getElementsByClassName('container')[0].innerHTML =''
        unique_result.forEach(createCard.bind( null,false))
        location_array = [false, false, false, false, false, false]
        attribute_array = [null, null, null, null, null, null]
    }
    if(location_array.lastIndexOf(true) == 1){
        var result = all_data.map(category_array => {
            //console.log("-0-0-0-0-0-0-0",category_array)
            //console.log("00000000000000",location_array[0])
            if(category_array.location == attribute_array[0]){
                //console.log("-1-1-1-1-1-1-1-",category_array )
                return category_array.category_0
            }
        });
        var unique_result = [... new Set(result)]
        document.getElementsByClassName('container')[0].innerHTML =''
        unique_result.forEach(createCard.bind( null,false))
        location_array[1] = false
        attribute_array[1] = null
    }
    if(location_array.lastIndexOf(true) == 2){
        document.getElementsByClassName('container')[0].innerHTML =''

        var result_help = all_data.map(category_array => { 
            if(attribute_array[1] == category_array.category_0){
                return category_array.help_0
            }
        });
        var unique_result_help = [... new Set(result_help)]
        unique_result_help.forEach(createHelpCard)

        var result_link = all_data.map(category_array => { 
            if(attribute_array[1] == category_array.category_0){
                return category_array.link_0
            }
        });
        var unique_result_link = [... new Set(result_link)]
        unique_result_link.forEach(createLinkCard)

        var result = all_data.map(category_array => { 
            if(attribute_array[1] == category_array.category_0){
                return category_array.category_1
            }
        });
        var unique_result = [... new Set(result)]
        unique_result.forEach(createCard.bind( null,false))

        location_array[2] = false
        attribute_array[2] = null
    }
    if(location_array.lastIndexOf(true) == 3){
        document.getElementsByClassName('container')[0].innerHTML =''

        var result_help = all_data.map(category_array => { 
            if(attribute_array[2] == category_array.category_1 && attribute_array[1] == category_array.category_0){
                return category_array.help_1
            }
        });
        var unique_result_help = [... new Set(result_help)]
        unique_result_help.forEach(createHelpCard)

        var result_link = all_data.map(category_array => { 
            if(attribute_array[2] == category_array.category_1 && attribute_array[1] == category_array.category_0){
                return category_array.link_1
            }
        });
        var unique_result_link = [... new Set(result_link)]
        unique_result_link.forEach(createLinkCard)

        var result = all_data.map(category_array => { 
            if(attribute_array[2] == category_array.category_1 && attribute_array[1] == category_array.category_0){
                return category_array.category_2
            }
        });
        var unique_result = [... new Set(result)]
        unique_result.forEach(createCard.bind( null,false))

        location_array[3] = false
        attribute_array[3] = null
    }

    if(location_array.lastIndexOf(true) == 4){
        document.getElementsByClassName('container')[0].innerHTML =''

        var result_help = all_data.map(category_array => { 
            if(attribute_array[4] == category_array.category_3 && attribute_array[3] == category_array.category_2 && attribute_array[2] == category_array.category_1 && attribute_array[1] == category_array.category_0){
                return category_array.help_2
            }
        });
        var unique_result_help = [... new Set(result_help)]
        unique_result_help.forEach(createHelpCard)

        var result_link = all_data.map(category_array => { 
            if(attribute_array[4] == category_array.category_3 && attribute_array[3] == category_array.category_2 && attribute_array[2] == category_array.category_1 && attribute_array[1] == category_array.category_0){
                return category_array.link_2
            }
        });
        var unique_result_link = [... new Set(result_link)]
        unique_result_link.forEach(createLinkCard)

        var result = all_data.map(category_array => { 
            if(attribute_array[4] == category_array.category_3 && attribute_array[3] == category_array.category_2 && attribute_array[2] == category_array.category_1 && attribute_array[1] == category_array.category_0){
                return category_array.category_3
            }
        });
        var unique_result = [... new Set(result)]
        unique_result.forEach(createCard.bind( null,false))

        location_array[4] = false
        attribute_array[4] = null
    }

    if(location_array.lastIndexOf(true) == 5){
        document.getElementsByClassName('container')[0].innerHTML =''

        var result_help = all_data.map(category_array => { 
            if(attribute_array[4] == category_array.category_3 && attribute_array[3] == category_array.category_2 && attribute_array[2] == category_array.category_1 && attribute_array[1] == category_array.category_0){
                return category_array.help_2
            }
        });
        var unique_result_help = [... new Set(result_help)]
        unique_result_help.forEach(createHelpCard)

        var result_link = all_data.map(category_array => { 
            if(attribute_array[4] == category_array.category_3 && attribute_array[3] == category_array.category_2 && attribute_array[2] == category_array.category_1 && attribute_array[1] == category_array.category_0){
                return category_array.link_2
            }
        });
        var unique_result_link = [... new Set(result_link)]
        unique_result_link.forEach(createLinkCard)

        var result = all_data.map(category_array => { 
            if(attribute_array[4] == category_array.category_3 && attribute_array[3] == category_array.category_2 && attribute_array[2] == category_array.category_1 && attribute_array[1] == category_array.category_0){
                return category_array.category_3
            }
        });
        var unique_result = [... new Set(result)]
        unique_result.forEach(createCard.bind( null,false))

        location_array[4] = false
        attribute_array[4] = null
        location_array[5] = false
        attribute_array[5] = null
    }
}
