import type {Translations} from '../../server/chat';

export const translations: Translations = {
	strings: {
		"Server version: <b>${version}</b>": "Versión del servidor: <b>${version}</b>",
		"/mee - must not start with a letter or number": "/mee - no debe empezar con una letra o un número",
		"What?! How are you not more excited to battle?! Try /battle! to show me you're ready.": "¡¿Qué?! ¡¿Cómo no estás más emocionado por combatir?! Prueba usando /battle para demostrarme que estás listo.",
		"Access denied for custom avatar - make sure you're on the right account?": "Acceso denegado a custom avatar - asegúrate de estar en la cuenta correcta",
		"Invalid avatar.": "Avatar inválido.",
		"Avatar changed to:": "Avatar cambiado a:",
		"Artist: ": "Artista:",
		"No one has PMed you yet.": "Nadie te ha enviado mensaje privado aún.",
		"You forgot the comma.": "Olvidaste una coma.",
		"User ${targetUsername} not found. Did you misspell their name?": "Usuario ${targetUsername} no encontrado. ¿Lo escribiste mal?",
		"User ${targetUsername} is offline.": "El usuario ${targetUsername} está desconectado.",
		'The user "${targetUsername}" was not found.': 'The user "${targetUsername}" was not found.',
		'The room "${target}" was not found.': 'The room "${target}" was not found.',
		"You do not have permission to invite people into this room.": "Tú no tienes permiso para invitar gente a esta sala.",
		'This user is already in "${targetRoom.title}".': 'This user is already in "${targetRoom.title}".',
		"Setting status messages in /busy is no longer supported. Set a status using /status.": "Poner mensajes de estado en /busy ya no está disponible. Pon un estado utilizando /status.",
		"Setting status messages in /away is no longer supported. Set a status using /status.": "Poner mensajes de estado en /away ya no está disponible. Coloca un estado utilizando /status.",
		"User '${target}' not found.": "Usuario '${target}' no encontrado.",
		"${targetUser.name} does not have a status set.": "${targetUser.name} no tiene un mensaje de estado puesto.",
		'${targetUser.name}\'s status "${targetUser.userMessage}" was cleared by ${user.name}${displayReason}': '${targetUser.name}\'s status "${targetUser.userMessage}" was cleared by ${user.name}${displayReason}',
		"You don't have a status message set.": "Tú no tienes un mensaje de estado puesto.",
		"You have cleared your status message.": "Haz eliminado tu mensaje de estado.",
		"This user has not played any ladder games yet.": "Este usuario no ha jugado un juego en ladder aún.",
		"W[TN: initial for Wins]": "V[TN: inicial de Victorias]",
		"L[TN: initial for Losses]": "D[TN: inicial de Derrotas]",
		"You already have the temporary symbol '${group}'.": "Tú ya tienes el símbolo temporal '${group}'",
		"You must specify a valid group symbol.": "Debes especificar un símbolo de grupo válido.",
		"You may only set a temporary symbol below your current rank.": "Solo puedes establecer un símbolo temporal menor que tu rango actual.",
		"Your temporary group symbol is now": "Tu símbolo temporal ahora es",
		"Currently, you're viewing Pokémon Showdown in ${language}.": "Ahora mismo estás viendo Pokémon Showdown en ${language}.",
		"Valid languages are: ${languages}": "Los idiomas válidos son: ${languages}.",
		"Pokémon Showdown will now be displayed in ${language} (except in language rooms).": "Pokémon Showdown ahora será mostrado en ${language} (excepto en las salas de idiomas).",
		"Note that rooms can set their own language, which will override this setting.": "Ten en cuenta que las salas pueden colocar su propio idioma, el cual se sobrepondrá a esta configuración.",
		"/updatesettings expects JSON encoded object.": "/updatesettings espera un objeto codificado JSON",
		"Unable to parse settings in /updatesettings!": "¡No fue posible analizar la configuración en /updatesettings!",
		"Must be in a battle.": "Debe estar en una batalla.",
		"User ${target} not found.": "Usuario ${target} no encontrado.",
		"Must be a player in this battle.": "Debe ser un jugador en esta batalla.",
		"${targetUser.name} has not requested extraction.": "El usuario ${targetUser.name} no ha solicitado una extracción",
		"You have already consented to extraction with ${targetUser.name}.": "Tú ya has dado consentimiento para la extracción con ${targetUser.name}.",
		"${user.name} consents to sharing battle team and choices with ${targetUser.name}.": "${user.name} acepta compartir su equipo y decisiones con ${targetUser.name}.",
		"No input log found.": "No se encontraron mensajes.",
		"${targetUser.name} has extracted the battle input log.": "${targetUser.name} ha extraído el registro de mensajes de la batalla.",
		"This command only works in battle rooms.": "Este comando solo funciona en batallas.",
		"This command only works when the battle has ended - if the battle has stalled, use /offertie.": "Este comando solo funciona si la batalla ha finalizado - si la batalla se ha estancado, utiliza /offertie. ",
		"Alternatively, you can end the battle with /forcetie.": "De otro modo, tú puedes terminar la batalla con /forcetie.",
		"${user.name} has extracted the battle input log.": "${user.name} ha extraído el registro de mensajes de la batalla.",
		"You already extracted the battle input log.": "Ya has extraído los mensajes de la batalla.",
		"Battle input log re-requested.": "Los mensajes de la batalla se solicitaron nuevamente.",
		"Invalid input log.": "Mensaje inválido.",
		"Your input log contains untrusted code - you must have console access to use it.": "Tu mensaje contiene código que no es de confianza - debes tener acceso a la consola para usarlo.",
		"This command can only be used in a battle.": "Este comando solo puede ser usado en una batalla.",
		"Only players can extract their team.": "Solo los jugadores pueden extraer su equipo.",
		"Use a number between 1-6 to view a specific set.": "Usa un número entre 1 y 6 para ver un set específico.",
		'The Pokemon "${target}" is not in your team.': 'The Pokemon "${target}" is not in your team.',
		"That Pokemon is not in your team.": "Ese Pokémon no está en tu equipo.",
		"View team": "Ver equipo",
		"Must be in a battle room.": "Debe estar en una batalla.",
		"This server does not allow offering ties.": "Este servidor no permite ofrecer empates.",
		"You can't offer ties in tournaments.": "No puedes ofrecer empates en torneos.",
		"It's too early to tie, please play until turn 100.": "Es demasiado pronto para empatar, por favor juega hasta el turno 100.",
		"No other player is requesting a tie right now. It was probably canceled.": "Ningún otro jugador está pidiendo un empate ahora mismo. Probablemente fue cancelado.",
		"${user.name} is offering a tie.": "${user.name} está ofreciendo un empate.",
		"Accept tie": "Aceptar empate",
		"Reject": "Rechazar",
		"Must be a player to accept ties.": "Debes ser un jugador para aceptar empates.",
		"You have already agreed to a tie.": "Ya has acordado un empate.",
		"${user.name} accepted the tie.": "${user.name} aceptó el empate.",
		"All players have accepted the tie.": "Todos los jugadores han aceptado el empate.",
		"Must be a player to reject ties.": "Debes ser un jugador para rechazar empates",
		"${user.name} rejected the tie.": "${user.name} rechazó el empate.",
		"This room doesn't have an active game.": "Esta sala no tiene un juego activo.",
		"This kind of game can't be forfeited.": "No te puedes rendir en este tipo de juego.",
		"This game doesn't support /choose": "Este juego no admite /choose",
		"This game doesn't support /undo": "Este juego no admite /undo",
		"You can only save replays for battles.": "Tú solo puedes guardar repeticiones de batallas.",
		"This battle can't have hidden replays, because the tournament is set to be forced public.": "Esta batalla no puede tener repeticiones ocultas, ya que el torneo está forzado a ser público.",
		"The replay for this battle is already set to hidden.": "La repetición de esta batalla ya está oculta.",
		"${user.name} hid the replay of this battle.": "${user.name} ocultó la repetición de esta batalla.",
		"You can only do this in battle rooms.": "Tú solo puedes hacer esto en batallas.",
		"You can only add a Player to unrated battles.": "Solo puedes agregar un Jugador en batallas sin puntos.",
		'Player must be set to "p1" or "p2", not "${target}".': 'Player must be set to "p1" or "p2", not "${target}".',
		"User ${name} not found.": "El usuario ${name} no fue encontrado.",
		"User ${name} must be in the battle room already.": "El usuario ${name} ya debe estar en la batalla.",
		"This room already has a player in slot ${target}.": "Esta batalla ya tiene un jugador en el lugar ${target}.",
		"${targetUser.name} is already a player in this battle.": "${targetUser.name} ya es un jugador en esta batalla.",
		"${name} was added to the battle as Player ${playerNum} by ${user.name}.": "${name} fue agregado a la batalla como Jugador ${playerNum} por ${user.name}.",
		"Player 2": "Jugador 2",
		"Players could not be restored (maybe this battle already has two players?).": "Los jugadores no se pudieron restaurar (¿tal vez esta batalla ya tiene dos jugadores?)",
		"This game doesn't support /joingame": "Este juego no admite /joingame",
		"This game doesn't support /leavegame": "Este juego no admite /leavegame",
		"You can only do this in unrated non-tour battles.": "Tú solo puedes hacer esto en batallas de torneo sin puntos.",
		"User ${targetUsername} not found.": "El usuario ${targetUsername} no fue encontrado.",
		"${targetUser.name} was kicked from a battle by ${user.name} ${displayTarget}": "${targetUser.name} fue expulsado de una batalla por ${user.name} ${displayTarget}",
		"You can only set the timer from inside a battle room.": "Solo puedes establecer el temporizador dentro de una batalla.",
		"This game's timer is managed by a different command.": "El temporizador de este juego se utiliza con un comando diferente.",
		"The game timer is OFF.": "El temporizador del juego está APAGADO.",
		"The game timer is ON (requested by ${requester})": "El temporizador del juego está ENCENDIDO (solicitado por ${requester}",
		"Access denied.": "Acceso denegado.",
		"Timer was turned off by staff. Please do not turn it back on until our staff say it's okay.": "El temporizador fue apagado por un staff. Por favor no lo enciendas de nuevo hasta que el staff diga que puedes hacerlo.",
		"The timer is already off.": "El temporizador ya estaba apagado.",
		'"${target}" is not a recognized timer state.': '"${target}" is not a recognized timer state.',
		"Forcetimer is now OFF: The timer is now opt-in. (set by ${user.name})": "Forcetimer ahora está APAGADO: El temporizador está habilitado ahora. (colocado por ${user.name})",
		"Forcetimer is now ON: All battles will be timed. (set by ${user.name})": "Forcetimer ahora está ENCENDIDO: Todas las batallas tendrán temporizador. (colocado por ${user.name})",
		"'${target}' is not a recognized forcetimer setting.": "'${target}' no se reconoce como una configuración del forcetimer.",
		"This server requires you to be rank ${groupName} or higher to search for a battle.": "Este servidor requiere que tu rango sea ${groupName} o mayor para buscar una batalla.",
		"Since you have reached ${Config.forceregisterelo} ELO in ${target}, you must register your account to continue playing that format on ladder.": "Dado que alcanzaste ${Config.forceregisterelo} de ELO en ${target}, debes registrar tu cuenta para poder seguir jugando dicho formato en ladder.",
		"Register": "Registrarse",
		"The user '${targetUsername}' was not found.": "El usuario '${targetUsername}' no fue encontrado.",
		"You are locked and cannot challenge unlocked users.": "Estás locked y no puedes retar a usuarios que no tengan lock.",
		"You are banned from battling and cannot challenge users.": "Tienes prohibido combatir y no puedes retar a otros usuarios.",
		"You must choose a username before you challenge someone.": "Debes elegir un nombre de usuario antes de retar a alguien.",
		"This server requires you to be rank ${groupName} or higher to challenge users.": "Este servidor requiere que tu rango sea ${groupName} o mayor para retar usuarios.",
		"This command does not support specifying multiple users": "Este comando no permite especificar múltiples usuarios",
		'User "${targetUsername}" not found.': 'User "${targetUsername}" not found.',
		"Provide a valid format.": "Proporciona un formato válido.",
		"Please provide a valid format.": "Por favor proporciona un formato válido.",
		"The format '${originalFormat.name}' was not found.": "El formato '${originalFormat.name}' no fue encontrado.",
		"Your team is valid for ${format.name}.": "Tu equipo es valido para ${format.name}.",
		"Your team was rejected for the following reasons:": "Tu equipo fue rechazado por las siguientes razones:",
		"Battles are now hidden (except to staff) in your trainer card.": "Las batallas están ahora ocultas (excepto para el staff) en tu tarjeta de entrenador.",
		"Battles are now visible in your trainer card.": "Las batallas son ahora visibles en tu tarjeta de entrenador.",
		"'${command}' is a help command.": "'${command}' es un comando de ayuda.",
		"The command '/${target}' does not exist.": "El comando '/${target}' no existe.",
		"Could not find help for '/${target}'. Try /help for general help.": "No se encontró ayuda para '/${target}'. Prueba usando /help para asistencia en general.",
		"Could not find help for '/${target}' - displaying help for '/${closestHelp}' instead": "No se encontró ayuda para '/${target}' - mostrando ayuda para '/${closestHelp}' en su lugar",
	},
};
