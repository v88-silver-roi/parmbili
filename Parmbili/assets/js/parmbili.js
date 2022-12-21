let crop_potato = (field_id) => {
    return {
        title: "potato",
        seconds: 3,
        crop_value: 15,
        field: field_id,
        countdown_timer: null,
        countdownTimer: function (){
            $('#'+this.field).find("span").text(this.seconds+ "s");

            this.countdown = setTimeout(() => {
                this.countdownTimer();
                this.seconds -= 1;

                if ($("#"+this.field+" span").length <= 0) {
                    clearTimeout(this.countdown);
                }
                
                $('#'+this.field).find("span").text(this.seconds+ "s");

                if(this.seconds === 0){
                    clearTimeout(this.countdown);
                    finishedCrop(field_id);
                    $('#'+this.field).find("span").text(this.crop_value+'$');
                    return false;
                }
            }, 1000);
        }
    };
} 

let crop_onion = (field_id) => {
    return {
        title: "onion",
        seconds: 80,
        crop_value: 25,
        field: field_id,
        countdown_timer: null,
        countdownTimer: function (){
            $('#'+this.field).find("span").text(this.seconds+ "s");

            this.countdown = setTimeout(() => {
                this.countdownTimer();
                this.seconds -= 1;

                if ($("#"+this.field+" span").length <= 0) {
                    clearTimeout(this.countdown);
                }
                
                $('#'+this.field).find("span").text(this.seconds+ "s");

                if(this.seconds === 0){
                    clearTimeout(this.countdown);
                    finishedCrop(field_id);
                    $('#'+this.field).find("span").text(this.crop_value+'$');
                    return false;
                }
            }, 1000);
        }
    };
}

let crop_carrot = (field_id) => {
    return {
        title: "carrot",
        seconds: 120,
        crop_value: 75,
        field: field_id,
        countdown_timer: null,
        countdownTimer: function (){
            $('#'+this.field).find("span").text(this.seconds+ "s");

            this.countdown = setTimeout(() => {
                this.countdownTimer();
                this.seconds -= 1;

                if ($("#"+this.field+" span").length <= 0) {
                    clearTimeout(this.countdown);
                }
                
                $('#'+this.field).find("span").text(this.seconds+ "s");

                if(this.seconds === 0){
                    clearTimeout(this.countdown);
                    finishedCrop(field_id);
                    $('#'+this.field).find("span").text(this.crop_value+'$');
                    return false;
                }
            }, 1000);
        }
    };
}

let crop_corn = (field_id) => {
    return {
        title: "corn",
        seconds: 180,
        crop_value: 100,
        field: field_id,
        countdown_timer: null,
        countdownTimer: function (){
            $('#'+this.field).find("span").text(this.seconds+ "s");

            this.countdown = setTimeout(() => {
                this.countdownTimer();
                this.seconds -= 1;

                if ($("#"+this.field+" span").length <= 0) {
                    clearTimeout(this.countdown);
                }
                
                $('#'+this.field).find("span").text(this.seconds+ "s");

                if(this.seconds === 0){
                    clearTimeout(this.countdown);
                    finishedCrop(field_id);
                    $('#'+this.field).find("span").text(this.crop_value+'$');
                    return false;
                }
            }, 1000);
        }
    };
}

function countdownSeconds(planted_crop, field_id){
    if(planted_crop == "potato"){
        let crop = crop_potato(field_id);  
        crop.countdownTimer();
    }
    else if(planted_crop == "onion"){
        let crop = crop_onion(field_id);    
        crop.countdownTimer();
    }
    else if(planted_crop == "carrot"){
        let crop = crop_carrot(field_id);    
        crop.countdownTimer();
    }
    else if(planted_crop == "corn"){
        let crop = crop_corn(field_id);    
        crop.countdownTimer();
    }
}

$(document).ready(function(){
    $("body")
        .on("click", ".empty_field", clickEmptyField)
        .on("click", ".till_button", clickTillButton)
        .on("click", ".tilled_field", clickTilledField)
        .on("click", ".plant_button", clickPlantButton)
        .on("click", ".plant_crop_button", plantCrop)
        .on("click", ".planted_field", clickPlantedField)
        .on("click", ".remove_button", clickRemoveButton)
        .on("click", ".remove_plant_button", removePlant)
        .on("click", ".finished_planted_field", clickFinishedPlantedField)
        .on("click", ".harvest_button", clickHarvestButton)
    
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
* Triggered by: .on("click", ".tilled_field", clickTilledField) <br />
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
    $("input").attr("data-field-id",tilled_field_id);
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
    let field_id = $("input").attr("data-field-id");
    let crop = $(document.activeElement).attr('id');
    let crop_clone_id = "#"+crop+"_clone";
    let crop_clone = $(crop_clone_id).clone();
    $('#'+field_id).replaceWith('<button type="button" id="'+field_id+'" class="planted_field" data-toggle="popover">');
    crop_clone.removeClass("hidden");
    $('#'+field_id).append(crop_clone);
    $("#crop_modal").modal('hide');
    countdownSeconds(crop, field_id);
    // $('#'+field_id).removeClass("tilled_field");
    // $('#'+field_id).addClass("planted_field");
}

/* DOCU: Shows popover with Remove button <br />
* Triggered by: .on("click", ".planted_field", clickPlantedField) <br />
* Last Updated Date: December 20, 2022 
* @author: Silver  
*/

function clickPlantedField(){
    let planted_field_id = $(this).attr('id');
    $(this).popover({ 
        html : true,
        placement: 'bottom',
        content: '<button type="button" class="btn btn-secondary remove_button" data-html="true" data-toggle="popover" id='+planted_field_id+'>Remove</button>'
    });
}

/* DOCU: Shows remove plant modal <br />
* Triggered by: .on("click", ".remove_button", clickRemoveButton) <br />
* Last Updated Date: December 20, 2022 
* @author: Silver  
*/

function clickRemoveButton(){
    let planted_field_id = $(this).attr('id');
    $("input").attr("data-field-id",planted_field_id);
    $("#remove_plant_modal").modal('show');
    $(".popover").popover('hide');
}

/* DOCU: Remove plant <br />
* Triggered by: .on("click", ".remove_plant_button", removePlant) <br />
* Last Updated Date: December 20, 2022 
* @author: Silver  
*/

function removePlant(){
    let field_id = $("input").attr("data-field-id");
    $('#'+field_id).empty();
    $('#'+field_id).replaceWith('<button type="button" id="'+field_id+'" class="empty_field" data-toggle="popover">');
    $("#remove_plant_modal").modal('hide');
}

/* DOCU: Shows popover with Harvest and Remove button <br />
* Triggered by: .on("click", ".finished_planted_field", clickFinishedPlantedField) <br />
* Last Updated Date: December 20, 2022 
* @author: Silver  
*/

function clickFinishedPlantedField(){
    let finished_planted_field_id = $(this).attr('id');
    $(this).popover({ 
        html : true,
        placement: 'bottom',
        content: '<button type="button" class="btn btn-primary harvest_button" data-html="true" data-toggle="popover" data-field-id='+finished_planted_field_id+'>Harvest</button><br><button type="button" class="btn btn-secondary remove_button" data-html="true" data-toggle="popover" data-field-id='+finished_planted_field_id+'>Remove</button>'
    });
}

/* DOCU: Harvest plant<br />
* Triggered by: .on("click", ".harvest_button", clickHarvestButton) <br />
* Last Updated Date: December 20, 2022 
* @author: Silver  
*/

function clickHarvestButton(){
    let field_id = $(this).attr('data-field-id');
    let crop_value = $('#'+field_id).find("span").text();
    let final_crop_value = crop_value.substring(0, crop_value.length - 1);
    let total_earnings = $(".field").find("#total_earnings").text();
    let final_total_earnings = +total_earnings + +final_crop_value;
    $('#'+field_id).empty();
    $('#'+field_id).replaceWith('<button type="button" id="'+field_id+'" class="empty_field" data-toggle="popover">');
    $(".field").find("#total_earnings").text(final_total_earnings);
    $("#remove_plant_modal").modal('hide');
    $(".popover").popover('hide');
}

function finishedCrop(field_id){
    let field = $('#'+field_id);
    let crop_clone = field.find(".clone").clone();
    field.replaceWith('<button type="button" id="'+field_id+'" class="finished_planted_field" data-toggle="popover">');
    $('#'+field_id).append(crop_clone);
}




    

