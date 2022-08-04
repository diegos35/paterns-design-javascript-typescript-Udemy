class Singleton {
    //exita un Objecto de la clase Singleton
    static getInstance() {
        return Singleton.instance;    
    }

     constructor() {
        this.ramdom = Math.random();

        console.log("entrando al constructor");
        if (Singleton.instance) {
            console.log("ya exite");
            return Singleton.instance
        }
        console.log("No exite, lo crea");
        Singleton.instance = this;//realacionado asi mism
     }
}

const singleton = new Singleton();
const singleton2 = new Singleton();
const singleton3 = Singleton.getInstance();
//es el mismo ramdom ya que es la misma instancia
console.log(singleton.ramdom);
console.log(singleton2.ramdom);
console.log(singleton3.ramdom);
console.log(singleton.ramdom === singleton2.ramdom);



class WeeKDays{
    daysEs = [
        "lunes","martes", "miercoles", "jueves", "viernes",
        "sabados", "domingos"
    ];
    daysEn = [
        "Monday", "tuesday", "wednesday", "thursday", "friday", "saturday", 
        "sunday"
    ];

    constructor(lang){
        this.lang = lang;
    
        if (WeeKDays.instance) {
            return WeeKDays.instance //referece same instance
        }
        
        WeeKDays.instance = this;
    
    }


    getDays(){
        return this.lang === "es" ?
            this.daysEs :
            this.daysEn;
    }

};

const weeDays = new WeeKDays("en");
const weeDays2 = new WeeKDays("es");

console.log(weeDays.getDays());
console.log(weeDays2.getDays());



















