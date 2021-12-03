import { observable, action, makeObservable } from "mobx";
import { observer } from "mobx-react";
//veri(değişken) değişimini  @observable yakalamak için  @observer kullanılır
//Metot değişiminde action

class MainStore
{ 
    @observable name= "Muhammed Güneş";
// @observer için ekledik
    constructor(){
        makeObservable(this)
    }

    @action getName(){
        return this.name;
    }

    @action setName(name){
        this.name=name;
    }


}

export default new MainStore();