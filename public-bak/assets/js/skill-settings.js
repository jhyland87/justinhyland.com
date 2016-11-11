//Skill Chart Data
var skillGroups = [
	{
		category: 'Platforms',
		color: '#2C3E50',
		border: "4px solid #f4709f",
		items: [
			{
				"title": "RHEL & CentOS",
				"value": "85%"
			},
			{
				"title": "Oracle Linux",
				"value": "70%"
			},
			{
				"title": "Debian (Ubuntu)",
				"value": "70%"
			},
			{
				"title": "Fedora",
				"value": "70%"
			},
			{
				"title": "Windows 2008",
				"value": "60%"
			},
			{
				"title": "Windows 2003",
				"value": "65%"
			},
			{
				"title": "AWS",
				"value": "70%"
			}
		]
	},
	{
		category: 'Code',
		color: '#E74C3C',
		border: "4px solid #f4709f",
		items: [
			{
				"title": "Bash/Shell",
				"value": "85%"
			},
			{
				"title": "Perl",
				"value": "80%"
			},
			{
				"title": "PHP",
				"value": "70%"
			},
			{
				"title": "Python",
				"value": "59%"
			},
			{
				"title": "Ruby",
				"value": "45%"
			},
			{
				"title": "TCL",
				"value": "55%"
			},
			{
				"title": "SOAP",
				"value": "60%"
			},
			{
				"title": "REST API",
				"value": "85%"
			},
			{
				"title": "XML RPC",
				"value": "90%"
			},
			{
				"title": "Powershell",
				"value": "50%"
			},
			{
				"title": "SQL",
				"value": "65%"
			},
			{
				"title": "Javascript & NodeJS",
				"value": "70%"
			}
		]
	},
	{
		category: 'Applications',
		color: '#E74C3C',
		border: "4px solid #f4709f",
		items: [
			{
				"title": "Jenkins",
				"value": "90%"
			},
			{
				"title": "VMWare",
				"value": "70%"
			},
			{
				"title": "Chef",
				"value": "55%"
			},
			{
				"title": "MySQL",
				"value": "75%"
			},
			{
				"title": "Nagios",
				"value": "70%"
			},
			{
				"title": "RHDS",
				"value": "50%"
			},
			{
				"title": "Apache",
				"value": "90%"
			},
			{
				"title": "Tomcat",
				"value": "60%"
			},
			{
				"title": "Nginx",
				"value": "65%"
			},
			{
				"title": "Satellite",
				"value": "50%"
			},
			{
				"title": "Metasploit",
				"value": "45%"
			},
			{
				"title": "Atlassian",
				"value": "70%"
			}
		]
	}
]

//skillbar
//function hasClass(e,t){return e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))}function addClass(e,t){if(!this.hasClass(e,t))e.className+=" "+t}function removeClass(e,t){if(hasClass(e,t)){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ")}}function rotate(e){$("#l-inhalt").css("visibility","visible");document.getElementById("l-inhalt").setAttribute("class","show");if(document.querySelector(".btn-skills.active")!==null)removeClass(document.querySelector(".btn-skills.active"),"active");if(e==="rotate1"){addClass(document.querySelector(".skills-1"),"active");var t=skillData.skill1}if(e==="rotate2"){addClass(document.querySelector(".skills-2"),"active");var t=skillData.skill2}if(e==="rotate3"){addClass(document.querySelector(".skills-3"),"active");var t=skillData.skill3}updateBars(t)}function updateBars(data){clearBars();for(var i=0;i<data.length;i=i+1){var j=i+1;eval("document.getElementById('skill-bar"+j+"').style.height = data[i].value;");eval("document.getElementById('skill-bar"+j+"').style.backgroundColor = data[i].color;");eval("document.getElementById('skill-bar"+j+"').style.borderRight = data[i].border;");document.querySelector("#skill-bar"+j+" > .skill-caption").innerHTML=data[i].title}document.getElementById("l-inhalt").setAttribute("class","show")}function clearBars(){for(var i=0;i<5;i=i+1){var j=i+1;eval("document.getElementById('skill-bar"+j+"').style.height = '';");eval("document.getElementById('skill-bar"+j+"').style.backgroundColor = 'transparent';");eval("document.getElementById('skill-bar"+j+"').style.borderRight = 'none';");document.querySelector("#skill-bar"+j+" > .skill-caption").innerHTML=""}}
/*
function hasClass(e, t) {
    return e.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)"))
}

function addClass(e, t) {
    if (!this.hasClass(e, t)) e.className += " " + t
}

function removeClass(e, t) {
    if (hasClass(e, t)) {
        var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
        e.className = e.className.replace(n, " ")
    }
}
*/
$(document).ready(function(){
	//initSkills()
	console.log('pie:',$("#pie-container").length)
	if ($("#pie-container").length){
        //rotate()
        initSkills()
        //initSkill( skill )
    }

	//$('.btn-skills').click(function(e){
	$(document).on( 'click', '.btn-skills', function(e){
		e.preventDefault()
		var $this = $(this)

		var skill = $this.data('skill')

		console.log('Skill:',skill)

		//addClass(document.querySelector(".skills-1"), "active");
        //var t = skillData.skill1

        $this.addClass('active')

        initSkill( skill )
        //updateBars( skillData[ skill ] )
	})


})

function rotate( skill ) {
	alert('asdfasdf')
	return

	var skillNames = Object.keys( skillData )
	var $skillContainer = $('div#pie-container > div#l-inhalt')
	var $linhalt = $("#l-inhalt")

	if( typeof skill === 'undefined' ){
		skill = skillNames[0]
	}

	console.log('Rotate skill:',skill)


    $linhalt.css("visibility", "visible").addClass('show')

    //document.getElementById("l-inhalt").setAttribute("class", "show");

    if( $(".btn-skills.active").length ){
    	$(".btn-skills.active").removeClass('active')
    }

    //if (document.querySelector(".btn-skills.active") !== null) 
    //	removeClass(document.querySelector(".btn-skills.active"), "active");

    //$('a.btn-skills[data-skill="'+ skill +'"]').addClass('active')

    var t = skillData[ skill ]

    /*if (e === "rotate1") {
        addClass(document.querySelector(".skills-1"), "active");
        var t = skillData.skill1
    }
    
    if (e === "rotate2") {
        addClass(document.querySelector(".skills-2"), "active");
        var t = skillData.skill2
    }
    
    if (e === "rotate3") {
        addClass(document.querySelector(".skills-3"), "active");
        var t = skillData.skill3
    }*/

    //updateBars(t)
    initSkill( skill )
}

function initSkills(){
	var $skillButtonContainer = $('nav.slide-effect')
	var $skillContainer = $('div#pie-container > div#l-inhalt')
	var btnClasses = [ 'btn-skills' ]

	$("#l-inhalt").css("visibility", "visible");

	$.each( skillGroups, function( idx, grp ){
		console.log('Idx %s: ', idx, grp)

		if( idx > 0 ){
			btnClasses.push( 'l-rMargin-' + ( 20 * idx ) )
		}

		$skillButtonContainer.append(
			$('<a/>', {
				href: '#',
				'data-hover': grp.category,
				'data-skill': grp.category,
				class: btnClasses.join(' ')
			})
			.append(
				$('<span/>').text(grp.category)
			)
		)
	})

	initSkill()
	//<a href="#" data-hover="Design" data-skill="design" class="btn-skills"><span>Design</span></a>
}

function initSkill( skill ){
	var skillIndex = {}

	$.each( skillGroups, function( idx, grp ){
		skillIndex[ grp.category.toLocaleLowerCase() ] = idx
	})

	console.log('skillIndex:',skillIndex)
	var $skillButtonContainer = $('nav.slide-effect')
	var $skillContainer = $('div#pie-container > div#l-inhalt')

	clearBars();

	if( typeof skill === 'undefined' ){
		skill = Object.keys(skillIndex)[0]
	}

	skill = skill.toLocaleLowerCase()

	if( typeof skillIndex[ skill ] === 'undefined' ){
		console.error('No skill named %s', skill)
		return
	}

	if( typeof skillGroups[ skillIndex[ skill ] ] === 'undefined' ){
		console.error('No skill named %s', skill)
		return
	}

	var skillInfo = skillGroups[ skillIndex[ skill ] ]

    $skillContainer.css("visibility", "visible").addClass('show')

	$.each( skillInfo.items, function( idx, skl ){
		console.log('idx:',idx)
		console.log('skl:',skl)

		$skillContainer
			.append(
				$('<div/>', {
					id: 'skill-bar' + (idx + 1), 
					class: 'skill-item bar bar' + (idx + 1),
					'data-percent': skl.value,
					css: {
						height: skl.value,
						backgroundColor: skillInfo.color,
						borderRight: skillInfo.border,
						left: ( idx === 0 ? 0 : (50 * idx) + 'px')
					}
				})
				.append( 
					$('<h5/>', { 
						class: 'skill-caption', 
						html: skl.title
					})
				)
			)
	} )

	$('.skill-item').each(function( si ){
		$(si).css('height', $(si).data('percent'))
	})

	//updateBars( skillData[ skill ] )

	//div#pie-container > div#l-inhalt $('<div/>').attr({ id: '', class: ''})  $('<div/>').attr({ id: 'test', class: 'idk'}).append( $('<h5/>').addClass('skill-caption').html('&nbsp;') )[0] 
}

function updateBars(data) {
    clearBars(data);

    //initSkills()
    
    for (var i = 0; i < data.length; i = i + 1) {
        var j = i + 1;
        eval("document.getElementById('skill-bar" + j + "').style.height = data[i].value;");
        eval("document.getElementById('skill-bar" + j + "').style.backgroundColor = data[i].color;");
        eval("document.getElementById('skill-bar" + j + "').style.borderRight = data[i].border;");
        document.querySelector("#skill-bar" + j + " > .skill-caption").innerHTML = data[i].title
    }
    document.getElementById("l-inhalt").setAttribute("class", "show")
}

function clearBars(data) {
	//$('div.skill-item')
	$('div#pie-container > div#l-inhalt > div.skill-item').remove()
	return

    for (var i = 0; i < data.length; i = i + 1) {
        var j = i + 1;
        eval("document.getElementById('skill-bar" + j + "').style.height = '';");
        eval("document.getElementById('skill-bar" + j + "').style.backgroundColor = 'transparent';");
        eval("document.getElementById('skill-bar" + j + "').style.borderRight = 'none';");
        document.querySelector("#skill-bar" + j + " > .skill-caption").innerHTML = ""
    }
}
