
class SingletonTS {
    private static instance: SingletonTS;  //static pertenece a la CLASE
    public ramdom: number; //pertenece al objecto
 
    private constructor(){
        this.ramdom = Math.random();
    }

    public static getInstance(): SingletonTS {
        if (SingletonTS.instance) {
            this.instance =  new SingletonTS();
        }

        return this.instance;
    }
}


const obj1 = SingletonTS.getInstance();
const obj2 = SingletonTS.getInstance();
console.log(obj1.ramdom);
console.log(obj2.ramdom);