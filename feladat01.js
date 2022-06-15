function nAlattK(n,k){
    const nFakt = faktorialis(n);
    const kFakt = faktorialis(k);
    const nMinuszK = n-k;
    const nMinuszKFakt = faktorialis(nMinuszK);
    const nk = (nFakt/(kFakt*nMinuszKFakt));
    return nk;
}

function faktorialis(a){
    let fakt = 1;
    for (let i = a; i > 1; i--) {
        fakt *= i;
    }
    return fakt;
}


export function feladat01(szinek) {
    const hossz = szinek.length;
    let szinkombinaciok = 0;
    for (let i = 2; i <= hossz; i++) {
        szinkombinaciok += nAlattK(hossz, i);
    }
    console.log(szinkombinaciok);
}
