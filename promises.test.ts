import { promisesResolver } from './promises';

const promises = [
    new Promise<{title:string, message:string}>((resolve) => {
        resolve({title: 'Hola', message:'Some message'})
    }),
    new Promise<{title:string, message:string}>((resolve) => {
        resolve({title: 'Hola', message:'Some message'})
    }),
    new Promise<{title:string, code:string}>((resolve) => {
        resolve({title: 'Hola', code:'Some code'})
    })
]

test('Fuction return array of values', () => {
    const resolvedPromises = promisesResolver(promises);
    expect(resolvedPromises).toEqual([
        {title: 'Hola', message:'Some message'},
        {title: 'Hola', message:'Some message'},
        {title: 'Hola', code:'Some code'}
    ])
})