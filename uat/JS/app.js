var a = {
    Programmer: [{
        "ProgrammerType": "Java Programmer",
    }, {
     "ProgrammerType": "",
    }, {
     "ProgrammerType": "Angular",
    }, {
     "ProgrammerType": "React",
    }]
 };
 $.each(a.Programmer, function (key, value) {
    $("#dropDownProgrammer").append($('<option></option>').html(value.ProgrammerType));
 });

 var b = {
    Developer: [{
        "DeveloperType": "java",
    }, {
     "DeveloperType": "PHP",
    }, {
     "DeveloperType": "Angular",
    }, {
     "DeveloperType": "React",
    }]
 };
 $.each(b.Developer, function (key, value) {
    $("#dropDownDeveloper").append($('<option></option>').html(value.DeveloperType));
 });

 var c = {
    Projectmanager: [{
        "ProjectmanagerType": "java",
    }, {
     "ProjectmanagerType": "PHP",
    }, {
     "ProjectmanagerType": "Angular",
    }, {
     "ProjectmanagerType": "React",
    }]
 };
 $.each(c.Projectmanager, function (key, value) {
    $("#dropDownProjectmanager").append($('<option></option>').html(value.ProjectmanagerType));
 });

 var d = {
    languages: [{
        "languageType": "java",
    }, {
     "languageType": "PHP",
    }, {
     "languageType": "Angular",
    }, {
     "languageType": "React",
    }]
 };
 $.each(d.languages, function (key, value) {
    $("#dropDownlanguage").append($('<option></option>').html(value.languageType));
 });

