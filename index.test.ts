import * as Index from './index';

const a: Index.A = {
    title: 'Something',
    message: 'Hello'
}

const b: Index.B = {
    title: 'Something',
    code: 'Some code'
}

test('Test ChekType call Foo', () => {
    const mockFoo = jest.spyOn(Index, 'Foo');
    
    Index.CheckType(a);
    expect(mockFoo).toHaveBeenCalled();
}) 

test('Test ChekType call Foo', () => {
    const mockFoo = jest.spyOn(Index, 'Bazz');
    
    Index.CheckType(b);
    expect(mockFoo).toHaveBeenCalled();
}) 