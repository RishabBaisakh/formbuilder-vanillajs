var formData = {
    "formLabel":"My Form",
    "fields": [ 
        {
            "type": "TXT",
            "id": "1",
            "name": "firstname",
            "label": "FirstName:",
            "value": "",
            "validations": {},
            "events": [
                {
                    "eventName": "click",
                    "functionName": "textClickHandler"
                },
                {
                    "eventName": "mouseover",
                    "functionName": "mouseOverText"
                },
                {
                    "eventName": "mouseleave",
                    "functionName": "mouseLeaveField"
                }
            ]
        },
        {
            "type":"TXT",
            "id": "2",
            "name": "lastname",
            "label": "LastName:",
            "value": "",
            "validations": {},
            "events": [
                {
                    "eventName": "click",
                    "functionName": "textClickHandler"
                },
                {
                    "eventName": "mouseover",
                    "functionName": "mouseOverText"
                },
                {
                    "eventName": "mouseleave",
                    "functionName": "mouseLeaveField"
                }
            ]
        },
        {
            "type": "DTE",
            "id": "datePicker",
            "name":"dateOfBirth",
            "label": "DOB",
            "validations": {},
            "value": "",
            "events": []
        },  
        {
            "type": "NUM",
            "id": "4",
            "name": "age",
            "label": "Age:",
            "value": "",
            "validations": {},
            "events": [
                {
                    "eventName": "click",
                    "functionName": "textClickHandler"
                },
                {
                    "eventName": "mouseover",
                    "functionName": "mouseOverText"
                },
                {
                    "eventName": "mouseleave",
                    "functionName": "mouseLeaveField"
                }
            ]

        },
        {
            "type": "EML",
            "id": "5",
            "name": "mailId",
            "label": "E-mail:",
            "value": "",
            "validations":{
                "email":{
                    "value":""
                }

            },
            "events": [
                {
                    "eventName": "click",
                    "functionName": "textClickHandler"
                },
                {
                    "eventName": "mouseover",
                    "functionName": "mouseOverText"
                },
                {
                    "eventName": "mouseleave",
                    "functionName": "mouseLeaveField"
                }
            ]
        },
        {
            "type": "SEL",
            "id": "6",
            "name": "gender",
            "label": "Gender:",
            "events": [],
            "validations": {},
            "options": [
                {
                    "value": "Male",
                    "label": "MALE"
                },
                {
                    "value": "Female",
                    "label": "FEMALE"
                },
                {
                    "value": "Other",
                    "label": "OTHERS"
                }
            ]
        },
        {
            "type": "TXT",
            "id": "7",
            "name": "Disabled",
            "events": [],
            "validations": {},
            "label": "Disabled Field:",
            "disabled": true
        },
        {
            "type": "FST",
            "label": "Contacts:",
            "name": "contact",
            "fields": [
                {
                    "type": "NUM",
                    "id": "8",
                    "label": "Number:",
                    "name": "mobile",
                    "value": "",
                    "validations": {
                        "phone":{
                            "values": ""

                        }
                    },
                    "events": [
                        {
                    "eventName": "click",
                    "functionName": "textClickHandler"
                },
                {
                    "eventName": "mouseover",
                    "functionName": "mouseOverText"
                },
                {
                    "eventName": "mouseleave",
                    "functionName": "mouseLeaveField"
                }
                    ]
                },
                {
                    "type": "NUM",
                    "id": "9",
                    "label": "Alternate contact",
                    "name" : "Alternate",
                    "value": "",
                    "validations": {
                        "phone":{
                            "values": ""

                        }
                    },
                    "events": [
                        {
                    "eventName": "click",
                    "functionName": "textClickHandler"
                },
                {
                    "eventName": "mouseover",
                    "functionName": "mouseOverText"
                },
                {
                    "eventName": "mouseleave",
                    "functionName": "mouseLeaveField"
                }
                    ]
                }
            ]
        },
        {
            "type": "FST",
            "label": "Address:",
            "name" : "addressDetails",
            "fields": [
                {
                    "type": "NUM",
                    "id": "10",
                    "label" : "House No:",
                    "name": "HouseNum",
                    "value": "",
                    "validations": {},
                    "events": [
                        {
                    "eventName": "click",
                    "functionName": "textClickHandler"
                },
                {
                    "eventName": "mouseover",
                    "functionName": "mouseOverText"
                },
                {
                    "eventName": "mouseleave",
                    "functionName": "mouseLeaveField"
                }
                    ]
                },
                {
                    "type": "NUM",
                    "id": "11",
                    "label": "Street No:",
                    "name" : "StreetNum",
                    "value": "",
                    "validations": {},
                    "events": [
                        {
                    "eventName": "click",
                    "functionName": "textClickHandler"
                },
                {
                    "eventName": "mouseover",
                    "functionName": "mouseOverText"
                },
                {
                    "eventName": "mouseleave",
                    "functionName": "mouseLeaveField"
                }
                    ]
                }
                
                
            ]
        },
        {
            "type" : "MST",
            "id": "12",
            "label": "Choose Multiple:",
            "name": "multipleSelect",
            "value": "",
            "validations": {},
            "events": [],
            "options": [
                {
                    "label": "Option1",
                    "value": "first" 
                },
                {
                    "label": "Option2",
                    "value": "second"
                },
                {
                    "label": "Option3",
                    "value": "third"
                },
                {
                    "label": "Option4",
                    "value": "fourth"
                },
                {
                    "label": "Option5",
                    "value": "fifth"
                }
            ]
        },
        {
            "type": "TXA",
            "id": "13",
            "label": "Review:",
            "name": "reviewBox",
            "value": "",
            "validations": {},
            "events": [
                    {
                        "eventName": "click",
                        "functionName": "textClickHandler"
                    },
                    {
                        "eventName": "mouseover",
                        "functionName": "mouseOverText"
                    },
                    {
                        "eventName": "mouseleave",
                        "functionName": "mouseLeaveField"
                    }
                ]
        },
        {
            "type": "CHB",
            "id": "14",
            "label": "Check Boxes:",
            "name": "checkBox",
            "value": "",
            "validations": {},
            "events": [],
            "options": [
                {
                    "label": "First",
                    "name": "one"
                },
                {
                    "label": "Second",
                    "name": "two"
                },
                {
                    "label": "Third",
                    "name": "three"
                }
            ]
        },
        {
            "type": "FLU",
            "id": "15",
            "label": "Upload File:",
            "name": "fileUpload",
            "value":"",
            "validations": {},
            "events": []
        } 
    ]
} ;

// ---------------------------------------------------------------
function FormClass(formData){
    this.typeObj = {"TXT":TextField, "DTE":DatePicker, "NUM":NumberField, "EML":Email, "SEL":SelectField, 
                    "TXA":TextArea, "MST":MultiSelect, "CHB":CheckBox,"FLU":FileUpload, "FST":FieldSet} ;
}
FormClass.prototype.getMapping = function(){
}
FormClass.prototype.makeForm = function(){
    $('.wrapper').append("</br><strong>"+formData.formLabel+"</strong></br>") ;
    
    for(key in formData.fields){
        var fieldType = this.typeObj[formData.fields[key].type] ;
        var fieldData = formData.fields[key] ;

        if(fieldType){
            console.log("field type ->", fieldType) ;
            var fieldObj = new fieldType() ;

            fieldObj.setConfig(fieldData) ;

            $('.wrapper').append(fieldObj.getHtml(fieldData)) ; // to append it to the wrapper class.
        }
    }
}

function Field(){
    this.type = "" ;
    this.id = "" ;
    this.name = "" ;
    this.label = "" ;
    this.value = "" ;
    this.validation = "" ;
    // this.event = "" ;
}
Field.prototype.setConfig = function(fieldData){
    this.name = fieldData.name ;
    this.label = fieldData.label ;    
    this.id = fieldData.id ;
}

// --------------------------------------------------------------
function TextField(){
    this.type = "text"
    this.disabled = false ;
}
TextField.prototype = Object.create(Field.prototype) ;
TextField.prototype.getDisabled = function(disable){
    this.disabled = disable ;
}
TextField.prototype.getHtml = function(fieldData){
    var html = this.label+"</br><input type='"+this.type+"' name='"+this.name+"' id = '"+this.id+"'" ;
    if(fieldData.disabled){
        html += "disabled"
    }
    html += " /></br></br>" ;

    return html ;   
} 
// ---------------------------------------------------------------
function NumberField(){
    this.type = "number" ;
}
NumberField.prototype = Object.create(Field.prototype) ;
NumberField.prototype.getHtml = function(){
    var html = this.label+"</br><input type='"+this.type+"' name='"+this.name+"' id = '"+this.id+"'" ;
    html += " /></br></br>" ;

    return html ; 
}
// ------------------------------------------------------------------
function DatePicker(){
    this.type = "date" ;
}
DatePicker.prototype = Object.create(Field.prototype) ;
DatePicker.prototype.getHtml = function(){
    var html = this.label+"</br><input type='"+this.type+"' name='"+this.name+"' id = '"+this.id+"'" ;
    html += " /></br></br>" ;

    return html ;
}
// --------------------------------------------------------------------
function Email(){
    this.type = "email" ;
}
Email.prototype = Object.create(Field.prototype) ;
Email.prototype.getHtml = function(){
    var html = this.label+"</br><input type='"+this.type+"' name='"+this.name+"' id = '"+this.id+"'" ;
    html += " /></br></br>" ;

    return html ;
}
// -----------------------------------------------------------------------
function SelectField(){

}
SelectField.prototype = Object.create(Field.prototype) ;
SelectField.prototype.getHtml = function(fieldData){
    var html = this.label+"<select name='"+this.name+"' id = '"+this.id+"'>" ;
    
    html += "</select></br></br>" ;
    
    return html ;
}
// --------------------------------------------------------------------------
function MultiSelect(){
    
}
MultiSelect.prototype = Object.create(SelectField.prototype) ;
MultiSelect.prototype.getHtml = function(fieldData){
    var html = this.label+"</br><select name='"+this.name+"' id = '"+this.id+"' multiple>" ;
    for(key in fieldData.options){
        html += "<option value = '"+fieldData.options[key].value+"'>"+fieldData.options[key].label+"</option>" ;
    }
    html += "</select></br></br>" ;

    return html ;
}
// --------------------------------------------------------------------------

function TextArea(){
    
}
TextArea.prototype = Object.create(Field.prototype) ;
TextArea.prototype.getHtml = function(){
    var html = this.label+"</br><textarea name='"+this.name+"' id = '"+this.id+"'" ;
    html+="></textarea></br></br>" ;

    return html ;
}
// --------------------------------------------------------------------------------

function CheckBox(){
    this.type = "checkbox" ;
} 
CheckBox.prototype = Object.create(Field.prototype) ;
CheckBox.prototype.getHtml = function(fieldData){
    var html = this.label ;
    for(key in fieldData.options){
        html += "</br><input type ='"+this.type+"' name = '"+fieldData.options[key].name+"' id = '"+this.id+"'/>"+fieldData.options[key].label ;
    }
    html += "</br></br>" ;
    return html ;
}
//------------------------------------------------------------------------------------
function FileUpload(){
    this.type = "file" ;
}
FileUpload.prototype = Object.create(Field.prototype) ;
FileUpload.prototype.getHtml = function(){
    var html = this.label+"</br><input type = '"+this.type+"' name = '"+this.name+"' id = '"+this.id+"'" ;
    html += "/></br>" ;

    return html ;
}
// ------------------------------------------------------------------------------------
function FieldSet(){
    this.name = "" ;
    this.label = "" ;
    this.typeObj = {"TXT":TextField, "DTE":DatePicker, "NUM":NumberField, "EML":Email, "SEL":SelectField, 
                    "TXA":TextArea, "MST":MultiSelect, "CHB":CheckBox,"FLU":FileUpload} ;
}
FieldSet.prototype.setConfig = function(fieldSetData){
    this.name = fieldSetData.name ;
    this.label = fieldSetData.label ;
}
FieldSet.prototype.getHtml = function(fieldSetData){
    var html = this.label+"</br>" ;
    
    for(key in fieldSetData.fields){
        var fieldType = this.typeObj[fieldSetData.fields[key].type] ;
        var fieldData = fieldSetData.fields[key] ;

        if(fieldData){
            console.log("fieldSet type ->", fieldType) ;
            var fieldObj = new fieldType() ;

            fieldObj.setConfig(fieldData) ;

            html += fieldObj.getHtml(fieldData) ;
        }
    }

    console.log(html) ;
    return html ;
}

window.onload = function func(){
    var form = new FormClass() ;
    form.makeForm() ;
} ;