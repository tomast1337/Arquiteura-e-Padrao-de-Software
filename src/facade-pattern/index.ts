import { SystemA } from "./subsystems/systemA";
import { SystemB } from "./subsystems/systemB";

class FacadeSystem {
    private systemA: SystemA;
    private systemB: SystemB;

    constructor() {
        this.systemA = new SystemA();
        this.systemB = new SystemB();
    }

    public operation(): string {
        const message = this.systemA.generateMessage();
        const data = this.systemB.fetchData();
        console.log('The facade class abstracts the complex systems and provides a simple interface to the client.')
        console.log('The facade class delegates the work to the subsystems and the client does not know about the subsystems.')
        return `


${data}
and the data was processed by the AI algorithm to generate the message:
${message}`;
    }
}

const main = () => {
    const facade = new FacadeSystem();
    console.log(facade.operation());
}

main();
