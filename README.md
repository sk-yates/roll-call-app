# Roll-Call 
### A table-top rpg character creation and storage app. 



---
## Roll-Call - Screenshots

> - [App landing page](https://drive.google.com/file/d/1Sjg8eRTGPa-EOz5_cs8ku02CTs64FMWA/view?usp=sharing) 
> - [Character index screen](https://drive.google.com/file/d/15CQ6tvvo5zfqRaQ3EpMiDTAN18ePSdcq/view?usp=sharing) 
> - [Create a character page](https://drive.google.com/file/d/1_M2E-Bp0pvG2J3gsHSLDCGvl8vjdixxF/view?usp=sharing)
> - [Character edit screen](https://drive.google.com/file/d/1CWIslXeuwMOPKH6PaBxeycWPGhZZD1QR/view?usp=sharing) 
> - [Character view page](https://drive.google.com/file/d/1Z4as1mK9xRhd4pBktrIm5wGkgxKwPKj1/view?usp=sharing) 



My inspiration for this app stems from my love of Table-Top RPGs and the various systems they use. 

While the current state of this app is a heavily simplified MVP to serve as a proof of concept, and as a learning experience to experiment with the methods of constructing and displaying the character sheet creation process, my goal is to continue to develop the app with greater polish and include a number of character creation options for popular TTRPG systems. 


> ### Such as: 
>> ###     Dungeons & Dragons 
>> ###     Blades in the Dark 
>> ###     Call of Cthulhu  
>> ###     Vampire: The Masquerade 
>> ---



---
## Getting started

The current MVP state for the app is available at the link below: 

> ### [Roll-Call Deploy link](https://roll-call-rpg-companion-b6fb2155b38c.herokuapp.com/)


### Current character creation functionality

In the app's current state, you can make a very basic character, choosing from a brief selection of character classes and backgrounds by following these simple steps in the 'create a character' screen. 

- Type your character's name into the space provided.

- Choose a class from the 3 options: 
  - Fighter: a master of armor, weapons and knighly combat. 
  - Wizard: a studied practitioner of arcane magic.
  - Cleric: an adventurer blessed by a deity with healing and miracles.

- Choose a background from the 3 options: 
  - Commoner: from humble beginnings but destined to do great deeds.
  - Merchant: a respected (or rejected) artisan out for a profit.
  - Acolyte: a devoted servant to a diety or religious order.

- Select your stat scores for the four disciplines:
  - Physical: Determines your character's physical prowess, agility and strength.
  - Study: Determines your character's learned knowledge in various fields and arcana.
  - Cunning: Determines the quality of your character's wits and social skills.
  - Faith: Determines your character's level of devotion and knowledge of a chosen deity or ideal.

- Using the section provided, write a brief backstory for your character. Who are they at the start of your adventure? 
(Ideally, this section will be influenced by your choice of class and background)

- Add additional notes on your character, such as special items they posses or key physical characteristics. 

- Finally, 'submit' your character and view your completed character sheet in your 'character vault'.


---
## Planning

> ### [Roll-Call planning - Trello](https://trello.com/b/aZ41wdQH)

As mentioned above, this app is a product of my love for TTRPGs, as such there were a number of key targets I sought to meet for this MVP.

- #### CRUD (Create.Read.Update.Delete) functionality
  - I wanted users to have the expected experience of being able to create, view, edit and delete the characters in the vault as they require. 



- #### Ease of use
  - When viewing their characters, I wanted to make use of the full screen view to allow for ease and comfort of reading and accessibilty to users.

  - The user interface was inteded to be as simple and easy to navigate as possible. 


- #### Provide insight into choices at the creation stage
  - One of the most crucial features of the app at this stage was providing functionality that would give users an insight into their character options at creation, through use of pop-in text for the classes and backgrounds on the character creation screen. 

---
## Attributions

Whilst I have kept the current state of the app as generic as possible for the sake of attaining the MVP, the classes and background options currently in the app are a clear reference to [Dungeons & Dragons - owned by Wizards of the Coast](https://www.dndbeyond.com/).

---
## Technologies used

> ---
> - HTML
> - CSS
> - JavaScript
> - EJS
> - Node
> - Express
> - MongoDB 
> ---

---
## Next steps

As mentioned above, the long-term goal for this app is to develop further options to allow users to create characters for a variety of TTRPG systems. 

#### In the near future, I want to...

- Develop a mobile friendly viewing option for to allow for use on tablets and phones. 

- To develop a more accurate character sheet creator view (likely using the D&D 5e system at first).

- Add a dedicated "notes" function that will allow users to create and manage notes within the character view screen. 

- Include inventory index functionality to allow users to keep track of items their characters possess. 

- Add editable "spell lists" with accompanying index/data for magic/caster characters. 

- Add additional index viewing options to allow for a greater user experience when browsing their character vault. 

- Develop and incorporate "level-up" functionality to allow users to "level-up" their characters in accordance with their time in their respective games. 
