import { observable, action } from "mobx";
//veri(değişken) değişimini  observable
//Metot değişiminde action

class MainStore
{
    @observable name= "Muhammed Güneş";

    @action getName(){
        return this.name;
    }
}

export default new MainStore();