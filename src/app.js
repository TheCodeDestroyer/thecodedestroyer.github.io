export class App {
    heading = 'Welcome to Aurelia!';
    firstName = 'John';
    lastName = 'Doe';

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    submit() {
        alert(`Welcome, ${this.fullName}!`);
    }
}