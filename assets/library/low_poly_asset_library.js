import * as THREE from 'three';

export const ASSET_CATALOG = [
  { id: 'knight_hero', name: 'Knight Hero', type: 'hero', role: 'tank', animations: ['idle', 'walk', 'jump', 'attack'], tags: ['armor', 'sword', 'shield'] },
  { id: 'mage_apprentice', name: 'Mage Apprentice', type: 'hero', role: 'caster', animations: ['idle', 'walk', 'cast'], tags: ['robe', 'staff', 'spell-orb'] },
  { id: 'forest_ranger', name: 'Forest Ranger', type: 'hero', role: 'ranged', animations: ['idle', 'walk', 'attack'], tags: ['hood', 'bow', 'quiver'] },
  { id: 'sun_paladin', name: 'Sun Paladin', type: 'hero', role: 'support', animations: ['idle', 'walk', 'attack'], tags: ['hammer', 'aura', 'plate'] },
  { id: 'shadow_rogue', name: 'Shadow Rogue', type: 'hero', role: 'melee', animations: ['idle', 'walk', 'attack'], tags: ['daggers', 'cloak', 'stealth'] },
  { id: 'goblin_grunt', name: 'Goblin Grunt', type: 'monster', role: 'melee', animations: ['idle', 'walk', 'attack'], tags: ['club', 'ears', 'small'] },
  { id: 'orc_brute', name: 'Orc Brute', type: 'monster', role: 'elite', animations: ['idle', 'walk', 'attack'], tags: ['axe', 'tusks', 'large'] },
  { id: 'stone_slime', name: 'Stone Slime', type: 'monster', role: 'hazard', animations: ['idle', 'hop'], tags: ['squat', 'single-eye', 'bouncy'] },
  { id: 'bone_skeleton', name: 'Bone Skeleton', type: 'monster', role: 'undead', animations: ['idle', 'walk', 'attack'], tags: ['bones', 'rusty-sword', 'shield'] },
  { id: 'mushroom_imp', name: 'Mushroom Imp', type: 'monster', role: 'trickster', animations: ['idle', 'hop', 'attack'], tags: ['cap', 'tiny', 'forest'] },
  { id: 'dire_wolf', name: 'Dire Wolf', type: 'monster', role: 'beast', animations: ['idle', 'walk', 'attack'], tags: ['quadruped', 'fangs', 'forest'] },
  { id: 'cave_bat', name: 'Cave Bat', type: 'monster', role: 'flying', animations: ['idle', 'fly'], tags: ['wings', 'cave', 'swarm'] },
  { id: 'ember_whelp', name: 'Ember Whelp', type: 'monster', role: 'dragon', animations: ['idle', 'fly', 'attack'], tags: ['wings', 'horns', 'fire'] },
  { id: 'giant_spider', name: 'Giant Spider', type: 'monster', role: 'beast', animations: ['idle', 'walk', 'attack'], tags: ['arachnid', 'fangs', 'cave'] },
  { id: 'wild_boar', name: 'Wild Boar', type: 'monster', role: 'beast', animations: ['idle', 'walk', 'attack'], tags: ['tusks', 'forest', 'charge'] },
  { id: 'bandit_cutthroat', name: 'Bandit Cutthroat', type: 'monster', role: 'humanoid', animations: ['idle', 'walk', 'attack'], tags: ['dagger', 'mask', 'road'] },
  { id: 'cultist_acolyte', name: 'Cultist Acolyte', type: 'monster', role: 'caster', animations: ['idle', 'walk', 'cast'], tags: ['robe', 'ritual', 'staff'] },
  { id: 'restless_ghost', name: 'Restless Ghost', type: 'monster', role: 'undead', animations: ['idle', 'fly', 'attack'], tags: ['spirit', 'float', 'haunt'] },
  { id: 'angry_treant', name: 'Angry Treant', type: 'monster', role: 'guardian', animations: ['idle', 'walk', 'attack'], tags: ['tree', 'branches', 'forest'] },
  { id: 'minotaur_guard', name: 'Minotaur Guard', type: 'monster', role: 'elite', animations: ['idle', 'walk', 'attack'], tags: ['horns', 'axe', 'labyrinth'] },
  { id: 'cave_troll', name: 'Cave Troll', type: 'monster', role: 'brute', animations: ['idle', 'walk', 'attack'], tags: ['club', 'large', 'cave'] },
  { id: 'venom_serpent', name: 'Venom Serpent', type: 'monster', role: 'beast', animations: ['idle', 'walk', 'attack'], tags: ['snake', 'fangs', 'poison'] },
  { id: 'iron_golem', name: 'Iron Golem', type: 'monster', role: 'construct', animations: ['idle', 'walk', 'attack'], tags: ['metal', 'construct', 'heavy'] },
  { id: 'village_merchant', name: 'Village Merchant', type: 'npc', role: 'shopkeeper', animations: ['idle', 'wave'], tags: ['pack', 'coin', 'friendly'] },
  { id: 'town_blacksmith', name: 'Town Blacksmith', type: 'npc', role: 'crafter', animations: ['idle', 'work'], tags: ['apron', 'hammer', 'anvil'] },
  { id: 'quest_elder', name: 'Quest Elder', type: 'npc', role: 'quest-giver', animations: ['idle', 'wave'], tags: ['staff', 'robe', 'village'] },
  { id: 'pine_tree', name: 'Pine Tree', type: 'environment', role: 'foliage', animations: ['idle'], tags: ['tree', 'forest', 'prop'] },
  { id: 'rock_cluster', name: 'Rock Cluster', type: 'environment', role: 'terrain', animations: ['idle'], tags: ['rocks', 'terrain', 'prop'] },
  { id: 'wooden_crate', name: 'Wooden Crate', type: 'environment', role: 'container', animations: ['idle'], tags: ['crate', 'loot', 'prop'] },
  { id: 'campfire', name: 'Campfire', type: 'environment', role: 'vfx-prop', animations: ['idle', 'flame'], tags: ['fire', 'light', 'camp'] },
  { id: 'ruin_arch', name: 'Ruin Arch', type: 'environment', role: 'structure', animations: ['idle'], tags: ['stone', 'ruins', 'structure'] },
  { id: 'forest_clearing', name: 'Forest Clearing Kit', type: 'environment', role: 'scene-kit', animations: ['idle'], tags: ['trees', 'rocks', 'campfire'] },
  { id: 'dungeon_room', name: 'Dungeon Room Kit', type: 'environment', role: 'scene-kit', animations: ['idle'], tags: ['walls', 'torches', 'crate'] }
];

const mats = (() => {
  const m = (color, opts = {}) => new THREE.MeshStandardMaterial({ color, roughness: .82, metalness: 0, flatShading: true, ...opts });
  return {
    skin: m(0xd8a06f), green: m(0x63a85f), darkGreen: m(0x2f6d49), purple: m(0x6851b8), deepPurple: m(0x33214f),
    blue: m(0x2459b9), teal: m(0x35a8a8), red: m(0xb53030), gold: m(0xf8c94b, { metalness: .25, roughness: .55 }),
    steel: m(0xbfc9d9, { metalness: .45, roughness: .7 }), darkSteel: m(0x566276, { metalness: .25 }),
    leather: m(0x7a4a26), wood: m(0x7b4d2a), bone: m(0xd7cfb2), black: m(0x08090d),
    cloth: m(0x394769), brown: m(0x8a5a35), mushroom: m(0xc54b58), white: m(0xf1ead6), stone: m(0x777f8e),
    stoneDark: m(0x3d4655), grass: m(0x2f7d52), grassDark: m(0x245b42), orange: m(0xff8a2a, { emissive: 0x7a2500, emissiveIntensity: .25 }),
    yellow: m(0xffd65a, { emissive: 0x6f4b00, emissiveIntensity: .35 }), shadow: m(0x171827), wolf: m(0x4f5968), bat: m(0x303248), ghost: m(0x9fd6ff, { transparent: true, opacity: .74, emissive: 0x2c77aa, emissiveIntensity: .22 }), iron: m(0x8d98a8, { metalness: .5, roughness: .65 }), bark: m(0x6b4a2c), poison: m(0x7ed957, { emissive: 0x1c6b22, emissiveIntensity: .18 })
  };
})();

const box = (w, h, d) => new THREE.BoxGeometry(w, h, d, 1, 1, 1);
const cyl = (r1, r2, h, s = 6) => new THREE.CylinderGeometry(r1, r2, h, s, 1, false);
const cone = (r, h, s = 6) => new THREE.ConeGeometry(r, h, s, 1, false);
const sphere = (r, w = 8, h = 5) => new THREE.SphereGeometry(r, w, h);

function mesh(parent, name, geo, mat, pos = [0,0,0], rot = [0,0,0], scale = [1,1,1]) {
  const m = new THREE.Mesh(geo, mat);
  m.name = name;
  m.position.set(...pos);
  m.rotation.set(...rot);
  m.scale.set(...scale);
  m.castShadow = true;
  m.receiveShadow = true;
  parent.add(m);
  return m;
}

function baseGroup(id, scale = 1, type = 'asset') {
  const g = new THREE.Group();
  g.name = id;
  g.scale.setScalar(scale);
  g.userData.assetId = id;
  g.userData.assetType = type;
  g.userData.baseScale = scale;
  g.userData.animate = (time, delta = 0, animation = 'idle') => animateAsset(g, animation, time, delta);
  return g;
}

function humanoidCore(g, bodyMat, headMat = mats.skin, opts = {}) {
  const bootMat = opts.bootMat || mats.darkSteel;
  mesh(g, 'left_boot', box(.28,.18,.42), bootMat, [-.22,.09,.03]);
  mesh(g, 'right_boot', box(.28,.18,.42), bootMat, [.22,.09,.03]);
  mesh(g, 'left_leg', cyl(.11,.13,.58,6), bodyMat, [-.22,.46,0]);
  mesh(g, 'right_leg', cyl(.11,.13,.58,6), bodyMat, [.22,.46,0]);
  mesh(g, 'torso', cyl(.39,.48,.86,6), bodyMat, [0,1.1,0]);
  mesh(g, 'head', sphere(.28,8,5), headMat, [0,1.75,0]);
}

function addHumanoidArms(g, mat, spread = .42) {
  mesh(g, 'left_arm', cyl(.09,.12,.62,6), mat, [-.48,1.1,.08], [0,0,-spread]);
  mesh(g, 'right_arm', cyl(.09,.12,.62,6), mat, [.48,1.1,.08], [0,0,spread]);
}

export function createKnightHero() {
  const g = baseGroup('knight_hero', .95, 'hero');
  humanoidCore(g, mats.steel, mats.steel);
  addHumanoidArms(g, mats.darkSteel, .35);
  mesh(g, 'blue_tabard', box(.44,.72,.055), mats.blue, [0,1.06,.36]);
  mesh(g, 'visor', box(.36,.07,.035), mats.black, [0,1.8,.28]);
  mesh(g, 'helmet_peak', cone(.28,.24,7), mats.steel, [0,2.08,0]);
  mesh(g, 'sword', box(.08,.92,.04), mats.steel, [.68,1.24,.12], [0,0,-.22]);
  mesh(g, 'shield', cyl(.32,.3,.08,8), mats.blue, [-.66,1.05,.18], [Math.PI/2,0,0]);
  return g;
}

export function createMageApprentice() {
  const g = baseGroup('mage_apprentice', .95, 'hero');
  humanoidCore(g, mats.deepPurple, mats.skin);
  mesh(g, 'wide_wizard_hat_brim', cyl(.5,.55,.08,10), mats.purple, [0,2.0,0]);
  mesh(g, 'wizard_hat_cone', cone(.36,.72,8), mats.purple, [0,2.38,0], [0,0,.12]);
  mesh(g, 'gold_hat_band', cyl(.37,.39,.06,8), mats.gold, [0,2.1,0]);
  addHumanoidArms(g, mats.deepPurple, .34);
  mesh(g, 'staff', cyl(.035,.045,1.65,6), mats.wood, [.72,1.0,.1], [0,0,.12]);
  mesh(g, 'staff_crystal', sphere(.16,7,4), mats.teal, [.83,1.86,.1]);
  mesh(g, 'floating_spell_orb', sphere(.12,7,4), mats.gold, [-.62,1.55,.18]);
  return g;
}

export function createForestRanger() {
  const g = baseGroup('forest_ranger', .95, 'hero');
  humanoidCore(g, mats.darkGreen, mats.skin);
  mesh(g, 'green_hood', cone(.34,.44,7), mats.darkGreen, [0,2.0,0], [0,0,Math.PI]);
  mesh(g, 'cloak', box(.82,1.05,.08), mats.green, [0,.98,-.31], [-.18,0,0]);
  addHumanoidArms(g, mats.green, .5);
  mesh(g, 'bow_curve_top', cyl(.025,.035,.88,6), mats.wood, [.78,1.42,.12], [0,0,.34]);
  mesh(g, 'bow_curve_bottom', cyl(.025,.035,.88,6), mats.wood, [.78,.82,.12], [0,0,-.34]);
  mesh(g, 'bow_string', box(.025,1.32,.025), mats.white, [.66,1.12,.13]);
  mesh(g, 'quiver', cyl(.14,.16,.58,6), mats.leather, [-.36,1.25,-.34], [.42,0,.18]);
  for (let i=0;i<4;i++) mesh(g, `arrow_${i}`, cyl(.012,.012,.48,5), mats.wood, [-.42+i*.05,1.5,-.45], [.42,0,.18]);
  return g;
}

export function createSunPaladin() {
  const g = baseGroup('sun_paladin', .98, 'hero');
  humanoidCore(g, mats.gold, mats.skin, { bootMat: mats.steel });
  addHumanoidArms(g, mats.gold, .32);
  mesh(g, 'white_cape', box(.74,1.0,.08), mats.white, [0,.98,-.32], [-.14,0,0]);
  mesh(g, 'sun_halo', cyl(.33,.33,.035,12), mats.gold, [0,2.12,-.06], [Math.PI/2,0,0]);
  mesh(g, 'warhammer_handle', cyl(.04,.05,.88,6), mats.wood, [.62,1.02,.1], [0,0,-.45]);
  mesh(g, 'warhammer_head', box(.38,.2,.2), mats.steel, [.82,1.32,.1], [0,0,-.45]);
  return g;
}

export function createShadowRogue() {
  const g = baseGroup('shadow_rogue', .9, 'hero');
  humanoidCore(g, mats.shadow, mats.skin);
  addHumanoidArms(g, mats.shadow, .65);
  mesh(g, 'dark_hood', cone(.32,.42,7), mats.black, [0,2.0,0], [0,0,Math.PI]);
  mesh(g, 'short_cloak', box(.62,.7,.08), mats.black, [0,1.02,-.31], [-.22,0,0]);
  mesh(g, 'left_dagger', box(.055,.48,.035), mats.steel, [-.62,.96,.18], [0,0,.35]);
  mesh(g, 'right_dagger', box(.055,.48,.035), mats.steel, [.62,.96,.18], [0,0,-.35]);
  return g;
}

export function createGoblinGrunt() {
  const g = baseGroup('goblin_grunt', .85, 'monster');
  mesh(g, 'body', cyl(.34,.45,.72,6), mats.darkGreen, [0,.65,0]);
  mesh(g, 'head', sphere(.32,8,5), mats.green, [0,1.17,0]);
  mesh(g, 'left_ear', cone(.13,.36,5), mats.green, [-.34,1.2,0], [0,0,Math.PI/2]);
  mesh(g, 'right_ear', cone(.13,.36,5), mats.green, [.34,1.2,0], [0,0,-Math.PI/2]);
  mesh(g, 'angry_eye_left', box(.08,.04,.025), mats.gold, [-.1,1.22,.29], [0,0,-.22]);
  mesh(g, 'angry_eye_right', box(.08,.04,.025), mats.gold, [.1,1.22,.29], [0,0,.22]);
  mesh(g, 'club_handle', cyl(.04,.05,.8,6), mats.wood, [.53,.72,.08], [0,0,-.55]);
  mesh(g, 'club_head', cyl(.13,.18,.34,6), mats.wood, [.72,1.08,.08], [0,0,-.55]);
  mesh(g, 'loincloth', box(.36,.28,.08), mats.leather, [0,.43,.28]);
  return g;
}

export function createOrcBrute() {
  const g = baseGroup('orc_brute', 1.15, 'monster');
  humanoidCore(g, mats.darkGreen, mats.green, { bootMat: mats.leather });
  addHumanoidArms(g, mats.darkGreen, .2);
  mesh(g, 'left_tusk', cone(.035,.18,5), mats.bone, [-.09,1.62,.25], [Math.PI/2,0,0]);
  mesh(g, 'right_tusk', cone(.035,.18,5), mats.bone, [.09,1.62,.25], [Math.PI/2,0,0]);
  mesh(g, 'shoulder_spike_left', cone(.12,.28,5), mats.bone, [-.42,1.43,0], [0,0,Math.PI/2]);
  mesh(g, 'shoulder_spike_right', cone(.12,.28,5), mats.bone, [.42,1.43,0], [0,0,-Math.PI/2]);
  mesh(g, 'axe_handle', cyl(.04,.05,1.05,6), mats.wood, [.72,1.1,.1], [0,0,-.42]);
  mesh(g, 'axe_head', box(.38,.34,.08), mats.steel, [.95,1.45,.1], [0,0,-.42]);
  return g;
}

export function createStoneSlime() {
  const g = baseGroup('stone_slime', 1, 'monster');
  mesh(g, 'squat_slime_body', sphere(.58,9,5), mats.stone, [0,.5,0], [0,0,0], [1.18,.65,1]);
  mesh(g, 'single_eye', sphere(.13,8,4), mats.white, [0,.67,.48]);
  mesh(g, 'pupil', sphere(.055,8,4), mats.black, [0,.67,.59]);
  mesh(g, 'crack_1', box(.36,.035,.025), mats.darkSteel, [-.12,.42,.55], [0,0,.35]);
  mesh(g, 'crack_2', box(.26,.03,.025), mats.darkSteel, [.19,.32,.48], [0,0,-.42]);
  return g;
}

export function createBoneSkeleton() {
  const g = baseGroup('bone_skeleton', .95, 'monster');
  mesh(g, 'skull', sphere(.27,8,5), mats.bone, [0,1.75,0]);
  mesh(g, 'jaw', box(.32,.12,.22), mats.bone, [0,1.56,.03]);
  mesh(g, 'ribcage', cyl(.34,.38,.56,7), mats.bone, [0,1.08,0]);
  mesh(g, 'pelvis', box(.52,.18,.28), mats.bone, [0,.66,0]);
  mesh(g, 'left_leg_bone', cyl(.055,.07,.72,6), mats.bone, [-.18,.31,0]);
  mesh(g, 'right_leg_bone', cyl(.055,.07,.72,6), mats.bone, [.18,.31,0]);
  mesh(g, 'left_arm_bone', cyl(.045,.06,.72,6), mats.bone, [-.45,1.08,0], [0,0,-.45]);
  mesh(g, 'right_arm_bone', cyl(.045,.06,.72,6), mats.bone, [.45,1.08,0], [0,0,.45]);
  mesh(g, 'rusty_sword', box(.1,.9,.045), mats.darkSteel, [.72,1.15,.12], [0,0,-.18]);
  mesh(g, 'round_shield', cyl(.28,.28,.08,8), mats.stone, [-.68,1.05,.16], [Math.PI/2,0,0]);
  return g;
}

export function createMushroomImp() {
  const g = baseGroup('mushroom_imp', .82, 'monster');
  mesh(g, 'tiny_body', cyl(.22,.32,.58,6), mats.brown, [0,.45,0]);
  mesh(g, 'mushroom_cap', sphere(.46,9,4), mats.mushroom, [0,.94,0], [0,0,0], [1.15,.42,1.15]);
  mesh(g, 'cap_spot_1', sphere(.07,6,3), mats.white, [-.18,1.03,.24]);
  mesh(g, 'cap_spot_2', sphere(.055,6,3), mats.white, [.12,1.08,.25]);
  mesh(g, 'glow_eye_left', box(.06,.035,.025), mats.gold, [-.08,.62,.23]);
  mesh(g, 'glow_eye_right', box(.06,.035,.025), mats.gold, [.08,.62,.23]);
  mesh(g, 'twig_spear', cyl(.026,.034,.92,6), mats.wood, [.44,.72,.08], [0,0,-.35]);
  return g;
}

export function createDireWolf() {
  const g = baseGroup('dire_wolf', .95, 'monster');
  mesh(g, 'body', box(.95,.42,.36), mats.wolf, [0,.62,0]);
  mesh(g, 'chest', sphere(.27,7,4), mats.wolf, [.42,.72,.02], [0,0,0], [1,.95,.8]);
  mesh(g, 'head', sphere(.25,7,4), mats.wolf, [.82,.86,.03], [0,0,0], [1.1,.8,.8]);
  mesh(g, 'snout', box(.28,.13,.16), mats.darkSteel, [1.04,.83,.04]);
  mesh(g, 'left_ear', cone(.09,.24,5), mats.wolf, [.72,1.08,-.09]);
  mesh(g, 'right_ear', cone(.09,.24,5), mats.wolf, [.72,1.08,.15]);
  for (const [name,x,z] of [['front_left',.42,-.16],['front_right',.42,.16],['back_left',-.38,-.16],['back_right',-.38,.16]]) mesh(g, `${name}_leg`, cyl(.055,.075,.48,5), mats.wolf, [x,.28,z]);
  mesh(g, 'tail', cone(.08,.55,6), mats.wolf, [-.58,.73,0], [0,0,Math.PI/2]);
  return g;
}

export function createCaveBat() {
  const g = baseGroup('cave_bat', .9, 'monster');
  mesh(g, 'body', sphere(.23,7,4), mats.bat, [0,.9,0], [0,0,0], [1,.9,.72]);
  mesh(g, 'head', sphere(.16,7,4), mats.bat, [0,1.12,.18]);
  mesh(g, 'left_wing', box(.7,.055,.32), mats.bat, [-.48,.92,0], [0,0,.28]);
  mesh(g, 'right_wing', box(.7,.055,.32), mats.bat, [.48,.92,0], [0,0,-.28]);
  mesh(g, 'left_ear', cone(.055,.16,5), mats.bat, [-.06,1.28,.18]);
  mesh(g, 'right_ear', cone(.055,.16,5), mats.bat, [.06,1.28,.18]);
  return g;
}

export function createEmberWhelp() {
  const g = baseGroup('ember_whelp', .9, 'monster');
  mesh(g, 'body', sphere(.34,8,5), mats.red, [0,.74,0], [0,0,0], [1.25,.8,.85]);
  mesh(g, 'head', sphere(.24,8,5), mats.red, [.5,.98,.1]);
  mesh(g, 'snout', box(.24,.12,.16), mats.red, [.7,.96,.12]);
  mesh(g, 'left_wing', box(.62,.055,.38), mats.orange, [-.18,1.0,-.34], [.1,.25,.35]);
  mesh(g, 'right_wing', box(.62,.055,.38), mats.orange, [-.18,1.0,.34], [-.1,-.25,-.35]);
  mesh(g, 'tail', cone(.09,.72,6), mats.red, [-.52,.74,0], [0,0,Math.PI/2]);
  mesh(g, 'horn_left', cone(.045,.18,5), mats.gold, [.43,1.18,.0], [0,0,.3]);
  mesh(g, 'horn_right', cone(.045,.18,5), mats.gold, [.58,1.17,.18], [0,0,-.3]);
  return g;
}


export function createGiantSpider() {
  const g = baseGroup('giant_spider', .92, 'monster');
  mesh(g, 'body', sphere(.36,8,5), mats.black, [0,.45,0], [0,0,0], [1.25,.72,1]);
  mesh(g, 'abdomen', sphere(.42,8,5), mats.shadow, [-.38,.45,0], [0,0,0], [1.25,.82,1.05]);
  mesh(g, 'head', sphere(.24,7,4), mats.black, [.36,.48,0]);
  mesh(g, 'left_fang', cone(.035,.2,5), mats.bone, [.55,.4,-.08], [Math.PI,0,0]);
  mesh(g, 'right_fang', cone(.035,.2,5), mats.bone, [.55,.4,.08], [Math.PI,0,0]);
  for (let i=0;i<4;i++) {
    const z = -.36 + i*.24;
    mesh(g, `left_leg_${i}`, cyl(.025,.035,.72,5), mats.black, [-.08,.37,z], [Math.PI/2,0,.78]);
    mesh(g, `right_leg_${i}`, cyl(.025,.035,.72,5), mats.black, [-.08,.37,z], [Math.PI/2,0,-.78]);
  }
  return g;
}

export function createWildBoar() {
  const g = baseGroup('wild_boar', .95, 'monster');
  mesh(g, 'body', sphere(.42,8,5), mats.brown, [0,.52,0], [0,0,0], [1.45,.82,.9]);
  mesh(g, 'head', sphere(.28,7,4), mats.brown, [.58,.62,0]);
  mesh(g, 'snout', box(.25,.16,.22), mats.leather, [.8,.58,0]);
  mesh(g, 'left_tusk', cone(.035,.22,5), mats.bone, [.85,.55,-.1], [Math.PI/2,0,0]);
  mesh(g, 'right_tusk', cone(.035,.22,5), mats.bone, [.85,.55,.1], [Math.PI/2,0,0]);
  for (const [name,x,z] of [['front_left',.38,-.16],['front_right',.38,.16],['back_left',-.4,-.16],['back_right',-.4,.16]]) mesh(g, `${name}_leg`, cyl(.055,.075,.42,5), mats.brown, [x,.24,z]);
  mesh(g, 'bristle_mohawk', box(.75,.08,.08), mats.black, [-.08,.9,0], [0,0,.05]);
  return g;
}

export function createBanditCutthroat() {
  const g = baseGroup('bandit_cutthroat', .94, 'monster');
  humanoidCore(g, mats.leather, mats.skin, { bootMat: mats.black });
  addHumanoidArms(g, mats.leather, .52);
  mesh(g, 'black_mask', box(.34,.09,.035), mats.black, [0,1.78,.27]);
  mesh(g, 'red_sash', box(.52,.12,.06), mats.red, [0,.98,.34], [0,0,.12]);
  mesh(g, 'curved_dagger', box(.06,.42,.035), mats.steel, [.62,.96,.16], [0,0,-.45]);
  return g;
}

export function createCultistAcolyte() {
  const g = baseGroup('cultist_acolyte', .94, 'monster');
  humanoidCore(g, mats.deepPurple, mats.skin, { bootMat: mats.black });
  addHumanoidArms(g, mats.deepPurple, .25);
  mesh(g, 'deep_hood', cone(.34,.46,7), mats.black, [0,2.0,0], [0,0,Math.PI]);
  mesh(g, 'ritual_staff', cyl(.03,.04,1.28,6), mats.wood, [.58,.95,.1], [0,0,.12]);
  mesh(g, 'skull_totem', sphere(.13,7,4), mats.bone, [.64,1.66,.1], [0,0,0], [1,.8,.9]);
  mesh(g, 'purple_orb', sphere(.11,7,4), mats.purple, [-.5,1.36,.18]);
  return g;
}

export function createRestlessGhost() {
  const g = baseGroup('restless_ghost', .95, 'monster');
  mesh(g, 'ghost_body', cone(.42,1.3,8), mats.ghost, [0,.78,0], [Math.PI,0,0]);
  mesh(g, 'ghost_head', sphere(.28,8,5), mats.ghost, [0,1.42,0]);
  mesh(g, 'left_eye', sphere(.045,6,3), mats.blue, [-.09,1.46,.24]);
  mesh(g, 'right_eye', sphere(.045,6,3), mats.blue, [.09,1.46,.24]);
  mesh(g, 'left_wisp_arm', cone(.06,.56,6), mats.ghost, [-.42,1.0,0], [0,0,-.85]);
  mesh(g, 'right_wisp_arm', cone(.06,.56,6), mats.ghost, [.42,1.0,0], [0,0,.85]);
  return g;
}

export function createAngryTreant() {
  const g = baseGroup('angry_treant', 1.08, 'monster');
  mesh(g, 'trunk_body', cyl(.32,.48,1.35,7), mats.bark, [0,.78,0]);
  mesh(g, 'leaf_crown', sphere(.42,8,5), mats.grassDark, [0,1.6,0], [0,0,0], [1.15,.8,1]);
  mesh(g, 'left_branch_arm', cyl(.055,.09,.86,6), mats.bark, [-.48,.98,0], [0,0,-.75]);
  mesh(g, 'right_branch_arm', cyl(.055,.09,.86,6), mats.bark, [.48,.98,0], [0,0,.75]);
  mesh(g, 'left_root', cone(.08,.45,6), mats.bark, [-.22,.1,.08], [0,0,Math.PI]);
  mesh(g, 'right_root', cone(.08,.45,6), mats.bark, [.22,.1,.08], [0,0,Math.PI]);
  mesh(g, 'angry_eye_left', box(.08,.035,.025), mats.yellow, [-.1,1.2,.31], [0,0,-.18]);
  mesh(g, 'angry_eye_right', box(.08,.035,.025), mats.yellow, [.1,1.2,.31], [0,0,.18]);
  return g;
}

export function createMinotaurGuard() {
  const g = baseGroup('minotaur_guard', 1.18, 'monster');
  humanoidCore(g, mats.brown, mats.brown, { bootMat: mats.leather });
  addHumanoidArms(g, mats.brown, .2);
  mesh(g, 'bull_snout', box(.28,.16,.22), mats.leather, [0,1.68,.25]);
  mesh(g, 'left_horn', cone(.055,.42,6), mats.bone, [-.22,1.92,0], [0,0,Math.PI/2]);
  mesh(g, 'right_horn', cone(.055,.42,6), mats.bone, [.22,1.92,0], [0,0,-Math.PI/2]);
  mesh(g, 'labrys_handle', cyl(.04,.05,1.12,6), mats.wood, [.7,1.08,.1], [0,0,-.3]);
  mesh(g, 'labrys_head', box(.48,.32,.09), mats.steel, [.86,1.48,.1], [0,0,-.3]);
  return g;
}

export function createCaveTroll() {
  const g = baseGroup('cave_troll', 1.24, 'monster');
  humanoidCore(g, mats.stone, mats.green, { bootMat: mats.brown });
  addHumanoidArms(g, mats.stone, .18);
  mesh(g, 'big_nose', cone(.08,.22,6), mats.green, [0,1.74,.28], [Math.PI/2,0,0]);
  mesh(g, 'club', cyl(.08,.16,1.05,7), mats.wood, [.72,1.1,.1], [0,0,-.42]);
  mesh(g, 'shoulder_hide', box(.86,.18,.5), mats.leather, [0,1.44,0]);
  return g;
}

export function createVenomSerpent() {
  const g = baseGroup('venom_serpent', .98, 'monster');
  for (let i=0;i<7;i++) mesh(g, `body_segment_${i}`, sphere(.2,7,4), i%2 ? mats.darkGreen : mats.poison, [-.6+i*.2,.25+Math.sin(i*.8)*.04,Math.sin(i*.7)*.12], [0,0,0], [1.18,.72,.9]);
  mesh(g, 'head', sphere(.26,7,4), mats.poison, [.82,.34,.03], [0,0,0], [1.1,.75,.9]);
  mesh(g, 'left_fang', cone(.028,.18,5), mats.bone, [.98,.28,-.07], [Math.PI,0,0]);
  mesh(g, 'right_fang', cone(.028,.18,5), mats.bone, [.98,.28,.12], [Math.PI,0,0]);
  return g;
}

export function createIronGolem() {
  const g = baseGroup('iron_golem', 1.2, 'monster');
  mesh(g, 'torso', box(.7,.82,.45), mats.iron, [0,1.0,0]);
  mesh(g, 'head', box(.42,.34,.34), mats.iron, [0,1.62,0]);
  mesh(g, 'left_arm', box(.22,.78,.24), mats.iron, [-.58,.98,0]);
  mesh(g, 'right_arm', box(.22,.78,.24), mats.iron, [.58,.98,0]);
  mesh(g, 'left_leg', box(.24,.62,.26), mats.iron, [-.22,.32,0]);
  mesh(g, 'right_leg', box(.24,.62,.26), mats.iron, [.22,.32,0]);
  mesh(g, 'core', sphere(.12,7,4), mats.orange, [0,1.05,.24]);
  return g;
}

export function createVillageMerchant() {
  const g = baseGroup('village_merchant', .95, 'npc');
  humanoidCore(g, mats.cloth, mats.skin);
  mesh(g, 'merchant_hat', cyl(.32,.38,.22,8), mats.brown, [0,2.02,0]);
  mesh(g, 'backpack', box(.56,.72,.28), mats.leather, [0,1.12,-.36]);
  mesh(g, 'coin_pouch', sphere(.15,6,4), mats.gold, [.36,.88,.28], [0,0,0], [1,.8,.45]);
  addHumanoidArms(g, mats.cloth, .32);
  return g;
}

export function createTownBlacksmith() {
  const g = baseGroup('town_blacksmith', .98, 'npc');
  humanoidCore(g, mats.brown, mats.skin);
  mesh(g, 'leather_apron', box(.55,.82,.06), mats.leather, [0,1.02,.31]);
  mesh(g, 'beard', cone(.23,.34,7), mats.black, [0,1.52,.24], [Math.PI,0,0]);
  addHumanoidArms(g, mats.brown, .28);
  mesh(g, 'hammer_handle', cyl(.035,.04,.72,6), mats.wood, [.56,1.0,.1], [0,0,-.65]);
  mesh(g, 'hammer_head', box(.36,.16,.16), mats.steel, [.74,1.24,.1], [0,0,-.65]);
  mesh(g, 'tiny_anvil', box(.58,.22,.34), mats.darkSteel, [-.72,.43,.06]);
  mesh(g, 'anvil_base', box(.34,.28,.24), mats.darkSteel, [-.72,.2,.06]);
  return g;
}

export function createQuestElder() {
  const g = baseGroup('quest_elder', .94, 'npc');
  humanoidCore(g, mats.white, mats.skin, { bootMat: mats.brown });
  addHumanoidArms(g, mats.white, .24);
  mesh(g, 'long_beard', cone(.2,.48,7), mats.white, [0,1.43,.25], [Math.PI,0,0]);
  mesh(g, 'elder_staff', cyl(.035,.04,1.45,6), mats.wood, [.58,.92,.1], [0,0,.1]);
  mesh(g, 'staff_ring', cyl(.11,.11,.025,8), mats.gold, [.65,1.66,.1], [Math.PI/2,0,0]);
  return g;
}

export function createPineTree() {
  const g = baseGroup('pine_tree', 1, 'environment');
  mesh(g, 'trunk', cyl(.13,.22,1.15,6), mats.wood, [0,.55,0]);
  mesh(g, 'lower_boughs', cone(.72,.95,7), mats.grassDark, [0,1.1,0]);
  mesh(g, 'middle_boughs', cone(.55,.82,7), mats.grass, [0,1.55,0]);
  mesh(g, 'top_boughs', cone(.38,.66,7), mats.grassDark, [0,1.95,0]);
  return g;
}

export function createRockCluster() {
  const g = baseGroup('rock_cluster', 1, 'environment');
  mesh(g, 'rock_large', sphere(.38,7,4), mats.stone, [-.18,.28,0], [0,0,0], [1.2,.72,.95]);
  mesh(g, 'rock_medium', sphere(.28,7,4), mats.stoneDark, [.32,.2,.12], [0,0,0], [1,.7,.8]);
  mesh(g, 'rock_small', sphere(.18,7,4), mats.stone, [.08,.12,-.32], [0,0,0], [1.1,.65,.9]);
  return g;
}

export function createWoodenCrate() {
  const g = baseGroup('wooden_crate', 1, 'environment');
  mesh(g, 'crate_box', box(.72,.72,.72), mats.wood, [0,.36,0]);
  mesh(g, 'crate_band_h', box(.78,.08,.78), mats.leather, [0,.36,0]);
  mesh(g, 'crate_band_v', box(.08,.78,.78), mats.leather, [0,.36,0]);
  return g;
}

export function createCampfire() {
  const g = baseGroup('campfire', 1, 'environment');
  for (let i=0;i<5;i++) {
    const a = i / 5 * Math.PI * 2;
    mesh(g, `stone_${i}`, sphere(.13,6,3), mats.stone, [Math.cos(a)*.42,.11,Math.sin(a)*.42], [0,0,0], [1,.55,1]);
  }
  mesh(g, 'log_a', cyl(.055,.07,.78,6), mats.wood, [0,.16,0], [Math.PI/2,0,.75]);
  mesh(g, 'log_b', cyl(.055,.07,.78,6), mats.wood, [0,.18,0], [Math.PI/2,0,-.75]);
  mesh(g, 'flame_outer', cone(.28,.72,7), mats.orange, [0,.55,0]);
  mesh(g, 'flame_inner', cone(.16,.5,7), mats.yellow, [0,.58,.03]);
  return g;
}

export function createRuinArch() {
  const g = baseGroup('ruin_arch', 1, 'environment');
  mesh(g, 'left_column', box(.34,1.55,.36), mats.stone, [-.55,.78,0]);
  mesh(g, 'right_column', box(.34,1.35,.36), mats.stone, [.55,.68,0]);
  mesh(g, 'top_lintel', box(1.42,.28,.4), mats.stone, [0,1.55,0], [0,0,.04]);
  mesh(g, 'fallen_block', box(.48,.22,.35), mats.stoneDark, [.12,.12,.48], [0,.25,.2]);
  return g;
}

export function createForestClearing() {
  const g = baseGroup('forest_clearing', 1, 'environment');
  mesh(g, 'ground_disc', cyl(2.2,2.4,.08,12), mats.grass, [0,-.04,0]);
  for (let i=0;i<5;i++) {
    const tree = createPineTree();
    const a = i / 5 * Math.PI * 2;
    tree.position.set(Math.cos(a)*1.75, 0, Math.sin(a)*1.75);
    tree.scale.setScalar(.55 + (i%2)*.15);
    g.add(tree);
  }
  const fire = createCampfire(); fire.scale.setScalar(.55); fire.position.set(.2,0,.15); g.add(fire);
  return g;
}

export function createDungeonRoom() {
  const g = baseGroup('dungeon_room', 1, 'environment');
  mesh(g, 'floor', box(3.4,.08,3.4), mats.stoneDark, [0,0,0]);
  mesh(g, 'back_wall', box(3.4,1.2,.18), mats.stone, [0,.6,-1.6]);
  mesh(g, 'left_wall', box(.18,1.0,3.2), mats.stone, [-1.6,.5,0]);
  mesh(g, 'right_wall', box(.18,1.0,3.2), mats.stone, [1.6,.5,0]);
  const crate = createWoodenCrate(); crate.scale.setScalar(.45); crate.position.set(-.82,.04,.55); g.add(crate);
  const arch = createRuinArch(); arch.scale.setScalar(.58); arch.position.set(.55,.04,-1.42); g.add(arch);
  return g;
}

export function createAssetById(id) {
  const factories = {
    knight_hero: createKnightHero,
    mage_apprentice: createMageApprentice,
    forest_ranger: createForestRanger,
    sun_paladin: createSunPaladin,
    shadow_rogue: createShadowRogue,
    goblin_grunt: createGoblinGrunt,
    orc_brute: createOrcBrute,
    stone_slime: createStoneSlime,
    bone_skeleton: createBoneSkeleton,
    mushroom_imp: createMushroomImp,
    dire_wolf: createDireWolf,
    cave_bat: createCaveBat,
    ember_whelp: createEmberWhelp,
    giant_spider: createGiantSpider,
    wild_boar: createWildBoar,
    bandit_cutthroat: createBanditCutthroat,
    cultist_acolyte: createCultistAcolyte,
    restless_ghost: createRestlessGhost,
    angry_treant: createAngryTreant,
    minotaur_guard: createMinotaurGuard,
    cave_troll: createCaveTroll,
    venom_serpent: createVenomSerpent,
    iron_golem: createIronGolem,
    village_merchant: createVillageMerchant,
    town_blacksmith: createTownBlacksmith,
    quest_elder: createQuestElder,
    pine_tree: createPineTree,
    rock_cluster: createRockCluster,
    wooden_crate: createWoodenCrate,
    campfire: createCampfire,
    ruin_arch: createRuinArch,
    forest_clearing: createForestClearing,
    dungeon_room: createDungeonRoom
  };
  const factory = factories[id];
  if (!factory) throw new Error(`Unknown asset id: ${id}`);
  return finalizeAsset(factory());
}

function finalizeAsset(asset) {
  asset.traverse(obj => {
    obj.userData.basePosition = obj.position.clone();
    obj.userData.baseRotation = obj.rotation.clone();
    obj.userData.baseScale = obj.scale.clone();
  });
  return asset;
}

function resetPose(asset) {
  asset.traverse(obj => {
    if (obj.userData.basePosition) obj.position.copy(obj.userData.basePosition);
    if (obj.userData.baseRotation) obj.rotation.copy(obj.userData.baseRotation);
    if (obj.userData.baseScale) obj.scale.copy(obj.userData.baseScale);
  });
}

export function createAssetPack(ids = ASSET_CATALOG.map(item => item.id), spacing = 2.2) {
  const pack = new THREE.Group();
  pack.name = 'poly_art_asset_pack';
  ids.forEach((id, index) => {
    const asset = createAssetById(id);
    asset.position.x = (index % 6) * spacing;
    asset.position.z = Math.floor(index / 6) * spacing;
    pack.add(asset);
  });
  return pack;
}

export function getAssetMeta(id) {
  return ASSET_CATALOG.find(item => item.id === id);
}

export function animateAsset(asset, animation = 'idle', time = 0, delta = 0) {
  const id = asset.userData.assetId || asset.name;
  resetPose(asset);
  const bob = Math.sin(time * 2.2) * .035;
  const walk = Math.sin(time * 8.2);
  const attack = Math.sin(time * 10);
  const hop = Math.abs(Math.sin(time * 3.4));
  asset.rotation.z = 0;
  asset.position.y = 0;

  if (animation === 'walk') {
    asset.position.y = Math.abs(walk) * .05;
    animateNamed(asset, 'left_leg', 'rotation.x', walk * .45);
    animateNamed(asset, 'right_leg', 'rotation.x', -walk * .45);
    animateNamed(asset, 'left_arm', 'rotation.x', -walk * .35);
    animateNamed(asset, 'right_arm', 'rotation.x', walk * .35);
  } else if (animation === 'jump' || animation === 'hop') {
    asset.position.y = hop * .35;
    const base = asset.userData.baseScale?.x || 1;
    asset.scale.y = base * (1 - (1 - hop) * .08);
    asset.scale.x = asset.scale.z = base * (1 + (1 - hop) * .04);
  } else if (animation === 'attack') {
    animateNamed(asset, 'right_arm', 'rotation.x', -.7 + attack * .25);
    animateNamed(asset, 'sword', 'rotation.z', -.25 + attack * .45);
    animateNamed(asset, 'axe_handle', 'rotation.z', -.42 + attack * .35);
    animateNamed(asset, 'club_handle', 'rotation.z', -.55 + attack * .4);
  } else if (animation === 'cast') {
    asset.position.y = bob;
    animateNamed(asset, 'floating_spell_orb', 'position.y', 1.55 + Math.sin(time * 3.2) * .12);
    animateNamed(asset, 'staff_crystal', 'scale.x', 1 + Math.sin(time * 5) * .12);
    animateNamed(asset, 'staff_crystal', 'scale.y', 1 + Math.sin(time * 5) * .12);
    animateNamed(asset, 'staff_crystal', 'scale.z', 1 + Math.sin(time * 5) * .12);
  } else if (animation === 'fly') {
    asset.position.y = .45 + Math.sin(time * 4.5) * .13;
    animateNamed(asset, 'left_wing', 'rotation.z', .4 + Math.sin(time * 12) * .42);
    animateNamed(asset, 'right_wing', 'rotation.z', -.4 - Math.sin(time * 12) * .42);
  } else if (animation === 'wave') {
    asset.position.y = bob;
    animateNamed(asset, 'left_arm', 'rotation.z', -1.0 + Math.sin(time * 5) * .25);
  } else if (animation === 'work') {
    asset.position.y = bob * .5;
    animateNamed(asset, 'right_arm', 'rotation.x', -.55 + Math.sin(time * 6) * .35);
    animateNamed(asset, 'hammer_handle', 'rotation.z', -.65 + Math.sin(time * 6) * .28);
  } else if (animation === 'flame') {
    animateNamed(asset, 'flame_outer', 'scale.y', 1 + Math.sin(time * 8) * .16);
    animateNamed(asset, 'flame_inner', 'scale.y', 1 + Math.sin(time * 10) * .18);
  } else {
    asset.position.y = bob;
    asset.rotation.y += delta * .15;
  }
  return asset;
}

function animateNamed(root, name, path, value) {
  const obj = root.getObjectByName(name);
  if (!obj) return;
  const [target, prop] = path.split('.');
  obj[target][prop] = value;
}
