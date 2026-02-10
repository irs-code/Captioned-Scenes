// Prep Sprites
var person1 = createSprite(200, 200);
var person2 = createSprite(200, 200);

// <-- Background -->
background("blue");

// Grass
fill("green");
rect(0, 250, 400, 200);

// Sun
fill("yellow");
ellipse(350, 50, 100, 100);

// <-- Sprites --> 

// Person1
person1.setAnimation("person1");
person1.scale = 0.3;
person1.x = 100;
person1.y = 200;

// Person 2
person2.setAnimation("person2");
person2.scale = 0.3;
person2.x = 250;
person2.y = 200;

// <-- Text -->
text("This place is flat", 100,125); // Person1
text("Yeah", 200,150); // Person2

// Draw
drawSprites();
