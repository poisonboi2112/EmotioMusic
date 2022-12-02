
var songrun=false;
var count=1;
var mod=1;
var path=["songs\\adele_-_skyfall_(zvukoff.ru).mp3"
,"songs\\009_sound_system_-_dreamscape_apache_remix_(zf.fm).mp3"
,"songs\\Adriano Chelentano - La Shate Mi Cantare.mp3"
,"songs\\alizee_-_moi_lolita_(zvukoff.ru).mp3"
,"songs\\dj-smash_-_moscow-never-sleeps.mp3"
,"songs\\eurythmics_-_sweet_dreams_(zvukoff.ru).mp3"
,"songs\\nina_simone_sinnerman_felix_da_housecats_heavenly_house_mix_ost.mp3"
,"songs\\one_shot_-_a_la_conquete_(zv.fm).mp3"
,"songs\\Sugar - Robin Schulz.mp3"
,"songs\\the_caesars_-_jerk_it_out_(zf.fm).mp3"
,"songs\\Touch & Go - Tango In Harlem 2012 (Club Mix).mp3"
,"songs\\Twenty One Pilots - Stressed Out.mp3"
,"songs\\tchami_-_adieu_original_mix_(zf.fm).mp3"];

var sname=["Skyfall",
"009 Sound System",
"La Shate Mi Cantare",
"Moi Lolita",
"Moscow Never Sleeps",
"Sweet Dreams",
"Sinnerman Felix Da Housecats",
"A La Conquete",
"Sugar",
"Jerk It Out",
"Tango In Harlem(Club Mix)",
"Stressed Out",
"Adieu"
];

var sd=["Artist: Adele<br>Movie: 007 Skyfall<br>Released: 2012<br>Genre: Techno",
"Artists: Alexander Perls<br>Released: 2009<br>Genre: Pop"
,"Artists: Toto Cutugno<br>Released: 1983<br>Genre: Latin Urbano"
,"Artist: Alizée<br>Released: 2000<br>Genre: French pop"
,"Artist: DJ Smash<br>Released: 2008<br>Genre: EDM"
,"Artists: Eurythmics<br>Released: 1983<br>Genre: Pop"
,"Artist: Felix da Housecat, Nina Simone<br>Released: 2003<br>Genre: House"
,"Artist: One Shot<br>Movie: Taxi<br>Released: 2000<br>Genre: French rap"
,"Artist: Robin Schulz<br>Released: 2015<br>Genre: EDM"
,"Artists: Ceasars Palace<br>Released: 2002<br>Genre: Indie"
,"Artists: Touch and Go<br>Released: 2001<br>Genre: Jazz pop"
,"Artists: Twenty One Pilots<br>Released: 2015<br>Genre: Alternative Rock"
,"Artists: Tchami<br>Released: 2016<br>Genre: EDM"];

var bool=[];
for(var i=0; i<sd.length; i++)
	bool[i]=false;

var icon=["images\\\\1.jpg",
"images\\\\2.jpg",
"images\\\\3.jpg",
"images\\\\4.jpg",
"images\\\\5.jpg",
"images\\\\6.jpg",
"images\\\\7.jpg",
"images\\\\8.jpg",
"images\\\\9.jpg",
"images\\\\10.jpg",
"images\\\\11.jpg",
"images\\\\12.jpg",
"images\\\\13.jpg"];

var mood=[["1","2","13"],["3","4", "5", "12"],["6","7","8"],["9","10", "11"]];
var mmm=["1.png","1.png","1.png","2.png","2.png","3.png","3.png","3.png","4.png","4.png"];

var songs=new Array(icon.length);
for (var i = 0; i<icon.length; i++) {
	songs[i]=new Array(4);
	songs[i][0]=path[i];
	songs[i][1]=sd[i];
	songs[i][2]=icon[i];
	songs[i][3]=mmm[i];
	console.log(songs[i][0]);
	console.log(songs[i][1]);
	console.log(songs[i][2]);
	var ins=document.createElement("div");
	ins.id='b'+i;
	//ins.onclick=function(){
	//next(this);
  	//};
	ins.setAttribute("class", "song");
	document.body.appendChild(ins);
	document.getElementById('b'+i).innerHTML='<div id="pic" style=\'background-image: url(\"'+songs[i][2]+'\");\'>  <input type="button" id="'+"a"+i+'" class="play" > <input type="button" id="'+"c"+i+'" class="add">  </div><div id="data"><br><br>'+songs[i][1]+'</div>';
	document.getElementById('a'+i).onclick=function(){
		play(this);
	};
	document.getElementById('c'+i).onclick=function(){
		addq(this);
	};	
}




function setmod(elem){
	mod=elem.value;
	if(!songrun){
		if(mod==2)
			getTime();
		if(mod==3)
			rand_play();
	}
}

function play(elem){
	console.log(elem.id);
	var x=elem.id.charAt(1);
	var z=songs[x][0];
	document.getElementById("sname").innerHTML=sname[x];
	document.getElementById("sel").src= z;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[x][3]+"')";
	songrun=true;

}

var eqc=1;
var sqc=1;

function addq(elem){
	console.log(elem.id);
	var x=elem.id.charAt(1);
	if(!songrun){
		var z=songs[x][0];
		document.getElementById("sname").innerHTML=sname[x];
		document.getElementById("sel").src= z;
		document.getElementById("main_slider").load();
		document.getElementById("main_slider").play();
		document.getElementById("emoji").style.backgroundImage="url('"+songs[x][3]+"')";
		songrun=true;		
		return;
	}
	if(bool[x]==true)
		return;
	
	bool[x]=true;
	var l=document.createElement("label");
	l.id="e"+eqc;
	l.name=x;
	l.innerHTML=sname[x]+"<br>";
	//var text=document.createTextNode(sname[x]+"<br>");
	//l.appendChild(text);
	document.getElementById("queue").appendChild(l);
	eqc=eqc+1;
}

function nextsong(){
	if(sqc==eqc){
				alert("Queue is empty.");
				return;
		}
		var elem=document.getElementById("e"+sqc);
			var xa=elem.name;
			var pa=songs[xa][0];
			bool[xa]=false;
			document.getElementById("sname").innerHTML=sname[xa];
			document.getElementById("sel").src= pa;
			document.getElementById("main_slider").load();
			document.getElementById("main_slider").play();
			document.getElementById("emoji").style.backgroundImage="url('"+songs[xa][3]+"')";
			
			songrun=true;
			document.getElementById("queue").removeChild(elem);	
			sqc=sqc+1;

}

function next_in_Q(){
			songrun=false;
			if(sqc==eqc){
				alert("Queue is empty.");
				return;
			}
			var elem=document.getElementById("e"+sqc);
			var xa=elem.name;
			var pa=songs[xa][0];
			document.getElementById("sname").innerHTML=sname[xa];
			document.getElementById("sel").src= pa;
			document.getElementById("main_slider").load();
			document.getElementById("main_slider").play();
			document.getElementById("emoji").style.backgroundImage="url('"+songs[xa][3]+"')";
			songrun=true;
			document.getElementById("queue").removeChild(elem);	
			sqc=sqc+1;
			}

function rand_play(){
	var index=Math.random()*path.length;
	index=parseInt(index);
	var pa=songs[index][0];
	document.getElementById("sname").innerHTML=sname[index];
	document.getElementById("sel").src= pa;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[index][3]+"')";
	songrun=true;

}
function moody(val){
	var index=Math.random()*mood[val].length;
	index=parseInt(index);
	var pa=songs[mood[val][index]-1][0];
	document.getElementById("sname").innerHTML=sname[mood[val][index]-1];
	document.getElementById("sel").src= pa;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[mood[val][index]-1][3]+"')";
	songrun=true;
}

async function getTime() {
                let value = await eel.getEmotion()();
                if(value=="angry")
                	moody(0);
                else if(value=="happy")
                	moody(1);
                else if(value=="sad")
                	moody(2);
                else
                	moody(3);
            }