export const ancestries = [
    {
        'name': 'Human',
        'code': 'human',
        'bonus': {
            'Combat': 1,
            'Intelligence': 1,
            'Perception': 1,
            'Agility': -1,
            'Fellowship': -1,
            'Willpower': -1,
        },
        'description': 'A vast race whose tribes have long splintered, Humans have evolved over an age from primal roots to become the most pervasive and adaptable civilization in the modern world. Humans are a varied lot, marked by differences in language, culture and art. They value reason and intellect, but also reward avarice and opportunism. If there is one shared trait amongst Humans, it is a burning desire to impose their will upon others, often using religion to justify their vicious ideologies. In times of old, it is said that this vainglorious nature brought about a terrible age of suffering and exile when Humankind attempted to exert its power over the gods themselves and failed. Human society is highly adaptive and intensely political, quickly assimilating the ways of others and providing advancement to the ambitious and the talented. Their societies are dominated by thinkers and tricksters, clerics and charlatans, politicians and provocateurs. They huddle together in walled cities, proclaiming themselves conquerors over the vast wilderness beyond the gates. Their tenacity and expansionism has made humans the most populous Ancestry. It also makes them repugnant in the eyes of most Elves, who often kill Human perpetrators that dare enter their sanctuaries on sight.',
        'traits': [
            {
                'name': 'BLESSING IN DISGUISE',
                'description': 'It is said that Humans have been watched over by a god who favors them above all other Ancestries. But perhaps this blessing represents the attentions of Abyssal fiends acting of their own accord, waiting to turn you into a thrall once your fate runs dry.',
                'effect': 'Whenever the time calls for you to suffer a debilitating Injury or face death, you may alternatively gain 1 permanent Chaos Rank (instead of spending a Fate Point) to ignore it entirely.',
            },
            {
                'name': 'DANGER SENSE',
                'description': 'A rare few Humans tend to get a \u201cfunny feeling\u201d whenever a situation may turn dangerous. This danger sense also leads to odd dreams, and sometimes plagues them with unusual visions during their waking hours.',
                'effect': 'Whenever you are Surprised, spend one Fortune Point to avoid it and take your Turn as normal.',
            },
            {
                'name': 'DAUNTLESS',
                'description': 'Humans\u2019 sheer force of will helps them withstand many challenges. Rarely do they cross the threshold to fear and darkness, as their stalwart nature shields them from the horrors that surround them.',
                'effect': 'You are immune to the effects of the Intimidate Skill and cannot be Stunned or Knocked Out!',
            },
            {
                'name': 'ESOTERIC MEMORY',
                'description': 'Some Humans have a preternatural ability for remembering details and subconsciously committing things to memory. They may even develop odd rituals to help jog their memories. A scholar would say these Humans have an eidetic memory, recalling every detail with great clarity.',
                'effect': 'When attempting to recall a particular detail or remember a fact, you always succeed at Scrutinize Tests.',
            },
            {
                'name': 'FORTUNE\u2019S WHEEL',
                'description': 'Some Humans are favored by Lady Luck. In a sense, they are her emissaries in an unkind and capricious world, either victims of its accidents or beneficiaries of its boons.',
                'effect': 'Anytime you generate a Critical Failure after rolling D100, automatically add one Fortune Point into the Fortune Pool.',
            },
            {
                'name': 'GRIM RESOLVE',
                'description': 'Humans are extremely durable and their force of will unparalleled. When the chips are down, they manage to pull themselves up by the bootstraps.',
                'effect': 'Immediately after you suffer Damage from a melee or ranged weapon, spend a Fortune Point to ignore it entirely, therefore negating both Damage and any Injuries you may have suffered. You may even use this after failing to Dodge or Parry.',
            },
            {
                'name': 'MANIFEST DESTINY',
                'description': 'Humans are a quick study and carry with them a wealth of experiences. Unlike other Ancestries, their people are extremely adaptable and can use a number of techniques with a minimal level of understanding.',
                'effect': 'When using a Skill you do not possess Skill Ranks in, add a +5 Base Chance.',
            },
            {
                'name': 'MIXED BLOODLINE',
                'description': 'One of your Human ancestors or parents coupled with another Ancestry and passed elements of this bloodline down to their children.',
                'effect': 'Randomly generate another Ancestry other than your own. Whichever you end up with, consider possible alterations to your appearance and cultural values. Should you share Dwarven heritage, you may have a mercurial disposition. If sharing Elven heritage, you may fly into fey rages when things don\u2019t go your way. If sharing Gnome heritage, you may like to break things apart in hopes of learning how they work. If sharing Halfling heritage, you may exhibit an insatiable appetite for larceny. Finally, if sharing Ogre heritage, you may possess a predilection towards eating every morsel you can get your grubby mitts on. Randomly generate your Mixed Bloodline by rolling D100, consulting the Ancestral table on Step III: Sex & Ancestry. As a result, you may randomly determine another Ancestral Trait outside of the Human\u2019s Mixed Bloodline. Once determined, go to the first page of the Character sheet and record your Mixed Bloodline under Background and record your new Ancestral Trait.',
            },
            {
                'name': 'MOUNTAIN AMONGST MEN',
                'description': 'Some Humans are incredibly tall, towering over their own kind. Being a hulking brute may have negative social consequences, as they are oftentimes perceived as being clumsy, dunderheaded or somewhat terrifying. Are these assertions correct? You decide.',
                'effect': 'You are able to wield any two-handed melee weapon with one hand. This also means you may freely take advantage of the Adaptable Quality for weapons using only one hand. Finally, you will reference \u201c91 to 100\u201d on the Height table and will have a Husky build on the Build table.',
            },
            {
                'name': 'NATURAL SELECTION',
                'description': 'Favored above all others, Humans are the living instruments of the gods. A thankless few are granted an inkling of their might. To those born beneath the right stars, a great blessing is bestowed.',
                'effect': 'You may permanently change any one Primary Attribute to a 55%.',
            },
            {
                'name': 'NOBLE SAVAGE',
                'description': 'Whether through purposeful training or accident, Humans have developed a natural resistance to the elements.',
                'effect': 'You never suffer physical Peril as a result of failed Toughness Tests.',
            },
            {
                'name': 'SEVENTH SENSE',
                'description': 'Some Humans possess an unusual mutation, allowing them to visualize scents in the air. They can envision odors in the air as if they were comprised of blurry, colored light. As a result, they may be prone to allergies as the seasons change or sensitive to changes in light.',
                'effect': 'Using your sense of smell to track others, you always succeed at Survival Tests.',
            },
        ],
    },
    {
        'name': 'Dwarf',
        'code': 'dwarf',
        'bonus': {
            'Combat': 1,
            'Willpower': 1,
            'Brawn': 1,
            'Perception': -1,
            'Agility': -1,
            'Fellowship': -1,
        },
        'description': 'Proud but insular, Dwarves possess a dour mien and are an incredibly obstinate race. They have a singular, compulsive need to understand the inner workings of all things. This desire extends into an intense yearning for unbridled perfection. Because of this, Dwarves take great pains in their craftsmanship, laboring for weeks over the smallest of trinkets. It is because of this singular dedication that Dwarves often display a mercurial disposition. It also explains the tendency to binge drink when their work is complete, as the frazzled Dwarf is momentarily freed from the hold of their inner muse. Forever consumed by complex tasks, Dwarves are also notoriously unhygienic, allowing their matted beards to grow to such great lengths that they must tuck them into their belts. Amongst their families, called Clans, there is a deep fascination with the length of one’s beard (beer-soaked as it may be), for it is a respected symbol of tireless dedication. Dwarves are not warlike by nature, but their endless pursuit of perfection makes them ideal soldiers. Those Dwarves who feel compelled to pursue a life of warfare bear particularly contemptuous grudges against foes who exhibit a shameful lack of drive and focus. Their tireless concern over seemingly petty matters makes Dwarves the butt of many japes, thus giving birth to many popular stereotypes concerning their lack of personality, dulled insight and austere resolve. Orange mohawks, tattoos that look akin to the scribbling of a madman and two massive axes to grind are amongst the most common of these images.',
        'traits': [
            {
                'name': 'CAVESIGHT',
                'description': 'Dwarves senses are attuned to the earth below. Using a combination of sounds and acoustic wayfinding, they can see in complete darkness as if it were perfectly illuminated.',
                'effect': 'You can see completely in the dark below ground as if it were daylight, providing you are able to hear.',
            },
            {
                'name': 'CHILDREN OF THE EARTH',
                'description': 'Dwarves have an almost magnetic pull toward the earth. This, combined with a lower center of gravity, makes a Dwarf nigh impossible to topple. This obstinacy is unmatched, save for the fact that the mountain does not bend to the wishes of the wind.',
                'effect': 'You can never be forced off your feet or knocked Prone onto the ground by the elements, your enemies or even Magick. Finally, you will have a Corpulent build on the Build table.',
            },
            {
                'name': 'CONSUME ALCOHOL',
                'description': 'Dwarves possess an unusually high resistance to the poisonous effects of alcohol and tobacco. But the stink of these vices cling to their clothes and breath, marking them less desired among the well-landed.',
                'effect': 'While Intoxicated, you never suffer from the negative effects associated with this condition. You can learn more about Intoxication in Chapter 9: Hazards & Healing.',
            },
            {
                'name': 'DWARVEN WARFARE',
                'description': 'Dwarves use their lower center of gravity to drive cold steel into their opponent, crushing armor and shattering bones beneath its impact. Coupled with familiarity of stone-cutting and woodsplitting tools, it makes Dwarves incredibly efficient when defending themselves.',
                'effect': 'When wielding any two-handed melee weapon using both hands, any attempt to Parry automatically succeeds (providing you have the Action Points to spend).',
            },
            {
                'name': 'GRUDGEBEARER',
                'description': 'Dwarves harbor ancestral hatred, bringing violence upon hated enemies. Perceived grievances \u2013 both real and imagined \u2013 and general bigotry fuel this rage.',
                'effect': 'Whenever you use Fury Dice to determine weapon Damage, they explode on face \u20185-6\u2019. You can learn more about how Fury Dice affects Damage in Chapter 8: Combat.',
            },
            {
                'name': 'IRONCLAD',
                'description': 'Dwarves have an incredibly stalwart physique, sleeping and eating daily in their armor.',
                'effect': 'When wearing a suit of armor, ignore its Encumbrance Value.',
            },
            {
                'name': 'OATHKEEPER',
                'description': 'Like their forefathers, Dwarves have become the bearers of ancient trade secrets. Renowned as master builders, their craft has been perfected over the ages. They jealously guard the secrets of their work, passing these ancient rituals to their children. But as their fingers are the size of blood sausages and calloused, most Dwarves find it difficult to work with things smaller than their hands. A rare few possess this gift, unlikely to share its secrets with others outside of their clan.',
                'effect': 'All armor, shields and weapons you forge with the Tradecraft Skill automatically gains the Castle-forged Quality.',
            },
            {
                'name': 'PHYSICAL PROWESS',
                'description': 'Dwarves are naturally athletic, excelling at feats most normal people could never hope to achieve. Barrel-chested and powerfully muscled, they have an excellent physique and constantly train to maintain peak fitness. But when in private company, they enjoy binge eating on pies, sausages and blood pudding.',
                'effect': 'Reference either your [BB] or [AB] when determining Movement. Additionally, you may substitute Athletics in place of Coordination when Dodging ranged weapons. Finally, you will have a Husky build on the Build table.',
            },
            {
                'name': 'RUNE-MARKED GLORY',
                'description': 'Sage and arcane, all Dwarves know their runes. They mark keepsakes, armor and weapons with chalk and ink, telling of an ancient, forgotten glory that came before them. Some even tattoo themselves from head to toe in these arcane symbols of might. Yet, these runes speak to an eldritch power, girding their body against the touch of cold steel and their mind against the effects of sorcery.',
                'effect': 'Whenever you suffer Damage or Peril from Magick, spend a Fortune Point to ignore it entirely. Note that this does not alleviate any additional effects the Magick spell may also cause (such as being caught On Fire or knocked Prone).',
            },
            {
                'name': 'STENTORIAN VOICE',
                'description': 'Dwarves have a loud and booming voice, and when they speak, others listen. They break out in song often, recounting tales of vendettas, unending turmoil and unresolved grievances towards other races. It can become incredibly annoying to their non-Dwarven comrades, as they must put up with their inability to hold a tune.',
                'effect': 'Whenever you use Fellowship-based Skills, refer to either your Brawn or Fellowship Primary Attribute (whichever is highest).',
            },
            {
                'name': 'STONEHEADED',
                'description': 'Dwarves are stern and taciturn, unyielding to manipulation. Born with an innate ability to see through Magickal deception and trickery, their mind is unyielding. Changing their perception is incredibly difficult, as they are stubborn in belief and pragmatic in nature.',
                'effect': 'You are immune to Magick which may control your mind and see through illusions without fail.',
            },
            {
                'name': 'STRENGTH OF THE MOUNTAIN',
                'description': 'Dwarves can perform incredible feats of stamina. They claim that even the smallest runt of their clans can haul a hogshead of mead without breaking a sweat.',
                'effect': 'Any Skill Rank you acquire that relies on the Brawn Primary Attribute modifies your Base Chance by +15, instead of +10.',
            },
        ],
    },
    {
        'name': 'Elf',
        'code': 'elf',
        'bonus': {
            'Intelligence': 1,
            'Perception': 1,
            'Agility': 1,
            'Fellowship': -1,
            'Willpower': -1,
            'Brawn': -1,
        },
        'description': 'Fey and haughty, Elves believe they were created in the image of the gods and seek to isolate themselves in families (called a Kindred) from the company of other pitiably inferior races. The feeling is often mutual among these other races, who classify Elves into two distinct camps: louche and supercilious or edgy and dismissive. Avid connoisseurs, there is no doubt that Elves are particularly disdainful of those who do not apply the same exacting standards in their own choices. Standing in imperious opposition to the long-bearded folk who dwell below the earth, Elves reside in the magnificent beauty of sanctuaries far removed from other civilizations. Perhaps there is some truth to the divine origin of Elves, for they uniformly appear ageless. There are many examples of Elves whose years span several Human lifetimes, and it is even believed that some have attained true immortality. Not surprisingly, Elven longevity is often stunted by the gripping reality of a merciless world. Elves who have left their Kindred by choice or forced exile often fall victim to an eternal grief, doomed to dwell among the crude masses of the \u2018lesser folk\u2019. Life is particularly cruel to these exiles, who often find themselves enslaved by pompous merchant-princes and paraded about as curiosities in some personal menagerie. But in others, it manifests into cold neutrality as these Elven outcasts strike out as mercenary freebooters. They are often provoked by even the simplest of informalities or inconveniences, flying into a furious rage against all save their own.',
        'traits': [
            {
                'name': 'BEWITCHING',
                'description': 'Elves are striking to behold and others have a difficult time concentrating on anything else but their beauty. Often fashion conscious, their clothing is striking and evocative, liberal with its use of lace and high of collar. But beneath this veneer lies an insidious and alien power to bend people to their whim.',
                'effect': 'Whenever you cast Magick to control minds or use the Charm Skill on others, foes must flip their results to fail to Resist its effects. However, this only works if your foe can both see and hear you.',
            },
            {
                'name': 'BEYOND THE VEIL',
                'description': 'Elves share a significant link with powers beyond mortal kith and kin and can manipulate them to their will. But, they have slowly fallen prey to the mind-bending warp and weft of the world beyond.',
                'effect': 'Whenever you fail or Critically Fail an Incantation Test, spend one Fortune Point to turn it into a Critical Success.',
            },
            {
                'name': 'DEADLY AIM',
                'description': 'The world around Elves seems to fade to a blur as they fire their bows, striking between the chinks in their foe\u2019s armor with perfection. They may pridefully (and purposefully) blind one eye with a bandana to illustrate their skills\u2026 or should they grow insane, gouge it out entirely with a spoon to prove their unyielding dedication.',
                'effect': 'Whenever you make an Attack Action or Perilous Stunt using a ranged weapon, foes must flip the results to fail to Dodge, Parry or Resist it.',
            },
            {
                'name': 'ENDURING MORTALITY',
                'description': 'Although not all Elves are immortal, some still hold that flicker of divinity within their blood, passed down from their Fey ancestry. Their features may change over these long decades, but some Elves never appear neither old nor ugly. Even horrid scars seem to accentuate their youthful and vigorous features. However, you may take upon more \u2018noble\u2019 qualities in appearance, common amongst the elders of your kindred.',
                'effect': 'You never suffer the debilitating effects of any Disease, aging or sickness \u2013 even by the hand of Magick.',
            },
            {
                'name': 'FEY TREACHERY',
                'description': 'Some Elven kindred are suspicious and deeply secretive. Like them, you can be capricious and sullen. You are always ready to spring upon interlopers without a second thought.',
                'effect': 'Your first successful Attack Action against a foe adds a 1D6 Fury Die to your Damage results. This can be used against multiple foes during combat, taking advantage of your traitorous ways!',
            },
            {
                'name': 'FIRSTBORN',
                'description': 'The Elves came to this world first, the favored children of nameless gods. Their radiant perfection has been carefully preserved in the histories of your kin through written and oral traditions. This age-long lineage has made your people distant and fickle, but it has also given them insight beyond the \u00c6theric Veil and nature of the world around them.',
                'effect': 'Whenever learning new Magicks, you always succeed at your Incantation Test. Additionally, you never have to sacrifice Reward Points to finalize the process. You can learn more in Chapter 10: Grimoire.',
            },
            {
                'name': 'KINDRED WARBAND',
                'description': 'Elves can be perceived as being particularly aloof and taciturn, sticking to their own. Contemptible as their disdain towards others may be, it is this preternatural intuition that makes Elves incredibly dangerous when fighting side-by-side.',
                'effect': 'When fighting alongside other Elves, you gain a +10 Base Chance to strike with Attack Actions and Perilous Stunts.',
            },
            {
                'name': 'LAMENT OF THE AGES',
                'description': 'Elves live many decades beyond other Ancestries, but this longevity comes at a cost. In time, the petty concerns of the mortal coil weigh too heavily upon many Elves, giving birth to a melancholy that gives way to bouts of unmitigated rage, even nihilism. Others react instinctively to this behavior with great trepidation.',
                'effect': 'Whenever combat begins, select one foe. If the foe can clearly see and hear you, they must reduce all Damage they do to you by your [FB].',
            },
            {
                'name': 'MEDITATIVE HEALING',
                'description': 'Gifted with the kindred\u2019s ability to live between the weave of the world, you have learned how to harness an inner power to mend your own wounds.',
                'effect': 'Whenever you awaken from a good night\u2019s sleep, you move one step up the Damage Condition Track positively. This means that if you were Grievously Wounded, you are now Seriously Wounded instead. Note that this does not \u2018cure\u2019 Injuries.',
            },
            {
                'name': 'NATURE\u2019S OWN',
                'description': 'Wild Elves have lived amongst the forest, beneath the jungle canopy, atop the highest mountain and even below the earth. With burrs, leaves, mud and the like clinging to their clothing, they emerge unwashed from the wilderness, acknowledging little reason to clean themselves up for civilized company.',
                'effect': 'You leave no trace of your passing in rural areas or above ground, unless discovered by Magick or a Critically Succeeded Awareness Test.',
            },
            {
                'name': 'NIGHTEYES',
                'description': 'Although Elves are not able to see completely in the dark, they can see clearly in the dim light of stars. It\u2019s evident that you\u2019re an Elf when in these conditions, as your eyes tend to flash with their own light like an animal\u2019s. This is the first sign of chaos made manifest in the Elven Ancestry. It is enough to drive dim-witted peasants to demand that \u201cthe demon be hung by their neck until the lights go out\u201d.',
                'effect': 'You can see completely in the dark above ground as if it were full daylight, provided there is starlight or moonlight in the sky.',
            },
            {
                'name': 'WARRIOR\u2019S TATTOO',
                'description': 'Intricate knots of indigo ink are painted or tattooed upon the bodies of Elven warriors, symbols of their might and prowess. Elves revel in this heritage, empowered by the victories they tell. But these same symbols make it incredibly difficult to get a job in a respectable winesink, as everyone knows the tattooed cannot be trusted with the cash till.',
                'effect': 'Add the Punishing Quality to any Martial Melee or Martial Ranged weapon you wield, and +1 to Total Damage with these same weapons.',
            },
        ],
    },
    {
        'name': 'Halfling',
        'code': 'halfling',
        'bonus': {
            'Perception': 1,
            'Agility': 1,
            'Fellowship': 1,
            'Combat': -1,
            'Intelligence': -1,
            'Brawn': -1,
        },
        'description': 'Affable and friendly, these \u2018little people\u2019 live in great pastoral communities called moots, amongst the vast beauty of the countryside. Spry and vigorous in appearance, the Halflings remind people of children \u2013 albeit grown and intelligent children \u2013 that choose to live in harmony with other races. They act as stewards to the land, working to provide for the community first and the individual last. They have no qualms about welcoming outsiders, establishing coaching stations and eateries that cater exclusively to Humans and Elves. They even have some friendly attitudes toward Ogres, as their shared love for eating makes them unlikely bedfellows. Halflings take pride in their shrewd, but fair bargaining skills, a reputation that follows them in civilized lands. For all of their apparent friendliness, Halflings are truly opportunistic, plying trust into a life of petty thievery against those they deem easy marks. It is said that there is no better burglar than a Halfling. Beware the polite Halfling urchin who claims to be a mere chimneysweep!',
        'traits': [
            {
                'name': 'BEGUILER',
                'description': 'Halfling lies are hard to tell from truth, and you can use this to your advantage. With a string of insults and chiding, you infuriate and distract your opponent.',
                'effect': 'Reference either your [FB] or [BB] for the purposes of determining Damage Threshold. Additionally, you may substitute Guile in place of any Combat-based Skill when Parrying attacks.',
            },
            {
                'name': 'CAT-LIKE REFLEXES',
                'description': 'Some say that Halflings are watched over by Abyssal demons. Those with this affectation are oftentimes shadowed by a black cat or have it as a beloved pet, \u2018found\u2019 at their doorstep as a kitten.',
                'effect': 'Whenever you fall, you may spend one Fortune Point to avoid Damage. In this case, you land on your feet, apparently unharmed. You can learn more about falling in Chapter 9: Hazards & Healing.',
            },
            {
                'name': 'CRAVEN',
                'description': 'Some Halflings are almost laughably faint-hearted, ready to bolt at a moment\u2019s notice. Cowardice has its place, particularly when a Halfling ne\u2019er-do-well wishes to keep their hide intact.',
                'effect': 'You may flip the results to succeed at Combat-based Skill Tests to Parry attacks made with melee weapons.',
            },
            {
                'name': 'FARSIGHT',
                'description': 'Whether Halflings are searching for something the size of a dormouse or making out the details of a coach laden with riches, they can clearly discern the smallest of details from half a mile away. But, should you try to exercise this ability without proper lighting, this sight become as useless as perfumery to a hog.',
                'effect': 'When attempting to discern minute details with your vision, you always succeed at Awareness Tests.',
            },
            {
                'name': 'FETTERED CHAOS',
                'description': 'The Halfling Ancestry is incredibly resilient despite its less than imposing physique. They illustrate an inexorable spiritual resistance towards the lure of Corruption and madness, a blessing given to them by their maker.',
                'effect': 'Whenever you suffer Corruption, decrease the number you gain by three (to a minimum of one). This means that if you suffer 6 Corruption, you gain 3 instead.',
            },
            {
                'name': 'FIELDWARDEN',
                'description': 'Halfling women and men are taught at a young age to wield an array of weapons to defend themselves and their homeland. When so armed, Halflings can unleash a devastating storm of death upon their enemies.',
                'effect': 'Ignore the Weak Quality of all ranged weapons you wield.',
            },
            {
                'name': 'FLEET-FOOTED',
                'description': 'In tense situations, Halflings hop madly like rabbits, being remarkably fast on their feet. This is particularly fortunate when they need to tuck and roll when attacked, but does absolutely no good when a Halfling needs to hike from one end of the shire to the mouth of a far-flung volcano.',
                'effect': 'Whenever you Charge or Run, add +6 yards to Movement.',
            },
            {
                'name': 'HIJINKS',
                'description': 'Sly in their ways, Halflings use their vexing mannerisms and general under-footedness to confound the tall folk. These pranks are meant to annoy, as Halflings love to make others an ass to their japes.',
                'effect': 'Whenever you suffer Damage from a melee weapon, spend a Fortune Point to ignore it entirely.',
            },
            {
                'name': 'KLEPTOMANIA',
                'description': 'Halflings are gifted with the ability to use illusion and sleight of hand tricks to make things disappear. Their hands may wander off on their own to nick things, only to realize later they find something stuffed in their pocket that wasn\u2019t there before!',
                'effect': 'Whenever you are in a pinch and need one object that could realistically fit into your pocket, spend one Fortune Point to automatically find it within. For instance, you could use this to produce a single silver shilling (ss) from your pockets, but not several silver shillings (ss) without spending an equal number of Fortune Points.',
            },
            {
                'name': 'LOW BLOW',
                'description': 'When cornered, a Halfling will resort to nasty tricks to fell a foe. Menfolk are known to gasp in horror whenever they bear witness to this heinous (and deliberately) painful tactic.',
                'effect': 'Whenever you make a successful Melee Attack, you force a foe to Resist a Stunning Blow. You must be Engaged with a foe in order to use a Low Blow.',
            },
            {
                'name': 'MEMENTO',
                'description': 'Most Halfling toddlers are given a precious keepsake to cherish. Typically, this is a bauble, cameo, necklace or ring \u2013 something Halflings can hold close to their hearts. This memento brings comfort and solace in the face of danger. However, other Halfling pickpockets may covet this treasure for themselves.',
                'effect': 'When carrying your memento, your Disorder\u2019s effects may be temporarily ignored for 24 hours by spending a Fortune Point. In special cases, at the GM\u2019s discretion, it may be given to another to confer its benefits.',
            },
            {
                'name': 'PINTSIZED',
                'description': 'Some Halflings, often mistaken for small children, are born a head shorter than their kinfolk. They are sometimes dubbed as pygmies or other derogatory terms born from ignorance.',
                'effect': 'Foes must flip their results to fail all Attack Actions or Perilous Stunts made with ranged weapons against you. However, you cannot wield two-handed weapons, carry a shield and must reduce your Movement by 3. Finally, you will reference \u201c1 to 10\u201d on the Height table and will have a Frail build on the Build table.',
            },
        ],
    },
    {
        'name': 'Gnome',
        'code': 'gnome',
        'bonus': {
            'Combat': -1,
            'Intelligence': 1,
            'Agility': 1,
            'Fellowship': -1,
            'Willpower': 1,
            'Brawn': -1,
        },
        'description': 'Gruesome in appearance and shorttempered in their behavior, Gnomes are a notoriously unsympathetic people. They seem to have a chip on both shoulders; one against their Dwarven neighbors for being absolute bores and the other against Elves for being pompous \u2018louchebags\u2019. In fact, it is suggested \u2013 mostly in a derogatory way - that Gnomes are the byproduct of the two aforementioned races\u2019 carnal desires. Gnomes scoff at the notion, and have been known to take to fisticuffs when such insinuations are made. By and large, Gnomes are not well-liked by any race outside of their own. Marriage is rare and their families are small. Offspring are often treated as chattel to be put to work, and love is rarely a factor when it comes to coupling. Children of such unions, should they prove to be useless, are abandoned to the forest. The only reason some Gnomes wed is to erase some great shame upon themselves, forced to make amends by marrying themselves into families they\u2019ve greatly offended. It\u2019s not to say that some couples have not grown a certain fondness for one another (for misery loves company), but mutual disgust rarely creates a productive relationship. Siblings are treated worse still, seen as bitter rivals or treacherous enemies. Gnomes are gifted, however, with a singular expertise in tinkering. This insight is likely inspired by the spark their Elven ancestors squirted into the bellies of Dwarven mothers who gave birth to the first Gnomes. But don\u2019t say it to their face. You\u2019re likely to plunge them into a tirade of misery, self-loathing and abhorrence for all that is fair or acceptable, short-sighted as they are.',
        'traits': [
            {
                'name': 'CLOCKWORKS OF WAR',
                'description': 'Telescoping muzzles, switchblade-style two-handed swords, cogdriven crossbows and folding axes are only the tip of the iceberg of what can be accomplished by modifying implements of war.',
                'effect': 'Provided you have the appropriate tools, any twohanded weapon can be modified into a compact onehanded version (which only you can wield). Despite being one-handed, it retains its original function, but now has an Encumbrance of 1.',
            },
            {
                'name': 'CRAG FIGHTING',
                'description': 'Living amongst the hills and mountains, Gnomes have adopted a particular edge in combat. Using subterfuge and guile, you cleverly outpace foes using guerilla strike tactics.',
                'effect': 'You may Maneuver after any Melee Attack for 0 Action Points.',
            },
            {
                'name': 'DENIZEN OF STONE',
                'description': 'Whenever Gnomes go to sleep, it is whispered that they turn to stone. While this seems like a wild tale, there seems to be some truth to it. Their skin oft turns a shade of grey as they rest as if all the blood had been drained from their veins!',
                'effect': 'You are never left Helpless for any reason, and thus cannot be made victim to a coup de gr\u00e2ce: your skin is turned entirely to stone as a preternatural defense mechanism whenever you\u2019re Helpless.',
            },
            {
                'name': 'DUNGEONS DEEP',
                'description': 'Gnomes are not a prodigious people. In fact, finding a living, breathing Gnome below ground is rare indeed. They pass soundlessly throughout the caverns below the earth, roaming the \u2018under dark\u2019 in solitude. Besides, who would go looking after this much-maligned race of people in the first place?',
                'effect': 'You leave no trace of your passing in underground areas or caves whatsoever, unless discovered by Magick or at a Critically Successful Awareness Test.',
            },
            {
                'name': 'ESCAPE ARTIST',
                'description': 'Gnomes are wheedling and conniving. They cannot easily be caught or detained by the law.',
                'effect': 'You can never be caught in a Chokehold and may flip the results to succeed at Coordination Tests to slip through bonds and other situations which may detain you from moving.',
            },
            {
                'name': 'GOLDBERGIAN',
                'description': 'From devising mouse trap-styled children\u2019s games to the chainreactive devices that oscillate endlessly in your workshop, you have created a number of deliberately over-engineered machines in your time. You apply this same creative genius towards many of the professional arts, albeit at the cost of being seen as a madman.',
                'effect': 'Any Skill Rank you gain in Alchemy, Counterfeit, Skulduggery and Tradecraft modifies your Base Chance by +15, instead of +10.',
            },
            {
                'name': 'HOCUS POCUS',
                'description': 'Gnomes have a penchant for manifesting sorcerous falsehoods which cannot be ignored.',
                'effect': 'Whenever a foe fails to Resist your Magicks, they Critically Fail instead.',
            },
            {
                'name': 'METROGNOME',
                'description': 'You are downright obsessive and clockwork-like in your mannerisms. Little imperfections are simply unacceptable, so meticulous and measured are your hands whenever you craft.',
                'effect': 'All trappings you craft (with exception to armor, shields and weapons) are always best-in-class, raising its resale value three times the listed price as in Chapter 7: Trappings.',
            },
            {
                'name': 'THIEVING STUNTIES',
                'description': 'These Gnomes are a hair shorter than their kin. They find it easy to hide in gardens, particularly because they have a propensity to wear red caps and fake white beards!',
                'effect': 'Foes must flip their results to fail all Attack Actions or Perilous Stunts made with ranged weapons against you. However, you cannot wield two-handed weapons, carry a shield and must reduce your Movement by 3. Finally, you will reference \u201c1 to 10\u201d on the Height table and will have a Frail build on the Build table.',
            },
            {
                'name': 'TUNNEL VISION',
                'description': 'Like their Dwarven cousins, Gnomes have especially-attuned senses below the earth. Using a preternatural sense of touch, they can \u2018 feel\u2019 their way around the underworld.',
                'effect': 'You can see completely in the dark below ground as if it were daylight, providing you are able to use your hands freely.',
            },
            {
                'name': 'UNDERFOOT',
                'description': 'Living below the world in a burrow has made Gnome backs crooked. Because of this, they hobble around like old men, not necessarily dawdling, but quickly scurrying about, beneath the line of sight for most folk.',
                'effect': 'Add +3 to your Initiative.',
            },
            {
                'name': 'WRETCHED PRANKSTER',
                'description': 'Poking fun at their personal flaws and faults in their armor, you annoy your foes to the point of weakness.',
                'effect': 'At your discretion, you may use your Guile Skill to both Dodge and Parry.',
            },
        ],
    },
    {
        'name': 'Ogre',
        'code': 'ogre',
        'bonus': {
            'Agility': -2,
            'Perception': -1,
            'Combat': 1,
            'Brawn': 2,
        },
        'description': 'The vast majority of Ogres are wandering mercenaries, people without a home whose only desires are coin and food. These strangely obtuse Humanoids give off the appearance of idiocy due to their large stature, low foreheads and jutting jawlines, but they are surprisingly smart and spiritual. Ogres are totally incorrigible, however \u2013 they are violent, boastful, clumsy, given to drunkenness and filled with greed. They harbor little sympathy for others, as they always look for an edge or a profit in their interactions with others. Their ragged clothes are composed of the scraps from defeated enemies, their rusted weapons worn with heavy use and their belts lined with dismembered Mutant heads. Ogres are individualistic and often do not like associating with other Ogres, but they do respect strength and will deal with anyone who shows even a hint of it. Some Ogres have curiously joined with Halfling society, sharing in their insatiable taste for food. However, an endless sm\u00f6rg\u00e5sbord of Halfling cookery rarely slakes their hunger for humanoid sweetmeats. Ogres will adventure with strong companions who show their worth \u2013 they have no tolerance for weaklings and will often devour those they see as holding them back. It is also quite dangerous to try and deceive an Ogre, especially a hungry one \u2013 if they do not receive their fair share of the loot, a few fingers or even a whole hand will find a new home in their massive gullets.',
        'traits': [
            {
                'name': 'BROAD-BELLIED',
                'description': 'Your staggering girth has gifted you with the ability to haul anything without breaking a sweat. Unfortunately, it also means that every Halfling you meet wants you to help them move from their old hovel to a new one.',
                'effect': 'You entirely ignore the effects of Overage, unless the value is in excess of two times your Initiative or Movement.',
            },
            {
                'name': 'CAST IRON STOMACH',
                'description': 'The most important part of an Ogre\u2019s biology is their gut. Their heavily muscled bellies contain most of their vital organs. Their stomachs are also monstrously powerful and able to digest nearly anything, a natural mutation resulting from generations of extreme gluttony.',
                'effect': 'You can gain sustenance from eating literally anything, including inanimate objects. This protects you from starvation entirely, as described in Chapter 9: Hazards & Healing.',
            },
            {
                'name': 'CRUISIN\u2019 FOR A BRUISIN\u2019',
                'description': 'Some Ogres have reaped the full benefits of their omnivorous diets from birth \u2013 mother\u2019s milk, raw meat, dirt, Elven trinkets, swamp gas, human livers and tears \u2013 and are infused with great size and physical potency.',
                'effect': 'You may reference either [BB] or [CB] with any melee weapons you wield, including those which possess the Throwing Quality.',
            },
            {
                'name': 'FRIGHTENING BELLOW',
                'description': 'Ogre lungs are nearly as powerful as Ogre stomachs. Lots of decibels are required to fully celebrate the glory of beheading a foe or gutting a fawn for a tasty treat. This gives them amazing vocal capabilities, letting them rip out massive and terrifying roars as intimidation.',
                'effect': 'Whenever you succeed at an Intimidate Test, the foes you intimidated also suffer from Stress. If it is a Critical Success, they suffer from Fear instead.',
            },
            {
                'name': 'GUT-PLATE',
                'description': 'Your great belly is covered in an outer carapace of bones and muscles. Unfortunately, it makes for an easy target. Fortunately, it protects you from most blows.',
                'effect': 'Whenever unarmored, add +2 to your Damage Threshold as if you were wearing a suit of leather armor. You also gain the benefits of the Natural Quality in these cases.',
            },
            {
                'name': 'HUNGER PANGS',
                'description': 'Ogres often forget their gustatory exploits until faced with extreme situations. Bracing flashbacks of these orgiastic meals are then triggered \u2013 mandrake root; rivers of mead; endless heaps of meat!',
                'effect': 'Whenever you successfully Resist the effects of Stress, Fear, Terror or other effects that force you to make a Resolve Test, you immediately gain the benefits of one dose of mandrake root. If this is a Critical Success, you gain the benefits of three doses instead. When under Hunger Pang\u2019s effects, you do not suffer the drawbacks normally associated with taking mandrake root.',
            },
            {
                'name': 'MIGHTY THEWS',
                'description': 'Ogres are all massive, but many possess tiny hands. However, a rarer breed has hands in proportion to the rest of their body. These mighty specimens can easily handle turning the spit over a fire on their own.',
                'effect': 'You are able to wield any two-handed melee weapon with one hand. This also means you may freely take advantage of the Adaptable Quality for weapons using one hand. Whenever you gain the benefits of the Adaptable Quality, you may add +2 to Total Damage, instead of the normal +1.',
            },
            {
                'name': 'ODD COUPLE',
                'description': 'Not many trust Ogres, but they have found an unlikely ally in Halflings. Perhaps it is their mutual love of food and alcohol, or even commiseration about being underdogs. Either way, \u2018civilized\u2019 Ogres dwell in Halfling settlements, and their attitude towards each other is more a friendly rivalry than actual pure camaraderie.',
                'effect': 'When fighting alongside Halfling allies, you gain a +10 Base Chance to strike with Attack Actions and Perilous Stunts.',
            },
            {
                'name': 'ROTGUT SPRAY',
                'description': 'Ogres have a natural predilection towards drink. Due to their almost furnace-like guts, they can ignite any alcohol they ingest to shoot it back out as a gout of flame. This is both very dangerous and quite entertaining.',
                'effect': 'After consuming an entire bottle of rotgut, you can belch it up as flaming breath. Treat this breath as a bottle bomb. However, you must immediately make a Toughness Test or become Intoxicated.',
            },
            {
                'name': 'SLAMDANCE',
                'description': 'By bringing a powerful, hammy fist downwards to crush a foe, they also let fly their flintstone-like feet. This generally puts their enemies right where they want them: on the ground, ready for skewering.',
                'effect': 'Whenever you make a successful Stunning Blow, you force a foe to Resist a Takedown as well. You must attack with weapons possessing the Pummeling or Weak Quality to utilize this Talent.',
            },
            {
                'name': 'THICK LINING',
                'description': 'Butchers, hunters and meal-preparers are some of the most important people in Ogre society. Those whose job it is to slaughter often expose themselves to the deadly natural poisons of tainted meats. Their constant work with natural poisons have made them immune to them, and some even prefer the tangy taste.',
                'effect': 'You are immune to Poisons of all types.',
            },
            {
                'name': 'WENDIGO',
                'description': 'Some Ogres in northern regions have grown protective layers of blubber fat and thick white hair grows in large tufts all over their bodies. These Ogres are often called Wendigo and they are isolationist and even a little xenophobic. However, none are better at navigating cold steppes and tundra.',
                'effect': 'You are immune from the effects of Frostbite, and automatically succeed at Toughness Tests to withstand cold weather.',
            },
        ],
    },
]