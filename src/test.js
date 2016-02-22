export class App {
    title = 'CV!';
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