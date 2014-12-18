//ignored now

///<reference path='controller.ts' />
module events {
  import MainStream = require('./controller');
  declare var app:any;
  export var ctrl: MainStream;
  /*export var subscribe: (eventName: string) => (ctrl: ui.main.Stream) => (id: string) => void*/
  /*export var subscribe: (eventName: "main") => (ctrl: ui.main.Stream) => (id: string) => void
  export var subscribe: (eventName: "edit") => (ctrl: ui.edit.Stream) => (id: string) => void*/
  export interface Props {}
  export interface State {id: string}
  /*export var subscribe:
    (eventName: string) =>
      (update: ((s: State) => void), props?: Props, state?: State) =>
        ((...args: any[]) => void);
*/
  /*subscribe('main:update', (update, props, state) => (id: string) => {*/
  /*subscribe('main:update',
    (update:(s:State) => void, props: Props, state: State) => {
      return (id: string) => {
        update({id: id});
      }
  });*/

  /*var subscriber = (context: ui.main.Stream) => {
    namespace('main', (subscribe)=>{
      subscribe('update', (id: string) => {
        context.update((s) =>{
          s.id = id;
          return s;
        });
      })
    });
  }

  namespace('main', (subscribe)=>{
    subscribe('update', (context) => (id: string) => {
      context.update((s) =>{
        s.id = id;
        return s;
      });
    })
  });*/

  /*subscribe('main:update', (update, props, state) => (id: string) => {
    context.update((s) =>{
      s.id = id;
      return s;
    });
  })*/

  /*subscribe('main:update', (update, props, state) => (id: string) => {
    update((s) =>{
      s.id = id;
      return s;
    });
  })*/

  export function update(key){
    ctrl.update((s)=>{
      return s;
    });
  }
}

export = events;

/*module main.events {
  export function subscribe(namespace, ctrl){
    namspace('main', (main) => {
      main.on('update', () => {
      });
    });

    namspace('edit', (edit) => {
      edit.on('changeBuffer', () => {
      });
    });
  }
}*/
