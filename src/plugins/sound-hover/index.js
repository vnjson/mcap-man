import menuItemSound from './assets/menu-item.mp3'

export default function (){

  var itemSound = new Howl({src: './assets/'+menuItemSound, volume: 0.1});

  $('#screen').on('mousedown', '.sound-hover', function (){
       itemSound.play()
  })
}