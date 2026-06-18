import * as THREE from 'three';

export const ASSET_CATALOG = [
  { id: 'mage_apprentice', name: 'Mage Apprentice', type: 'hero', role: 'caster', tags: ['robe', 'staff', 'spell-orb'] },
  { id: 'forest_ranger', name: 'Forest Ranger', type: 'hero', role: 'ranged', tags: ['hood', 'bow', 'quiver'] },
  { id: 'goblin_grunt', name: 'Goblin Grunt', type: 'monster', role: 'melee', tags: ['club', 'ears', 'small'] },
  { id: 'stone_slime', name: 'Stone Slime', type: 'monster', role: 'hazard', tags: ['squat', 'single-eye', 'bouncy'] },
  { id: 'bone_skeleton', name: 'Bone Skeleton', type: 'monster', role: 'undead', tags: ['bones', 'rusty-sword', 'shield'] },
  { id: 'mushroom_imp', name: 'Mushroom Imp', type: 'monster', role: 'trickster', tags: ['cap', 'tiny', 'forest'] },
  { id: 'village_merchant', name: 'Village Merchant', type: 'npc', role: 'shopkeeper', tags: ['pack', 'coin', 'friendly'] },
  { id: 'town_blacksmith', name: 'Town Blacksmith', type: 'npc', role: 'crafter', tags: ['apron', 'hammer', 'anvil'] }
];

const mats = (() => {
  const m = (color, opts = {}) => new THREE.MeshStandardMaterial({ color, roughness: .82, metalness: 0, flatShading: true, ...opts });
  return {
    skin: m(0xd8a06f), green: m(0x63a85f), darkGreen: m(0x2f6d49), purple: m(0x6851b8), deepPurple: m(0x33214f),
    blue: m(0x2459b9), teal: m(0x35a8a8), red: m(0xb53030), gold: m(0xf8c94b, { metalness: .25, roughness: .55 }),
    steel: m(0xbfc9d9, { metalness: .45, roughness: .7 }), darkSteel: m(0x566276, { metalness: .25 }),
    leather: m(0x7a4a26), wood: m(0x7b4d2a), bone: m(0xd7cfb2), black: m(0x08090d),
    cloth: m(0x394769), brown: m(0x8a5a35), mushroom: m(0xc54b58), white: m(0xf1ead6), stone: m(0x777f8e)
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

function baseGroup(id, scale = 1) {
  const g = new THREE.Group();
  g.name = id;
  g.scale.setScalar(scale);
  return g;
}

function humanoidCore(g, bodyMat, headMat = mats.skin) {
  mesh(g, 'left_boot', box(.28,.18,.42), mats.darkSteel, [-.22,.09,.03]);
  mesh(g, 'right_boot', box(.28,.18,.42), mats.darkSteel, [.22,.09,.03]);
  mesh(g, 'left_leg', cyl(.11,.13,.58,6), bodyMat, [-.22,.46,0]);
  mesh(g, 'right_leg', cyl(.11,.13,.58,6), bodyMat, [.22,.46,0]);
  mesh(g, 'torso', cyl(.39,.48,.86,6), bodyMat, [0,1.1,0]);
  mesh(g, 'head', sphere(.28,8,5), headMat, [0,1.75,0]);
}

export function createMageApprentice() {
  const g = baseGroup('mage_apprentice', .95);
  humanoidCore(g, mats.deepPurple, mats.skin);
  mesh(g, 'wide_wizard_hat_brim', cyl(.5,.55,.08,10), mats.purple, [0,2.0,0]);
  mesh(g, 'wizard_hat_cone', cone(.36,.72,8), mats.purple, [0,2.38,0], [0,0,.12]);
  mesh(g, 'gold_hat_band', cyl(.37,.39,.06,8), mats.gold, [0,2.1,0]);
  mesh(g, 'left_sleeve', cyl(.10,.13,.62,6), mats.deepPurple, [-.48,1.12,0], [0,0,-.34]);
  mesh(g, 'right_sleeve', cyl(.10,.13,.62,6), mats.deepPurple, [.48,1.12,0], [0,0,.34]);
  mesh(g, 'staff', cyl(.035,.045,1.65,6), mats.wood, [.72,1.0,.1], [0,0,.12]);
  mesh(g, 'staff_crystal', sphere(.16,7,4), mats.teal, [.83,1.86,.1]);
  mesh(g, 'floating_spell_orb', sphere(.12,7,4), mats.gold, [-.62,1.55,.18]);
  return g;
}

export function createForestRanger() {
  const g = baseGroup('forest_ranger', .95);
  humanoidCore(g, mats.darkGreen, mats.skin);
  mesh(g, 'green_hood', cone(.34,.44,7), mats.darkGreen, [0,2.0,0], [0,0,Math.PI]);
  mesh(g, 'cloak', box(.82,1.05,.08), mats.green, [0,.98,-.31], [-.18,0,0]);
  mesh(g, 'left_arm', cyl(.09,.12,.62,6), mats.green, [-.48,1.1,.08], [0,0,-.5]);
  mesh(g, 'right_arm', cyl(.09,.12,.62,6), mats.green, [.48,1.1,.08], [0,0,.5]);
  mesh(g, 'bow_curve_top', cyl(.025,.035,.88,6), mats.wood, [.78,1.42,.12], [0,0,.34]);
  mesh(g, 'bow_curve_bottom', cyl(.025,.035,.88,6), mats.wood, [.78,.82,.12], [0,0,-.34]);
  mesh(g, 'bow_string', box(.025,1.32,.025), mats.white, [.66,1.12,.13]);
  mesh(g, 'quiver', cyl(.14,.16,.58,6), mats.leather, [-.36,1.25,-.34], [.42,0,.18]);
  for (let i=0;i<4;i++) mesh(g, `arrow_${i}`, cyl(.012,.012,.48,5), mats.wood, [-.42+i*.05,1.5,-.45], [.42,0,.18]);
  return g;
}

export function createGoblinGrunt() {
  const g = baseGroup('goblin_grunt', .85);
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

export function createStoneSlime() {
  const g = baseGroup('stone_slime', 1);
  mesh(g, 'squat_slime_body', sphere(.58,9,5), mats.stone, [0,.5,0], [0,0,0], [1.18,.65,1]);
  mesh(g, 'single_eye', sphere(.13,8,4), mats.white, [0,.67,.48]);
  mesh(g, 'pupil', sphere(.055,8,4), mats.black, [0,.67,.59]);
  mesh(g, 'crack_1', box(.36,.035,.025), mats.darkSteel, [-.12,.42,.55], [0,0,.35]);
  mesh(g, 'crack_2', box(.26,.03,.025), mats.darkSteel, [.19,.32,.48], [0,0,-.42]);
  return g;
}

export function createBoneSkeleton() {
  const g = baseGroup('bone_skeleton', .95);
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
  const g = baseGroup('mushroom_imp', .82);
  mesh(g, 'tiny_body', cyl(.22,.32,.58,6), mats.brown, [0,.45,0]);
  mesh(g, 'mushroom_cap', sphere(.46,9,4), mats.mushroom, [0,.94,0], [0,0,0], [1.15,.42,1.15]);
  mesh(g, 'cap_spot_1', sphere(.07,6,3), mats.white, [-.18,1.03,.24]);
  mesh(g, 'cap_spot_2', sphere(.055,6,3), mats.white, [.12,1.08,.25]);
  mesh(g, 'glow_eye_left', box(.06,.035,.025), mats.gold, [-.08,.62,.23]);
  mesh(g, 'glow_eye_right', box(.06,.035,.025), mats.gold, [.08,.62,.23]);
  mesh(g, 'twig_spear', cyl(.026,.034,.92,6), mats.wood, [.44,.72,.08], [0,0,-.35]);
  return g;
}

export function createVillageMerchant() {
  const g = baseGroup('village_merchant', .95);
  humanoidCore(g, mats.cloth, mats.skin);
  mesh(g, 'merchant_hat', cyl(.32,.38,.22,8), mats.brown, [0,2.02,0]);
  mesh(g, 'backpack', box(.56,.72,.28), mats.leather, [0,1.12,-.36]);
  mesh(g, 'coin_pouch', sphere(.15,6,4), mats.gold, [.36,.88,.28], [0,0,0], [1,.8,.45]);
  mesh(g, 'left_arm_wave', cyl(.09,.12,.62,6), mats.cloth, [-.5,1.2,.04], [0,0,-.9]);
  mesh(g, 'right_arm_packstrap', cyl(.09,.12,.62,6), mats.cloth, [.45,1.03,.04], [0,0,.22]);
  return g;
}

export function createTownBlacksmith() {
  const g = baseGroup('town_blacksmith', .98);
  humanoidCore(g, mats.brown, mats.skin);
  mesh(g, 'leather_apron', box(.55,.82,.06), mats.leather, [0,1.02,.31]);
  mesh(g, 'beard', cone(.23,.34,7), mats.black, [0,1.52,.24], [Math.PI,0,0]);
  mesh(g, 'hammer_handle', cyl(.035,.04,.72,6), mats.wood, [.56,1.0,.1], [0,0,-.65]);
  mesh(g, 'hammer_head', box(.36,.16,.16), mats.steel, [.74,1.24,.1], [0,0,-.65]);
  mesh(g, 'tiny_anvil', box(.58,.22,.34), mats.darkSteel, [-.72,.43,.06]);
  mesh(g, 'anvil_base', box(.34,.28,.24), mats.darkSteel, [-.72,.2,.06]);
  return g;
}

export function createAssetById(id) {
  switch (id) {
    case 'mage_apprentice': return createMageApprentice();
    case 'forest_ranger': return createForestRanger();
    case 'goblin_grunt': return createGoblinGrunt();
    case 'stone_slime': return createStoneSlime();
    case 'bone_skeleton': return createBoneSkeleton();
    case 'mushroom_imp': return createMushroomImp();
    case 'village_merchant': return createVillageMerchant();
    case 'town_blacksmith': return createTownBlacksmith();
    default: throw new Error(`Unknown asset id: ${id}`);
  }
}
