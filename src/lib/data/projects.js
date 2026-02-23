export const projects = [
	{
		title: 'Breakout',
		description: 'The classic game breakout built with C++ 23 and raylib.',
		slug: 'breakout',
		image: '/projects/breakout.png',
		liveUrl: 'https://jackboakes.itch.io/breakout',
		githubUrl: 'https://github.com/jackboakes/breakout',
		content: [
			'After having enjoyed the gameplay, art and vibe of the game Gnomes by the Australian based indie developer DYSTOPIAN, I wanted to test out a similar workflow for the art and practice my pixel art skills.',
			'Both my breakout clone and gnomes are rendered to a screen size of 640x360 pixels locked at 16:9 aspect ratio and scaled up for larger monitors with letterboxing. This allows for perfect pixel scaling on common screen sizes (3x for 1920x1080, 4x for 2560x1440 and 6x for 3840x2160). Restricting myself to a small canvas like this reduces the scope of the art, makes it harder to make mistakes since you have way less pixels to work with, especially for a non-traditional artist like myself.',
			"On the technical side of things, I didn't want the boiler plate of an ECS and just went with a simple fat entity struct, which is simple enough for this size of game. All the game entities are initialised in the constructor and when the textures are loaded the correct texture ID is bound to the type of entity. This allows for an O(1) lookup of the entities texture when rendering in the draw stage.",
			'By using a homogeneous entity struct I can loop over entities and check by flag instead of by type. For example I can loop over all MOVABLE entities and move them without caring about the domain type. Since this style of game has a minimal amount of entities on the screen at any one time,  I chose not to construct or destruct new entities during gameplay or level resets. Instead, entities remain in memory, and level resets just toggle the bit flags rather than destroying and recreating entities.'
		]
	},
	{
		title: 'Snake',
		description: 'A classic Snake game built in C++ 17 using raylib.',
		slug: 'snake',
		image: '/projects/snake.png',
		liveUrl: null,
		githubUrl: 'https://github.com/jackboakes/Snake',
		content: [
			'I built Snake mostly because I was curious how simple games actually work under the hood. It started as a tiny C console program with no graphics, and I kept improving it as I learned more.',
			'Later, I added raylib to handle window opening and graphics, since the project was pretty bare bones. I decided to refactor the whole thing into modern C++ 17, to learn best practices and use features like std::filesystem and std::string_view.',
			"I designed the game's UI from scratch as an immediate-mode interface, keeping track of only one active element at a time. Player input is polled every frame and stored in a circular queue of size two, enabling responsive movements. The high score is saved to a text file using std::fstream, and all sound effects and artwork were created from scratch by me."
		]
	},
	{
		title: 'Star Constellation Minigame',
		description: "A Unity 6 puzzle game developed for Stephanie's Animal Rescue.",
		slug: 'star-constellation',
		image: '/projects/star_constellation.png',
		liveUrl: null,
		githubUrl: null,
		content: [
			"During my university capstone project, I developed a puzzle minigame for Stephanie's Animal Rescue Secret Island, in Unity 6.",
			'Players connect stars by dragging between nodes to form constellation shapes. The game features eight levels with constellation shapes ranging from triangles to hexagons. In each level, a different set of constellations are hidden amongst randomly placed stars, encouraging players to search.'
		]
	}
];
