import {observable, action, makeObservable, reaction, autorun} from 'mobx';
import {observer} from 'mobx-react';
//veri(değişken) değişimini  @observable yakalamak için  @observer kullanılır
//Metot değişiminde action

class MainStore {
  @observable name = 'Muhammed Güneş';
  // @observer için ekledik
  constructor() {
    makeObservable(this);
    // autorun(()=>{alert(this.name)}) Herhangi bir değişkende değiştiğinde işlem yapar
    // reaction(() => { //İsim ali oluncaya kadar çalışır
    //   this.name,
    //     name => {
    //       if (name == 'Ali') {
    //         alert('isim Ali');
    //       }
    //     };
    // });
  }

  @action getName() {
    return this.name;
  }

  @action setName(name) {
    this.name = name;
  }
}

export default new MainStore();
