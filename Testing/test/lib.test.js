const {absolute,greet,getCurrencies,getObject,getException}=require('../code/lib')

// grouping the test
describe('absolute',()=>{

    it('should return a positive if the number is greater than zero',()=>{
        const result=absolute(1)
        expect(result).toBe(1)
      });
    it('should return a negative if the number is less than zero',()=>{
          const result=absolute(-1)
          expect(result).toBe(1)
        });
      
    it('should return a zero if the number is equal to zero',()=>{
          const result=absolute(0)
          expect(result).toBe(0)
        });
        
})

describe('Greet',()=>{
    it('Should be return name if we give a name ',()=>{
        const result=greet('Mahaprabu')
        expect(result).toMatch(/Mahaprabu/)
        expect(result).toContain('Mahaprabu')
    })
})


describe('Currencies',()=>{
    it('Check the array of currencies',()=>{
        const result=getCurrencies();
        
        //Too general
        expect(result).toBeDefined()
        expect(result).not.toBeNull()
       //to specific
       //to take the index to check it goes wrong in future

        //ideal
        expect(result).toContain('INR')

        expect(result).toEqual(expect.arrayContaining(['INR','EUR']))
    })
})

describe('Object',()=>{

    it('To chek the object value',()=>{
        const result=getObject(1)
        expect(result).toMatchObject({id:1})
        // expect(result).toHaveProperty({'id':'1'})
    })
    
})


describe('Exception',()=>{
    it('To exception error',()=>{
        const arr=[null,undefined,0,false,'']
        arr.forEach(a=>{

            expect(()=>{getException(a)}).toThrow()
        })
    })

    it('To check the name',()=>{
        const resul=getException('mahaprabu')
        expect(resul.id).toBeGreaterThan(0)
    })
})