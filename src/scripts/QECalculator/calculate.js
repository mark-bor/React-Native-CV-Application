export function calculateQECalculator(argument, setResult) {
    const a = Number(argument.a);
    const b = Number(argument.b);
    const c = Number(argument.c);

    // if (!a) a = 1;
    // if (!b) b = 1;
    // if (!c) c = 1;

    const desk = (b*b) + (4*a*c);
    const dk = Math.sqrt(desk);
    const a2 = 2*a;
    const x1 = ((-b+dk)/a2).toFixed(1);
    const x2 = ((-b-dk)/a2).toFixed(1);
    const x = (-b/a2).toFixed(1);

    if (desk<0 || a2===0){
        setResult({x1: '-', x2: '-'});
    }else if (desk===0){
        setResult({x1: x, x2: x});
    }else if (desk>0){
        setResult({x1: x1, x2: x2});
    }
}