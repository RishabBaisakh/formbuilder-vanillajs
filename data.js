var data = {
	"formlabel": "Log-in form",
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
			"label": "E-mail",
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
			"label": "Gender",
			"events": [],
			"validations": {},
			"options": [
				{
					"value": "male",
					"label": "MALE"
				},
				{
					"value": "female",
					"label": "FEMALE"
				},
				{
					"value": "other",
					"label": "Others"
				}





			]
		},
		{
			"type": "TXT",
			"id": "7",
			"name": "Disabled",
			"events": [],
			"validations": {},
			"label": "DisabledField",
			"disabled": true
		},
		{
			"type": "FST",
			"label": "Contacts",
			"name": "contact",
			"fields": [
				{
					"type": "NUM",
					"id": "8",
					"label": "Number",
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
			"label": "Address",
			"name" : "addressDetails",
			"fields": [
				{
					"type": "NUM",
					"id": "10",
					"label" : "House No",
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
					"label": "Street No",
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
			"label": "Choose Multiple",
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
			"label": "Check Boxes",
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
}