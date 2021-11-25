/* ./src/plugins/zim-ui/zim.js  */
export const event = "zim-entry-copy" // Название события по которому будет вызываться

export function init (){
  //Необходимо что бы frame был доступен в глобальном пространстве имён
  //для этого мы создадим свойсво window.frame и определим в него экземпляр класса Frame
  //обратите внимание что id=zim 
  window.frame = new Frame('zim', 1024, 768, light, dark);

}