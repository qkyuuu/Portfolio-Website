import { Injectable } from '@angular/core';
import { Tank } from '../../info/models/Tank';
import { Tag } from 'src/app/info/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class TankService {

  constructor() { }

  getTankById(id: number): Tank{
    return this.getAll().find(tank => tank.id == id)!;
  }

  getAllTanksBySearchTerm(searchTerm:string) :Tank[]{
    return this.getAll().filter(tank =>
      tank.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllTags():Tag[]{
    return [
      {name: 'All', count: 20},
      {name: 'Heavy Tank', count: 5},
      {name: 'Light Tank', count: 5},
      {name: 'Medium Tank', count: 5},
      {name: 'Tank Destroyer', count: 5}
    ]
  }

  getAllTanksByTag(tag: string): Tank[]{
    if(tag == "All"){
      return this.getAll();
    }
    else{
      return this.getAll().filter(tank => tank.tags?.includes(tag))
    }
  }

  getAll():Tank[]{
    return [
      {
        id:1,
        name: 'Centurion 1',
        tags: ['Medium Tank', 'United Kingdom'],
        favorite: true,
        imageUrl: '/assets/images/tanks/img1.png',
        origin: 'United Kingdom',
        history: "New tanks need to be designed, tested, and deployed carefully. Even with the pressures of war taken into account, the process should be methodical to ensure that mechanically reliable vehicles with good fighting characteristics and survivability get to the front line. The United Kingdom, in particular, had by 1945, suffered terribly economically, industrially, and with the bombing of its civilians during World War 2. This, combined with the need to produce a large number of tanks to field against the Germans and their allies, had all contrived to hinder the design and production of new tanks. In particular, by 1943, there was a desire to have a good cruiser tank, well protected and fielding the excellent 17 pounder gun. The much-delayed project was finally ready by 1944 and passed initial domestic trials. However, this new vehicle, the A.41 ‘Centurion’ could also be sent to mainland Europe for active trials in a war zone. The object of these first foreign Centurion trials was, therefore, to make use of the considerable battle experience of crews available in British forces in Europe and to conduct real-world trials under as near to combat conditions as possible.",
      },
      {
        id:2,
        name: 'Entwicklung 100',
        tags: ['Heavy Tank', 'Germany'],
        favorite: false,
        imageUrl: '/assets/images/tanks/img2.png',
        origin: 'Germany',
        history: "The E 100 was a project which is occasionally and somewhat erroneously referred to as a rival to Dr. Porsche's Maus design. This is not strictly true, as the E 100 came after the 130-tonne Tiger-Maus design from Krupp, which was the Maus-rival. When the Porsche-Maus was approved by Hitler on 3rd January 1943, the Krupp Tiger-Maus was abandoned. Shortly thereafter, Ernst Kniekampf (Panzer Kommission), without informing Krupp, gave work on the project over to the firm of Adler at Friedberg to build a simple prototype (E 100 versuchs-farhgestell: Experimental 100-tonne test hull) for trials. This was done despite the lack of experience by the firm in the design or manufacture of tanks and turrets. According to Kniekampf, Krupp was already overburdened with other work, but it lay within Kniekampf'’'s general Entwicklungsreihe versuchs panzerkampfwagen (development series test armored vehicle) framework trying to rationalize tank development in different weight categories. It would be nearly a year later (after the failure of the Porsche-Maus production plans), that the failed Tiger-Maus, a vehicle which showed a large amount of promise in simplified production over the Maus, had shown any substantive progress.",
      },
      {
        id:3,
        name: 'M4A3E8',
        tags: ['Medium Tank', 'United States of America'],
        favorite: true,
        imageUrl: '/assets/images/tanks/img3.png',
        origin: 'United States of America',
        history: "The M4A3E8 was the last modification of the US Sherman tank series during WWII.  This variant also known as M4A3(76)W HVSS featured a welded hull armed with a 76mm gun and had wet ammo storage (“W”) where the ammo racks were surrounded by separate small containers of a mixture of water, ethylene glycol, and a rust inhibitor, known as “Ammudamp” which prevented the ammo from igniting when the tank was hit.  The improved Horizontal volute spring suspension (HVSS) and the cast steel, center guide, single pin, double arc, 23 inch wide T-66 tracks reduced the ground pressure and provided better mobility in snow and over soft terrain.  Starting in March 1944, Chrysler produced 2,617 M4A3E8s by the end of WWII.  After units received the new tanks, the greatly improved ride over the earlier models earned the nickname “Easy Eight”.",
      },
      {
        id:4,
        name: 'M41 Bulldog',
        tags: ['Light Tank', 'United States of America'],
        favorite: false,
        imageUrl: '/assets/images/tanks/img4.png',
        origin: 'United States of America',
        history: "On November, 7, 1950, the US Ordnance Committee Minutes (OCM) published the #33476 item. This was a new classification between the heavy (120 mm gun), medium (90 mm), and light tank (76 mm), according to their main armament. At the same time, a replacement for the late WW2 standard light tank, the M24 Chaffee, was started in 1947 with research on the T37 to fit a more efficient armament to deal with armor. Added to this was chosen to make the new model air-transportable for fast deployment into enemy territory since reconnaissance was still the main duty for light tanks. Work on a longer barrel was accompanied by a more efficient rangefinder, which was deemed in 1949 too ambitious for such tank class and downgraded on the next T41 prototype. This was the final production prototype, and Cadillac’s Cleveland Tank Plant (which already had experience producing the former M5 and M24 light tanks) was chosen for the first batch in 1952.",
      },
      {
        id:5,
        name: 'Panther II',
        tags: ['Medium Tank', 'Germany'],
        favorite: false,
        imageUrl: '/assets/images/tanks/img5.png',
        origin: 'Germany',
        history: "The Panther II’s origins can be traced back to 1942. There were concerns that the Panther I did not have sufficient armor for protection against the anti-tank weapons that would be encountered on the Eastern Front in 1943. Of particular concern were Russian 14.5 mm anti-tank rifles, as they could penetrate the flat 40 mm lower hull sides of the Panther I at close ranges. These concerns lead to the development of a new Panther design, the Panther II, featuring a single piece 100 mm frontal plate and 60 mm side armor.",
      },
      {
        id:6,
        name: 'T-34-85',
        tags: ['Medium Tank', 'U.S.S.R.'],
        favorite: false,
        imageUrl: '/assets/images/tanks/img6.png',
        origin: 'U.S.S.R.',
        history: "After the Second World War, the Jugoslovenska Armija (JA, English: Yugoslav Army), better known as the Jugoslovenska Narodna Atmiija (JNA, English: Yugoslav People’s Army), was created. Initially, it was equipped with armored vehicles of various origins. Most had been captured by the enemy during the war. Besides them, the JNA operated a number of vehicles given to them by the Western Allies and the Soviet Union. This included the T-34-85 tanks that formed the Second Tank Brigade. While, later, more advanced tank designs would be acquired, the T-34-85 would remain in use up to 2000.",
      },
      {
        id:7,
        name: 'TIGER I',
        tags: ['Heavy Tank', 'Germany'],
        favorite: false,
        imageUrl: '/assets/images/tanks/img7.png',
        origin: 'Germany',
        history: "There is no other tank in AFV history which has captured the popular imagination more than the Panzerkampfwagen VI Tiger Sd.Kfz.181 of WW2. Nothing epitomises armored conflict to the general public like its massive structure on the battlefield. It is the one tank most people can name, even if they have little or no real interest in tanks.From the early days of combat against this tank in WW2 until the present day, the fame of the Tiger spans, in equal amounts, its real development history, combat performance, and fandom. It is a tank with many flaws and one whose mystique, even back in WW2, was out of all proportion to its utility and service as a combat vehicle. Yet, despite its flaws and problems, the tank remains a potent symbol of WW2 and, for many, it is the tank which served as their introduction to the world of armored fighting vehicles."
      }
    ]
  }

}

