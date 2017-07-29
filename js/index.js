$(function() {

	// chat aliases
	var you = 'You';
	var robot = 'Friday';

	// slow reply by 400 to 800 ms
	var delayStart = 400;
	var delayEnd = 800;

	// initialize
	var bot = new chatBot();
	var chat = $('.chat');
	var waiting = 0;
	$('.busy').text(robot + ' is typing...');

	// submit user input and get chat-bot's reply
	function setEnglishCallBack(data)
	{
		mydb.ref('users/' + user + '/data/English').set({
			test1: data,
		});
	}

	function progressUpdate(packet){
		var log = document.getElementById('log');
		if(log.firstChild && log.firstChild.status === packet.status){
			if('progress' in packet){
				var progress = log.firstChild.querySelector('progress')
				progress.value = packet.progress
			}
		}else{
			var line = document.createElement('div');
			line.status = packet.status;
			var status = document.createElement('div')
			status.className = 'status'
			status.appendChild(document.createTextNode(packet.status))
			line.appendChild(status)
			if('progress' in packet){
				var progress = document.createElement('progress')
				progress.value = packet.progress
				progress.max = 1
				line.appendChild(progress)
			}
			if(packet.status == 'done')
			{
				var pre = document.createElement('pre')
				pre.appendChild(document.createTextNode(''))
				line.innerHTML = ''
				line.appendChild(pre)
				key = "Â«u-=bee3?:butterflyg1?=snail[mayspiderf=dragonfly6=ladybug"

				key = [' bee',' butterfly', ' snail', ' spider', ' dragonfly', 'ladybug']

				answers = packet.data.text.split('\n');
				new1 = []
				numwrong = 0;

				answers.forEach(function(element)
				{
					if(element.indexOf(" ") == -1)
					{
						new1.push(element.substring(element.lastIndexOf("=")+1  ));
					}
					else
					{
						new1.push(element.substring(element.lastIndexOf(" ")));
					}
				});

				for(i = 0; i< new1.length; i++)
				{
					if(new1[i] == key[i])
					{
						numwrong+=1;
					}
				}

				updateChat('Friday', 'Good Job ' + 'You missed: ' + numwrong.toString() + ' out of 6 problems')
				if(numwrong <= 1)
				{
					updateChat('Friday', 'You earned some game-time')
					updateChat('Friday', 'www.thepanopticdiorama.com/EducationExpress/games.html')
				}
				else
				{
					updateChat('Friday', 'You should practice addition at this link: https://www.khanacademy.org/math/arithmetic/arith-review-add-subtract/arith-review-basic-add-subtract/v/basic-addition')
				}

				setEnglishCallBack( Math.round( ((6-numwrong)/6)*100));
				console.log(numwrong)
				line.appendChild(pre)

			}

			log.insertBefore(line, log.firstChild)
		}
	}

	var submitChat = function()
	{
		var input = $('.input input').val();
		var fileinput = document.getElementById('tests').files[0];
		console.log(fileinput)
		if(fileinput != null)
		{
			document.getElementById("tests").value = "";

			updateChat('Friday', 'Thanks for uploading that file. We are grading right now')

			document.querySelector("#log").innerHTML = ''
			Tesseract.recognize(fileinput, {
				lang: 'eng'
			})
				.then(function(data)
				{
					progressUpdate({ status: 'done', data: data})
				})

			console.log("Thanks")
		}
		else
		{
			console.log('No file uploaded')
		}

		if(input == '') return;

		$('.input input').val('');
		updateChat(you, input);

		var reply = bot.respondTo(input, updateChat);
		if(reply == null) return;

		var latency = Math.floor((Math.random() * (delayEnd - delayStart)) + delayStart);
		$('.busy').css('display', 'block');
		waiting++;
		setTimeout( function() {
			if(typeof reply === 'string') {
				updateChat(robot, reply);
			} else {
				for(var r in reply) {
					updateChat(robot, reply[r]);
				}
			}
			if(--waiting == 0) $('.busy').css('display', 'none');
		}, latency);
	}


	// add a new line to the chat
	var updateChat = function(party, text)
	{

		var style = 'you';
		if(party != you) {
			style = 'other';
		}

		var line = $('<div><span class="party"></span> <span class="text"></span></div>');
		line.find('.party').addClass(style).text(party + ':');
		line.find('.text').text(text);

		chat.append(line);

		chat.stop().animate({ scrollTop: chat.prop("scrollHeight")});
	}

	// event binding
	$('.input').bind('keydown', function(e) {
		if(e.keyCode == 13) {
			submitChat();
		}
	});
	$('.input a').bind('click', submitChat);

	// initial chat state

	mydb.ref('users/' + 'Shardul').once('value', function(snap)
	{
			a(snap.val());
	});

	function a(val)
	{
		console.log(val.data);

		if(val.data != undefined)
		{
			updateChat(robot, 'Hi there ' + val.childname + '   Welcome Back.');
			if(val.data.Math.test1 <= val.data.English.test1)
			{
				updateChat(robot,'Looks Like We need to work on Math ')
				updateChat(robot,'Print this page: https://drive.google.com/file/d/0B-suiGeYzcmnVzh4N3k4U0RVZTg/view')
			}
			else
			{
				updateChat(robot,'Looks Like We need to work on Math ')
				updateChat(robot,'Print this page: https://drive.google.com/file/d/0B-suiGeYzcmnVzh4N3k4U0RVZTg/view')
			}

			updateChat(robot, 'When you finish all the problems submit them in the below box with the title of the Subject (Example: Math.jpg or English.jpg)')
		}

		else
		{
			updateChat(robot, 'Hi there you need to log in');
		}

	}



});
