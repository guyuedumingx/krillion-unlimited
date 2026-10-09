// Maintenance utility: replace overlapping V3 prompts with distinct V4 topics.
import {readFile,writeFile} from 'node:fs/promises';
const replacements={
22:['Name a tropical fruit','Banana|Mango|Papaya|Pineapple|Guava|Passion fruit|Lychee|Dragon fruit|Jackfruit|Durian','Culinary fruit names can refer to fruits grown across several climates.','https://www.britannica.com/science/fruit-plant-reproductive-body'],
23:['Name a culinary melon variety','Watermelon|Cantaloupe|Honeydew|Galia melon|Canary melon','Culinary melons include watermelon and varieties of muskmelon.','https://www.britannica.com/plant/melon'],
24:['Name an Italian filled pasta shape','Ravioli|Tortellini|Cappelletti|Agnolotti|Mezzelune','Filled pasta encloses a filling rather than serving it only as a sauce.','https://www.barilla.com/en-us/products/pasta'],
25:['Name a fresh cheese','Ricotta|Mozzarella|Burrata|Paneer|Cottage cheese|Cream cheese|Quark','Fresh cheeses are generally eaten without a prolonged ageing stage.','https://www.britannica.com/topic/cheese'],
27:['Name a spice made from bark or an underground stem','Cinnamon|Cassia|Ginger|Turmeric|Galangal','Cinnamon comes from bark; ginger and turmeric are rhizomes.','https://www.kew.org/read-and-watch/spices'],
29:['Name a Shakespeare tragedy','Hamlet|Macbeth|Othello|King Lear|Romeo and Juliet|Julius Caesar|Coriolanus|Titus Andronicus|Antony and Cleopatra|Timon of Athens','These plays belong to Shakespeare’s tragedies rather than his comedies.','https://www.folger.edu/explore/shakespeares-works/'],
31:['Name a single-reed woodwind instrument','Clarinet|Saxophone|Bass clarinet|Contrabass clarinet|Basset clarinet|Basset horn','Single-reed woodwinds use one reed against a mouthpiece.','https://philharmonia.co.uk/resources/instruments/'],
33:['Name a character in Pride and Prejudice','Elizabeth Bennet|Mr Darcy~Fitzwilliam Darcy|Jane Bennet|Charles Bingley|Mr Bennet|Mrs Bennet|Lydia Bennet|Charlotte Lucas|Lady Catherine de Bourgh|George Wickham|Mary Bennet|Kitty Bennet','Jane Austen’s novel centres on the Bennet family and their social circle.','https://janeaustens.house/jane-austen/novels/'],
57:['Name a group 14 chemical element','Carbon|Silicon|Germanium|Tin|Lead|Flerovium','Group 14 is also known as the carbon group.','https://www.rsc.org/periodic-table']
};
let source=await readFile('src/bank.js','utf8');
// The row order defines stable q IDs. Updating the bank requires a version bump.
const start=source.indexOf('const rows = [')+'const rows = ['.length,end=source.indexOf('\n];',start);
const rows=Function('return ['+source.slice(start,end)+']')();
for(const [id,values] of Object.entries(replacements))rows[+id-1]=[rows[+id-1][0],...values];
source=source.slice(0,start)+'\n'+rows.map(r=>' '+JSON.stringify(r)).join(',\n')+source.slice(end);await writeFile('src/bank.js',source);
