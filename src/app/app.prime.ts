export class PrimeCalculator
{
    static isPrimeNumber(num : number): boolean{
        if(num === 1) return true;
        for(let i = 2; i<num/2 ; i++)
        {
            if(num% i ===0)
            return false;
        }
        return true;
    }
    static findNthPrimeNumber(num : number) : number{
        console.log('function called')
        let i : number = 1;
        let count = 0;
        while(count < num)
        {
            if(this.isPrimeNumber(i))
            {
                count++;
            }
            i++;
            console.log(i);
        }
        return i-1;
    }
}