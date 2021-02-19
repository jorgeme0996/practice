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

export const promisesResolver = (promises: Promise<{title:string, message:string} | {title:string, code:string}>[]): Promise<Array<{title:string, message:string} | {title:string, code:string}>> => {
    return Promise.all(promises);
}

console.log(promisesResolver(promises));