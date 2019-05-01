class noMoreBubbles {
    constructor(mod) { 
		mod.hook("S_QUEST_BALLOON", "raw", ()=> false);
	}
}

module.exports = noMoreBubbles;
