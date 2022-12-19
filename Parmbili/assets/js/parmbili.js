$(document).ready(function(){
    $("body")
        .on("click", ".empty_field", clickEmptyField)
        .on("click", ".till_button", clickTillButton)
        .on("click", ".tilled_field", clickTilledField)
        .on("click", ".plant_button", clickPlantButton)
        .on("click", ".plant_crop_button", plantCrop)
    
    $(".plant_crop_button")
        .on("mousedown", function(event){
            event.preventDefault();
        }
    );
});

    /* DOCU: Shows popover with Till button <br />
    * Triggered by: on("click", ".empty_field", clickEmptyField) <br />
    * Last Updated Date: November 29, 2022 
    * @author: Silver  
    */

    function clickEmptyField(){
        $(this).popover({ 
            html : true,
            placement: 'bottom',
            content: '<button type="button" class="btn btn-primary till_button" data-html="true" data-toggle="popover" id='+$(this).attr('id')+'>Till</button>'
        });
    }

    /* DOCU: Changes empty field to  tilled field <br />
    * Triggered by: .on("click", ".till_button", tillEmptyField) <br />
    * Last Updated Date: November 29, 2022 
    * @author: Silver  
    */

    function clickTillButton(){
        let empty_field_id = $(this).attr('id');
        $('#'+empty_field_id).popover('hide');
        $('#'+empty_field_id).replaceWith('<button type="button" id="'+empty_field_id+'" class="tilled_field" data-toggle="popover">');
    }

    /* DOCU: Shows popover with Plant button <br />
    * Triggered by: on("click", ".tilled_field", clickTilledField) <br />
    * Last Updated Date: December 19, 2022 
    * @author: Silver  
    */

    function clickTilledField(){
        let tilled_field_id = $(this).attr('id');
        $(this).popover({ 
            html : true,
            placement: 'bottom',
            content: '<button type="button" class="btn btn-primary plant_button" data-html="true" data-toggle="popover" id='+tilled_field_id+'>Plant</button>'
        });
    }

    /* DOCU: Opens popover with Crop list <br />
    * Triggered by: .on("click", ".plant_button", clickPlantButton) <br />
    * Last Updated Date: December 19, 2022 
    * @author: Silver  
    */
   
    function clickPlantButton(){
        let tilled_field_id = $(this).attr('id');
        $("input").attr("data_field_id",tilled_field_id);
        $("#crop_modal").modal('show');
        $("#potato").focus();
        $(".popover").popover('hide');
    }

    /* DOCU: Shows planted crop on field <br />
    * Triggered by: .on("click", ".plant_crop_button", plantCrop) <br />
    * Last Updated Date: December 19, 2022 
    * @author: Silver  
    */

    function plantCrop(){
        let crop = $(document.activeElement).attr('id');
        let crop_clone_id = "#"+crop+"_clone";
        let crop_clone = $(crop_clone_id).clone();
        let field_id = $("input").attr("data_field_id");
        crop_clone.removeClass("hidden");
        $('#'+field_id).append(crop_clone);
    }

    

