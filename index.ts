export interface A {
    title:string;
    message:string
}

export interface B {
    title:string;
    code:string
}

const a: A = {
    title: 'Something',
    message: 'Hello'
}

const b: B = {
    title: 'Something',
    code: 'Some code'
}

export const Foo = (): void  => {
    console.log('Enter Foo');
}

export const Bazz = (): void  => {
    console.log('Enter Bazz');
}

export const CheckType = (parameter: A | B): void => {
    if(parameter.hasOwnProperty('message')) {
        Foo();
    } else if('code' in parameter) {
        Bazz();
    }
}

CheckType(b);