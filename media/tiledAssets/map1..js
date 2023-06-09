(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("map1",
{ "compressionlevel":-1,
 "height":20,
 "infinite":false,
 "layers":[
        {
         "draworder":"topdown",
         "id":2,
         "name":"background",
         "objects":[
                {
                 "gid":1,
                 "height":2560,
                 "id":1,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":1024,
                 "x":0,
                 "y":2560
                }],
         "opacity":1,
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 190, 0,
            0, 0, 0, 0, 0, 10, 10, 0,
            0, 0, 0, 0, 74, 3, 3, 0,
            0, 0, 18, 74, 3, 3, 3, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            50, 42, 0, 0, 0, 0, 58, 50,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 58, 50, 50, 42, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 164,
            10, 10, 10, 10, 10, 10, 10, 10],
         "height":20,
         "id":1,
         "name":"terrain",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":8,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 149, 149, 0,
            0, 0, 0, 0, 149, 149, 149, 0,
            0, 0, 149, 149, 149, 149, 149, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            149, 149, 149, 149, 149, 149, 149, 149],
         "height":20,
         "id":3,
         "name":"floorCollision",
         "opacity":0.65,
         "type":"tilelayer",
         "visible":true,
         "width":8,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            149, 149, 0, 0, 0, 0, 149, 149,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 149, 149, 149, 149, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0],
         "height":20,
         "id":4,
         "name":"platformCollision",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":8,
         "x":0,
         "y":0
        }],
 "nextlayerid":5,
 "nextobjectid":2,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.10.1",
 "tileheight":128,
 "tilesets":[
        {
         "firstgid":1,
         "source":"grass.tsx"
        }, 
        {
         "firstgid":2,
         "source":"ground.tsx"
        }, 
        {
         "firstgid":130,
         "source":"obstacles.tsx"
        }, 
        {
         "firstgid":258,
         "source":"player.tsx"
        }],
 "tilewidth":128,
 "type":"map",
 "version":"1.10",
 "width":8
});