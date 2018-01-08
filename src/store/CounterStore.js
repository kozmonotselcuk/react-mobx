// eslint-disable-next-line
import mobx, { observable, action, computed } from "mobx";

class CounterStore {

    @observable count = 0;
    @observable filter = '';
    @observable isimler = [
        "selcuk",
        "ali",
        "ahmet",
        "selim",
        "abdurrahman",
        "şahin"
    ]

    @action artir = (param) => {
        this.count++;
    }

    @action azalt = (param) => {
        this.count--;
    }

    @computed get sayi() {
        return this.count;
    }

    @computed get filtered() {
        if (!this.filter) {
            return this.isimler;
        }
        console.log(this.filter);
        return this.isimler.filter(x => x.indexOf(this.filter) > -1)
    }

}

const store = new CounterStore();

export default store;
export { CounterStore };