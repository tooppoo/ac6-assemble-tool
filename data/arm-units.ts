
// ARM UNIT
import {armUnit, leftArmUnit} from "./types/classification";
import {
  WithRapidFire,
  defineArmUnit,
  AsMelee,
  WithBlast,
  WithCharge, WithChargeBlast, WithChargeHeatBuildup, WithChargeTime,
  WithCooling, WithEffectiveRange, WithHeatBuildup, WithMagazine,
  WithTotalRounds, AsKineticShooting, AsBlastShooting, AsShooting, WithReload
} from "./types/factory/arum_unit";
import {
  assault_rifle, bazooka, burst_assault_rifle, burst_handgun, burst_machine_gun,
  burst_rifle,
  chainsaw, coral_oscillator, detonating_bazooka,
  explosive_thrower, gatling_gun, grenade, handgun, heavy_machine_gun, jamming_bomb_launcher,
  laser_blade,
  laser_dagger, laser_lance,
  laser_slicer, light_wave_blade, linear_rifle, machine_gun, napalm_bomb_launcher, needle_gun,
  pile_bunker, plasma_thrower, pulse_blade, shotgun,
  stun_baton, stun_bomb_launcher, stun_gun
} from "./types/category";
import {
  allmind,
  arquebus,
  arquebus_add,
  balam, baws,
  dafeng, elcano, melinite,
  rad,
  rubicon_research_institute,
  takigawa,
  vcpl
} from "./types/manufacture";
import {coral, energy, explosive, kinetic} from "./types/attack_type";
import {burst, charge, full_auto, melee, semi_auto} from "./types/weapon_type.ts";

export const leftArmUnits = [
  defineArmUnit<AsMelee>()({
    name: 'PB-033M ASHMEAD',
    classification: leftArmUnit,
    category: pile_bunker,
    attack_type: kinetic,
    weapon_type: melee,
    manufacture: balam,
    price: 185000,

    attack_power: 1688,
    impact: 1150,
    accumulative_impact: 850,
    consecutive_hits: 1,

    charge_attack_power: 4630,
    charge_impact: 1800,
    charge_accumulative_impact: 1100,

    direct_hit_adjustment: 150,
    pa_interference: 119,
    cooling: 302,

    weight: 4180,
    en_load: 225,
  }),
  defineArmUnit<WithBlast & WithCharge & WithChargeBlast & WithEffectiveRange & WithTotalRounds>()({
    name: 'DF-ET-09 TAI-YANG-SHOU',
    classification: leftArmUnit,
    category: explosive_thrower,
    attack_type: explosive,
    weapon_type: semi_auto,
    manufacture: dafeng,
    price: 215000,

    attack_power: 1142,
    impact: 830,
    accumulative_impact: 650,
    blast_radius: 20,

    charge_attack_power: 1142,
    charge_impact: 830,
    charge_accumulative_impact: 650,
    charge_blast_radius: 25,

    direct_hit_adjustment: 190,
    effective_range: 125,
    total_rounds: 48,
    reload_time: 3.1,
    ammunition_cost: 600,

    weight: 3790,
    en_load: 160,
  }),
  defineArmUnit<AsMelee>()({
    name: 'WB-0010 DOUBLE TROUBLE',
    classification: leftArmUnit,
    category: chainsaw,
    attack_type: kinetic,
    weapon_type: melee,
    manufacture: rad,
    price: 69000,

    attack_power: 1025,
    impact: 750,
    accumulative_impact: 375,
    consecutive_hits: 2,

    charge_attack_power: 2970,
    charge_impact: 2380,
    charge_accumulative_impact: 840,

    direct_hit_adjustment: 270,
    pa_interference: 119,
    cooling: 302,

    weight: 5090,
    en_load: 108,
  }),
  defineArmUnit<AsMelee>()({
    name: 'VP-67EB',
    classification: leftArmUnit,
    category: stun_baton,
    attack_type: kinetic,
    weapon_type: melee,
    manufacture: arquebus,
    price: 94000,

    attack_power: 293,
    impact: 215,
    accumulative_impact: 85,
    consecutive_hits: 3,

    charge_attack_power: 1971,
    charge_impact: 1360,
    charge_accumulative_impact: 590,

    direct_hit_adjustment: 215,
    pa_interference: 140,
    cooling: 1156,

    weight: 1720,
    en_load: 198,
  }),
  defineArmUnit<AsMelee>()({
    name: 'VP-67LD',
    classification: leftArmUnit,
    category: laser_dagger,
    attack_type: energy,
    weapon_type: melee,
    manufacture: arquebus,
    price: 135000,

    attack_power: 752,
    impact: 310,
    accumulative_impact: 120,
    consecutive_hits: 3,

    charge_attack_power: 1868,
    charge_impact: 1100,
    charge_accumulative_impact: 375,

    direct_hit_adjustment: 175,
    pa_interference: 118,
    cooling: 1308,

    weight: 1350,
    en_load: 150,
  }),
  defineArmUnit<AsMelee>()({
    name: 'Vvc-770LB',
    classification: leftArmUnit,
    category: laser_blade,
    attack_type: energy,
    weapon_type: melee,
    manufacture: vcpl,
    price: 210000,

    attack_power: 1630,
    impact: 1100,
    accumulative_impact: 330,
    consecutive_hits: 1,

    charge_attack_power: 1170 * 2,
    charge_impact: 750 * 2,
    charge_accumulative_impact: 280 * 2,

    direct_hit_adjustment: 195,
    pa_interference: 127,
    cooling: 347,

    weight: 2060,
    en_load: 245,
  }),
  defineArmUnit<AsMelee>()({
    name: 'Vvc-774LS',
    classification: leftArmUnit,
    category: laser_slicer,
    attack_type: energy,
    weapon_type: melee,
    manufacture: vcpl,
    price: 339000,

    attack_power: 1615,
    impact: 900,
    accumulative_impact: 225,
    consecutive_hits: 2,

    charge_attack_power: 2612,
    charge_impact: 1500,
    charge_accumulative_impact: 375,

    direct_hit_adjustment: 185,
    pa_interference: 122,
    cooling: 267,

    weight: 3260,
    en_load: 328,
  }),
  defineArmUnit<AsMelee>()({
    name:  'VE-67LLA',
    classification:  leftArmUnit,
    category: laser_lance,
    attack_type: energy,
    weapon_type: melee,
    manufacture: arquebus_add,
    price: 270000,

    attack_power: 1151,
    impact: 800,
    accumulative_impact: 400,
    consecutive_hits: 1,

    charge_attack_power: 2381,
    charge_impact: 1800,
    charge_accumulative_impact: 900,

    direct_hit_adjustment: 195,
    pa_interference:  131,
    cooling: 263,

    weight: 4520,
    en_load: 460,
  }),
  defineArmUnit<AsMelee & WithChargeBlast & WithEffectiveRange>()({
    name: '44-143 HMMR',
    classification: leftArmUnit,
    category: plasma_thrower,
    attack_type: kinetic,
    weapon_type: melee,
    manufacture: allmind,
    price: 172000,

    attack_power: 1381,
    impact: 810,
    accumulative_impact: 520,
    consecutive_hits: 2,

    charge_attack_power: 265 * 6,
    charge_impact: 33 * 6,
    charge_accumulative_impact: 22 * 6,
    charge_blast_radius: 20,

    direct_hit_adjustment: 165,
    pa_interference: 142,
    effective_range: 78,
    cooling: 366,

    weight: 2410,
    en_load: 311,
  }),
  defineArmUnit<AsMelee>()({
    name: 'HI-32: BU-TT/A',
    classification: leftArmUnit,
    category: pulse_blade,
    attack_type: energy,
    weapon_type: melee,
    manufacture: takigawa,
    price: 0,

    attack_power: 963,
    impact: 710,
    accumulative_impact: 450,
    consecutive_hits: 2,

    charge_attack_power: 1586,
    charge_impact: 1200,
    charge_accumulative_impact: 650,

    direct_hit_adjustment: 230,
    pa_interference: 147,
    cooling: 282,

    weight: 1800,
    en_load: 213,
  }),
  defineArmUnit<AsMelee & WithEffectiveRange>()({
    name: 'IA-C01W2: MOONLIGHT',
    classification: leftArmUnit,
    category: light_wave_blade,
    attack_type: energy,
    weapon_type: melee,
    manufacture: rubicon_research_institute,
    price: 270000,

    attack_power: 615,
    impact: 495,
    accumulative_impact: 495,
    consecutive_hits: 2,

    charge_attack_power: 2310,
    charge_impact: 910,
    charge_accumulative_impact: 910,

    direct_hit_adjustment: 175,
    pa_interference: 112,
    effective_range: 280,
    cooling: 265,

    weight: 2200,
    en_load: 544,
  }),
  defineArmUnit<AsMelee & WithEffectiveRange>()({
    name: 'IA-C01W7: ML-REDSHIFT',
    classification: leftArmUnit,
    category: coral_oscillator,
    attack_type: coral,
    weapon_type: melee,
    manufacture: rubicon_research_institute,
    price: 343000,

    attack_power: 727,
    impact: 530,
    accumulative_impact: 530,
    consecutive_hits: 2,

    charge_attack_power: 1614,
    charge_impact: 820,
    charge_accumulative_impact: 820,

    direct_hit_adjustment: 190,
    pa_interference: 126,
    effective_range: 280,
    cooling: 209,

    weight: 2200,
    en_load: 544,
  }),
  defineArmUnit<AsMelee>()({
    name: 'IB-C03W2: WLT 101',
    classification: leftArmUnit,
    category: coral_oscillator,
    attack_type: coral,
    weapon_type: melee,
    manufacture: rubicon_research_institute,
    price: 368000,

    attack_power: 1350,
    impact: 960,
    accumulative_impact: 960,
    consecutive_hits: 1,

    charge_attack_power: 1950,
    charge_impact: 1450,
    charge_accumulative_impact: 1450,

    direct_hit_adjustment: 210,
    pa_interference: 140,
    cooling: 199,

    weight: 2030,
    en_load: 642,
  })
] as const

export const armUnits = [
  defineArmUnit<AsKineticShooting & WithRapidFire & WithCharge & WithChargeTime & WithMagazine>()({
    name: 'MA-J-200 RANSETSU-RF',
    classification: armUnit,
    category: burst_rifle,
    attack_type: kinetic,
    weapon_type: charge,
    manufacture: baws,
    price: 105000,

    attack_power: 224,
    impact: 245,
    accumulative_impact: 91,

    charge_attack_power: 224 * 3,
    charge_impact: 245 * 3,
    charge_accumulative_impact: 91 * 3,

    direct_hit_adjustment: 220,
    recoil: 12,
    ideal_range: 180,
    effective_range: 321,
    rapid_fire: 1.5,
    charge_time: 0.7,
    magazine_rounds: 15,
    total_rounds: 375,
    reload_time: 1.8,
    ammunition_cost: 100,

    weight: 4210,
    en_load: 158,
  }),
  defineArmUnit<AsKineticShooting & WithRapidFire & WithCharge & WithChargeTime & WithChargeHeatBuildup & WithMagazine & WithCooling>()({
    name: 'LR-038 CURTIS',
    classification: armUnit,
    category: linear_rifle,
    attack_type: kinetic,
    weapon_type: charge,
    manufacture: balam,
    price: 65000,

    attack_power: 142,
    impact: 135,
    accumulative_impact: 52,

    charge_attack_power: 689,
    charge_impact: 850,
    charge_accumulative_impact: 260,
    charge_heat_buildup: 550,

    direct_hit_adjustment: 220,
    recoil: 24,
    ideal_range: 190,
    effective_range: 337,
    rapid_fire: 2.5,
    charge_time: 0.5,
    magazine_rounds: 12,
    total_rounds: 420,
    reload_time: 2.2,
    cooling: 155,
    ammunition_cost: 100,

    weight: 4150,
    en_load: 289,
  }),
  defineArmUnit<AsKineticShooting & WithRapidFire & WithCharge & WithChargeTime & WithChargeHeatBuildup & WithMagazine & WithCooling>()({
    name: 'LR-037 HARRIS',
    classification: armUnit,
    category: linear_rifle,
    attack_type: kinetic,
    weapon_type: charge,
    manufacture: balam,
    price: 135000,

    attack_power: 251,
    impact: 285,
    accumulative_impact: 109,

    charge_attack_power: 977,
    charge_impact: 1250,
    charge_accumulative_impact: 380,
    charge_heat_buildup: 1000,

    direct_hit_adjustment: 220,
    recoil: 35,
    ideal_range: 195,
    effective_range: 376,
    rapid_fire: 1.3,
    charge_time: 0.8,
    magazine_rounds: 10,
    total_rounds: 360,
    reload_time: 3.0,
    cooling: 350,
    ammunition_cost: 200,

    weight: 4840,
    en_load: 441,
  }),
  defineArmUnit<AsKineticShooting & WithRapidFire & WithMagazine>()({
    name: 'RF-024 TURNER',
    classification: armUnit,
    category: assault_rifle,
    attack_type: kinetic,
    weapon_type: full_auto,
    manufacture: balam,
    price: 55000,

    attack_power: 105,
    impact: 65,
    accumulative_impact: 28,

    direct_hit_adjustment: 185,
    recoil: 13,
    ideal_range: 171,
    effective_range: 308,
    rapid_fire: 3.4,
    magazine_rounds: 18,
    total_rounds: 540,
    reload_time: 2.2,
    ammunition_cost: 40,

    weight: 3560,
    en_load: 102,
  }),
  defineArmUnit<AsKineticShooting & WithRapidFire & WithMagazine>()({
    name: 'RF-025 SCUDDER',
    classification: armUnit,
    category: assault_rifle,
    attack_type: kinetic,
    weapon_type: full_auto,
    manufacture: balam,
    price: 205000,

    attack_power: 135,
    impact: 82,
    accumulative_impact: 39,

    direct_hit_adjustment: 185,
    recoil: 15,
    ideal_range: 173,
    effective_range: 317,
    rapid_fire: 2.9,
    magazine_rounds: 15,
    total_rounds: 450,
    reload_time: 2.4,
    ammunition_cost: 50,

    weight: 3830,
    en_load: 153,
  }),
  defineArmUnit<AsKineticShooting & WithRapidFire & WithMagazine>()({
    name: 'MA-J-201 RANSETSU-AR',
    classification: armUnit,
    category: burst_assault_rifle,
    attack_type: kinetic,
    weapon_type: full_auto,
    manufacture: baws,
    price: 111000,

    attack_power: 77 * 3,
    impact: 64 * 3,
    accumulative_impact: 25 * 3,

    direct_hit_adjustment: 185,
    recoil: 7,
    ideal_range: 165,
    effective_range: 303,
    rapid_fire: 3.2,
    magazine_rounds: 18,
    total_rounds: 450,
    reload_time: 1.9,
    ammunition_cost: 40,

    weight: 3520,
    en_load: 132,
  }),
  defineArmUnit<AsKineticShooting & WithRapidFire & WithMagazine>()({
    name: 'MG-014 LUDLOW',
    classification: armUnit,
    category: machine_gun,
    attack_type: kinetic,
    weapon_type: full_auto,
    manufacture: balam,
    price: 45000,

    attack_power: 42,
    impact: 41,
    accumulative_impact: 19,

    direct_hit_adjustment: 195,
    recoil: 4,
    ideal_range: 127,
    effective_range: 249,
    rapid_fire: 10.0,
    magazine_rounds: 30,
    total_rounds: 720,
    reload_time: 1.5,
    ammunition_cost: 20,

    weight: 2450,
    en_load: 82,
  }),
  defineArmUnit<AsKineticShooting & WithRapidFire & WithMagazine>()({
    name: 'DF-MG-02 CHANG-CHEN',
    classification: armUnit,
    category: machine_gun,
    attack_type: kinetic,
    weapon_type: full_auto,
    manufacture: dafeng,
    price: 120000,

    attack_power: 39,
    impact: 40,
    accumulative_impact: 18,

    direct_hit_adjustment: 195,
    recoil: 6,
    ideal_range: 114,
    effective_range: 234,
    rapid_fire: 10.0,
    magazine_rounds: 45,
    total_rounds: 990,
    reload_time: 2.2,
    ammunition_cost: 20,

    weight: 3280,
    en_load: 143,
  }),
  defineArmUnit<AsKineticShooting & WithRapidFire & WithMagazine>()({
    name: 'WR-0555 ATTACHE',
    classification: armUnit,
    category: heavy_machine_gun,
    attack_type: kinetic,
    weapon_type: full_auto,
    manufacture: rad,
    price: 169000,

    attack_power: 62,
    impact: 62,
    accumulative_impact: 25,

    direct_hit_adjustment: 195,
    recoil: 7,
    ideal_range: 143,
    effective_range: 272,
    rapid_fire: 5.0,
    magazine_rounds: 40,
    total_rounds: 920,
    reload_time: 2.1,
    ammunition_cost: 40,

    weight: 5110,
    en_load: 303,
  }),
  defineArmUnit<AsKineticShooting & WithRapidFire & WithMagazine>()({
    name: 'MA-E-210 ETSUJIN',
    classification: armUnit,
    category: burst_machine_gun,
    attack_type: kinetic,
    weapon_type: full_auto,
    manufacture: baws,
    price: 74000,

    attack_power: 51 * 4,
    impact: 48 * 4,
    accumulative_impact: 22 * 4,

    direct_hit_adjustment: 195,
    recoil: 3,
    ideal_range: 117,
    effective_range: 236,
    rapid_fire: 8.1,
    magazine_rounds: 28,
    total_rounds: 700,
    reload_time: 1.5,
    ammunition_cost: 30,

    weight: 2810,
    en_load: 98,
  }),
  defineArmUnit<AsKineticShooting & WithRapidFire & WithHeatBuildup & WithCooling>()({
    name: 'DF-GA-08 HU-BEN',
    classification: armUnit,
    category: gatling_gun,
    attack_type: kinetic,
    weapon_type: full_auto,
    manufacture: dafeng,
    price: 170000,

    attack_power: 25,
    impact: 25,
    accumulative_impact: 11,
    heat_buildup: 9,

    direct_hit_adjustment: 215,
    recoil: 5,
    ideal_range: 130,
    effective_range: 226,
    rapid_fire: 20.0,
    total_rounds: 1300,
    cooling: 220,
    ammunition_cost: 30,

    weight: 5800,
    en_load: 425,
  }),
  defineArmUnit<AsKineticShooting & WithMagazine>()({
    name: 'SG-026 HALDEMAN',
    classification: armUnit,
    category: shotgun,
    attack_type: kinetic,
    weapon_type: semi_auto,
    manufacture: balam,
    price: 75000,

    attack_power: 576,
    impact: 360,
    accumulative_impact: 280,

    direct_hit_adjustment: 190,
    recoil: 90,
    ideal_range: 88,
    effective_range: 169,
    magazine_rounds: 1,
    total_rounds: 66,
    reload_time: 1.3,
    ammunition_cost: 200,

    weight: 3660,
    en_load: 185,
  }),
  defineArmUnit<AsKineticShooting & WithMagazine>()({
    name: 'SG-027 ZIMMERMAN',
    classification: armUnit,
    category: shotgun,
    attack_type: kinetic,
    weapon_type: semi_auto,
    manufacture: balam,
    price: 115000,

    attack_power: 800,
    impact: 620,
    accumulative_impact: 360,

    direct_hit_adjustment: 180,
    recoil: 90,
    ideal_range: 102,
    effective_range: 184,
    magazine_rounds: 1,
    total_rounds: 53,
    reload_time: 2.0,
    ammunition_cost: 350,

    weight: 4400,
    en_load: 242,
  }),
  defineArmUnit<AsKineticShooting & WithMagazine>()({
    name: 'WR-0777 SWEET SIXTEEN',
    classification: armUnit,
    category: shotgun,
    attack_type: kinetic,
    weapon_type: semi_auto,
    manufacture: rad,
    price: 49000,

    attack_power: 85 * 13,
    impact: 61 * 13,
    accumulative_impact: 41 * 13,

    direct_hit_adjustment: 205,
    recoil: 100,
    ideal_range: 76,
    effective_range: 155,
    magazine_rounds: 13,
    total_rounds: 546,
    reload_time: 3.0,
    ammunition_cost: 30 * 13,

    weight: 1640,
    en_load: 268,
  }),
  defineArmUnit<AsKineticShooting & WithRapidFire & WithMagazine>()({
    name: 'HG-003 COQUILLETT',
    classification: armUnit,
    category: handgun,
    attack_type: kinetic,
    weapon_type: semi_auto,
    manufacture: balam,
    price: 35000,

    attack_power: 166,
    impact: 235,
    accumulative_impact: 149,

    direct_hit_adjustment: 125,
    recoil: 32,
    ideal_range: 85,
    effective_range: 167,
    rapid_fire: 2.5,
    magazine_rounds: 7,
    total_rounds: 196,
    reload_time: 2.1,
    ammunition_cost: 100,

    weight: 1200,
    en_load: 122,
  }),
  defineArmUnit<AsKineticShooting & WithRapidFire & WithMagazine>()({
    name: 'HG-004 DUCKET',
    classification: armUnit,
    category: handgun,
    attack_type: kinetic,
    weapon_type: semi_auto,
    manufacture: balam,
    price: 112000,

    attack_power: 235,
    impact: 300,
    accumulative_impact: 151,

    direct_hit_adjustment: 125,
    recoil: 30,
    ideal_range: 90,
    effective_range: 178,
    rapid_fire: 1.7,
    magazine_rounds: 7,
    total_rounds: 182,
    reload_time: 2.5,
    ammunition_cost: 120,

    weight: 1650,
    en_load: 158,
  }),
  defineArmUnit<AsKineticShooting & WithRapidFire & WithMagazine>()({
    name: 'MA-E-211 SAMPU',
    classification: armUnit,
    category: burst_handgun,
    attack_type: kinetic,
    weapon_type: burst,
    manufacture: baws,
    price: 73000,

    attack_power: 87 * 2,
    impact: 105 * 2,
    accumulative_impact: 64 * 2,

    direct_hit_adjustment: 125,
    recoil:  15,
    ideal_range: 80,
    effective_range: 165,
    rapid_fire: 5.1,
    magazine_rounds: 14,
    total_rounds: 350,
    reload_time: 1.9,
    ammunition_cost: 40,

    weight: 960,
    en_load: 62,
  }),
  defineArmUnit<AsKineticShooting & WithRapidFire & WithMagazine>()({
    name: 'EL-PW-00 VIENTO',
    classification: armUnit,
    category: needle_gun,
    attack_type: kinetic,
    weapon_type: semi_auto,
    manufacture: elcano,
    price: 148000,

    attack_power: 181,
    impact: 175,
    accumulative_impact: 117,

    direct_hit_adjustment: 130,
    recoil: 15,
    ideal_range: 105,
    effective_range: 192,
    rapid_fire: 4.0,
    magazine_rounds: 5,
    total_rounds: 140,
    reload_time: 2.4,
    ammunition_cost: 80,

    weight: 1180,
    en_load: 215,
  }),

  defineArmUnit<AsKineticShooting & WithRapidFire & WithMagazine>()({
    name: 'VP-66EG',
    classification: armUnit,
    category: stun_gun,
    attack_type: kinetic,
    weapon_type: semi_auto,
    manufacture: elcano,
    price: 129000,

    attack_power: 104,
    impact: 54,
    accumulative_impact: 32,

    direct_hit_adjustment: 195,
    recoil: 14,
    ideal_range: 100,
    effective_range: 159,
    rapid_fire: 6.7,
    magazine_rounds: 7,
    total_rounds: 133,
    reload_time: 1.8,
    ammunition_cost: 150,

    weight: 980,
    en_load: 247,
  }),

  defineArmUnit<AsBlastShooting>()({
    name: 'DF-BA-06 XUAN-GE',
    classification: armUnit,
    category: bazooka,
    attack_type: explosive,
    weapon_type: semi_auto,
    manufacture: dafeng,
    price: 70000,

    attack_power: 895,
    impact: 980,
    accumulative_impact: 765,
    blast_radius: 15,

    direct_hit_adjustment: 185,
    recoil: 90,
    effective_range: 740,
    total_rounds: 78,
    reload_time: 3.4,
    ammunition_cost: 450,

    weight: 5480,
    en_load: 240,
  }),
  defineArmUnit<AsBlastShooting>()({
    name: 'MAJESTIC',
    classification: armUnit,
    category: bazooka,
    attack_type: explosive,
    weapon_type: semi_auto,
    manufacture: melinite,
    price: 121000,

    attack_power: 1109,
    impact: 1090,
    accumulative_impact: 850,
    blast_radius: 15,

    direct_hit_adjustment: 190,
    recoil: 85,
    effective_range: 800,
    total_rounds: 52,
    reload_time: 4.2,
    ammunition_cost: 600,

    weight: 4660,
    en_load: 178,
  }),
  defineArmUnit<AsBlastShooting>()({
    name: 'LITTLE GEM',
    classification: armUnit,
    category: bazooka,
    attack_type: explosive,
    weapon_type: semi_auto,
    manufacture: melinite,
    price: 163000,

    attack_power: 819,
    impact: 910,
    accumulative_impact: 670,
    blast_radius: 15,

    direct_hit_adjustment: 180,
    recoil: 80,
    effective_range: 690,
    total_rounds: 36,
    reload_time: 4.4,
    ammunition_cost: 450,

    weight: 3100,
    en_load: 192,
  }),
  defineArmUnit<AsBlastShooting>()({
    name: '44-141 JVLN ALPHA',
    classification: armUnit,
    category: detonating_bazooka,
    attack_type: explosive,
    weapon_type: semi_auto,
    manufacture: allmind,
    price: 210000,

    attack_power: 1375,
    impact: 1390,
    accumulative_impact: 905,
    blast_radius: 15,

    direct_hit_adjustment: 220,
    recoil: 80,
    effective_range: 760,
    total_rounds: 44,
    reload_time: 4.3,
    ammunition_cost: 750,

    weight: 6300,
    en_load: 299,
  }),
  defineArmUnit<AsBlastShooting>()({
    name: 'DF-GR-07 GOU-CHEN',
    classification: armUnit,
    category: grenade,
    attack_type: explosive,
    weapon_type: semi_auto,
    manufacture: dafeng,
    price: 140000,

    attack_power: 1450,
    impact: 1197,
    accumulative_impact: 906,
    blast_radius: 70,

    direct_hit_adjustment: 140,
    recoil:  100,
    effective_range: 625,
    total_rounds: 40,
    reload_time: 5.9,
    ammunition_cost: 1200,

    weight: 4841,
    en_load: 308,
  }),
  defineArmUnit<AsBlastShooting>()({
    name: 'DIZZY',
    classification: armUnit,
    category: grenade,
    attack_type: explosive,
    weapon_type: semi_auto,
    manufacture: melinite,
    price: 260000,

    attack_power: 1650,
    impact: 1278,
    accumulative_impact: 1003,
    blast_radius: 90,

    direct_hit_adjustment: 145,
    recoil: 100,
    effective_range: 265,
    total_rounds: 38,
    reload_time: 7.1,
    ammunition_cost: 1500,

    weight: 5750,
    en_load: 364,
  }),
  defineArmUnit<AsBlastShooting>()({
    name: 'IRIDIUM',
    classification: armUnit,
    category: grenade,
    attack_type: explosive,
    weapon_type: semi_auto,
    manufacture: melinite,
    price: 214000,

    attack_power: 1090,
    impact: 991,
    accumulative_impact: 845,
    blast_radius: 60,

    direct_hit_adjustment: 140,
    recoil: 88,
    effective_range: 245,
    total_rounds: 32,
    reload_time: 4.5,
    ammunition_cost: 800,

    weight: 2020,
    en_load: 290,
  }),

  defineArmUnit<AsShooting & WithBlast & WithChargeTime & WithReload>()({
    name: 'MA-T-222 KYORAI',
    classification: armUnit,
    category: napalm_bomb_launcher,
    attack_type: explosive,
    weapon_type: charge,
    manufacture: baws,
    price: 91000,

    attack_power: 383 * 3,
    impact: 143 * 3,
    accumulative_impact: 80 * 3,
    blast_radius: 20,

    direct_hit_adjustment: 170,
    recoil: 50,
    charge_time: 0.4,
    total_rounds: 90,
    reload_time: 2.3,
    ammunition_cost: 200,

    weight: 2890,
    en_load: 60,
  }),
  defineArmUnit<AsShooting & WithBlast & WithChargeTime & WithReload>()({
    name: 'MA-T-223 KYORIKU',
    classification: armUnit,
    category: jamming_bomb_launcher,
    attack_type: kinetic,
    weapon_type: charge,
    manufacture: baws,
    price: 103000,

    attack_power: 0,
    impact: 45,
    accumulative_impact: 4,
    blast_radius: 60,

    direct_hit_adjustment: 100,
    recoil: 40,
    charge_time: 0.4,
    total_rounds: 40,
    reload_time: 5.5,
    ammunition_cost: 100,

    weight: 2600,
    en_load: 52,
  }),
  defineArmUnit<AsShooting & WithBlast & WithChargeTime & WithReload>()({
    name: 'WS-1200 THERAPIST',
    classification: armUnit,
    category: stun_bomb_launcher,
    attack_type: energy,
    weapon_type: charge,
    manufacture: rad,
    price: 136000,

    attack_power: 141 * 3,
    impact: 107 * 3,
    accumulative_impact: 46 * 3,
    blast_radius: 20,

    direct_hit_adjustment: 130,
    recoil: 40,
    charge_time: 0.4,
    total_rounds: 108,
    reload_time: 2.0,
    ammunition_cost: 150,

    weight: 3180,
    en_load: 82,
  })
] as const
