class noMoreBubbles {
    constructor(mod) { 
		let npcs = new Set();

		mod.command.add("bl", {
			$default() { mod.settings.enabled = !mod.settings.enabled; },
			pets() { mod.settings.onlyPets = !mod.settings.onlyPets; }
		});

		mod.hook("S_SPAWN_NPC", 11, (event)=> { 
			npcs.add(event.gameId); 
			if(event.replaceId !== 0n) npcs.delete(event.replaceId);
		});
		mod.hook("S_DESPAWN_NPC", 3, (event)=> { npcs.delete(event.gameId); });
		
		mod.hook("S_QUEST_BALLOON", 1, (event) => {
			if(!mod.settings.enabled) return;
			if(mod.settings.onlyPets && !npcs.has(event.source)) return false;
			else if(!mod.settings.onlyPets) return false;
		});
	}
}

module.exports = noMoreBubbles;
