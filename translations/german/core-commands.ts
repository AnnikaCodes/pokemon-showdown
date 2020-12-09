import type {Translations} from '../../server/chat';

export const translations: Translations = {
	strings: {
		"Server version: <b>${version}</b>": "Server-Version: <b>${version}</b>",
		"/mee - must not start with a letter or number": "/mee - darf nicht mit einem Buchstaben oder einer Zahl anfangen",
		"What?! How are you not more excited to battle?! Try /battle! to show me you're ready.": "Wie bitte?! Wie kannst du dich nicht über einen Kampf freuen?! Sobald du bereit bist, benutze den Befehl /battle!",
		"Access denied for custom avatar - make sure you're on the right account?": "Zugriff auf einen Custom Avatar verweigert - bitte stelle sicher, dass du den richtigen Account verwendest.",
		"Invalid avatar.": "Ungültiger Avatar.",
		"Avatar changed to:": "Avatar geändert zu:",
		"Artist: ": "Ersteller: ",
		"No one has PMed you yet.": "Niemand hat dir bisher eine private Nachricht geschrieben.",
		"You forgot the comma.": "Du hast das Komma vergessen.",
		"User ${targetUsername} not found. Did you misspell their name?": "Der Nutzer ${targetUsername} wurde nicht gefunden. Hast du den Namen falsch geschrieben?",
		"User ${targetUsername} is offline.": "Der Nutzer ${targetUsername} ist offline.",
		'The user "${targetUsername}" was not found.': 'The user "${targetUsername}" was not found.',
		'The room "${target}" was not found.': 'The room "${target}" was not found.',
		"You do not have permission to invite people into this room.": "Du hast keine Berechtigung, Nutzer in diesen Raum einzuladen.",
		'This user is already in "${targetRoom.title}".': 'This user is already in "${targetRoom.title}".',
		"Setting status messages in /busy is no longer supported. Set a status using /status.": "Es ist nicht mehr möglich, eine Statusmeldung mit /busy einzustellen. Stelle eine Statusmeldung mit /status ein.",
		"Setting status messages in /away is no longer supported. Set a status using /status.": "Es ist nicht mehr möglich, eine Statusmeldung mit /away einzustellen. Stelle eine Statusmeldung mit /status ein.",
		"User '${target}' not found.": "Nutzer '${target}' wurde nicht gefunden.",
		"${targetUser.name} does not have a status set.": "${targetUser.name} hat keine Statusmeldung eingestellt.",
		'${targetUser.name}\'s status "${targetUser.userMessage}" was cleared by ${user.name}${displayReason}': '${targetUser.name}\'s status "${targetUser.userMessage}" was cleared by ${user.name}${displayReason}',
		"You don't have a status message set.": "Du hast keine Statusmeldung eingestellt.",
		"You have cleared your status message.": "Du hast deine Statusmeldung entfernt.",
		"This user has not played any ladder games yet.": "Dieser Nutzer hat noch keine Ladder-Kämpfe bestritten.",
		"W[TN: initial for Wins]": "S",
		"L[TN: initial for Losses]": "N",
		"You already have the temporary symbol '${group}'.": "Du hast bereits das vorübergehende Symbol '${group}'.",
		"You must specify a valid group symbol.": "Du musst ein gültiges Gruppensymbol angeben.",
		"You may only set a temporary symbol below your current rank.": "Du darfst nur ein vorübergehendes Symbol einstellen, welches unter deinem derzeitigen Rang ist.",
		"Your temporary group symbol is now": "Dein vorübergehendes Gruppensymbol ist jetzt",
		"Currently, you're viewing Pokémon Showdown in ${language}.": "Derzeit wird Pokémon Showdown in ${language} angezeigt.",
		"Valid languages are: ${languages}": "Gültige Sprachen sind: ${languages}",
		"Pokémon Showdown will now be displayed in ${language} (except in language rooms).": "Pokémon Showdown wird jetzt in ${language} angezeigt (außer in Sprachräumen).",
		"Note that rooms can set their own language, which will override this setting.": "Bitte beachte, dass Räume ihre eigene Sprache einstellen können, welche diese Einstellung überschreibt.",
		"/updatesettings expects JSON encoded object.": "/updatesettings verlangt ein Objekt, welches in JSON verschlüsselt ist.",
		"Unable to parse settings in /updatesettings!": "Es ist nicht möglich, die Einstellungen in /updatesettings zu analysieren!",
		"Must be in a battle.": "Muss in einem Kampf sein.",
		"User ${target} not found.": "Nutzer ${target} wurde nicht gefunden.",
		"Must be a player in this battle.": "Muss ein Spieler in diesem Kampf sein.",
		"${targetUser.name} has not requested extraction.": "${targetUser.name} hat keine Extraktion angefordert.",
		"You have already consented to extraction with ${targetUser.name}.": "Du hast bereits einer Extraktion mit ${targetUser.name} zugestimmt.",
		"${user.name} consents to sharing battle team and choices with ${targetUser.name}.": "${user.name} gibt das Einverständnis, das Kampf-Team und die Entscheidungen mit ${targetUser.name} zu teilen.",
		"No input log found.": "Kein Input-Protokoll wurde gefunden.",
		"${targetUser.name} has extracted the battle input log.": "${targetUser.name} hat das Input-Protokoll des Kampfes extrahiert.",
		"This command only works in battle rooms.": "Dieser Befehl funktioniert nur in Kampfräumen.",
		"This command only works when the battle has ended - if the battle has stalled, use /offertie.": "Dieser Befehl funktioniert nur, sobald der Kampf beendet wurde - falls der Kampf hinausgezögert wird, benutze /offertie",
		"Alternatively, you can end the battle with /forcetie.": "Alternativ kannst du den Kampf mit /forcetie beenden.",
		"${user.name} has extracted the battle input log.": "${user.name} hat das Input-Protokoll des Kampfes extrahiert.",
		"You already extracted the battle input log.": "Du hast bereits das Input-Protokoll des Kampfes extrahiert.",
		"Battle input log re-requested.": "Input-Protokoll des Kampfes wurde nochmal angefordert.",
		"Invalid input log.": "Ungültiges Input-Protokoll.",
		"Your input log contains untrusted code - you must have console access to use it.": "Dein Input-Protokoll enthält einen nicht vertrauenswürdigen Code - du musst Zugriff auf die Konsole haben, um es zu benutzen.",
		"This command can only be used in a battle.": "Dieser Befehl kann nur in einem Kampf benutzt werden.",
		"Only players can extract their team.": "Nur Spieler können ihre Teams extrahieren.",
		"Use a number between 1-6 to view a specific set.": "Benutze eine Nummer zwischen 1-6, um ein bestimmtes Set einzusehen.",
		'The Pokemon "${target}" is not in your team.': 'The Pokemon "${target}" is not in your team.',
		"That Pokemon is not in your team.": "Dieses Pokemon ist nicht in deinem Team.",
		"View team": "Team einsehen",
		"Must be in a battle room.": "Muss in einem Kampfraum sein.",
		"This server does not allow offering ties.": "Dieser Server unterstützt es nicht, Unentschieden anzubieten.",
		"You can't offer ties in tournaments.": "Du kannst keine Unentschieden in einem Turnier anbieten.",
		"It's too early to tie, please play until turn 100.": "Es ist noch zu früh, um ein Unentschieden anzubieten, bitte warte bis Zug 100.",
		"No other player is requesting a tie right now. It was probably canceled.": "Kein Spieler fordert gerade ein Unentschieden an. Wahrscheinlich wurde es abgebrochen.",
		"${user.name} is offering a tie.": "${user.name} bietet ein Unentschieden an.",
		"Accept tie": "Unentschieden akzeptieren",
		"Reject": "Ablehnen",
		"Must be a player to accept ties.": "Muss ein Spieler sein, um Unentschieden zu akzeptieren.",
		"You have already agreed to a tie.": "Du hast bereits einem Unentschieden zugestimmt.",
		"${user.name} accepted the tie.": "${user.name} hat das Unentschieden angenommen.",
		"All players have accepted the tie.": "Alle Spieler haben einem Unentschieden zugestimmt.",
		"Must be a player to reject ties.": "Muss ein Spieler sein, um Unentschieden abzulehnen.",
		"${user.name} rejected the tie.": "${user.name} hat das Unentschieden abgelehnt.",
		"This room doesn't have an active game.": " In diesem Raum findet kein aktiver Kampf statt.",
		"This kind of game can't be forfeited.": "In diesem Kampf kann man nicht aufgeben.",
		"This game doesn't support /choose": "Dieses Spiel unterstützt nicht /choose",
		"This game doesn't support /undo": "Dieses Spiel unterstützt nicht /undo",
		"You can only save replays for battles.": "Du kannst nur Replays für Kämpfe speichern.",
		"This battle can't have hidden replays, because the tournament is set to be forced public.": "Dieser Kampf unterstützt keine verborgenen Replays, da das Turnier so eingestellt wurde, dass alle Kämpfe öffentlich sind.",
		"The replay for this battle is already set to hidden.": "Das Replay dieses Kampfes wurde bereits verborgen.",
		"${user.name} hid the replay of this battle.": "${user.name} hat das Replay dieses Kampfes verborgen.",
		"You can only do this in battle rooms.": "Du kannst dies nur in Kampfräumen machen.",
		"You can only add a Player to unrated battles.": "Du kannst einen Spieler ausschließlich in Unrated-Kämpfen hinzufügen.",
		'Player must be set to "p1" or "p2", not "${target}".': 'Player must be set to "p1" or "p2", not "${target}".',
		"User ${name} not found.": "Nutzer ${name} wurde nicht gefunden.",
		"User ${name} must be in the battle room already.": "Nutzer ${name} muss bereits im Kampfraum sein.",
		"This room already has a player in slot ${target}.": "Dieser Raum besitzt bereits einen Spieler in Slot ${target}",
		"${targetUser.name} is already a player in this battle.": "${targetUser.name} ist bereits ein Spieler in diesem Kampf.",
		"${name} was added to the battle as Player ${playerNum} by ${user.name}.": "${name} wurde bereits zum Kampf als Spieler ${playerNum} von ${user.name} hinzugefügt.",
		"Player 2": "Spieler 2",
		"Players could not be restored (maybe this battle already has two players?).": "Spieler konnten nicht wiederhergestellt werden (vielleicht hat dieser Kampf bereits zwei Spieler?).",
		"This game doesn't support /joingame": "Dieses Spiel unterstützt nicht /joingame",
		"This game doesn't support /leavegame": "Dieses Spiel unterstützt nicht /leavegame",
		"You can only do this in unrated non-tour battles.": "Du kannst dies nur in einem Unrated-Kampf machen, welcher nicht Teil eines Turniers ist.",
		"User ${targetUsername} not found.": "Nutzer ${targetUsername} wurde nicht gefunden.",
		"${targetUser.name} was kicked from a battle by ${user.name} ${displayTarget}": "${targetUser.name} wurde aus dem Kampf von ${user.name} gekickt ${displayTarget}",
		"You can only set the timer from inside a battle room.": "Du kannst den Timer nur innerhalb eines Kampfraumes einstellen.",
		"This game's timer is managed by a different command.": "Der Timer dieses Kampfes wird mit einem anderen Befehl gesteuert.",
		"The game timer is OFF.": "Der Timer des Kampfes ist ausgeschaltet.",
		"The game timer is ON (requested by ${requester})": "Der Timer des Kampfes ist eingeschaltet (von ${requester} angefordert)",
		"Access denied.": "Zugriff verweigert",
		"Timer was turned off by staff. Please do not turn it back on until our staff say it's okay.": "Der Timer wurde vom Staff ausgeschaltet. Bitte schalte diesen nicht wieder ein, außer der Staff wünscht es.",
		"The timer is already off.": "Der Timer ist bereits ausgeschaltet.",
		'"${target}" is not a recognized timer state.': '"${target}" is not a recognized timer state.',
		"Forcetimer is now OFF: The timer is now opt-in. (set by ${user.name})": "Der Forcetimer ist jetzt ausgeschaltet: Der Timer kann nur noch mit entsprechender Einwilligung eingeschaltet werden. (eingestellt von ${user.name})",
		"Forcetimer is now ON: All battles will be timed. (set by ${user.name})": "Der Forcetimer ist jetzt eingeschaltet: Alle Kämpfe unterstehen einem Timer. (eingestellt von ${user.name})",
		"'${target}' is not a recognized forcetimer setting.": "'${target}' ist keine erkannte Einstellung bezüglich des Forcetimers.",
		"This server requires you to be rank ${groupName} or higher to search for a battle.": "Dieser Server erfordert es, Rang ${groupName} oder höher zu sein, um nach Kämpfen zu suchen.",
		"Since you have reached ${Config.forceregisterelo} ELO in ${target}, you must register your account to continue playing that format on ladder.": "Da du ${Config.forceregisterelo} ELO in ${target} erreicht hast, musst du deinen Account registrieren, um weiterhin dieses Format auf der Ladder spielen zu können.",
		"Register": "Registrieren",
		"The user '${targetUsername}' was not found.": "Der Nutzer '${targetUsername}' wurde nicht gefunden.",
		"You are locked and cannot challenge unlocked users.": "Du bist gesperrt und kannst andere Nutzer nicht zu einem Kampf herausfordern.",
		"You are banned from battling and cannot challenge users.": "Du bist davon ausgeschlossen, Kämpfe zu bestreiten und kannst keine anderen Nutzer herausfordern.",
		"You must choose a username before you challenge someone.": "Du musst einen Nutzernamen haben, bevor du jemanden herausforderst.",
		"This server requires you to be rank ${groupName} or higher to challenge users.": "Dieser Server erfordert es, Rang ${groupName} oder höher zu sein, um Nutzer herauszufordern.",
		"This command does not support specifying multiple users": "Dieser Befehl unterstützt es nicht, mehrere Nutzer anzugeben.",
		'User "${targetUsername}" not found.': 'User "${targetUsername}" not found.',
		"Provide a valid format.": "Gib ein gültiges Format an.",
		"Please provide a valid format.": "Bitte gib ein gültiges Format an.",
		"The format '${originalFormat.name}' was not found.": "Das Format '${originalFormat.name}' wurde nicht gefunden.",
		"Your team is valid for ${format.name}.": "Dein Team ist gültig für ${format.name}.",
		"Your team was rejected for the following reasons:": "Dein Team wurde aus folgenden Gründen abgelehnt:",
		"Battles are now hidden (except to staff) in your trainer card.": "Kämpfe werden jetzt in deiner Trainer-Karte verborgen (außer vom Staff).",
		"Battles are now visible in your trainer card.": "Kämpfe sind jetzt in deiner Trainer-Karte öffentlich.",
		"'${command}' is a help command.": "'${command}' ist ein informativer Befehl.",
		"The command '/${target}' does not exist.": "Der Befehl '/${target}' existiert nicht.",
		"Could not find help for '/${target}'. Try /help for general help.": "Es konnten keine Hilfestellungen für '/${target}' gefunden werden. Benutze /help um eine allgemeine Hilfestellung zu erhalten.",
		"Could not find help for '/${target}' - displaying help for '/${closestHelp}' instead": "Es konnten keine Hilfestellungen für '/${target}' gefunden werden - stattdessen wird eine Hilfestellung für '/${closestHelp}' angezeigt.",
	},
};
