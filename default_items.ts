import Shared, { ItemAbilityData } from "@/misc/shared";
import { LANG } from "../lang";

const _getLocaleItemDescription = (itemId: number): { name: { [key in string]: string }, desc: { [key in string]: string } } => {
    switch (itemId) {
        /** Tier 2 */
        /** Wooden Sword */
        case Shared.ItemList.Shadow_Slayer:
            return {
                name: {
                    en: "Shadow Slayer",
                },
                desc: {
                    en: `UNIQUE: Your autoattack deals additional magic damage ${(ItemAbilityData.SHADOW_SLAYER_PERC_DMG * 100).toFixed(1)}% of enemy max health`,
                    ru: `УНИКАЛЬНО(Пассивно): Ваши атаки наносят дополнительный магический урон по героям, который равен ${(ItemAbilityData.SHADOW_SLAYER_PERC_DMG * 100).toFixed(1)}% от макс. здоровья цели`,
                }
            }

        case Shared.ItemList.Divine_Sword:
            return {
                name: {
                    en: "Divine Sword",
                },
                desc: {
                    en: `On Equip: Provide unobstructed vision! Provie additional ${ItemAbilityData.DIVINE_SWORD_BONUS_VISION}px vision!`,
                    ru: `УНИКАЛЬНО(Пассивно): Даёт беспрепятственный обзор! Также добавляет ${ItemAbilityData.DIVINE_SWORD_BONUS_VISION} пикселей к обзору!`,
                }
            }
        case Shared.ItemList.Divine_Katana:
            return {
                name: {
                    en: "Divine Katana",
                },
                desc: {
                    en: "Drops on death! (Cant be sold!)",
                    ru: `Выпадает при смерти! (Нельзя продать!)`,
                }
            }
        case Shared.ItemList.Iron_Basher:
            return {
                name: {
                    en: "Iron Basher",
                },
                desc: {
                    en: "UNIQUE: Your attacks have 20% chance to stun enemy for 0.8 sec and deals additional 60 damage",
                    ru: `УНИКАЛЬНО(Пассивно): Ваши атаки имеют 20% шанс оглушить вражеского героя на 0.8 сек. и нанести дополнительно 60 урона`,
                }
            }

        case Shared.ItemList.Cold_Sword:
            return {
                name: {
                    en: "Cold Sword",
                },
                desc: {
                    en: `UNIQUE: Attacks lower enemy movement by ${ItemAbilityData.COLD_SWORD_SLOW} for 1 seconds`,
                    ru: `УНИКАЛЬНО(Пассивно): Ваши атаки уменьшают скорость передвижения цели на ${ItemAbilityData.COLD_SWORD_SLOW} на 1 сек.`,
                }
            }

        case Shared.ItemList.Demon_Sabre:
            return {
                name: {
                    en: "Demon Sabre",
                },
                desc: {
                    en: `UNIQUE: Your attacks lower enemy armor by ${ItemAbilityData.DEMON_SABRE_ARMOR_REDUCTION} for 4 seconds`,
                    ru: `УНИКАЛЬНО(Пассивно): Ваши атаки уменьшают вражескую броню на ${ItemAbilityData.DEMON_SABRE_ARMOR_REDUCTION} на 4 сек.`,
                }
            }
        case Shared.ItemList.Corrupted_Light_Slayer:
            return {
                name: {
                    en: "Corrupted Light Slayer",
                },
                desc: {
                    en: `Active: Increases your lifesteal by ${Math.round(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_LIFESTEAL * 100)}% for ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_DURATION / 1000).toFixed(1)} sec - ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_COOLOWN / 1000).toFixed(1)} sec cd`,
                    ru: `УНИКАЛЬНО(Активно): Увеличивает ваш вампиризм на ${Math.round(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_LIFESTEAL * 100)}% на ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_DURATION / 1000).toFixed(1)} сек. (Перезарядка: ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_COOLOWN / 1000).toFixed(1)} сек.)`,
                }
            }
        /** Wooden Bow */
        case Shared.ItemList.Berserker_Bow:
            return {
                name: {
                    en: "Berserker Bow",
                },
                desc: {
                    en: `UNIQUE: Every time you hit enemy hero, increases your attack speed by ${ItemAbilityData.BERSERKER_BOW_BONUS_ATTACK_SPEED * 100}% for ${(ItemAbilityData.BERSERKER_BOW_DURATION / 1000).toFixed(1)} sec. At 5th stack it heals you for 15% of max health and reset stacks`,
                    ru: `УНИКАЛЬНО(Пассивно): Попадая атаками по врагу, вы увеличиваете свою скорость атаки на ${ItemAbilityData.BERSERKER_BOW_BONUS_ATTACK_SPEED * 100}% на ${(ItemAbilityData.BERSERKER_BOW_DURATION / 1000).toFixed(1)} сек. Складывается до 5 раз. На 5 зарядах вы исцеляетесь на 15% от макс. здоровья и обнуляете количество зарядов`,
                }
            }
        case Shared.ItemList.Magical_Bow:
            return {
                name: {
                    en: "Magical Bow",
                },
                desc: {
                    en: "UNIQUE: Sucessful hit with your abilites increases your movement speed by 10 for 1.5 sec <br /> <br />" + getLocaleItemDescription(Shared.ItemList.Poison_Bow),
                    ru: "УНИКАЛЬНО(Пассивно): Успешное попадание способностями увеличивает вашу скорость передвижения на 10 на 1.5 сек. <br /> <br />" + getLocaleItemDescription(Shared.ItemList.Poison_Bow),
                }
            }
        case Shared.ItemList.Poison_Bow:
            return {
                name: {
                    en: "Poison Bow",
                },
                desc: {
                    en: `UNIQUE: Your attacks apply deadly poison on enemy hero slows target for ${ItemAbilityData.POISON_BOW_SLOW} and deals ${ItemAbilityData.POISON_BOW_DAMAGE_OVER_TIME} damage per sec for ${(ItemAbilityData.POISON_BOW_DURATION / 1000).toFixed(1)} sec. (This effect can stack up 5 times, every attack refresh duration)`,
                    ru: `УНИКАЛЬНО(Пассивно): Ваши атаки накладывают смертельный яд на вражеских героев, замедляя их на ${ItemAbilityData.POISON_BOW_SLOW} и нанося ${ItemAbilityData.POISON_BOW_DAMAGE_OVER_TIME} урона в секунду в течение ${(ItemAbilityData.POISON_BOW_DURATION / 1000).toFixed(1)} сек. (Этот эффект может складываться до 5 раз. Каждая последующая атака обновляет длительность зарядов)`,
                }
            }

        case Shared.ItemList.Corrupted_Longbow:
            return {
                name: {
                    en: "Corrupted Longbow",
                },
                desc: {
                    en: `Active: Empowers you and increases your attack speed by ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_ATTACK_SPEED * 100}% and movement speed by ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_MOVESPEED} for ${(ItemAbilityData.CORRUPTED_LONGBOW_DURATION / 1000).toFixed(1)} sec.<br />` +
                        `Side effect of empower is lowered ${ItemAbilityData.CORRUPTED_LONGBOW_REDUCE_ARMOR} and ${(ItemAbilityData.CORRUPTED_LONGBOW_REDUCE_MR * 100).toFixed(1)}% magic resistance - ${(ItemAbilityData.CORRUPTED_LONGBOW_COOLDOWN / 1000).toFixed(1)} cooldown`
                        + "<br /> <br /><b class='ability-d'>" + getLocaleItemDescription(Shared.ItemList.Poison_Bow),
                    ru: `УНИКАЛЬНО(Активно): Увеличивает вашу скорость атаки на ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_ATTACK_SPEED * 100}% и скорость передвижения на ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_MOVESPEED} на ${(ItemAbilityData.CORRUPTED_LONGBOW_DURATION / 1000).toFixed(1)} сек.<br />` +
                        `Во время этого эффекта ваша броня уменьшена на ${ItemAbilityData.CORRUPTED_LONGBOW_REDUCE_ARMOR} и сопротивление магии на ${(ItemAbilityData.CORRUPTED_LONGBOW_REDUCE_MR * 100).toFixed(1)}%. (Перезарядка: ${(ItemAbilityData.CORRUPTED_LONGBOW_COOLDOWN / 1000).toFixed(1)} сек.)`
                        + "<br /> <br /><b class='ability-d'>" + getLocaleItemDescription(Shared.ItemList.Poison_Bow),
                }
            }
        case Shared.ItemList.Rapids_Longbow_T2:
            return {
                name: {
                    en: "Rapid's Longbow",
                },
                desc: {
                    en: `UNIQUE - Active: Consume the item and gains permanent ${(ItemAbilityData.RAPIDS_LONGBOW_ATTACKSPEED_BUFF * 100).toFixed()}% attack speed bonus!`,
                    ru: `УНИКАЛЬНО(Активно): Вы поглощаете этот предмет, получая ${(ItemAbilityData.RAPIDS_LONGBOW_ATTACKSPEED_BUFF * 100).toFixed()}% скорости атаки навсегда!`,
                }
            }
        /** Nowice staff */
        case Shared.ItemList.Burning_Rod:
            return {
                name: {
                    en: "Burning Rod",
                },
                desc: {
                    en: `UNIQUE: Your abilites ignites the enemy and deals additional damage of ${(ItemAbilityData.BURNING_ROD_DAMAGE_OVER_TIME_PERC * 100).toFixed()}% max health per sec for ${(ItemAbilityData.BURNING_ROD_DURATION / 1000).toFixed(1)} sec`,
                    ru: `УНИКАЛЬНО(Пассивно): Ваши способности поджигают врага и он получает дополнительный урон в размере ${(ItemAbilityData.BURNING_ROD_DAMAGE_OVER_TIME_PERC * 100).toFixed()}% от своего макс. здоровья в сек. в течение ${(ItemAbilityData.BURNING_ROD_DURATION / 1000).toFixed(1)} сек.`,
                }
            }
        case Shared.ItemList.Vampiric_Rod:
            return {
                name: {
                    en: "Vampiric Rod",
                },
                desc: {
                    en: `UNIQUE: When your ability hits the enemy hero, it will steals his ${ItemAbilityData.VAMPIRIC_ROD_HP_STEAL} health - ${(ItemAbilityData.VAMPIRIC_ROD_COOLDOWN / 1000).toFixed(1)} sec cooldown`,
                    ru: `УНИКАЛЬНО(Пассивно): Попадая по врагу, ваши способности похищают у цели ${ItemAbilityData.VAMPIRIC_ROD_HP_STEAL} здоровья. (Перезарядка: ${(ItemAbilityData.VAMPIRIC_ROD_COOLDOWN / 1000).toFixed(1)} сек.)`,
                }
            }
        case Shared.ItemList.Kirin_Staff:
            return {
                name: {
                    en: "Kirin Staff",
                },
                desc: {
                    en: "UNIQUE: Your abilites penetrate target's magic resistance by 25% for 4 sec, this effect does not stack with other sources",
                    ru: "УНИКАЛЬНО(Пассивно): Ваши способности уменьшают сопротивление магии цели на 25% на 4 сек. Этот эффект не складывается с другими источниками",
                }
            }
        case Shared.ItemList.Frozen_Staff:
            return {
                name: {
                    en: "Frozen Staff",
                },
                desc: {
                    en: `UNIQUE: Your abilites lowers enemy movement speed by ${ItemAbilityData.FROZEN_STAFF_SLOW} movespeed for ${(ItemAbilityData.FROZEN_STAFF_DURATION / 1000).toFixed(1)} sec - ${(ItemAbilityData.FROZEN_STAFF_COOLDOWN / 1000).toFixed(1)} sec cooldown`,
                    ru: `УНИКАЛЬНО(Пассивно): Ваши способности уменьшают скорость передвижения цели на ${ItemAbilityData.FROZEN_STAFF_SLOW} на ${(ItemAbilityData.FROZEN_STAFF_DURATION / 1000).toFixed(1)} сек. (Перезарядка: ${(ItemAbilityData.FROZEN_STAFF_COOLDOWN / 1000).toFixed(1)} сек.)`,
                }
            }
        case Shared.ItemList.Iron_Rod:
            return {
                name: {
                    en: "Iron Rod",
                },
                desc: {
                    en: `UNIQUE: When your abilites hits enemy hero, your next normal attack deals bonus ${ItemAbilityData.IRON_ROD_BONUS_DAMAGE} damage`,
                    ru: `УНИКАЛЬНО(Пассивно): Когда ваши способности попадают по вражескому герою, ваша следующая атака нанесёт дополнительно ${ItemAbilityData.IRON_ROD_BONUS_DAMAGE} урона`,
                }
            }
        case Shared.ItemList.Magic_Harpoon:
            return {
                name: {
                    en: "Magic Harpoon",
                },
                desc: {
                    en: `UNIQUE: When your abilites hits enemy hero, your next normal attack deals bonus ${ItemAbilityData.MAGIC_HARPOON_BONUS_DAMAGE} damage`,
                    ru: `УНИКАЛЬНО(Пассивно): Когда ваши способности попадают по вражескому герою, ваша следующая атака нанесёт дополнительно ${ItemAbilityData.MAGIC_HARPOON_BONUS_DAMAGE} урона`,
                }
            }
        case Shared.ItemList.Orchid_of_Malevolence:
            return {
                name: {
                    en: "Orchid of Malevolence",
                },
                desc: {
                    en: `Active: Releases dark arrow in your direction that pierce throu enemies, silences them for ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_DURATION / 1000).toFixed(1)} sec and at the end of silence, ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_DAMAGE_PERC * 100).toFixed(1)}% of the damage received while silenced is inflicted as bonus magical damage. - ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_COOLDOWN / 1000).toFixed(1)} sec cd`,
                    ru: `УНИКАЛЬНО(Активно): Выпускает тёмную стрелу в вашем направлении, которая пронзает несколько целей, накладывая на них немоту на ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_DURATION / 1000).toFixed(1)} сек. По окончании эффекта цели получают ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_DAMAGE_PERC * 100).toFixed(1)}% от полученного урона за время действия немоты в виде магического урона. (Перезарядка: ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_COOLDOWN / 1000).toFixed(1)} сек.)`,
                }
            }
        case Shared.ItemList.Divine_Staff_T2:
            return {
                name: {
                    en: "Divine Staff",
                },
                desc: {
                    en: `Active: Heals all nearby units in ${ItemAbilityData.DIVINE_STAFF_RADIUS}px radius for ${ItemAbilityData.DIVINE_STAFF_HEAL_T2}, apply ${ItemAbilityData.DIVINE_STAFF_BONUS_SPEED} bonus speed and remove all negative effects for ${(ItemAbilityData.DIVINE_STAFF_DURATION / 1000).toFixed(1)} sec - ${(ItemAbilityData.DIVINE_STAFF_COOLDOWN / 1000).toFixed(1)} sec cd 
                        <br /> This effect has inner cooldown of 12 sec (Can not be reduced by cooldown reduction), during this time, this effect is fully ignored`,
                    ru: `УНИКАЛЬНО(Активно): Исцеляет ближайшим союзным целям в радиусе ${ItemAbilityData.DIVINE_STAFF_RADIUS} пикселей ${ItemAbilityData.DIVINE_STAFF_HEAL_T2} здоровья, снимая все негативные эффекты, а также накладывая ${ItemAbilityData.DIVINE_STAFF_BONUS_SPEED} бонусной скорости передвижения на ${(ItemAbilityData.DIVINE_STAFF_DURATION / 1000).toFixed(1)} сек. (Перезарядка: ${(ItemAbilityData.DIVINE_STAFF_COOLDOWN / 1000).toFixed(1)} сек.) 
                        <br /> Этот эффект имеет внутреннюю перезарядку длительностью 12 сек. (Не может быть уменьшено сокращением перезарядки). В течение этого времени активный эффект этого предмета не работает на ранее задетых целях`,
                }
            }

        case Shared.ItemList.Vampiric_Shield:
            return {
                name: {
                    en: "Vampiric Shield",
                },
                desc: {
                    en: `UNIQUE: Whenever you take a damage, you will be he healead for ${ItemAbilityData.VAMPIRIC_SHIELD_HEAL}`,
                    ru: `УНИКАЛЬНО(Пассивно): При получении урона вы исцеляете себе ${ItemAbilityData.VAMPIRIC_SHIELD_HEAL} здоровья`,
                }
            }

        case Shared.ItemList.Divine_Shield:
            return {
                name: {
                    en: "Divine Shield",
                },
                desc: {
                    en: `Active: Gives additional ${ItemAbilityData.DIVINE_SHIELD_BONUS_ARMOR} armor and ${(ItemAbilityData.DIVINE_SHIELD_BONUS_MAGIC_DEF * 100).toFixed()}% magic defense to all friendly units in close proximity ${(ItemAbilityData.DIVINE_SHIELD_DURATION / 1000).toFixed(1)} sec - ${(ItemAbilityData.DIVINE_SHIELD_COOLDOWN / 1000).toFixed(1)} sec cd`,
                    ru: `УНИКАЛЬНО(Активно): Даёт дополнительные ${ItemAbilityData.DIVINE_SHIELD_BONUS_ARMOR} брони и ${(ItemAbilityData.DIVINE_SHIELD_BONUS_MAGIC_DEF * 100).toFixed()}% сопротивления магии всем ближайшим союзным целям на ${(ItemAbilityData.DIVINE_SHIELD_DURATION / 1000).toFixed(1)} сек. (Перезарядка: ${(ItemAbilityData.DIVINE_SHIELD_COOLDOWN / 1000).toFixed(1)} сек.)`,
                }
            }

        case Shared.ItemList.Spike_Shield:
            return {
                name: {
                    en: "Spike Shield",
                },
                desc: {
                    en: `Active: When active, returns back 100% of received damage back to attacker (after reduction) for ${(ItemAbilityData.SPIKE_SHIELD_DURATION / 1000).toFixed(1)} sec - ${(ItemAbilityData.SPIKE_SHIELD_COOLDOWN / 1000).toFixed(1)} sec cd`,
                    ru: `УНИКАЛЬНО(Активно): После активации возвращает 100% полученного урона (с учётом брони) обратно противнику на протяжении ${(ItemAbilityData.SPIKE_SHIELD_DURATION / 1000).toFixed(1)} сек. (Перезарядка: ${(ItemAbilityData.SPIKE_SHIELD_COOLDOWN / 1000).toFixed(1)} сек.)`,
                }
            }

        case Shared.ItemList.GarunsDefender:
            return {
                name: {
                    en: "Garun's Defender",
                },
                desc: {
                    en: `Active: Smashes all enemies around the hero in small radius, deals ${ItemAbilityData.GARUNS_DEFENDER_DAMAGE} damage and stuns all enemies for ${(ItemAbilityData.GARUNS_DEFENDER_STUN_DURATION / 1000).toFixed(1)} sec - ${(ItemAbilityData.GARUNS_DEFENDER_COOLDOWN / 1000).toFixed(1)} sec cd`,
                    ru: `УНИКАЛЬНО(Активно): Наносит ${ItemAbilityData.GARUNS_DEFENDER_DAMAGE} урона всем врагам вокруг, дополнительно оглушая цели на ${(ItemAbilityData.GARUNS_DEFENDER_STUN_DURATION / 1000).toFixed(1)} сек. (Перезарядка: ${(ItemAbilityData.GARUNS_DEFENDER_COOLDOWN / 1000).toFixed(1)} сек.)`,
                }
            }
        case Shared.ItemList.Plate_Shield:
            return {
                name: {
                    en: "Plate Shield",
                },
                desc: {
                    en: `Active: Shockwaves travel through the air dealing ${ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE} damage and reduce enemy's movement speed by ${ItemAbilityData.PLATE_SHIELD_SLOW_AOE} and makes all affected units visible for ${(ItemAbilityData.PLATE_SHIELD_SLOW_DURATION / 1000).toFixed(1)} sec - ${(ItemAbilityData.PLATE_SHIELD_COOLDOWN / 1000).toFixed(1)} sec cd`,
                    ru: `УНИКАЛЬНО(Активно): Создаёт ударную волну, которая наносит ${ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE} урона и уменьшает скорость передвижения на ${ItemAbilityData.PLATE_SHIELD_SLOW_AOE} у всех врагов на своём пути, также делая их видимыми на ${(ItemAbilityData.PLATE_SHIELD_SLOW_DURATION / 1000).toFixed(1)} сек. (Перезарядка: ${(ItemAbilityData.PLATE_SHIELD_COOLDOWN / 1000).toFixed(1)} сек.)`,
                }
            }
        case Shared.ItemList.Kirins_Defender:
            return {
                name: {
                    en: "Kirin's Defender",
                },
                desc: {
                    en: `UNIQUE: When you receive magical damage, Kirin's creates barrier around you reduce all negative effects duration by 50% and decrease additional ${(ItemAbilityData.KIRINS_DEFENDER_BONUS_MAGIC_RESISTANCE * 100).toFixed()}% magic damage for ${(ItemAbilityData.KIRINS_DEFENDER_DURATION / 1000).toFixed()} sec. ${(ItemAbilityData.KIRINS_DEFENDER_COOLDOWN / 1000).toFixed()} cooldown`,
                    ru: `УНИКАЛЬНО(Пассивно): Когда вы получаете магический урон, вокруг вас появляется барьер, снижающий длительность всех негативных эффектов на 50% и получаемый магический урон на ${(ItemAbilityData.KIRINS_DEFENDER_BONUS_MAGIC_RESISTANCE * 100).toFixed()}% на ${(ItemAbilityData.KIRINS_DEFENDER_DURATION / 1000).toFixed()} сек. (Перезарядка: ${(ItemAbilityData.KIRINS_DEFENDER_COOLDOWN / 1000).toFixed()} сек.)`,
                }
            }
        /** Rings */
        case Shared.ItemList.Demonic_Ring:
            return {
                name: {
                    en: "Demonic Ring",
                },
                desc: {
                    en: `UNIQUE: Your attacks lower enemy armor by ${ItemAbilityData.DEMON_RING_ARMOR_REDUCTION} for 4 seconds`,
                    ru: `УНИКАЛЬНО(Пассивно): Ваши атаки уменьшают вражескую броню на ${ItemAbilityData.DEMON_RING_ARMOR_REDUCTION} на 4 сек.`,
                }
            }
        case Shared.ItemList.Gold_Ring:
            return {
                name: {
                    en: "Gold Ring",
                },
                desc: {
                    en: "UNIQUE: Killing an enemy unit or assisting for hero kill gives additional 25 golds",
                    ru: "УНИКАЛЬНО(Пассивно): Убивая вражеских миньонов или получая содействия в убийстве вражеских героев, вы получаете дополнительно 25 золота",
                }
            }

        case Shared.ItemList.Frost_Ring:
            return {
                name: {
                    en: "Frost Ring",
                },
                desc: {
                    en: `Active: Create an frozen bolt that freeze target on impact for ${(ItemAbilityData.FROST_RING_ROOT_DURATION / 1000).toFixed(1)} sec and deals ${ItemAbilityData.FROST_RING_DAMAGE} damage - ${(ItemAbilityData.FROST_RING_COOLDOWN / 1000).toFixed(1)} sec cd`,
                    ru: `УНИКАЛЬНО(Активно): Создаёт ледяной снаряд, который замораживает цель при попадании на ${(ItemAbilityData.FROST_RING_ROOT_DURATION / 1000).toFixed(1)} сек. и наносит ей ${ItemAbilityData.FROST_RING_DAMAGE} магического урона. (Перезарядка: ${(ItemAbilityData.FROST_RING_COOLDOWN / 1000).toFixed(1)} сек.)`,
                }
            }

        case Shared.ItemList.Chronos_Ring:
            return {
                name: {
                    en: "Chronos Ring",
                },
                desc: {
                    en: `Active: Refresh all abilites and items cooldown - ${(ItemAbilityData.CHRONOS_RING_COOLDOWN / 1000).toFixed(1)} sec cooldown`,
                    ru: `УНИКАЛЬНО(Активно): Сбрасывает перезарядку всех способностей и имеющихся предметов. (Перезарядка: ${(ItemAbilityData.CHRONOS_RING_COOLDOWN / 1000).toFixed(1)} сек.)`,
                }
            }
        case Shared.ItemList.Corrupted_Ring:
            return {
                name: {
                    en: "Corrupted Ring",
                },
                desc: {
                    en: `Active: Dash you in your direction - ${(ItemAbilityData.CORRUPTED_RING_COOLDOWN / 1000).toFixed(1)} sec cooldown`,
                    ru: `УНИКАЛЬНО(Активно): Вы совершаете рывок в направлении своего движения. (Перезарядка: ${(ItemAbilityData.CORRUPTED_RING_COOLDOWN / 1000).toFixed(1)} сек.)`,
                }
            }

        case Shared.ItemList.Berserker_Ring:
            return {
                name: {
                    en: "Berserker Ring",
                },
                desc: {
                    en: `UNIQUE: Your attacks deal ${ItemAbilityData.BERSERKER_RING_DAMAGE_PER_FRAG} more damage for each 10% HP you are missing.`,
                    ru: `УНИКАЛЬНО(Пассивно): Ваши атаки наносят на ${ItemAbilityData.BERSERKER_RING_DAMAGE_PER_FRAG} ед. больше физического урона за каждые недостающие 10% вашего здоровья`,
                }
            }

        /** Armors */
        case Shared.ItemList.Frost_Armor:
            return {
                name: {
                    en: "Frost Armor",
                },
                desc: {
                    en: `UNIQUE: When you take damage, attacker will be cursed and his movement speed slows down by ${ItemAbilityData.FROST_ARMOR_MOVESPEED_REDUCTION} and attack speed by ${(ItemAbilityData.FROST_ARMOR_ATTACK_SPEED_REDUCTION * 100).toFixed()}%`,
                    ru: `УНИКАЛЬНО(Пассивно): При получении урона, скрость передвижения нападающего будет снижкна на ${ItemAbilityData.FROST_ARMOR_MOVESPEED_REDUCTION}, а скорость атаки - на ${(ItemAbilityData.FROST_ARMOR_ATTACK_SPEED_REDUCTION * 100).toFixed()}%`,
                }
            }

        case Shared.ItemList.Void_Armor:
            return {
                name: {
                    en: "Void Armor",
                },
                desc: {
                    en: `Active: Makes you invisible for ${(ItemAbilityData.VOID_ARMOR_DURATION / 1000).toFixed(1)} sec in addition increase your movement speed by ${ItemAbilityData.VOID_ARMOR_MOVESPEED_BONUS} and damage by ${ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE} - ${(ItemAbilityData.VOID_ARMOR_COOLDOWN / 1000).toFixed(1)} sec cd\n (removes on attack or spell cast)`,
                    ru: `УНИКАЛЬНО(Активно): Вы получаете невидимость на ${(ItemAbilityData.VOID_ARMOR_DURATION / 1000).toFixed(1)} сек., а также дополнительно получаете ${ItemAbilityData.VOID_ARMOR_MOVESPEED_BONUS} скорости передвижения и ${ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE} атаки. (Перезарядка: ${(ItemAbilityData.VOID_ARMOR_COOLDOWN / 1000).toFixed(1)} сек.)\n (эффект пропадает при атаке или использовании способностей)`,
                }
            }

        case Shared.ItemList.Titans_Armor:
            return {
                name: {
                    en: "Titan's Armor",
                },
                desc: {
                    en: `Active: Increase your health regen by ${ItemAbilityData.TITAN_ARMOR_REGENERATION}, remove all negative effects and makes you immune to all incoming damage for ${(ItemAbilityData.TITAN_ARMOR_DURATION / 1000).toFixed(1)} sec. You can't do any action during this effect!! - ${(ItemAbilityData.TITAN_ARMOR_COOLDOWN / 1000).toFixed(1)} sec cd`,
                    ru: `УНИКАЛЬНО(Активно): Вы становитесь неуязвимы, избавляетесь от негативных эффектов, а также получаете прибавку к регенерации здоровья в размере ${ItemAbilityData.TITAN_ARMOR_REGENERATION} на ${(ItemAbilityData.TITAN_ARMOR_DURATION / 1000).toFixed(1)} сек. Вы не можете выполнять никакие действия, пока активен данный эффект! (Перезарядка: ${(ItemAbilityData.TITAN_ARMOR_COOLDOWN / 1000).toFixed(1)} сек.)`,
                }
            }
        case Shared.ItemList.ChestOfMalevolence:
            return {
                name: {
                    en: "Chest of Malevolence",
                },
                desc: {
                    en: `UNIQUE: When you take magical damage, attacker will be silenced for ${(ItemAbilityData.CHEST_OF_MALEVOLENCE_DURATION / 1000).toFixed(1)} sec - ${(ItemAbilityData.CHEST_OF_MALEVOLENCE_COOLDOWN / 1000).toFixed(1)} sec cd`,
                    ru: `УНИКАЛЬНО(Пассивно): При получении магического урона, нападавший получит немоту на ${(ItemAbilityData.CHEST_OF_MALEVOLENCE_DURATION / 1000).toFixed(1)} сек. (Перезарядка: ${(ItemAbilityData.CHEST_OF_MALEVOLENCE_COOLDOWN / 1000).toFixed(1)} сек.)`,
                }
            }

        /** Consumables */
        case Shared.ItemList.Healing_Potion:
            return {
                name: {
                    en: "Healing Potion",
                },
                desc: {
                    en: `Active: Grants ${ItemAbilityData.HEALING_POTION_HEAL_PER_SEC} health regeneration for ${(ItemAbilityData.HEALING_POTION_DURATION / 1000).toFixed(1)} sec <br /> If you are attacked, the effect is lost!`,
                    ru: `Активно: Даёт ${ItemAbilityData.HEALING_POTION_HEAL_PER_SEC} регенерации здоровья на ${(ItemAbilityData.HEALING_POTION_DURATION / 1000).toFixed(1)} сек. <br /> Эффект пропадает преждевременно, если вы были атакованы во время его действия!`,
                }
            }

        case Shared.ItemList.Scroll_Of_Detection:
            return {
                name: {
                    en: "Scroll of Detection",
                },
                desc: {
                    en: `Active: Reveals all enemy invisible units in area! Revealed enemies are slowed by ${ItemAbilityData.SCROLL_OF_DETECTION_SLOW} ms for ${(ItemAbilityData.SCROLL_OF_DETECTION_SLOW_DURATION / 1000).toFixed(1)} sec`,
                    ru: `Активно: Раскрывает всех невидимых вражеских героев вокруг вас. Раскрытые враги замедляются на ${ItemAbilityData.SCROLL_OF_DETECTION_SLOW} на ${(ItemAbilityData.SCROLL_OF_DETECTION_SLOW_DURATION / 1000).toFixed(1)} сек.`,
                }
            }
        default: return {
            name: { en: "unk" },
            desc: { en: "unk" }
        }
    }
}

export const getLocaleItemDescription = (itemId: number): string => {
    const result = _getLocaleItemDescription(itemId);
    return result.desc[LANG] ? result.desc[LANG] : result.desc['en'];
}

export const getLocaleItemName = (itemId: number): string => {
    const result = _getLocaleItemDescription(itemId);
    return result.name[LANG] ? result.name[LANG] : result.name['en'];
}