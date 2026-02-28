// --- THE MASTER STORY LIBRARY (50 UNIQUE STORIES) ---
const stories = [
    {
        title: "The Golden Woods",
        image: "https://thumbs.dreamstime.com/b/warm-autumn-glow-illuminates-peaceful-forest-path-golden-woods-340257542.jpg",
        chapters: [
            {
                num: 1,
                title: "The Amber Veil",
                content: "The forest didn't just have yellow leaves; it breathed liquid gold. Elara stood at the edge of the tree line where the grass turned from dull green to a shimmering, metallic ochre. Legend said that those who entered the Golden Woods during the Equinox would find what they most desired, but the forest always asked for a fair trade."
            },
            {
                num: 2,
                title: "The Sound of Chimes",
                content: "As Elara stepped inward, the air grew heavy and sweet, smelling of scorched honey and ancient parchment. Every time the wind blew, the leaves didn't rustle—they clinked. They were thin sheets of hammered gold, vibrating against one another like a billion tiny bells. The sound was hypnotic, a symphony that whispered secrets of kings long buried."
            },
            {
                num: 3,
                title: "The Gilded Path",
                content: "There were no dirt trails here. Instead, a path of polished citrine stones wound through the trunks. Elara noticed her own reflection in the bark of the trees. The wood was as smooth as glass and just as reflective. She saw herself, but different—her eyes were brighter, her clothes finer. The woods were showing her a version of herself that had already won."
            },
            {
                num: 4,
                title: "The Guardian of Silt",
                content: "By midday, she reached a river. The water didn't flow; it oozed like molten brass. Standing on the bank was a stag, its antlers stretching upward like frozen lightning, plated in 24-karat brilliance. It didn't move, but its eyes—two raw emeralds—tracked her every step. To cross, she had to leave something behind that \"held weight.\""
            },
            {
                num: 5,
                title: "The Toll",
                content: "Elara reached into her pack. She offered a heavy iron key to her family's old home. As it touched the golden silt of the river, the iron turned to soft yellow dust. The stag dipped its head, allowing her to step onto its back. The river felt warm beneath them, pulsing with a heat that felt like a heartbeat."
            },
            {
                num: 6,
                title: "The Twilight of Midas",
                content: "Deep in the heart of the woods, the sun never truly set. Instead, it hung low, caught in the upper branches, turning the entire world into a hazy, blurred masterpiece of orange and gold. Here, the flowers were jewels—rubies for roses, sapphires for lilies. Elara realized the danger: if she stayed too long, her heart might slow to the rhythm of the metal."
            },
            {
                num: 7,
                title: "The Singing Grove",
                content: "In the seventh mile, the trees began to sing. It wasn't a language she knew, but a vibration in her chest. They sang of the sun's birth and the earth's cooling. Elara felt her skin beginning to shimmer. A fine golden dust was settling on her arms, turning her peach-fuzz hair into wire-thin filaments of gold."
            },
            {
                num: 8,
                title: "The Hall of Mirrors",
                content: "She reached the center: a clearing where the trees formed a perfect dome. In the center sat a single wooden chair—the only thing in the forest made of plain, humble oak. It looked out of place, yet more powerful than all the gold combined. This was the \"Heart of the Wood,\" the place where the transformation began or ended."
            },
            {
                num: 9,
                title: "The Final Choice",
                content: "A voice, like the cracking of a dry branch, echoed through the dome. \"Take the gold and become a statue of perfection, or take the oak and remain a flickering flame of life.\" Elara looked at her hands, now half-transformed into beautiful, unbreaking metal. She realized that perfection was just another word for \"finished.\""
            },
            {
                num: 10,
                title: "The Return to Green",
                content: "Elara grabbed a single, plain oak acorn from the chair and ran. She didn't look back as the chimes grew deafening. When she burst through the Amber Veil and back onto the green grass, the gold fell from her skin like autumn leaves. She was tired, dirty, and human—and as she looked at the plain brown acorn in her hand, she knew she had found something much more valuable than gold: a beginning."
            }
        ],
        audio: "audio/golden-woods-girl.mp3",
        isChaptered: true
    },
    {
        title: "The Midnight Fox",
        image: "midnight-fox.png",
        chapters: [
            {
                num: 1,
                title: "The Silver Blur",
                content: "The village of Oakhaven was a place of heavy locks and early bedtimes. For years, a shadow had haunted the periphery of the woods—not a scary shadow, but a frustrating one. The villagers called him the Midnight Fox. He wasn't orange like his cousins; his fur was the color of a thunderstorm, tipped with silver that seemed to glow when the moon hit it just right."
            },
            {
                num: 2,
                title: "The Master of Mischief",
                content: "The Midnight Fox didn't hunt chickens or cause harm. He was a collector of curiosities. If a silversmith left a spoon by the window, it vanished. If a child dropped a glass marble in the grass, it was gone by dawn. By Page 2 of the village ledger, the list of \"lost things\" was longer than the winter grocery bill."
            },
            {
                num: 3,
                title: "Silas the Watchman",
                content: "Silas, a young boy with too much curiosity and not enough sleep, decided he would be the one to find the Fox's den. He didn't want the silver back; he wanted to see the creature that could outrun a breeze. He stayed awake, hiding behind a rain barrel, clutching a small, glowing compass."
            },
            {
                num: 4,
                title: "The Encounter",
                content: "At precisely 12:00 AM, the air grew still. From the treeline, a pair of amber eyes ignited. The Midnight Fox trotted into the square, his paws making no sound on the cobblestones. He stopped in front of Silas, sniffing the air. He didn't run. Instead, he tilted his head, waiting."
            },
            {
                num: 5,
                title: "The Gift",
                content: "Silas held out the compass. The Fox stepped forward, its fur shimmering like liquid mercury. With a gentle nip, the Fox took the compass from Silas's hand. Instead of bolting, the Fox turned and looked back over its shoulder, flicking its tail as if to say, \"Follow me.\""
            },
            {
                num: 6,
                title: "Into the Deepwood",
                content: "They trekked through the Whispering Pines, where the trees seemed to lean in to hear their footsteps. Silas realized the Fox wasn't taking him to a den, but to the Great Hollow, a massive, ancient oak tree that had been split by lightning a century ago."
            },
            {
                num: 7,
                title: "The Treasury of Light",
                content: "Inside the Hollow, Silas gasped. It wasn't a hoard of stolen junk. The Fox had arranged the silver spoons, the marbles, and the bits of foil in a complex, circular pattern on the mossy floor. When the moonlight filtered through the cracks in the wood, the items reflected the light upward, creating a perfect map of the stars on the ceiling of the tree."
            },
            {
                num: 8,
                title: "The Purpose",
                content: "The Fox wasn't a thief; he was a mapmaker. Every piece of \"trash\" was placed to catch a specific beam of light. Silas saw the Big Dipper shimmering in reflected spoon-light. The Fox sat in the center of the constellation, looking proud. He was keeping the stars on the ground so the forest would never be truly dark."
            },
            {
                num: 9,
                title: "The Secret Kept",
                content: "Silas realized that if the villagers knew, they would come to take their things back, and the stars would go out. He reached into his pocket and left his brass whistle—a \"North Star\" for the fox's map. The Fox nudged Silas's hand with a wet nose, a silent pact made between the boy and the shadow."
            },
            {
                num: 10,
                title: "The Legend Lives On",
                content: "Silas returned home as the sun rose. When asked if he saw the thief, he simply smiled and said the Fox was \"gone with the wind.\" From then on, whenever something small went missing in Oakhaven, the villagers grumbled, but Silas just looked at the woods and whispered, \"I hope he finds a good spot for it.\""
            }
        ],
        isChaptered: true
    },
    {
        title: "The Clockmaker's Secret",
        image: "https://miro.medium.com/v2/resize:fit:1170/1*gI0Y7RhJXC9ltezjLkUwvQ@2x.jpeg",
        chapters: [
            {
                num: 1,
                title: "The Shop of Tick-Tocks",
                content: "In a narrow alleyway in the city of Oakhaven sat a shop that sounded like a thousand tiny heartbeats. This was the home of Master Bram, the city’s finest clockmaker. Every wall was covered in pendulums, cogs, and springs. But in the very center of the room sat a clock covered by a heavy velvet cloth."
            },
            {
                num: 2,
                title: "The Forbidden Key",
                content: "Bram had an apprentice named Elara. She was brilliant with a wrench but lacked patience. Bram’s only rule was simple: \"Never touch the clock under the velvet cloth until the Great Eclipse.\" He kept the key to that clock around his neck—until the day he fell ill and left it on the workbench."
            },
            {
                num: 3,
                title: "The Temptation",
                content: "Curiosity is a heavy thing. As Bram slept upstairs, Elara looked at the key. It was shaped like a dragonfly and felt warm to the touch. She whispered to herself that she was just \"checking for dust.\" She pulled back the velvet to reveal a clock made entirely of clear glass and gold."
            },
            {
                num: 4,
                title: "The Sound of Silence",
                content: "Elara inserted the key. As she turned it, the thousand ticking heartbeats in the shop suddenly stopped. The silence was so loud it made her ears ring. Outside the window, a bird froze mid-flight, suspended in the air. A falling leaf hovered inches above the cobblestones. She hadn't just wound a clock; she had paused the world."
            },
            {
                num: 5,
                title: "The Frozen City",
                content: "Panicked, Elara ran outside. The world was a living statue gallery. People were caught mid-laugh; a baker held a loaf of bread that stayed perfectly warm despite the chill. She realized that while she could move, time itself had hit a snag. The clock in the shop was the world's mainspring."
            },
            {
                num: 6,
                title: "The Missing Piece",
                content: "She rushed back to the glass clock and saw the problem. A tiny, glowing blue gear had slipped from its track. It was the \"Momentum Cog.\" Without it, the clock couldn't restart. But as she tried to fix it, the cog crumbled into dust in her hands. She had broken the most important machine in existence."
            },
            {
                num: 7,
                title: "A Heart for a Gear",
                content: "Elara remembered something Bram once said: \"A true clockmaker puts their heart into their work.\" She realized the \"Secret\" wasn't a mechanical one—it was a magical one. To fix time, she needed something that was still \"moving.\" She took her own pocket watch, a gift from her father, and carefully dismantled it."
            },
            {
                num: 8,
                title: "The Substitution",
                content: "With shaking hands, Elara placed her father’s brass balance wheel into the glass clock. It was crude compared to the gold, but it was sturdy. She used a drop of oil and a prayer. For a moment, nothing happened. Then, a tiny click echoed through the silent shop."
            },
            {
                num: 9,
                title: "The World Wakes Up",
                content: "The bird outside finished its flap. The leaf hit the ground. The baker’s bread began to cool. The \"heartbeats\" of the shop returned, louder and more rhythmic than before. Elara quickly covered the clock with the velvet cloth and placed the dragonfly key back on the bench just as Bram walked down the stairs."
            },
            {
                num: 10,
                title: "The Master’s Smile",
                content: "Bram looked at the workbench, then at the velvet cloth, and finally at Elara. He noticed her pocket watch was missing from her belt. He didn't scold her. Instead, he handed her a small, golden loupe—the mark of a Master. \"A clockmaker's greatest secret,\" he whispered, \"is knowing that time only matters if you're willing to give some of your own to save it.\""
            }
        ],
        isChaptered: true
    },

    {
        title: "The Sky Fisherman",
        image: "https://cdna.artstation.com/p/assets/images/images/000/050/794/large/Sky_Fishermen_Concept.jpg?1398986102",
        chapters: [
            {
                num: 1,
                title: "The Islands in the Clouds",
                content: "Above the heavy rainclouds of the Lower World floated the Aero-Archipelago. These were islands made of porous rock that drifted on the wind. While the people below lived in shadows, the people of the islands lived in eternal sunlight. Their greatest hero was Caelum, the youngest Sky Fisherman in the fleet."
            },
            {
                num: 2,
                title: "The Rod of Stars",
                content: "Caelum didn’t use a net or a hook. He used a rod carved from a fallen thunder-tree and a line made of woven spider-silk. His bait? Small jars of concentrated sunset. He sat on the edge of his floating pier, casting his line deep into the \"Blue Sea\" of the open atmosphere."
            },
            {
                num: 3,
                title: "The Silver Swimmers",
                content: "He wasn't looking for trout or bass. He was hunting Cloud-Ray, majestic, flat creatures that glowed with a soft neon pulse. Their scales weren't for eating; they were used to power the lanterns that kept the floating islands from sinking into the dark world below."
            },
            {
                num: 4,
                title: "The Great Calm",
                content: "One afternoon, the wind died completely. The islands stopped drifting. The Cloud-Rays dived deep, hiding in the thick white fog. Without the rays to power the \"Levitation Lamps,\" the islands began to tilt. Caelum knew he had to catch a Grand Aurora, the rarest of all sky-dwellers."
            },
            {
                num: 5,
                title: "The Deep Dive",
                content: "Caelum didn't wait for a bite. He tied the silk line around his waist and jumped. He fell through the freezing mist, his goggles fogging up, until he saw it: a massive, shimmering creature the size of a ship, trailing ribbons of green and violet light behind it."
            },
            {
                num: 6,
                title: "The Song of the Sky",
                content: "As Caelum approached the Grand Aurora, he didn't feel fear. He heard a hum—a low, vibrating frequency that matched the beating of his own heart. The creature wasn't a fish; it was a living battery of pure energy, older than the islands themselves."
            },
            {
                num: 7,
                title: "The Gentle Tether",
                content: "Instead of \"catching\" the Aurora, Caelum reached out and touched its flank. He realized the creature was tangled in a \"Ghost Net\"—a mass of discarded ropes from the world below. The Aurora wasn't hiding; it was trapped and losing its light."
            },
            {
                num: 8,
                title: "The Rescue",
                content: "Using his fishing knife, Caelum sliced through the heavy ropes. With every cut, the Aurora’s glow brightened, turning from a dull grey to a blinding, brilliant gold. As the last rope fell away, the creature let out a whistle that shook the very clouds."
            },
            {
                num: 9,
                title: "The Ascent",
                content: "The Aurora didn't swim away. It dived under Caelum, catching him on its broad, velvety back. With a powerful surge, it soared upward, piercing through the fog and carrying Caelum back to his tilting island. Its light was so bright it recharged every lamp in the city instantly."
            },
            {
                num: 10,
                title: "The Protector",
                content: "Caelum never cast a line for \"bait\" again. He became the Sky Protector, riding the Grand Aurora through the clouds. The villagers learned that the sky wasn't a place to take from, but a place to care for. And every night, the green ribbons of the Aurora reminded them that the best catch is the one you set free."
            }
        ],
        isChaptered: true
    },

    {
        title: "The Librarian of Leaves",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
        chapters: [
            { num: 1, title: "The Whispering Woods", content: "Deep within the Valley of Echoes stood the Great Arboreal Archive. It wasn't a building made of stone or brick, but a massive, sprawling willow tree whose branches reached higher than the mountain peaks. This was the home of Silas, the Librarian of Leaves." },
            { num: 2, title: "The Golden Ink", content: "Silas didn't handle paper. In this library, every leaf on every branch contained a memory. When a person in the world below experienced something truly beautiful or heartbreaking, a new bud would form on the tree, etched with golden veins that told the story." },
            { num: 3, title: "The Sorting of Seasons", content: "The library was organized by seasons. Spring branches held memories of new births and first laughs. Autumn branches were heavy with the wisdom of the elderly and the quiet beauty of goodbyes. Silas spent his days climbing the silver bark, ensuring no leaf grew too heavy and fell before its time." },
            { num: 4, title: "The Great Blight", content: "One morning, Silas noticed a patch of grey on a Summer branch. A memory of a grand festival was turning to ash. Then, a memory of a mother’s lullaby began to curl and turn black. A \"Blight of Forgetfulness\" was spreading through the Archive, threatening to erase the world's history." },
            { num: 5, title: "The Source of the Shadow", content: "Silas followed the grey veins down to the roots. There, he found a massive, rusted iron spike driven into the earth. It was a \"Spike of Silence,\" placed by those who wanted the world to forget their mistakes. The tree was choking on the secrets it wasn't allowed to tell." },
            { num: 6, title: "The Weight of Truth", content: "To pull the spike, Silas had to touch it. The moment his skin met the cold iron, he was flooded with the \"Dark Memories\"—wars, lies, and broken promises. The weight was immense. His knees buckled as the shadows tried to pull him into the dirt." },
            { num: 7, title: "The Song of the Forest", content: "Silas realized he couldn't fight the darkness with strength. He began to hum the melodies he had learned from the Spring branches. He whispered the poems etched into the Winter leaves. He used the \"Light of Remembrance\" to push back against the iron silence." },
            { num: 8, title: "The Great Release", content: "With a final, desperate tug, the spike flew from the earth. Silas fell back, exhausted. Instead of the tree dying, a surge of golden sap poured into the wound. The grey leaves didn't just turn green; they turned a vibrant, glowing emerald, stronger than they had been before." },
            { num: 9, title: "The New Growth", content: "The Archive began to grow rapidly. New branches sprouted, dedicated to \"The Lessons Learned.\" These weren't just happy memories, but stories of how people fixed what was broken. Silas realized that a library that only keeps the \"good\" parts isn't a library at all—it's a fairy tale." },
            { num: 10, title: "The Eternal Guardian", content: "Silas stayed in the canopy, his hair now the color of silver willow bark. He knew that as long as he watched the leaves, no one would ever truly be forgotten. The wind through the branches sounded like a billion voices whispering, \"We remember, we remember, we remember.\"" }
        ],
        isChaptered: true
    },
    {
        title: "The Crystal Cave",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800",
        chapters: [
            { num: 1, title: "The Mountain’s Eye", content: "At the summit of the Frozen Peaks lay a jagged opening known as the \"Mountain’s Eye.\" Legend said that whoever entered would find their greatest desire, but they would have to find it in total darkness. Kira, a young explorer with a glass lantern, was the first in a century to step inside." },
            { num: 2, title: "The Song of the Earth", content: "As Kira descended, the sound of the wind died away, replaced by a low, rhythmic thrumming. It sounded like a giant heart beating deep within the stone. She realized the cave wasn't just a hole in the ground; it was alive, and the walls were vibrating with a strange, musical energy." },
            { num: 3, title: "The Prism Pass", content: "Her lantern light hit the first wall of crystals. Instantly, the single white beam shattered into a thousand rainbows. The cave exploded in color—violet, crimson, and emerald light danced across the ceiling. Kira felt as if she were walking inside a fallen star." },
            { num: 4, title: "The Echoing Gems", content: "Kira noticed that the crystals reacted to sound. When she whispered \"Hello,\" the blue crystals glowed brighter. When she accidentally dropped her climbing pick, the red crystals flared like embers. The cave was a giant instrument, waiting for a player." },
            { num: 5, title: "The Mirror Maze", content: "On Page 5 of her journey, Kira reached the \"Hall of Mirrors.\" The walls were made of polished obsidian and clear quartz. She saw a hundred versions of herself, but each reflection showed a different path. One version of Kira was a queen; another was a scholar; another was a simple gardener." },
            { num: 6, title: "The Choice of Shadows", content: "The reflections began to speak, promising her wealth and power if she stayed. The \"Desire\" the legend spoke of was a trap. If she chose a reflection, she would become part of the crystal wall forever. Kira closed her eyes, realizing that her true desire wasn't to be someone else, but to find her way back home." },
            { num: 7, title: "The Heart of the Mountain", content: "She stopped looking at the reflections and followed the sound of the \"heartbeat.\" At the center of the cave sat a single, raw diamond the size of a boulder. It wasn't shiny or polished; it was rough and grey. This was the \"Source,\" the battery for all the light in the cave." },
            { num: 8, title: "The Crack in the Core", content: "Kira saw that the Source was dimming. A layer of dust and grime from the outside world had coated the great diamond, stifling its pulse. The rainbows on the walls were fading into a muddy brown. The cave was suffocating under the weight of the mountain." },
            { num: 9, title: "The Polishing", content: "Using the hem of her cloak and the water from her canteen, Kira began to scrub. She spent hours leaning against the cold stone, wiping away the soot of centuries. With every stroke, the heartbeat grew louder. Suddenly, a spark ignited deep within the diamond." },
            { num: 10, title: "The Radiant Return", content: "The Source erupted in a pillar of pure, white light that shot straight up through the Mountain's Eye and into the night sky. The blast of energy carried Kira upward, depositing her gently on the snowy peak. She had no gold or crowns, but her eyes now held a permanent sparkle—a reminder that the brightest light is the one you work to uncover." }
        ],
        isChaptered: true
    },

    {
        title: "The Cloud Baker",
        image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800",
        chapters: [
            { num: 1, title: "The Kitchen in the Stratosphere", content: "High above the highest mountain, where the air is thin and smells of vanilla, lived Master Pippin. He didn't bake in a house; he baked in a giant copper whisk that floated like a hot air balloon. Pippin was the world’s only Cloud Baker, tasked with feeding the wind." },
            { num: 2, title: "The Ingredients of Weather", content: "Pippin didn’t use flour or eggs from a farm. To make a Cumulus Cake, he needed a gallon of morning mist. For Thunder-Biscuits, he caught bottled lightning. His most precious ingredient was \"Static Sugar,\" which he gathered by brushing a silk cloth against the passing storm clouds." },
            { num: 3, title: "The Oven of the Sun", content: "Pippin’s oven didn’t use wood or coal. It was a massive magnifying glass that captured the first rays of the rising sun. He had to time his baking perfectly; if he left a batch in for too long, the clouds would turn into scorched, grey smog that ruined the afternoon for everyone below." },
            { num: 4, title: "The Great Humidity", content: "One July, a heavy dampness settled over the world. The mist turned to sludge, and Pippin’s dough wouldn't rise. The clouds became flat and heavy like wet blankets. Down on earth, the people grew grumpy and tired because the sky looked like unbaked grey bread." },
            { num: 5, title: "The Missing Yeast", content: "Pippin realized the \"Sky-Yeast\"—tiny golden spores that travel on the backs of migrating geese—had been blown off course by a rogue hurricane. Without the yeast, the sky had no \"fluff.\" It was sinking lower and lower, scraping against the tops of the skyscrapers." },
            { num: 6, title: "The Expedition to the North Wind", content: "Pippin steered his copper whisk toward the North Wind’s cave. He knew the yeast loved the cold. He found the golden spores trapped in a giant icicle, frozen solid. He needed to melt the ice, but he was hundreds of miles away from his Sun-Oven." },
            { num: 7, title: "The Spicy Solution", content: "Pippin reached into his spice rack and pulled out a jar of Dragon-Breath Cinnamon. It was so hot that the jar glowed orange. He sprinkled it over the icicle, and with a loud hiss, the yeast was set free, swirling around Pippin like a swarm of golden bees." },
            { num: 8, title: "The Kneading of the Sky", content: "Pippin rushed back to his kitchen. He tossed the yeast into a massive vat of rain-water and whipped it with his copper whisk until it doubled in size. He began throwing giant handfuls of the dough out into the grey atmosphere, shouting, \"Rise! Rise!\"" },
            { num: 9, title: "The Perfect Soufflé", content: "Slowly, the heavy grey blankets began to puff up. They turned white, then pearly, then a brilliant, glowing cream color. The sky lifted off the rooftops. The children below looked up and saw clouds that looked like giant muffins, castles, and sheep." },
            { num: 10, title: "The Baker’s Reward", content: "As the sun set, the clouds turned a delicious shade of strawberry pink—the sign of a perfectly baked day. Pippin sat on the edge of his whisk, eating a small \"Star-Cookie\" and watching the world breathe a sigh of relief. He knew that as long as he had his whisk, the world would always have a silver lining." }
        ],
        isChaptered: true
    },

    {
        title: "The Iron Giant's Garden",
        image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800",
        chapters: [
            { num: 1, title: "The Scrap-Metal Mountain", content: "In the center of a gray, smoking city stood a mountain of rust. It was a junkyard of broken gears, discarded pipes, and tired engines. Hidden at the very bottom of the pile was Barnaby, an Iron Giant built for a war that had ended a thousand years ago." },
            { num: 2, title: "The First Green Spark", content: "Barnaby hadn't moved in centuries. His joints were locked by oxidation, and his eyes were dark. But one spring morning, a tiny crack opened in his chest plate. A single, stubborn dandelion seed drifted inside and found a pocket of ancient, oily soil." },
            { num: 3, title: "The Internal Greenhouse", content: "Deep inside Barnaby’s hollow chest, the seed sprouted. The giant felt a strange, warm sensation—a \"tickle\" of life. His ancient processors whirred to life. He didn't want the flower to die in the dark, so he used the last of his battery to crack open his rib-casing to let in the sun." },
            { num: 4, title: "The Great Awakening", content: "With a groan that sounded like a tectonic plate shifting, Barnaby stood up. Dust and scrap metal tumbled off his shoulders like a landslide. The people of the gray city screamed and ran, thinking the war machine had returned to finish the job." },
            { num: 5, title: "The Gentle Giant", content: "Barnaby didn't stomp or smash. He walked with agonizing slowness, careful not to step on the stray cats or the puddles where birds bathed. He reached the city square and sat down, his massive iron hands resting palm-up on his knees." },
            { num: 6, title: "The Collection", content: "Barnaby began to gather. He didn't gather weapons; he gathered the \"forgotten green.\" He found moss growing in the shade of factories and ivy choking the old fences. He tucked them into the gaps in his armor, turning his metallic body into a walking trellis." },
            { num: 7, title: "The Iron Orchard", content: "By Page 7 of his transformation, Barnaby no longer looked like a robot. Sunflowers grew from his shoulders. Bluebells hung from his fingertips. A small apple tree had taken root in the crook of his elbow. He had become a 50-foot tall, mobile garden." },
            { num: 8, title: "The City's Change", content: "The people of the gray city stopped running. They began to bring him gifts: bags of potting soil, watering cans, and packets of wildflower seeds. They climbed ladders to prune the roses on his back. The \"War Machine\" had become the \"Peace Maker.\"" },
            { num: 9, title: "The Final Root", content: "Barnaby realized he couldn't walk forever. The weight of the trees was becoming part of him. He walked to the very center of the smog-filled city, planted his massive feet deep into the earth, and reached his arms toward the sky." },
            { num: 10, title: "The Living Landmark", content: "Barnaby stopped moving for the last time. He became a permanent park in the heart of the city. His iron skin was eventually hidden entirely by emerald leaves and colorful blooms. The city was no longer gray; it was green, all because a giant decided that growing a garden was braver than winning a war." }
        ],
        isChaptered: true
    },

    {
        title: "The Ghost Train",
        image: "https://tse3.mm.bing.net/th/id/OIP.IvRJn8pcMc4-jis7V6rO-wHaDj?pid=Api&P=0&h=180",
        chapters: [
            { num: 1, title: "The Abandoned Station", content: "At the edge of Willow Creek sat the Old Junction. The tracks were overgrown with weeds, and the station’s clock had been stuck at 11:59 for forty years. Most people stayed away, claiming they heard a whistle in the wind, but Leo didn't believe in ghosts. He only believed in things he could see." },
            { num: 2, title: "The Midnight Tick", content: "On his thirteenth birthday, Leo found an old, silver-punched ticket in his grandfather's coat. It had no date, only the words: One Way to Somewhere. As he held it, the station clock suddenly groaned. The long hand shuddered and clicked forward to midnight." },
            { num: 3, title: "The Silver Smoke", content: "A low rumble shook the ground. Out of the darkness came a train made of moonlight and mist. It didn't roll on steel; it glided on tracks of glowing blue light. The engine was a Victorian masterpiece of brass and shadow, puffing smoke that smelled like old books and rain." },
            { num: 4, title: "The Conductor’s Call", content: "The door to the first carriage slid open. A man in a suit of deep indigo stood there, his face slightly blurred like a shaky photograph. \"Tickets, please,\" he said, his voice sounding like many voices speaking at once. Leo, trembling, handed over the silver ticket." },
            { num: 5, title: "The Passenger Car", content: "Inside, the train was beautiful and strange. The seats weren't filled with scary spirits, but with \"Echos.\" There was a girl playing with a hoop she had lost years ago, and an old man reading a letter that had never reached him. They weren't scary; they just looked... peaceful." },
            { num: 6, title: "The Window to Was", content: "As the train picked up speed, the windows didn't show the forest. They showed the past. Leo saw his hometown as it was a hundred years ago. He saw the first bridge being built and the Great Fair of 1924. The Ghost Train wasn't traveling through space; it was traveling through time." },
            { num: 7, title: "The Engine Room", content: "Leo wandered to the front and found the \"Fireman.\" He wasn't shoveling coal, but glowing crystals of memory. \"Every time someone forgets something important,\" the Fireman explained, \"it ends up here. We keep the stories moving so they don't fade away forever.\"" },
            { num: 8, title: "The Lost Pocket Watch", content: "Leo saw a gold watch sitting on a velvet cushion near the boiler. It was his grandfather’s—the one that had disappeared years ago. The Fireman nodded. \"He forgot it, but he never forgot how much he loved you. That’s why the ticket found you.\"" },
            { num: 9, title: "The Last Stop", content: "The train began to slow down as it approached the Old Junction again. The indigo conductor handed Leo the gold watch. \"You can’t stay,\" he whispered. \"But you can take a piece of the story back with you. Keep the memories polished, Leo.\"" },
            { num: 10, title: "The Dawn of the Junction", content: "Leo stepped onto the platform just as the sun broke over the horizon. The Ghost Train vanished into the morning fog, leaving only a faint smell of rain. In his hand, the gold watch was ticking perfectly. The station clock was still stuck at 11:59, but Leo knew that time was much bigger than a clock." }
        ],
        isChaptered: true
    },

    {
        title: "The Well of Wishes",
        image: "https://images.unsplash.com/photo-1505881502353-a1986add3762?w=800",
        content: "The well in the center of the village doesn't hold water; it holds whispers. When you throw a coin in, you aren't paying for a wish—you're buying a secret.\n\nThe deeper the coin falls, the older the secret. Some have heard the recipe for eternal youth, while others heard the location of buried gold.\n\nBut beware: once you hear a secret from the well, you can never tell another soul, or you will lose your own voice."
    },
    {
        title: "The Silver Willow",
        image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800",
        content: "In the center of the Forbidden Garden stands a willow tree with silver leaves. It is said that if you sleep under its branches, you will dream the future of your greatest enemy.\n\nThe leaves chime like bells when the wind blows, keeping the restless spirits of the garden at bay. Many have tried to chop it down, but their axes simply turn to water.\n\nTo the wise, the tree is a teacher. To the foolish, it is a mirror reflecting their own fears back at them."
    },
    {
        title: "Flight of the Phoenix",
        image: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=800",
        content: "Born from the embers of a dying star, the Phoenix flies once every century. Its feathers are made of liquid flame, and its song can heal any wound.\n\nAs it passes over the mountains, the snow melts into boiling rivers. It carries the weight of the sun's promise to return after the long winter.\n\nWhen its time comes, it builds a nest of cinnamon and spice, bursting into a brilliant fire that lights up the entire world for a single second."
    },
    {
        title: "The Library of Clouds",
        image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800",
        content: "A place where the books are written in the shapes of clouds. To read them, you must lie on your back and look up, letting your imagination fill in the gaps.\n\nThe words shift as the wind blows, meaning a story might be a comedy at noon and a tragedy by sunset. It is the most honest library in existence.\n\nScholars come from all over to study the 'Rainy Day' section, which is filled with the most moving poetry ever composed."
    },
    {
        title: "The Lantern Fish",
        image: "https://images.unsplash.com/photo-1520263115673-610416f52ab6?w=800",
        content: "Deep in the Midnight Trench, a fish carries a lantern made of a trapped lightning bolt. It uses the light to find treasure buried in the sand.\n\nOther fish follow it like a parade, hoping to catch a glimpse of the gold and jewels it unearths. The Lantern Fish is the king of the dark.\n\nIt never keeps the treasure for itself; it leaves the gold for the mermaids to build their palaces of light."
    },
    {
        title: "The Weaver of Rain",
        image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=800",
        content: "In a high tower, an old woman spins clouds into thread and weaves the rain. She decides if the storm will be a gentle drizzle or a roaring hurricane.\n\nHer loom is made of lightning rods, and her shuttle is a piece of polished obsidian. She hums a low tune that sounds like distant thunder.\n\nWithout her, the earth would wither. She is the mother of the rivers and the guardian of the thirsty fields."
    },
    {
        title: "The Sleeping Volcano",
        image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800",
        content: "Mount Ignis hasn't erupted in a thousand years, but the villagers say it isn't dead—it's just dreaming of a world made of glass.\n\nSmoke rises in the shape of dragons, and the ground stays warm even in the dead of winter. It is a giant made of stone and fire.\n\nLegend says that if you whisper a secret into the crater, the volcano will keep it warm forever, ensuring it never goes cold."
    },
    {
        title: "The Paper Ship",
        image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800",
        content: "A small boat made of a single page from a magic book sails the Great Ocean. It never sinks, no matter how high the waves get.\n\nThe captain is a tiny mouse with a needle for a sword. He is searching for the Isle of Cheese, a place where the mountains are made of cheddar.\n\nThough he is small, his courage is vast. He has faced krakens and storms, always protected by the magic ink on his hull."
    },
    {
        title: "The Mirror of Truth",
        image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=800",
        content: "Hidden in a cave behind a waterfall is a mirror that doesn't show your face, but your soul. If you are kind, you see a garden; if you are cruel, you see a desert.\n\nMany have fled in terror after looking into it, unable to face what they have become. Others have wept with joy at the beauty within.\n\nThe mirror cannot lie. It is the final judge for those who seek the path of the enlightened."
    },
    {
        title: "The Star Thief",
        image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800",
        content: "A creature with long, spindly fingers reaches into the sky every night to pluck a star. He keeps them in a velvet bag under his bed.\n\nHe isn't greedy; he just wants to make sure the stars don't get lonely in the vast darkness of space. He talks to them every morning.\n\nBy the time the moon sets, he puts them all back, polished and glowing brighter than ever before."
    },
    {
        title: "The City of Brass",
        image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800",
        content: "In the middle of the desert is a city made entirely of polished brass. It reflects the sun so brightly that it can be seen from the moon.\n\nThe citizens are mechanical beings who never sleep. they spend their lives building intricate gears and winding up the world's clocks.\n\nAt night, the city hums with a metallic heartbeat that keeps the desert sand from shifting too far."
    },
    {
        title: "The Emerald Forest",
        image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800",
        content: "The trees here have leaves made of solid emerald. They don't sway in the wind; they clink against each other like expensive jewelry.\n\nOnly the chosen few can enter. The animals are made of jade and marble, moving with a grace that no living creature could possess.\n\nIt is a place of absolute stillness and wealth beyond measure, guarded by a dragon made of living diamond."
    },
    {
        title: "The Ice Queen's Tear",
        image: "https://images.unsplash.com/photo-1453227588063-bb302b62f50b?w=800",
        content: "A single tear shed by the Ice Queen froze into a diamond that holds the power of winter. If it ever melts, the world will be plunged into eternal fire.\n\nIt is kept in a palace of frost, guarded by polar bears with armor made of glacier ice. It glows with a pale blue light.\n\nEvery year, the Queen cries again to ensure the diamond stays cold, sacrificing her own warmth for the sake of the world."
    },
    {
        title: "The Giant shell",
        image: "https://tse2.mm.bing.net/th/id/OIP.d9xs26X8NYekhmbJQe1pOQHaE8?pid=Api&P=0&h=180",
        content: "If you pick up the giant shell on the beach of Isla Luna, you won't hear the ocean. Instead, you hear the voices of people from the future.\n\nThey speak of cities in the stars and flying cars. It is a telephone to a time that hasn't happened yet.\n\nMost people put it back, frightened by the strange sounds. But some listen for hours, learning the secrets of the ages to come."
    },
    {
        title: "The Shadow Jester",
        image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=800",
        content: "In the kingdom of Nox, the king's jester has no body—he is only a shadow. He dances on the walls, making the court laugh with silent jokes.\n\nHe can detach himself from the wall and walk through shadows like they are doorways. He is the ultimate spy, seeing everything and saying nothing.\n\nWhen the king is sad, the jester performs a dance of light, turning into a silhouette of hope that even the darkness cannot touch."
    },
    {
        title: "The Singing Bridge",
        image: "https://imgcdn.stablediffusionweb.com/2024/12/7/a1e2ba50-0c10-45bf-b5e4-f50b782e423b.jpg",
        content: "The stone bridge over the River Lyre vibrates whenever someone crosses it. Depending on the weight of their step, it plays a different chord.\n\nA heavy heart produces a bass note, while a light spirit produces a high, flute-like sound. It is the world's largest musical instrument.\n\nOn festival nights, the villagers dance across it in patterns to create symphonies that can be heard for miles."
    },
    {
        title: "The Dragon's Breath",
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800",
        content: "When the great dragon Ignis exhales, he doesn't just produce fire. He produces visions of the things you desire most.\n\nThe smoke twists into shapes of gold, love, or power. It is a dangerous magic that lures many to their doom in his lair.\n\nOnly those who want nothing can survive the breath. To them, the smoke is just a pleasant scent of cedar and spice."
    },
    {
        title: "The Moon's Garden",
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800",
        content: "On the dark side of the moon, there is a garden where the flowers grow without sunlight. They drink the silver beams of the earth instead.\n\nThe petals are translucent and glow in the dark. Space travelers often stop there to rest on the soft, glowing moss.\n\nIt is the only place in the galaxy where you can hear the sound of silence, a hum that vibrates in your very bones."
    },
    {
        title: "The Compass of Souls",
        image: "https://images.unsplash.com/photo-1526749837599-b4efa9fd255e?w=800",
        content: "A golden compass found in a shipwreck doesn't point North. It points to the person you are destined to love.\n\nThe needle spins wildly until you are within a mile of them, then it locks into place with a steady glow. It has united thousands of hearts.\n\nBut once you find your love, the compass vanishes, moving on to the next soul who is lost in the sea of life."
    },
    {
        title: "The Time Traveler's Watch",
        image: "https://img6.arthub.ai/6544dc1f-b977.webp",
        content: "Arthur found a pocket watch that could stop time for five minutes every day. He used it to save people from accidents and win at chess.\n\nBut he noticed that every time he used it, he aged a little faster than everyone else. He was trading his life for those five minutes.\n\nHe eventually gave the watch to a child, telling them to never use it unless they were willing to give a piece of themselves away."
    },
    {
        title: "The Floating Isles",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
        content: "High above the clouds are islands held up by giant balloons filled with hot air and magic. The people there never touch the ground.\n\nThey travel between islands using wings made of silk and bamboo. Their life is one of constant wind and sky.\n\nThey believe that the ground is a place of shadows and heavy thoughts, and they prefer to live where the sun hits first."
    },
    {
        title: "The Candle of Hope",
        image: "https://images.unsplash.com/photo-1501529301789-b48c1975542a?w=800",
        content: "In a dark cathedral, there is a candle that has been burning for five hundred years. It never gets shorter, and the flame never flickers.\n\nIt is fueled by the prayers of the people. As long as someone believes in a better tomorrow, the candle will stay lit.\n\nIt is a beacon for the hopeless, a small point of light that proves even the greatest darkness can be held back by a single spark."
    },
    {
        title: "The Giant's Flute",
        image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800",
        content: "A flute made from the hollowed-out trunk of an ancient oak tree. Only a giant can play it, and the sound is like the low rumbling of the earth.\n\nWhen played, the music makes the trees grow three feet in a single night. It is the song of life and growth.\n\nThe giant only plays it during the spring equinox, ensuring the world stays green and vibrant for another year."
    },
    {
        title: "The Stone Heart",
        image: "https://images.unsplash.com/photo-1533616688419-b7a585564566?w=800",
        content: "A statue of a warrior in the town square is said to have a real heart made of stone. Every night at midnight, you can hear it beat.\n\nLegend says the warrior gave his life to protect the town, and the gods turned him to stone to preserve his spirit forever.\n\nHe is the silent guardian, and as long as his heart beats, no enemy will ever pass through the town gates."
    },
    {
        title: "The River of Time",
        image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800",
        content: "In a secret valley, the river flows backwards. If you step into the water, you grow younger with every second you spend submerged.\n\nMany have entered and disappeared, becoming babies again and being swept away by the current. It is a dangerous fountain of youth.\n\nThe wise only use it to wash their hands, gaining just enough time to finish their life's work."
    },
    {
        title: "The Velvet Night",
        image: "https://lh3.googleusercontent.com/UkxeOVhkRqBEI16WBBIYyIf6HTsN4_fBwqcrCsgpLPVacNKhuLQbmvyg3czj9-YT-0LUBatNf41lqot0",
        content: "The sky in the Kingdom of Somnus isn't made of air, but of dark blue velvet. The stars are diamonds sewn into the fabric by the Queen.\n\nIt feels soft to the touch if you fly high enough. The moon is a giant pearl that rolls across the fabric from East to West.\n\nIt is a world of eternal comfort and peace, where the night is a blanket that protects the sleepers from the harsh reality of the sun."
    },
    {
        title: "The Clockwork Bird",
        image: "https://images.unsplash.com/photo-1516533075015-a3838414c3ca?w=800",
        content: "A bird made of brass and silver wings that sings better than any living nightingale. It was built by a lonely king who wanted music that never died.\n\nBut the bird requires a golden key to wind up every morning. Without the key, it is just a cold piece of metal.\n\nThe king eventually realized that the bird's perfection was boring, and he traded it for a real bird that sang off-key but with a soul."
    },
    {
        title: "The Forest of Mirrors",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
        content: "Every tree in this forest has bark that reflects like a mirror. If you walk through it, you see yourself a thousand times from every angle.\n\nIt is impossible to get lost because your reflection always points the way out. However, most people get distracted by their own image.\n\nOnly the blind can truly navigate the forest, for they are the only ones not fooled by the infinite reflections of their own vanity."
    },
    {
        title: "The Lightning Jar",
        image: "https://images.unsplash.com/photo-1472141521881-95d0e87e2e39?w=800",
        content: "A young boy caught a bolt of lightning in a mason jar during a summer storm. The jar now glows with a fierce, crackling energy.\n\nHe uses it as a reading lamp, but the light is so bright it can be seen for miles. The lightning is restless, wanting to return to the sky.\n\nOne day, he will open the jar and let the bolt go, watching it streak back home to the clouds where it belongs."
    },
    {
        title: "The Weaver of Dreams",
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800",
        content: "A spider in the attic of a magic school weaves webs that catch the dreams of the students as they sleep.\n\nShe turns the dreams into silk and makes robes for the professors. Each robe tells a different story of adventure, fear, or love.\n\nThe professors are the most knowledgeable in the world, for they wear the collective subconscious of their students every day."
    },
    {
        title: "The Golden Key",
        image: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?w=800",
        content: "A key made of solid gold that fits into any lock in the world. But every time you use it, you lose a memory of your childhood.\n\nIt is the ultimate tool for thieves and explorers, but the cost is high. Many have opened every door in the world only to forget who they are.\n\nThe key is currently hidden in a box that requires no key, waiting for someone brave or foolish enough to find it."
    },
    {
        title: "The Book of Everything",
        image: "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?w=800",
        content: "A book that contains the history of every person who has ever lived. It updates itself in real-time as you breathe.\n\nThe pages are as thin as air and never end. If you read your own entry, you can see your future, but the ink fades as you look at it.\n\nIt is kept in the Library of Eternity, guarded by a monk who has been reading the same page for three hundred years."
    },
    {
        title: "The Silver Fountain",
        image: "https://tse4.mm.bing.net/th/id/OIP.mwX__gLAsBSakNnzRz3gsAHaEK?pid=Api&P=0&h=180",
        content: "In the center of the Moon Palace is a fountain that flows with liquid silver. It is the source of all the stars in the sky.\n\nEvery drop that splashes out of the fountain becomes a new star. The moon people use the silver to paint their houses and heal their wounds.\n\nIt is a place of absolute purity and light, where the water is cold but the spirit is warm."
    },
    {
        title: "The Dragon's Tear",
        image: "https://media.craiyon.com/2025-04-06/9e1LQrq_R0KCyMGr2rMMbw.webp",
        content: "When the last dragon died, he shed a single tear that turned into a blue pearl. It holds the magic of the entire dragon race.\n\nWhoever holds the pearl can speak to animals and breathe fire. But they also inherit the dragon's loneliness.\n\nIt is currently buried in a cave, waiting for the person who is strong enough to carry the legacy of the scales and the flame."
    },
    {
        title: "The Sky Kingdom",
        image: "https://tse3.mm.bing.net/th/id/OIP.diIPqDN0JvM0zu5llGQZoAHaEJ?pid=Api&P=0&h=180",
        content: "A kingdom built on the back of a giant whale that flies through the clouds. The people live in houses made of whalebone and silk.\n\nThey follow the migration of the clouds, avoiding the storms and seeking the eternal sun. It is a life of freedom and height.\n\nOnce a year, the whale descends to the ocean to drink, and the people see the ground for the only time in their lives."
    },
    {
        title: "The Mirror of Shadows",
        image: "https://tse2.mm.bing.net/th/id/OIP.ksFUYReA6L8vcA7m3-m0oQHaE8?pid=Api&P=0&h=180",
        content: "A mirror that only reflects your shadow. If your shadow is bigger than you, it means you have secrets; if it is smaller, you are honest.\n\nThe shadow in the mirror can move independently, acting out the things you are too afraid to do in real life.\n\nIt is a tool for self-reflection that is more literal than most people can handle, revealing the hidden depths of the human heart."
    },
    {
        title: "The Golden Apple",
        image: "https://tse3.mm.bing.net/th/id/OIP.Y_2W8xfhX0QuMu1DwcUBNgHaEJ?pid=Api&P=0&h=180",
        content: "An apple made of solid gold that grows on a tree in the middle of a desert. If you eat it, you gain eternal life.\n\nBut the apple is guarded by a sphinx who asks a riddle that no one has ever solved. The desert is filled with the bones of those who failed.\n\nThe apple is a lure for the greedy, a test of wisdom that proves life is only valuable because it is finite."
    },
    {
        title: "The Song of the Wind",
        image: "https://tse3.mm.bing.net/th/id/OIP.zR_Ib2XnwtOcL9LXIlJThwHaHa?pid=Api&P=0&h=180",
        content: "The wind doesn't just blow; it sings a song that only those with a musical soul can hear. The song tells the story of the world's creation.\n\nIf you can whistle the melody, the wind will carry you wherever you want to go. It is the ultimate form of travel.\n\nBut the song changes every day, and if you miss a note, the wind will drop you right where you are, no matter how high you are."
    },
    {
        title: "The Crystal Tower",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800",
        content: "A tower made of solid quartz that acts as a giant prism, turning the sunlight into a thousand rainbows that cover the land.\n\nIt is the home of the Light Weavers, who use the rainbows to make clothes for the gods. The tower is always warm and bright.\n\nEven during the longest night, the tower glows with the stored light of the day, a symbol of hope in a dark world."
    },
    {
        title: "The Heart of the Sea",
        image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800",
        content: "In the deepest part of the ocean is a giant heart made of coral that beats with the rhythm of the tides. It is the life force of the sea.\n\nIf the heart ever stops, the ocean will go still and the world will die. It is protected by a thousand sharks and a veil of ink.\n\nOnly the King of the Merfolk knows the location, and he visits it every day to sing to it and keep it beating strong."
    },
    {
        title: "The Last Star",
        image: "https://tse3.mm.bing.net/th/id/OIP.kusXSim2lTJ90BbAVAL0SQHaF4?pid=Api&P=0&h=180",
        content: "When the universe finally goes dark, a single star will remain. It is the star of hope, and it will burn until the very end.\n\nIt holds the memories of all the planets and civilizations that ever existed. It is the final library of the cosmos.\n\nWhen it finally goes out, a new universe will be born from its ashes, starting the cycle of stories all over again."
    },
    {
        title: "The Legend of the Lizard (Ang Alamat ng Butiki)",
        image: "https://tse3.mm.bing.net/th/id/OIP.6UcyxCupCKQMqh2gLNqlNAHaEK?pid=Api&P=0&h=180",
        content: `Once upon a time, there was a young man named Lucas who lived with his elderly mother in a small village. Lucas’s mother was kind and hardworking, having spent her whole life making sure Lucas had everything he needed.

The Change in Heart
As Lucas grew older and stronger, he began to change. He became arrogant and started hanging out with a crowd that valued wealth and status over family. He began to see his mother—who was now frail, wrinkled, and dressed in old clothes—as an embarrassment.

Whenever his friends would come over, Lucas would hide his mother in the kitchen or tell her to stay in the back room so no one would see her.

The Confrontation
One evening, just as the sun was setting (the time of Orasyon or Angelus), Lucas was hosting a party for his wealthy friends. His mother, feeling weak and hungry, stumbled into the living room to ask for a bit of water.

Instead of helping her, Lucas became furious. He yelled at her in front of everyone, saying:

"Why are you showing your face here? You are old, ugly, and you smell of the earth! Get down on the ground where you belong!"

He pushed his mother so hard that she fell to the floor. Heartbroken and weeping, the mother looked up at her son and said, "If you are so ashamed of me that you want me on the ground, then perhaps you should stay there yourself."

The Transformation
Suddenly, the sky darkened, and a loud crack of thunder echoed through the house. Lucas began to shrink. His skin turned scaly and mottled, his limbs grew short and thin, and his voice turned into a faint "tiki-tiki-tiki" sound.

He tried to call out to his friends, but he was now a small creature scurrying across the floor. Out of shame, he ran up the wall to hide in the shadows.

The Moral and the "Orasyon"
To this day, Filipinos observe the behavior of the butiki (house lizard). People say that:

The Kiss: Every evening during the Orasyon (twilight), the lizard descends from the wall to "kiss" the ground. This is said to be Lucas, still performing an eternal act of penance, asking for his mother’s forgiveness for his arrogance.

The Sound: Its unique chirping sound is a reminder of the voice Lucas lost when he chose to be cruel.

Note: This legend is often used by Filipino parents to teach children the importance of Pagmamano (respecting elders) and the consequences of being "ingrato" (ungrateful).`
    },
    {
        title: "Ang Alamat ng Mangga",
        image: "https://tse4.mm.bing.net/th/id/OIP.NcV_YerFT1Scy_jFO_vVrQHaEK?pid=Api&P=0&h=180",
        content: `Noong unang panahon, isang batang may pagnanasa sa matamis na mangga ang nagdasal sa isang matanda. Sinabi ng matanda na kung magtanim siya ng isang buto ng mangga nang may pagmamahal, bubuhayin ito ng isang diwata. Lumaki ang puno at nagdala ng pinakamatamis na mangga sa buong baryo. Mula noon, kahit sino'y maaring masiyahan sa aking binhing ito.`
    },
    {
        title: "Ang Pagong at ang Matsing",
        image: "https://tse3.mm.bing.net/th/id/OIP.sjaIP9DaNcRm64AgitWaFwHaD4?pid=Api&P=0&h=180",
        content: `Magkaibigan ang pagong at ang matsing. Nais nilang magtanim ng niyog ngunit hindi nila alam kung paano. Pinatulong nila ang kapwa hayop na maghukay, at tinanong ng ibon kung sino ang mag-aalaga. Sa huli, ang pagong ang naging mapagtiis at nag-alaga sa tanim. Nakakuha siya ng maraming niyog at natutunan ng Matsing ang kahalagahan ng tiyaga.`
    },
    {
        title: "Si Malakas at si Maganda",
        image: "https://tse2.mm.bing.net/th/id/OIP.W9p--gzhs6Ub25RORP-bsgHaEK?pid=Api&P=0&h=180",
        content: `Sa simula, isang kawayan ang bumungkal at naghiwa, kinalimutan ng mundo ang lungkot. Mula rito lumitaw si Malakas at si Maganda. Sila ang unang mag-asawa na nagpalaki ng mga anak, at mula sa kanila nagmula ang lahat ng tao. Ang kanilang kuwento ay paalala ng simula ng buhay sa ating bansa.`
    },
    {
        title: "Ang Mabait na Alimango",
        image: "https://tse2.mm.bing.net/th/id/OIP.DVPM5GBNCTOIti_u47IKqgHaHZ?pid=Api&P=0&h=180",
        content: `Isang araw, may alimango na napadpad sa dalampasigan. Hindi siya makahupa ng malakas na bangga ng alon. Isang mangingisdang matulungin ang tumulong at inilagay siya sa sarili niyang balde. Lumaki ang alimango at lagi siyang nagpapasalamat sa mangingisda sa pamamagitan ng pagbibigay ng mga perlas.`
    },
    {
        title: "Ang Nawawalang Sapatos",
        image: "https://tse3.mm.bing.net/th/id/OIP.FqGJ0vsyRinbqFSMp4JvOgHaHa?pid=Api&P=0&h=180",
        content: `Si Liza ay naglakad papunta sa palengke ngunit nawala ang isang sapatos niya. Naghahanap siya at nakakita ng bakas sa hangin. Sinundan niya ito at natagpuan ang sapatos sa ilalim ng puno. Natutuhan ni Liza na mag-ingat sa kanyang mga gamit at huwag basta-basta magmadali.`
    },
    {
        title: "Ang Tatlong Baboy",
        image: "https://tse2.mm.bing.net/th/id/OIP.gMLV6S2qQYFtpt4aNONL-AHaEK?pid=Api&P=0&h=180",
        content: `Tatlong baboy ang nagbuo ng kanilang bahay: isa ay gawa sa dayami, isa sa kahoy, at isa sa bato. Dumating ang lobo at nilusaw ang unang dalawang bahay. Ngunit hindi niya maparusahan ang bahay na bato. Nilalaman nito na ang sipag at tiyaga ang tunay na proteksyon sa anumang unos.`
    },
    {
        title: "Si Bantay at ang Kulimlim",
        image: "https://tse2.mm.bing.net/th/id/OIP.-PcH35FVjwQqG_cE1YIsnwHaEo?pid=Api&P=0&h=180",
        content: `Si Bantay ay isang aso na nagbabantay sa gabi. Isang gabi, may lumitaw na kulimlim sa kanto. Hindi natakot si Bantay; sinuong niya ito at nanginig ang kulimlim sa kanyang tapang. Mula noon, kilala siya bilang pinakamatapang na bantay sa buong baryo.`
    },
    {
        title: "Ang Bulkan na Niyugyog",
        image: "https://tse4.mm.bing.net/th/id/OIP.gI26AqJQSGuB6pRDABhJrAHaEK?pid=Api&P=0&h=180",
        content: `May bulkan na tuwing gabi ay umiiyugyog nang parang nagigising. Ang mga tao sa paligid ay nagtatakbuhan. Isang matandang mambabarang ang nag-alok ng kwento: ang bulkan ay nagigising dahil sa isang higanteng naghihilom. Pinayuhan niya ang lahat na magbigay ng tahimik na paggalang, at unti-unti raw humupa ang pagyanig.`
    },
    {
        title: "Si Lam-ang at ang Halimaw",
        image: "https://tse4.mm.bing.net/th/id/OIP.p_HBzIcqFHxWNO-9IqVsnwHaEK?pid=Api&P=0&h=180",
        content: `Si Lam-ang ay isang bayani na naglakbay sa bundok para labanan isang halimaw. Nakipaglaban siya gamit ang kanyang tabak at nagwagi, pinalaya ang mga naninirahan sa nayon. Ang kanyang kuwento ay nagsasalaysay ng tapang at pagmamalasakit sa kapwa.`
    },
    {
        title: "Ang Tandang na Naghintay",
        image: "https://tse1.mm.bing.net/th/id/OIP.CAKj5mAuvG43Iwq4UXu03AHaEx?pid=Api&P=0&h=180",
        content: `May isang tandang na naghintay sa may kulungan ng kanyang amo. Araw-araw siyang umaawit sa umaga. Isang araw, nawala ang amo. Hindi siya tumigil sa paghihintay at pag-awit kahit kailan. Ang tandang ay naging simbolo ng tapat na pagsunod at pag-asa.`
    },
    {
        title: "Ang Prinsesang Hindi Tumatawa",
        image: "https://tse3.mm.bing.net/th/id/OIP._s-zfr1BMYewvBJQgyRj9wHaEK?pid=Api&P=0&h=180",
        content: `Noong unang panahon sa Kaharian ng Silangan, may isang magandang prinsesa na nagngangalang Prinsesa Luningning. Ngunit may isang problema: mula nang siya ay isilang, hindi pa siya kailanman nakikitang tumatawa o ngumingiti. Nag-alok ang Hari ng malaking gantimpala: Sino man ang makapagpapatawa sa aking anak ay pakakasalan siya at magiging tagapagmana ng trono! Maraming dumating. May mga payaso na nagbubunyi, may mga salamangkero na nagpapalabas ng kuneho, at may mga mayamang prinsipe na nagdala ng mamahaling alahas. Ngunit si Luningning ay nanatiling seryoso. Isang araw, isang simpleng magsasaka na si Kulas ang naglakbay patungo sa palasyo. Sa daan, tinulungan niya ang isang matandang nagugutom at ibinigay ang kanyang huling tinapay. Bilang pasasalamat, binigyan siya ng matanda ng isang Gintong Gansa. Ang sinumang humawak sa gansang ito na may masamang hangarin ay didikit dito, wika ng matanda. Habang naglalakad si Kulas, isang batang nagnanais magnakaw ang humawak sa gansa—at nadikit siya! Isang pulis ang susubok sumita sa kanila, pero nang hawakan niya ang bata, nadikit din siya! Hanggang sa maging isang mahabang linya sila ng mga taong nagtutulakan at nagkakamot dahil hindi sila makabitaw. Nang dumaan sila sa harap ni Prinsesa Luningning, nakita ng prinsesa ang nakakatawang hitsura ni Kulas na hila-hila ang gansa at ang mahabang linya ng mga taong nagkakagulo. Biglang Hahaha! Humagalpak ng tawa ang prinsesa! Dahil sa dalisay na kalooban ni Kulas at sa dala niyang saya, siya ang nagwagi. Hindi dahil sa yaman, kundi dahil sa ligayang dulot ng pagiging totoo.`
    },
    {
        title: "Si Langgam at si Tipaklong",
        image: "https://tse4.mm.bing.net/th/id/OIP.oLan71GCZQ2owFysc0i1KgHaFj?pid=Api&P=0&h=180",
        content: `Sa isang malawak na bukid, magkaibigan sina Langgam at Tipaklong. Si Langgam ay laging abala. Araw-araw siyang naghahakot ng butil ng palay at iniipon ito sa kanyang munting bahay sa ilalim ng lupa. Langgam, halika muna! Maglaro tayo at kumanta! anyaya ni Tipaklong habang nagpapakasaya sa ilalim ng araw. Napakaganda ng panahon para mag-relax! Pasensya na, Tipaklong, sagot ni Langgam habang nagpupunas ng pawis. Kailangang mag-imbak ng pagkain dahil malapit na ang tag-ulan. Mahihirapan tayong humanap ng makakain kapag bumabaha na. Tumawa lang si Tipaklong. Masyado kang praning! Marami pang pagkain sa paligid. Enjoy muna! Dumating ang malakas na bagyo. Ang bukid ay nalubog sa tubig. Ginaw na ginaw at gutom na gutom si Tipaklong dahil wala siyang naipong pagkain. Pumunta siya sa pintuan ni Langgam at kumatok. Kaibigang Langgam, parang awa mo na, bigyan mo ako ng kaunting pagkain, pagsusumamo niya. Dahil mabuti ang puso ni Langgam, pinatuloy niya si Tipaklong at binigyan ng mainit na sabaw at sapat na pagkain. Salamat, Langgam. Ngayon ay natuto na ako. Hindi sapat ang magsaya lang; dapat ay laging handa sa kinabukasan, wika ni Tipaklong. Mula noon, naging masipag na rin siya.`
    },
    {
        title: "Ang Alamat ng Saging",
        image: "https://tse3.mm.bing.net/th/id/OIP.wEfKA5tkCDD0BRWspXBgzAHaHZ?pid=Api&P=0&h=180",
        content: `Sa isang malayo at luntiang lambak, may isang magandang dalaga na nagngangalang Juana. Nagkaroon siya ng kasintahang hindi taga-lupa, si Aging. Sila ay labis na nagmamahalan, ngunit alam nilang hindi sila maaaring magkasama habang buhay dahil si Aging ay isang engkanto. Isang gabi, kailangang bumalik ni Aging sa kanilang mundo. Humawak siya sa bintana ni Juana, ngunit sa bilis ng paghila sa kanya ng mahiwagang puwersa, naiwan ang kanyang mga kamay sa loob ng silid ni Juana. Ibinaba ni Juana ang mga kamay at ibinayong ito sa lupa bilang tanda ng kanilang pag-ibig. Makalipat ang ilang araw, isang halaman ang tumubo sa mismong pinagbaunan. Ang bunga nito ay hugis mga daliri ng tao na nakayuko—ang Saging na hango sa pangalan ni Aging.`
    },
    {
        title: "Ang Alamat ng Gagamba",
        image: "https://tse3.mm.bing.net/th/id/OIP.DL30dwGwkuKaWaqrz6301QHaIf?pid=Api&P=0&h=180",
        content: `May isang babaeng nagngangalang Amba na napakahusay maghabi ng tela. Ang kanyang mga disenyo ay napakaganda kaya dinarayo siya ng mga tao. Ngunit dahil sa dami ng papuri, naging mayabang si Amba. Hinamon niya ang isang matanda na tila isang diyosa sa paghahabi. Natalo si Amba dahil kahit maganda ang kanyang gawa, ang disenyo niya ay puno ng panunuya sa mga diyos. Bilang parusa sa kanyang kayabangan, ginawa siyang isang maliit na insekto na may walong paa. Kahit naging insekto, hindi nawala ang kanyang talento. Hanggang ngayon, makikita si Amba na tinawag na Gagamba na walang tigil sa paghahabi ng kanyang sapot.`
    },
    {
        title: "Ang Alamat ng Rosas",
        image: "https://tse3.mm.bing.net/th/id/OIP.CjPcEBFmmIj9ZlKE3637pgHaLH?pid=Api&P=0&h=180",
        content: `Si Rosa ay isang dalagang kilala sa kanyang pambihirang ganda. Ngunit hindi lang ganda ang mayroon siya; siya rin ay matulungin at mapagmahal sa kanyang kapwa. Maraming lalaki ang nanliligaw sa kanya, ngunit isa rito ay isang masamang mangkukulam na nagpanggap na tao. Nang tanggihan ni Rosa ang mangkukulam dahil sa masamang ugali nito, isinumpa siya nito. Naglaho si Rosa at sa kanyang kinalalagyan ay tumubo ang isang halaman. Ang bulaklak nito ay kasingganda ni Rosa, ngunit ito ay may mga tinik sa tangkay upang protektahan ang kanyang sarili mula sa mga taong nais siyang saktan. Tinawag itong Rosas.`
    },
    {
        title: "Ang Alamat ng Alitaptap",
        image: "https://tse1.mm.bing.net/th/id/OIP.zTugG-p24-QDAgEXhF6DQwHaEK?pid=Api&P=0&h=180",
        content: `Noong unang panahon, may isang binatang nagngangalang Alit. Siya ay isang seryosong binata na laging may dala-dalang sulo o ilawan dahil natatakot siyang maligaw sa dilim. Isang gabi, nawala ang kanyang mahal sa buhay sa gitna ng kagubatan. Hindi tumigil si Alit sa paghahanap. Gabi-gabi siyang naglalakad, dala ang kanyang munting ilawan, umaasang makikita ang kanyang hinahanap. Dahil sa kanyang busilak na puso at tapat na pag-ibig, ginawa siyang isang maliit na insekto ng mga Diwata. Ngayon, siya ay naging Alitaptap—ang insektong may sariling ilaw na kumukutitap sa dilim upang magbigay ng liwanag sa mga naliligaw.`
    },
    {
        title: "Ang Alamat ng Langgam",
        image: "https://tse2.mm.bing.net/th/id/OIP.JajBxq7OrRDMPPychECBtQHaFj?pid=Api&P=0&h=180",
        content: `Noong unang panahon, may isang lalaking nagngangalang Lino. Siya ay kilala sa pagiging sobrang mabusili sa pagkolekta ng mga butil ng palay. Habang ang ibang tao ay naglalaro, si Lino ay laging nakayuko at namumulot ng mga nahulog na butil. Tinatawanan siya ng kanyang mga kapitbahay dahil sa kanyang liit at pagiging masyadong seryoso sa pag-iipon. Isang araw, dumating ang isang higanteng baha. Dahil sa kanyang pagiging maingat at masipag, si Lino ay nakahanap ng paraan upang makaligtas sa ilalim ng lupa kasama ang kanyang mga naipong pagkain. Nagbago ang kanyang anyo at naging Langgam, ang simbolo ng kasipagan at pagkakaisa.`
    },
    {
        title: "Ang Alamat ng Pakwan",
        image: "https://tse3.mm.bing.net/th/id/OIP.Psu0cBSUAhEo9b8KbUrr1AHaFj?pid=Api&P=0&h=180",
        content: `Sa isang tuyot na bayan, may isang batang lalaki na nakakita ng isang uhaw na matanda. Kahit kakaunti na lang ang kanyang tubig, ibinigay niya ito sa matanda. Bilang pasasalamat, binigyan siya ng matanda ng isang itim na buto. Ibaon mo ito sa lupa at diligan, wika ng matanda. Tumubo ang isang gumagapang na halaman na may malalaking bilog na bunga. Nang buksan ito, ang loob ay kasing-pula ng puso ng bata at puno ng matamis na tubig na nakapawi sa uhaw ng buong baryo. Tinawag itong Pakwan.`
    },
    {
        title: "Ang Pagong at ang Matsing (Variant)",
        image: "https://tse2.mm.bing.net/th/id/OIP.qnEV2lbadVpPk3-4cVVzdgHaEK?pid=Api&P=0&h=180",
        content: `Nahati nina Pagong at Matsing ang isang puno ng saging. Dahil tuso si Matsing, kinuha niya ang taas na bahagi na may mga dahon dahil akala niya ay tutubo ito agad. Kay Pagong naman ang ibabang bahagi na may mga ugat. Namatay ang tanim ni Matsing, habang ang kay Pagong ay namunga nang marami. Nang hindi maakyat ni Pagong ang bunga, nagboluntaryo si Matsing pero kinain niya lahat ng saging sa taas! Upang makaganti, naglagay si Pagong ng mga tinik sa puno. Sa huli, tinangka ni Matsing na lunurin si Pagong, pero nakalimutan niyang sa tubig talaga nakatira si Pagong. Hahaha! Bahay ko ang tubig! tawa ni Pagong habang lumalangoy palayo.`
    },
    {
        title: "Ang Alamat ng Tutubi",
        image: "https://tse1.mm.bing.net/th/id/OIP.ToBl_1zo0s0GBqGVvEkW7QHaFj?pid=Api&P=0&h=180",
        content: `Noong unang panahon, ang mga tutubi ay mga prinsipe ng hangin. Sila ay may malalaking pakpak ngunit wala silang boses. Isang araw, isang malakas na hangin ang nagbanta na sisirain ang mga pananim ng mga tao. Ang mga tutubi ay mabilis na lumipad at humarang sa hangin gamit ang kanilang mga pakpak. Dahil sa kanilang kabayanihan, binigyan sila ng mga Diwata ng kakayahang lumipad nang napakabilis at tumigil sa ere. Sila ang naging bantay ng mga bukid, tinitiyak na payapa ang paligid bago dumating ang ulan.`
    },
    {
        title: "Si Juan Tamad at ang Alimango",
        image: "https://tse3.mm.bing.net/th/id/OIP.JwiPjN3meOGg2EtxHcqwFAHaD4?pid=Api&P=0&h=180",
        content: `Inutusan ng ina si Juan Tamad na bumili ng mga alimango sa palengke. Dahil tinatamad siyang maglakad habang dala ang mabibigat na alimango, pinakawalan niya ang mga ito sa sapa. Mauna na kayo sa bahay, alam niyo naman ang daan, 'di ba? sabi ni Juan. Umuwi si Juan at natulog. Nang magtanong ang kanyang ina kung nasaan ang mga alimango, sinabi ni Juan na pinauwi na niya ang mga ito. Siyempre, wala silang nakitang alimango dahil ang mga ito ay nakatakas na sa sapa!`
    }
];

// --- ELEMENTS ---
const gridContainer = document.getElementById('grid-container');
const carouselContainer = document.getElementById('carousel-container');
const storyOverlay = document.getElementById('story-overlay');
const searchInput = document.getElementById('story-search');
const pageTurnSound = document.getElementById('page-turn-sound');
const audioBtn = document.querySelector('.audio-btn');
const voiceControls = document.getElementById('voice-controls');

// helper to refresh voices if they haven't loaded yet (some mobile browsers
// only populate the list after a user gesture). We'll call this before we try
// to speak so that "girl"/"boy" selection works reliably on phones.
function ensureVoicesLoaded() {
    if (availableVoices.length === 0 && window.speechSynthesis) {
        loadVoices();
    }
}


let speechUtterance = null; // current utterance or list
let isSpeaking = false;
let availableVoices = [];
let chosenVoice = null; // will hold a selected voice for emotion
let currentGenderPreference = 'female'; // default to girl voice

// load voices (some browsers load asynchronously)
function selectVoiceByGender(gender) {
    // ensure we have voices loaded
    const englishVoices = availableVoices.filter(v => /en|english/i.test(v.lang));
    if (englishVoices.length === 0) return;

    // look for a voice whose name suggests the requested gender; fall back gracefully
    const genderRegex = gender === 'male'
        ? /(male|man|boy|m[ae]le)/i
        : /(female|woman|girl|f[ae]male)/i;
    let match = englishVoices.find(v => genderRegex.test(v.name));
    if (!match) {
        // try using the voice's 'gender' property if present (non-standard, e.g. Edge)
        match = englishVoices.find(v => v.gender && v.gender.toLowerCase() === gender);
    }
    // final fallback to first english voice
    chosenVoice = match || englishVoices[0];
}

function loadVoices() {
    availableVoices = window.speechSynthesis.getVoices().filter(v => /en|english/i.test(v.lang));
    // choose according to current gender preference
    selectVoiceByGender(currentGenderPreference);
}

// update voice when user changes radio selection
function updateAudioButtonLabel() {
    const gender = currentGenderPreference === 'male' ? 'boy' : 'girl';
    if (audioBtn) {
        audioBtn.setAttribute('aria-label', `Read story aloud (${gender} voice)`);
    }
}

if (voiceControls) {
    voiceControls.addEventListener('change', e => {
        if (e.target && e.target.name === 'voice-gender') {
            currentGenderPreference = e.target.value;
            selectVoiceByGender(currentGenderPreference);
            updateAudioButtonLabel();
            // if we were speaking with the previous voice, stop so the new voice can be used next
            if (isSpeaking) stopSpeech();
        }
    });
}

// set initial label
updateAudioButtonLabel();

if (window.speechSynthesis) {
    window.speechSynthesis.onvoiceschanged = () => {
        loadVoices();
        updateAudioButtonLabel();
    };
    // some browsers don't fire the event until user interaction; call immediately also
    loadVoices();
    updateAudioButtonLabel();
}

// --- RENDER FUNCTIONS ---
function renderGallery(filterText = "") {
    gridContainer.innerHTML = ""; 
    // update carousel simultaneously
    renderCarousel(filterText);
    
    const filteredStories = stories.filter(story => 
        story.title.toLowerCase().includes(filterText.toLowerCase())
    );

    if (filteredStories.length === 0) {
        gridContainer.innerHTML = `<p style="grid-column: 1/-1; text-align: center; font-size: 1.5rem; padding: 50px; opacity: 0.6;">No magical tales found by that name...</p>`;
        return;
    }

    filteredStories.forEach(story => {
        const card = document.createElement('div');
        card.classList.add('story-card');
        card.innerHTML = `
            <img src="${story.image}" alt="${story.title}" loading="lazy">
            <h2>${story.title}</h2>
        `;
        // Pass 'card' to the openStory function so we can animate it
        card.addEventListener('click', () => openStory(card, story));
        gridContainer.appendChild(card);
    });
}

function renderCarousel(filterText = "") {
    if (!carouselContainer) return; // safety
    carouselContainer.innerHTML = "";

    const filteredStories = stories.filter(story => 
        story.title.toLowerCase().includes(filterText.toLowerCase())
    );

    filteredStories.forEach(story => {
        const card = document.createElement('div');
        card.classList.add('story-card');
        card.innerHTML = `
            <img src="${story.image}" alt="${story.title}" loading="lazy">
            <h2>${story.title}</h2>
        `;
        card.addEventListener('click', () => openStory(card, story));
        carouselContainer.appendChild(card);
    });
}

// --- SEARCH EVENT ---
searchInput.addEventListener('input', (e) => {
    renderGallery(e.target.value);
});

// --- OVERLAY FUNCTIONS ---
let currentStory = null; // track which story is open (for audio playback)
let currentChapterIndex = 0; // track current chapter for chaptered stories

function displayChapter(chapterIndex, direction = 'next') {
    const story = currentStory;
    if (!story || !story.chapters || !story.chapters[chapterIndex]) return;

    const chapter = story.chapters[chapterIndex];
    const contentEl = storyOverlay.querySelector('.story-content');
    const pageCounter = document.getElementById('page-counter');

    // play subtle page-turn sound
    try { pageTurnSound.currentTime = 0; pageTurnSound.play().catch(()=>{}); } catch (e) {}

    // Choose flip direction class
    const awayClass = direction === 'prev' ? 'flip-away-right' : 'flip-away-left';

    // Step 1: rotate away
    contentEl.classList.remove('flip-in', 'flip-away-left', 'flip-away-right');
    // force style recompute
    void contentEl.offsetWidth;
    contentEl.classList.add(awayClass);

    // After the away rotation completes, swap content instantly and flip in
    const awayDuration = 380; // matches CSS transition timing (ms)
    setTimeout(() => {
        // Immediately set content element to the opposite side (no transition), then animate back to 0deg
        contentEl.classList.remove(awayClass);
        contentEl.style.transition = 'none';
        // place it visually at the 'far' side before swapping so the flip-in looks correct
        contentEl.style.transform = direction === 'prev'
            ? 'perspective(1200px) rotateY(-90deg)'
            : 'perspective(1200px) rotateY(90deg)';

        // Update content (swap)
        const formattedContent = `<h2 style="font-family: 'Cherry Bomb One', cursive; color: #f39c12; margin-bottom: 20px; font-size: 1.5rem;">Chapter ${chapter.num}: ${chapter.title}</h2><p style="margin-bottom: 20px; line-height: 1.8; font-size: 1.05rem;">${chapter.content}</p>`;
        contentEl.innerHTML = formattedContent;

        // Update page counter and buttons
        pageCounter.textContent = `Chapter ${chapter.num} of ${story.chapters.length}`;
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        prevBtn.disabled = chapterIndex === 0;
        nextBtn.disabled = chapterIndex === story.chapters.length - 1;

        // force reflow then animate in
        requestAnimationFrame(() => {
            contentEl.style.transition = 'transform 0.45s cubic-bezier(0.65, 0.05, 0.36, 1), opacity 0.25s ease';
            contentEl.style.transform = 'perspective(1200px) rotateY(0deg)';
            contentEl.style.opacity = '1';
        });

        // cleanup inline styles after animation completes
        setTimeout(() => {
            contentEl.style.transition = '';
            contentEl.style.transform = '';
            contentEl.style.opacity = '';
            contentEl.classList.add('flip-in');
            // Reset scroll position
            contentEl.scrollTop = 0;
        }, 500);
    }, awayDuration);

    currentChapterIndex = chapterIndex;
}

function openStory(cardElement, story) {
    currentStory = story;
    currentChapterIndex = 0;

    // 1. Play Sound
    pageTurnSound.currentTime = 0;
    pageTurnSound.play().catch(() => {});

    // 2. Trigger Zoom Animation on the card
    cardElement.classList.add('zooming');

    // 3. Prepare Overlay Data
    const titleEl = storyOverlay.querySelector('.story-title');
    const imgEl = storyOverlay.querySelector('#overlay-img');
    const contentEl = storyOverlay.querySelector('.story-content');
    const paginationControls = document.getElementById('pagination-controls');

    titleEl.textContent = story.title;
    imgEl.src = story.image;

    // Check if story has chapters
    if (story.chapters && story.isChaptered) {
        paginationControls.style.display = 'flex';
        displayChapter(0);
    } else {
        paginationControls.style.display = 'none';
        const formattedContent = story.content.split('\n\n').map(p => `<p style="margin-bottom: 20px;">${p}</p>`).join('');
        contentEl.innerHTML = formattedContent;
    }

    // 4. Wait for zoom animation to play, then show overlay
    setTimeout(() => {
        // clear any ongoing speech and reset button
        stopSpeech();
        storyOverlay.classList.add('active');
        storyOverlay.classList.add('visible');
        gridContainer.classList.add('blurred');
        document.body.style.overflow = "hidden"; 
        
        // Remove zoom class so it's fresh when we return
        cardElement.classList.remove('zooming');
    }, 450); 
}

function closeStory() {
    stopSpeech();
    storyOverlay.classList.remove('active');
    storyOverlay.classList.remove('visible');
    gridContainer.classList.remove('blurred');
    document.body.style.overflow = "auto";
}

document.querySelector('.close-btn').onclick = closeStory;

// --- PAGINATION BUTTON LISTENERS ---
document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentStory && currentChapterIndex > 0) {
        displayChapter(currentChapterIndex - 1, 'prev');
    }
});

document.getElementById('next-btn').addEventListener('click', () => {
    if (currentStory && currentChapterIndex < currentStory.chapters.length - 1) {
        displayChapter(currentChapterIndex + 1, 'next');
    }
});

// wire up the speak button for both mouse and touch so phones respond
if (audioBtn) {
    audioBtn.addEventListener('click', toggleSpeech);
    audioBtn.addEventListener('touchstart', e => {
        // prevent double‑firing in some browsers
        e.preventDefault();
        toggleSpeech();
    });
}

// --- SPEECH HELPERS ---
function createUtterancesWithEmotion(text) {
    const sentences = text.match(/[^.!?]+[.!?]?/g) || [text];
    return sentences.map(sentence => {
        const utt = new SpeechSynthesisUtterance(sentence.trim());
        // base settings
        utt.rate = 1;
        utt.pitch = 1;
        utt.volume = 1;
        if (chosenVoice) utt.voice = chosenVoice;

        // apply emotion heuristics
        if (/[!?]$/.test(sentence)) {
            // excitement or question
            utt.pitch = 1.3;
            utt.rate = 1.2;
        } else if (/,/.test(sentence)) {
            // slight pause
            utt.rate = 0.95;
        }

        // tweak for the 'AI girl' effect when female voice selected
        if (currentGenderPreference === 'female') {
            // make pitch slightly higher and rate a bit robotic
            utt.pitch *= 1.3;
            utt.rate *= 1.15;
            // occasional micro-pauses for staccato
            utt.onboundary = event => {
                if (event.name === 'word') {
                    // small random delay between words
                    const pause = Math.random() * 40;
                    const start = performance.now();
                    while (performance.now() - start < pause) {} // busy-wait short time
                }
            };
        }

        return utt;
    });
}

function speakText(text) {
    if (!window.speechSynthesis) return;
    stopSpeech();
    const utterances = createUtterancesWithEmotion(text);
    utterances.forEach((utt, idx) => {
        utt.onend = () => {
            // if last utterance, cleanup
            if (idx === utterances.length - 1) {
                isSpeaking = false;
                audioBtn.classList.remove('playing');
            }
        };
        window.speechSynthesis.speak(utt);
    });
    isSpeaking = true;
    audioBtn.classList.add('playing');
}

let customAudio = null;

function stopSpeech() {
    if (customAudio && !customAudio.paused) {
        customAudio.pause();
        customAudio.currentTime = 0;
    }
    if (window.speechSynthesis && window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
    }
    isSpeaking = false;
    audioBtn.classList.remove('playing');
}

function playCustomAudio(src) {
    stopSpeech();
    customAudio = new Audio(src);
    customAudio.onended = () => {
        isSpeaking = false;
        audioBtn.classList.remove('playing');
    };
    customAudio.play().catch(() => {});
    isSpeaking = true;
    audioBtn.classList.add('playing');
}

// girl jingle: high, cheerful notes (A4, B4, C5, D5)
function playGirlTune(done) {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const notes = [440, 494, 523, 587]; // A4, B4, C5, D5
        let i = 0;
        function playNext() {
            if (i >= notes.length) {
                ctx.close();
                if (done) done();
                return;
            }
            const osc = ctx.createOscillator();
            osc.type = 'sine';
            osc.frequency.value = notes[i++];
            osc.connect(ctx.destination);
            osc.start();
            setTimeout(() => { osc.stop(); playNext(); }, 200);
        }
        playNext();
    } catch (e) {
        if (done) done();
    }
}

// boy jingle: lower, deeper notes (A3, B3, D4, E4) with longer timing
function playBoyTune(done) {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const notes = [220, 247, 294, 330]; // A3, B3, D4, E4 (one octave lower, deeper feel)
        let i = 0;
        function playNext() {
            if (i >= notes.length) {
                ctx.close();
                if (done) done();
                return;
            }
            const osc = ctx.createOscillator();
            osc.type = 'sine';
            osc.frequency.value = notes[i++];
            osc.connect(ctx.destination);
            osc.start();
            setTimeout(() => { osc.stop(); playNext(); }, 250);
        }
        playNext();
    } catch (e) {
        if (done) done();
    }
}

function toggleSpeech() {
    if (isSpeaking) {
        stopSpeech();
        return;
    }

    const contentEl = storyOverlay.querySelector('.story-content');
    if (!contentEl) return;
    const text = contentEl.innerText || contentEl.textContent;

    const afterTune = () => {
        if (currentGenderPreference === 'female' && currentStory && currentStory.audio) {
            playCustomAudio(currentStory.audio);
        } else if (window.speechSynthesis) {
            speakText(text);
        }
    };

    // play appropriate jingle based on voice preference
    if (currentGenderPreference === 'female') {
        playGirlTune(afterTune);
    } else if (currentGenderPreference === 'male') {
        playBoyTune(afterTune);
    } else {
        afterTune();
    }
}

// --- VIDEO CAROUSEL DATA & FUNCTIONS ---
// video IDs to embed; only the user-provided clips remain
const videoIds = [
    'tUjOL_Nk6uo', // from https://www.youtube.com/watch?v=tUjOL_Nk6uo
    'jKi2SvWOCXc', // from https://www.youtube.com/watch?v=jKi2SvWOCXc
    '9a9qNLUpkV8', // from https://www.youtube.com/watch?v=9a9qNLUpkV8
    'i4CPSH6eQWE', // from https://www.youtube.com/watch?v=i4CPSH6eQWE
    'l0Z8A4u3CtI', // from https://www.youtube.com/watch?v=l0Z8A4u3CtI
    'UHUZJoqLW-I', // from https://www.youtube.com/watch?v=UHUZJoqLW-I
    'CpXlvLOyBVI', // from https://www.youtube.com/watch?v=CpXlvLOyBVI
    '4TcA1Y-gaRA', // from https://www.youtube.com/watch?v=4TcA1Y-gaRA
    '1vOqQl0vJ4k', // from https://www.youtube.com/watch?v=1vOqQl0vJ4k
    '-9NXxlFnZcU', // from https://www.youtube.com/watch?v=-9NXxlFnZcU
    'v_NwMGuDF6w'  // from https://www.youtube.com/watch?v=v_NwMGuDF6w
];

function renderVideos() {
    const container = document.getElementById('video-carousel');
    if (!container) return;
    container.innerHTML = '';
    videoIds.forEach(id => {
        const card = document.createElement('div');
        card.className = 'video-card';
        // start with thumbnail image and play overlay
        const thumbUrl = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
        card.innerHTML = `
            <div class="video-thumb-wrapper">
                <img src="${thumbUrl}" alt="Video thumbnail" class="video-thumb">
                <div class="play-overlay">▶</div>
            </div>
        `;
        // on click replace content with iframe player
        card.addEventListener('click', () => {
            card.innerHTML = `
                <iframe src="https://www.youtube.com/embed/${id}?rel=0&autoplay=1" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>
            `;
        });
        container.appendChild(card);
    });
}

// Initialize
renderGallery();
renderVideos();