# KoP_Locale
Localisation for Kingdom of Pixels ! https://leagueofpixels.eu

# GIT TUTORIAL
1. You need github account, create one if you dont have any
2. As first you need to install GIT: Link here https://git-scm.com/downloads
3. FORK My repository (On the top right corner is FORK button)
4. Now you need to clone forked repository. After fork click on the GREEN CODE button and copy the link that it shows.
  > - For example: https://github.com/(your githubname)/KoP_Locale.git
  > - Now go to folder on your computer where you will clone the repository for example C:\github\
  > - Right click the folder and open GIT BASH HERE. It will open GIT TERMINAL

5. now inside console press following command
   > - ```git clone https://github.com/(your githubname)/KoP_Locale.git```

6. Now you need also let github know who are you inside a GIT TERMINAL Press following commands
   > - ```git config --global user.name "Your Name"```
   > - ```git config --global user.email "Your GITHUB Email"```

- ! Now Close the terminal

7. It will download repository and code inside, close the terminal open the folder/repository in C:\github\KoP_Locale\
  > - You will add new translation to these files based on the example. 
  >  - When you finish translation and you will be ready to send it for review lets go to next step

8. Open GIT terminal again but now with RIGHT CLICK on KoP_Locale folder (Right click and then click on GIT BASH HERE)

9. Inside a TERMINAL you will type following commands
   > - ```git pull```
   > - ```git commit -a -m "Your message for us, what you have changed?"```
   > - ```git push```

You will get similar message:
```
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 8 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 466 bytes | 233.00 KiB/s, done.
Total 4 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/saqirmdevx/KoP_Locale.git
   2b6328a..d2a6fb9  testing -> testing
```

10. Open https://github.com/saqirmdevx/KoP_Locale/pulls this link and click on CREATE NEW PULL REQUEST, then you will click on CREATE NEW PULL REQUEST again, you can write here a message for us and title. Your changes will be reviewed by our developers! If it will be correct, it will be pushed to the live repository. 

# What if i made futher changes? 
>- If you wanna push next changes (Futher changes) you will just change the cloned repository, after you finish your changes you will again use these commands:
>- ```git commit -a -m "....Message"```
>- ```git push```

and then repeat 10th step.

Explaining following commands
>- ```git pull``` - (Update your code on your computer with repository / if someone else made any change you must be up dated)
>- ```git commit -a -m "message"``` - Prepare a commit with message 
>- ```git push``` - Push changes to the repository


# How to add translation?
Consider following example:
default_spell.ts
```ts
/** Bunninja */
case Shared.SpellList.BUNNINJA_AUTOATTACK:
   return {
      en: `Bunninja slashes with his carrot and deals  ${getDamage(BunninjaAbilityData.AUTOATTACK_DAMAGE_MOD * damage)} damage.`,
      ru: `Банниндзя взмахивает своей морковью, нанося ${getDamage(BunninjaAbilityData.AUTOATTACK_DAMAGE_MOD * damage)} физического урона.`,
   }
```

You are looking only at the returning part, all datas inside ${ .. } are constants (values taken from a game engine)
If you wanna add new language you will do this (consider SK lang)
```ts
/** Bunninja */
case Shared.SpellList.BUNNINJA_AUTOATTACK:
   return {
      en: `Bunninja slashes with his carrot and deals  ${getDamage(BunninjaAbilityData.AUTOATTACK_DAMAGE_MOD * damage)} damage.`,
      ru: `Банниндзя взмахивает своей морковью, нанося ${getDamage(BunninjaAbilityData.AUTOATTACK_DAMAGE_MOD * damage)} физического урона.`,
      sk: `Your translated text to your language ${CONSTANT_VALUE}`,
   }
```
