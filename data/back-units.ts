import {
  AsActiveHomingMissile,
  AsBlastShooting,
  AsBuckler, AsContainerMissile, AsCoralMissile,
  AsGatling,
  AsKineticShooting,
  AsLaserCannon, AsLaserDrone, AsMissile, AsOrbit,
  AsPlasmaCanon, AsPlasmaMissile, AsPulseCanon,
  AsScutum,
  AsShield,
  AsShooting, AsTurret,
  defineBackUnit,
  defineShieldUnit,
  WithBlast,
  WithChargeBlast, WithEffectiveRange, WithIdealRange,
  WithMagazine,
  WithPAInterference,
  WithRapidFire,
  WithReload
} from "./types/unit/types.ts";
import {backUnit, leftBackUnit} from "./types/base/classification.ts";
import {
  allmind,
  arquebus,
  arquebus_add,
  balam,
  dafeng, elcano, furlong, melinite, rad,
  rubicon_research_institute, schneider,
  takigawa, vcpl
} from "./types/base/manufacture.ts";
import {coral, energy, explosive, kinetic, none} from "./types/unit/attack_type.ts";
import {burst, charge, full_auto, homing, semi_auto, shield} from "./types/unit/weapon_type.ts";
import {
  active_homing_missile,
  bullet_orbit,
  cluster_missile,
  container_missile,
  coral_missile,
  coral_shield,
  detonating_missile,
  diffuse_laser_canon,
  dual_missile,
  gatling_cannon,
  grenade_cannon,
  laser_canon,
  laser_orbit, laser_turret,
  light_wave_cannon,
  missile,
  needle_missile,
  plasma_canon,
  plasma_missile,
  pulse_buckler,
  pulse_canon,
  pulse_scutum,
  pulse_shield,
  pulse_shield_launcher,
  scatter_missile,
  split_missile,
  spread_bazooka,
  stun_needle_launcher,
  vertical_missile
} from "./types/base/category.ts";

export const lefTBackUnit = [
  defineShieldUnit<AsShield>()({
    name: 'VP-61PS',
    classification: leftBackUnit,
    category: pulse_shield,
    attack_type: none,
    weapon_type: shield,
    manufacture: arquebus,
    price: 123000,

    damage_mitigation: 58,
    impact_dampening: 40,
    ig_damage_mitigation: 78,
    ig_impact_dampening: 80,
    ig_duration: 0.6,
    deploy_heat_buildup: 190,
    deployment: 180,
    cooling: 144,

    weight: 27000,
    en_load: 310,
  }),
  defineShieldUnit<AsShield>()({
    name: 'SI-24: SU-Q5',
    classification: leftBackUnit,
    category: pulse_shield,
    attack_type: none,
    weapon_type: shield,
    manufacture: takigawa,
    price: 43000,

    damage_mitigation: 45,
    impact_dampening: 25,
    ig_damage_mitigation: 65,
    ig_impact_dampening: 75,
    ig_duration: 1.0,
    deploy_heat_buildup: 160,
    deployment: 180,
    cooling: 88,

    weight: 2010,
    en_load: 220,
  }),
  defineShieldUnit<AsShield>()({
    name: 'SI-27: SU-R8',
    classification: leftBackUnit,
    category: pulse_shield,
    attack_type: none,
    weapon_type: shield,
    manufacture: takigawa,
    price: 100000,

    damage_mitigation: 63,
    impact_dampening: 48,
    ig_damage_mitigation: 67,
    ig_impact_dampening: 79,
    ig_duration: 0.2,
    deploy_heat_buildup: 140,
    deployment: 180,
    cooling: 110,

    weight: 3150,
    en_load: 323,
  }),
  defineShieldUnit<AsBuckler>()({
    name: 'VP-61PB',
    classification: leftBackUnit,
    category: pulse_buckler,
    attack_type: none,
    weapon_type: shield,
    manufacture: arquebus,
    price: 76000,

    damage_mitigation: 35,
    impact_dampening: 35,
    ig_damage_mitigation: 96,
    ig_impact_dampening: 95,
    ig_duration: 0.3,
    deploy_heat_buildup: 480,
    deployment: 180,
    cooling: 132,

    weight: 1920,
    en_load: 285,
  }),
  defineShieldUnit<AsBuckler>()({
    name: 'SI-29: SU-TT/C',
    classification: leftBackUnit,
    category: pulse_buckler,
    attack_type: none,
    weapon_type: shield,
    manufacture: takigawa,
    price: 62000,

    damage_mitigation: 30,
    impact_dampening: 56,
    ig_damage_mitigation: 82,
    ig_impact_dampening: 76,
    ig_duration: 1.6,
    deploy_heat_buildup: 670,
    deployment:  180,
    cooling: 142,

    weight: 3380,
    en_load: 385,
  }),
  defineShieldUnit<AsScutum>()({
    name: 'VE-61PSA',
    classification: leftBackUnit,
    category: pulse_scutum,
    attack_type: none,
    weapon_type: shield,
    manufacture: arquebus_add,
    price: 197000,

    damage_mitigation: 86,
    impact_dampening: 70,
    idle_damage_mitigation: 21,
    idle_impact_dampening: 18,
    idle_duration: 4.0,
    deploy_heat_buildup: 270,
    deployment: 180,
    cooling: 113,

    weight: 4100,
    en_load: 480,
  }),
  defineShieldUnit<AsShield>()({
    name: 'IB-C03W4: NGI 028',
    classification: leftBackUnit,
    category: coral_shield,
    attack_type: none,
    weapon_type: shield,
    manufacture: rubicon_research_institute,
    price: 255000,

    damage_mitigation: 55,
    impact_dampening: 42,
    ig_damage_mitigation: 68,
    ig_impact_dampening: 57,
    ig_duration: 0.8,
    deploy_heat_buildup: 450,
    deployment: 360,
    cooling: 100,

    weight: 2170,
    en_load: 800,
  }),
] as const

export const backUnits = [
  defineBackUnit<AsGatling>()({
    name: 'DF-GA-09 SHAO-WEI',
    classification: backUnit,
    category: gatling_cannon,
    attack_type: kinetic,
    weapon_type: full_auto,
    manufacture: dafeng,
    price: 220000,

    attack_power: 24,
    impact: 20,
    accumulative_impact: 11,
    heat_buildup: 39,

    direct_hit_adjustment: 190,
    recoil: 5,
    ideal_range: 156,
    effective_range: 289,
    rapid_fire: 14.3,
    total_rounds: 800,
    cooling: 650,
    ammunition_cost: 20,

    weight: 3960,
    en_load: 404,
  }),
  defineBackUnit<AsBlastShooting>()({
    name: 'SB-033M MORLEY',
    classification: backUnit,
    category: spread_bazooka,
    attack_type: explosive,
    weapon_type: semi_auto,
    manufacture: balam,
    price: 255000,

    attack_power: 1360,
    impact: 1450,
    accumulative_impact: 860,
    blast_radius: 15,

    direct_hit_adjustment: 190,
    recoil: 70,
    effective_range: 510,
    total_rounds: 25,
    reload_time: 5.0,
    ammunition_cost: 800,

    weight: 6580,
    en_load: 465,
  }),
  defineBackUnit<AsBlastShooting>()({
    name: 'EARSHOT',
    classification: backUnit,
    category: grenade_cannon,
    attack_type: explosive,
    weapon_type: semi_auto,
    manufacture: melinite,
    price: 255000,

    attack_power: 2098,
    impact: 1455,
    accumulative_impact: 1101,
    blast_radius: 90,

    direct_hit_adjustment: 145,
    recoil: 70,
    effective_range: 720,
    total_rounds: 16,
    reload_time: 9.3,
    ammunition_cost: 1600,

    weight: 7230,
    en_load: 386,
  }),
  defineBackUnit<AsBlastShooting>()({
    name: 'SONGBIRDS',
    classification: backUnit,
    category: grenade_cannon,
    attack_type: explosive,
    weapon_type: burst,
    manufacture: melinite,
    price: 182000,

    attack_power:  655 * 2,
    impact: 635 * 2,
    accumulative_impact: 494 * 2,
    blast_radius: 60,

    direct_hit_adjustment: 140,
    recoil: 60,
    effective_range: 625,
    total_rounds: 42,
    reload_time: 6.4,
    ammunition_cost: 600,

    weight: 5500,
    en_load: 285,
  }),
  defineBackUnit<AsKineticShooting & WithBlast & WithReload>()({
    name: 'VE-60SNA',
    classification: backUnit,
    category: stun_needle_launcher,
    attack_type: kinetic,
    weapon_type: semi_auto,
    manufacture: arquebus_add,
    price: 283000,

    attack_power: 1258,
    impact: 641,
    accumulative_impact: 339,
    blast_radius: 30,

    direct_hit_adjustment:  195,
    recoil: 70,
    ideal_range: 280,
    effective_range: 490,
    total_rounds: 30,
    reload_time: 5.0,
    ammunition_cost: 800,

    weight: 6150,
    en_load: 825,
  }),
  defineBackUnit<AsLaserCannon>()({
    name: 'VP-60LCS',
    classification: backUnit,
    category: laser_canon,
    attack_type: energy,
    weapon_type: charge,
    manufacture: arquebus,
    price: 147000,

    attack_power: 925,
    impact: 500,
    accumulative_impact: 180,
    heat_buildup: 320,

    charge_attack_power: 1621,
    charge_impact: 750,
    charge_accumulative_impact: 280,
    charge_heat_buildup: 1000,

    direct_hit_adjustment: 145,
    recoil: 70,
    ideal_range: 230,
    effective_range: 359,
    rapid_fire: 0.7,
    charge_en_load: 759,
    charge_time: 1.6,
    charge_ammo_consumption: 3,
    total_rounds: 57,
    cooling: 210,
    ammunition_cost: 450,

    weight: 5190,
    en_load: 683,
  }),
  defineBackUnit<AsLaserCannon>()({
    name: 'VP-60LCA',
    classification: backUnit,
    category: laser_canon,
    attack_type: energy,
    weapon_type: charge,
    manufacture: arquebus_add,
    price: 333000,

    attack_power: 633 * 3,
    impact: 199 * 3,
    accumulative_impact: 76 * 3,
    heat_buildup: 700,

    charge_attack_power: 1015 * 3,
    charge_impact: 3303 * 3,
    charge_accumulative_impact: 185 * 3,
    charge_heat_buildup: 1000,

    direct_hit_adjustment: 145,
    recoil: 70,
    ideal_range: 240,
    effective_range: 402,
    rapid_fire: 0.4,
    charge_en_load: 1440,
    charge_time: 5.0,
    charge_ammo_consumption: 6,
    total_rounds: 24,
    cooling: 155,
    ammunition_cost: 450,

    weight: 14820,
    en_load: 1200,
  }),
  defineBackUnit<AsLaserCannon>()({
    name: 'VE-60LCB',
    classification: backUnit,
    category: laser_canon,
    attack_type: energy,
    weapon_type: charge,
    manufacture: arquebus_add,
    price: 318000,

    attack_power: 1201,
    impact: 650,
    accumulative_impact: 180,
    heat_buildup: 320,

    charge_attack_power: 2203,
    charge_impact: 1110,
    charge_accumulative_impact: 440,
    charge_heat_buildup: 1000,

    direct_hit_adjustment: 145,
    recoil: 70,
    ideal_range: 300,
    effective_range: 447,
    rapid_fire: 0.3,
    charge_en_load: 988,
    charge_time: 4.3,
    charge_ammo_consumption: 3,
    total_rounds: 32,
    cooling: 172,
    ammunition_cost: 1000,

    weight: 9270,
    en_load: 803,
  }),
  defineBackUnit<AsLaserCannon & WithChargeBlast>()({
    name: 'VP-60LCD',
    classification: backUnit,
    category: diffuse_laser_canon,
    attack_type: energy,
    weapon_type: charge,
    manufacture: arquebus,
    price: 215000,

    attack_power: 1308,
    impact: 648,
    accumulative_impact: 204,
    heat_buildup: 440,

    charge_attack_power: 1988,
    charge_impact: 980,
    charge_accumulative_impact: 439,
    charge_blast_radius: 45,
    charge_heat_buildup: 1000,

    direct_hit_adjustment: 145,
    recoil: 45,
    ideal_range: 180,
    effective_range: 252,
    rapid_fire: 0.6,
    charge_en_load: 902,
    charge_time: 2.0,
    charge_ammo_consumption: 3,
    total_rounds: 54,
    cooling: 232,
    ammunition_cost: 650,

    weight: 7620,
    en_load: 784,
  }),

  defineBackUnit<AsPlasmaCanon>()({
    name: 'FASAN/60E',
    classification: backUnit,
    category: plasma_canon,
    attack_type: energy,
    weapon_type: charge,
    manufacture: schneider,
    price: 217000,

    attack_power: 1560,
    impact: 840,
    accumulative_impact: 570,
    blast_radius: 30,
    heat_buildup: 465,

    charge_attack_power: 2412,
    charge_impact: 1272,
    charge_accumulative_impact: 792,
    charge_blast_radius: 60,
    charge_heat_buildup: 1000,

    direct_hit_adjustment: 125,
    recoil: 70,
    effective_range:  440,
    rapid_fire: 0.5,
    charge_en_load:  944,
    charge_time: 2.0,
    charge_ammo_consumption: 3,
    total_rounds: 39,
    cooling: 196,
    ammunition_cost: 540,

    weight: 6270,
    en_load: 882,
  }),
  defineBackUnit<AsPulseCanon>()({
    name: 'KRANICH/60Z',
    classification: backUnit,
    category: pulse_canon,
    attack_type: energy,
    weapon_type: full_auto,
    manufacture: schneider,
    price: 177000,

    attack_power: 85,
    impact: 20,
    accumulative_impact: 10,
    heat_buildup: 65,

    direct_hit_adjustment: 145,
    pa_interference: 550,
    recoil: 10,
    effective_range: 490,
    rapid_fire: 10.0,
    total_rounds: 560,
    cooling: 225,
    ammunition_cost: 40,

    weight: 2100,
    en_load: 652,
  }),
  defineBackUnit<AsShooting & WithBlast & WithPAInterference & WithEffectiveRange & WithRapidFire & WithMagazine>()({
    name: 'EULE/60D',
    classification: backUnit,
    category: pulse_shield_launcher,
    attack_type: energy,
    weapon_type: semi_auto,
    manufacture: schneider,
    price: 234000,

    attack_power: 455,
    impact: 640,
    accumulative_impact: 461,
    blast_radius: 15,

    direct_hit_adjustment: 155,
    pa_interference: 175,
    recoil: 4,
    effective_range: 62,
    rapid_fire: 3.4,
    magazine_rounds: 3,
    total_rounds: 45,
    reload_time:  6.0,
    ammunition_cost: 400,

    weight: 2760,
    en_load: 382,
  }),
  defineBackUnit<AsMissile & WithPAInterference>()({
    name: 'IA-C01W3: AURORA',
    classification: backUnit,
    category: light_wave_cannon,
    attack_type: energy,
    weapon_type: homing,
    manufacture: rubicon_research_institute,
    price: 340000,

    attack_power: 134 * 4,
    impact: 102 * 4,
    accumulative_impact: 102 * 4,

    direct_hit_adjustment: 175,
    pa_interference: 117,
    guidance: 240,
    effective_range: 930,
    homing_lock_time: 3.3,
    lock_count: 4,
    total_rounds: 100,
    reload_time: 5.5,
    ammunition_cost: 80,

    weight: 3330,
    en_load: 390,
  }),

  defineBackUnit<AsMissile>()({
    name: 'BML-G1/P20MLT-04',
    classification: backUnit,
    category: missile,
    attack_type: explosive,
    weapon_type: homing,
    manufacture: furlong,
    price: 74000,

    attack_power: 103 * 4,
    impact: 72 * 4,
    accumulative_impact: 43 * 4,

    direct_hit_adjustment: 145,
    guidance: 180,
    effective_range: 2500,
    homing_lock_time: 0.3,
    lock_count: 4,
    total_rounds: 140,
    reload_time: 4.0,
    ammunition_cost: 80,

    weight: 2120,
    en_load: 154,
  }),
  defineBackUnit<AsMissile>()({
    name: 'BML-G2/P03MLT-06',
    classification: backUnit,
    category: missile,
    attack_type: explosive,
    weapon_type: homing,
    manufacture: furlong,
    price: 111000,

    attack_power: 103 * 6,
    impact: 72 * 6,
    accumulative_impact: 43 * 6,

    direct_hit_adjustment: 145,
    guidance: 180,
    effective_range: 2500,
    homing_lock_time: 0.4,
    lock_count: 6,
    total_rounds: 228,
    reload_time: 5.0,
    ammunition_cost: 80,

    weight: 3840,
    en_load: 241,
  }),
  defineBackUnit<AsMissile>()({
    name: 'BML-G2/P05MLT-10',
    classification: backUnit,
    category: missile,
    attack_type: explosive,
    weapon_type: homing,
    manufacture: furlong,
    price: 165000,

    attack_power: 103 * 10,
    impact: 72 * 10,
    accumulative_impact: 43 * 10,

    direct_hit_adjustment: 145,
    guidance: 180,
    effective_range: 2500,
    homing_lock_time: 0.8,
    lock_count: 10,
    total_rounds: 300,
    reload_time: 6.4,
    ammunition_cost: 80,

    weight: 5220,
    en_load: 320,
  }),

  defineBackUnit<AsMissile>()({
    name: 'BML-G2/P19SPL-12',
    classification: backUnit,
    category: split_missile,
    attack_type: explosive,
    weapon_type: homing,
    manufacture: furlong,
    price: 123000,

    attack_power: 600 * 2,
    impact: 402 * 2,
    accumulative_impact: 240 * 2,

    direct_hit_adjustment: 140,
    guidance: 145,
    effective_range: 1425,
    homing_lock_time: 1.5,
    lock_count: 2,
    total_rounds: 80,
    reload_time: 6.0,
    ammunition_cost: 400,

    weight: 3580,
    en_load: 325,
  }),
  defineBackUnit<AsMissile>()({
    name: 'BML-G2/P16SPL-08',
    classification: backUnit,
    category: split_missile,
    attack_type: explosive,
    weapon_type: homing,
    manufacture: furlong,
    price: 85000,

    attack_power: 688,
    impact: 536,
    accumulative_impact: 320,

    direct_hit_adjustment: 140,
    guidance: 145,
    effective_range: 1425,
    homing_lock_time: 1.0,
    lock_count: 1,
    total_rounds: 40,
    reload_time: 4.5,
    ammunition_cost: 500,

    weight: 2800,
    en_load: 228,
  }),
  defineBackUnit<AsMissile>()({
    name: 'BML-G2/P17SPL-16',
    classification: backUnit,
    category: split_missile,
    attack_type: explosive,
    weapon_type: homing,
    manufacture: furlong,
    price: 160000,

    attack_power: 688 * 2,
    impact: 536,
    accumulative_impact: 320 * 2,

    direct_hit_adjustment: 140,
    guidance: 145,
    effective_range: 1425,
    homing_lock_time: 2.0,
    lock_count: 2,
    total_rounds: 72,
    reload_time: 7.7,
    ammunition_cost: 500,

    weight: 5010,
    en_load: 510,
  }),

  defineBackUnit<AsMissile>()({
    name: 'BML-G1/P31DUO-02',
    classification: backUnit,
    category: dual_missile,
    attack_type: explosive,
    weapon_type: homing,
    manufacture: furlong,
    price: 144000,

    attack_power: 148 * 4,
    impact: 94 * 4,
    accumulative_impact: 62 * 4,

    direct_hit_adjustment: 150,
    guidance: 145,
    effective_range: 500,
    homing_lock_time: 0.4,
    lock_count: 2,
    total_rounds: 124,
    reload_time: 3.5,
    ammunition_cost: 70,

    weight: 1900,
    en_load: 182,
  }),
  defineBackUnit<AsMissile>()({
    name: 'BML-G1/P32DUO-03',
    classification: backUnit,
    category: dual_missile,
    attack_type: explosive,
    weapon_type: homing,
    manufacture: furlong,
    price: 180000,

    attack_power: 148 * 6,
    impact: 94 * 6,
    accumulative_impact: 62 * 6,

    direct_hit_adjustment: 150,
    guidance: 145,
    effective_range: 500,
    homing_lock_time: 0.4,
    lock_count: 3,
    total_rounds: 180,
    reload_time: 4.3,
    ammunition_cost: 70,

    weight: 3450,
    en_load: 262,
  }),
  defineBackUnit<AsMissile>()({
    name: 'BML-G2/P08DUO-03',
    classification: backUnit,
    category: dual_missile,
    attack_type: explosive,
    weapon_type: homing,
    manufacture: furlong,
    price: 228000,

    attack_power: 177 * 6,
    impact: 111 * 6,
    accumulative_impact: 72 * 6,

    direct_hit_adjustment: 150,
    guidance: 145,
    effective_range: 500,
    homing_lock_time: 0.7,
    lock_count: 6,
    total_rounds: 156,
    reload_time: 5.8,
    ammunition_cost: 100,

    weight: 4020,
    en_load: 332,
  }),

  defineBackUnit<AsMissile>()({
    name: 'BML-G1/P01VTC-04',
    classification: backUnit,
    category: vertical_missile,
    attack_type: explosive,
    weapon_type: homing,
    manufacture: furlong,
    price: 85000,

    attack_power: 124 * 4,
    impact: 89 * 4,
    accumulative_impact: 55 * 4,

    direct_hit_adjustment: 150,
    guidance: 480,
    effective_range: 1000,
    homing_lock_time: 0.4,lock_count: 4,
    total_rounds: 108,
    reload_time: 4.8,
    ammunition_cost: 120,

    weight: 2240,
    en_load: 258,
  }),
  defineBackUnit<AsMissile>()({
    name: 'BML-G1/P03VTC-08',
    classification: backUnit,
    category: vertical_missile,
    attack_type: explosive,
    weapon_type: homing,
    manufacture: furlong,
    price: 112000,

    attack_power: 124 * 8,
    impact: 89 * 8,
    accumulative_impact: 55 * 8,

    direct_hit_adjustment: 150,
    guidance: 480,
    effective_range: 1000,
    homing_lock_time: 0.8,
    lock_count: 8,
    total_rounds: 224,
    reload_time: 6.0,
    ammunition_cost: 120,

    weight: 3920,
    en_load: 380,
  }),
  defineBackUnit<AsMissile>()({
    name: 'BML-G1/P07VTC-12',
    classification: backUnit,
    category: vertical_missile,
    attack_type: explosive,
    weapon_type: homing,
    manufacture: furlong,
    price: 188000,

    attack_power: 124 * 12,
    impact: 89 * 12,
    accumulative_impact: 55 * 12,

    direct_hit_adjustment: 150,
    guidance: 480,
    effective_range: 1000,
    homing_lock_time: 1.4,
    lock_count: 12,
    total_rounds: 360,
    reload_time: 7.5,
    ammunition_cost: 120,

    weight: 5010,
    en_load: 525,
  }),

  defineBackUnit<AsActiveHomingMissile>()({
    name: 'BML-G3/P04ACT-01',
    classification: backUnit,
    category: active_homing_missile,
    attack_type: explosive,
    weapon_type: homing,
    manufacture: furlong,
    price: 98000,

    attack_power: 486,
    impact: 540,
    accumulative_impact: 378,
    blast_radius: 12,

    direct_hit_adjustment: 165,
    guidance: 115,
    effective_range: 1000,
    homing_lock_time: 2,
    lock_count: 1,
    total_rounds: 45,
    reload_time: 2.4,
    ammunition_cost: 450,

    weight: 2680,
    en_load: 213,
  }),
  defineBackUnit<AsActiveHomingMissile>()({
    name: 'BML-G3/P05ACT-02',
    classification: backUnit,
    category: active_homing_missile,
    attack_type: explosive,
    weapon_type: homing,
    manufacture: furlong,
    price: 145000,

    attack_power: 486 * 2,
    impact: 540 * 2,
    accumulative_impact: 376 * 2,
    blast_radius: 12,

    direct_hit_adjustment: 165,
    guidance: 115,
    effective_range: 1000,
    homing_lock_time: 2.8,
    lock_count: 2,
    total_rounds: 72,
    reload_time: 4.2,
    ammunition_cost: 450,

    weight: 4320,
    en_load: 424,
  }),

  defineBackUnit<AsContainerMissile>()({
    name: 'BML-G1/P29CNT',
    classification: backUnit,
    category: container_missile,
    attack_type: explosive,
    weapon_type: homing,
    manufacture: furlong,
    price: 250000,

    attack_power: 1422,
    impact: 1278,
    accumulative_impact: 828,

    direct_hit_adjustment: 140,
    guidance: 120,
    effective_range: 700,
    total_rounds: 12,
    reload_time: 12.0,
    ammunition_cost: 800,

    weight: 6370,
    en_load: 150,
  }),

  defineBackUnit<AsMissile & WithBlast>()({
    name: 'WR-0999 DELIVERY BOY',
    classification: backUnit,
    category: cluster_missile,
    attack_type: explosive,
    weapon_type: homing,
    manufacture: rad,
    price: 298000,

    attack_power: 2133,
    impact: 2040,
    accumulative_impact: 1638,
    blast_radius: 24,

    direct_hit_adjustment: 175,
    guidance: 200,
    effective_range: 1049,
    homing_lock_time: 5.0,
    lock_count: 1,
    total_rounds: 20,
    reload_time: 9.0,
    ammunition_cost: 600,

    weight: 6890,
    en_load: 499,
  }),

  defineBackUnit<AsMissile>()({
    name: 'WS-5001 SOUP',
    classification: backUnit,
    category: scatter_missile,
    attack_type: explosive,
    weapon_type: homing,
    manufacture: rad,
    price: 326000,

    attack_power: 78 * 10,
    impact: 77 * 10,
    accumulative_impact: 55 * 10,

    direct_hit_adjustment: 145,
    guidance: 180,
    effective_range: 2500,
    homing_lock_time: 0.5,
    lock_count: 1,
    total_rounds: 420,
    reload_time: 8.0,
    ammunition_cost: 50,

    weight: 5620,
    en_load: 680,
  }),

  defineBackUnit<AsMissile & WithBlast>()({
    name: '45-091 JVLN BETA',
    classification: backUnit,
    category: detonating_missile,
    attack_type: explosive,
    weapon_type: homing,
    manufacture: allmind,
    price: 210000,

    attack_power: 791,
    impact: 717,
    accumulative_impact: 563,
    blast_radius: 15,

    direct_hit_adjustment: 165,
    guidance: 360,
    effective_range: 360,
    homing_lock_time: 2.4,
    lock_count: 1,
    total_rounds: 32,
    reload_time: 3.6,
    ammunition_cost: 450,

    weight: 4250,
    en_load: 425,
  }),

  defineBackUnit<AsMissile & WithIdealRange>()({
    name: 'EL-PW-01 TRUENO',
    classification: backUnit,
    category: needle_missile,
    attack_type: kinetic,
    weapon_type: homing,
    manufacture: elcano,
    price: 271000,

    attack_power: 415 * 2,
    impact: 385 * 2,
    accumulative_impact: 215 * 2,

    direct_hit_adjustment: 215,
    guidance: 110,
    ideal_range: 310,
    effective_range: 410,
    homing_lock_time: 4.2,
    lock_count: 1,
    total_rounds: 62,
    reload_time: 4.2,
    ammunition_cost: 300,

    weight: 3100,
    en_load: 420,
  }),

  defineBackUnit<AsPlasmaMissile>()({
    name: 'Vvc-703PM',
    classification: backUnit,
    category: plasma_missile,
    attack_type: energy,
    weapon_type: homing,
    manufacture: vcpl,
    price: 202000,

    attack_power: 760,
    impact: 384,
    accumulative_impact: 248,
    blast_radius: 26,

    direct_hit_adjustment: 125,
    guidance: 180,
    effective_range: 1500,
    homing_lock_time: 0.3,
    lock_count: 3,
    total_rounds: 120,
    reload_time: 4.0,
    ammunition_cost: 100,

    weight: 2310,
    en_load: 210,
  }),
  defineBackUnit<AsPlasmaMissile>()({
    name: 'Vvc-706PM',
    classification: backUnit,
    category: plasma_missile,
    attack_type: energy,
    weapon_type: homing,
    manufacture: vcpl,
    price: 310000,

    attack_power: 760,
    impact: 384,
    accumulative_impact: 248,
    blast_radius: 26,

    direct_hit_adjustment: 125,
    guidance: 180,
    effective_range: 1500,
    homing_lock_time: 0.3,
    lock_count: 6,
    total_rounds: 210,
    reload_time: 6.0,
    ammunition_cost: 100,

    weight: 3900,
    en_load: 276,
  }),
  defineBackUnit<AsPlasmaMissile>()({
    name: 'Vvc-70VPM',
    classification: backUnit,
    category: plasma_missile,
    attack_type: energy,
    weapon_type: homing,
    manufacture: vcpl,
    price: 96000,

    attack_power: 760,
    impact: 384,
    accumulative_impact: 248,
    blast_radius: 26,

    direct_hit_adjustment: 125,
    guidance: 155,
    effective_range: 750,
    homing_lock_time: 0.5,
    lock_count: 5,
    total_rounds: 240,
    reload_time: 6.2,
    ammunition_cost: 150,

    weight: 3760,
    en_load: 268,
  }),

  defineBackUnit<AsCoralMissile>()({
    name: 'IB-C03W3: NGI 006',
    classification: backUnit,
    category: coral_missile,
    attack_type: coral,
    weapon_type: homing,
    manufacture: rubicon_research_institute,
    price: 380000,

    attack_power: 827,
    impact: 720,
    accumulative_impact: 720,
    blast_radius: 36,

    charge_attack_power: 4078,
    charge_impact: 2496,
    charge_accumulative_impact: 2496,
    charge_blast_radius: 56,

    direct_hit_adjustment: 165,
    guidance: 110,
    effective_range: 1000,
    homing_lock_time: 4.9,
    lock_count: 1,

    charge_en_load: 932,
    charge_time: 3.5,
    charge_ammo_consumption: 1,

    total_rounds: 24,
    reload_time: 8.6,
    ammunition_cost: 650,

    weight: 4200,
    en_load: 783,
  }),

  defineBackUnit<AsOrbit>()({
    name: 'BO-044 HUXLEY',
    classification: backUnit,
    category: bullet_orbit,
    attack_type: kinetic,
    weapon_type: burst,
    manufacture: balam,
    price: 305000,

    attack_power: 28 * 8,
    impact: 39 * 8,
    accumulative_impact: 15 * 8,

    direct_hit_adjustment: 175,
    ideal_range: 130,
    effective_range: 205,
    rapid_fire: 5.5,
    total_rounds: 240,
    cooling: 95,
    ammunition_cost: 50,

    weight: 2230,
    en_load: 435,
  }),
  defineBackUnit<AsOrbit>()({
    name: '45-091 ORBT',
    classification: backUnit,
    category: laser_orbit,
    attack_type: energy,
    weapon_type: burst,
    manufacture: allmind,
    price: 280000,

    attack_power: 144 * 3,
    impact: 70 * 3,
    accumulative_impact: 39 * 3,

    direct_hit_adjustment: 135,
    ideal_range: 198,
    effective_range: 262,
    rapid_fire: 1.0,
    total_rounds: 165,
    cooling: 145,
    ammunition_cost: 100,

    weight: 2010,
    en_load: 446,
  }),
  defineBackUnit<AsTurret>()({
    name: 'VP-60LT',
    classification: backUnit,
    category: laser_turret,
    attack_type: energy,
    weapon_type: semi_auto,
    manufacture: arquebus,
    price: 194000,

    attack_power: 146 * 10,
    impact: 81 * 10,
    accumulative_impact: 39 * 10,

    direct_hit_adjustment: 135,
    ideal_range: 250,
    effective_range: 304,
    rapid_fire: 0.9,
    magazine_rounds: 3,
    total_rounds: 52,
    reload_time: 5.0,
    ammunition_cost: 500,

    weight: 2800,
    en_load: 560,
  }),
  defineBackUnit<AsLaserDrone>()({
    name: 'Vvc-700LD',
    classification: backUnit,
    category: laser_turret,
    attack_type: energy,
    weapon_type: homing,
    manufacture: vcpl,
    price: 247000,

    attack_power: 288 * 6,
    impact: 105 * 6,
    accumulative_impact: 63 * 6,

    charge_attack_power: 1370 * 2,
    charge_impact: 480 * 2,
    charge_accumulative_impact: 244 * 2,

    direct_hit_adjustment: 135,
    guidance: 360,
    effective_range: 400,
    homing_lock_time: 0.3,
    lock_count: 1,
    charge_time: 0.8,
    total_rounds: 120,
    reload_time: 10.0,
    ammunition_cost: 150,

    weight: 3800,
    en_load: 570,
  }),
] as const
