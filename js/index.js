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
	var submitChat = function()
	{
		var input = $('.input input').val();
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
			var holder = 'Hi there ' + val.childname + '. Welcome Back.';
			if(val.data.Math.test1 <= val.data.English.test1)
			{
				holder += ' Looks Like We need to work on Math ';
				holder += 'https://drive.google.com/file/d/0B-suiGeYzcmnVzh4N3k4U0RVZTg/view';
			}
			else
			{
				holder += ' Looks Like We need to work on English. Print: ';
				holder += '"https://drive.google.com/file/d/0B-suiGeYzcmnVzh4N3k4U0RVZTg/view"';
			}
			updateChat(robot, holder);
		}

		else
		{
			updateChat(robot, 'Hi there you need to log in');
		}

	}



});
