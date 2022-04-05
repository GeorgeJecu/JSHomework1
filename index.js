// 1. O functie "equals" care primeste 2 parametrii si returneaza daca cei 2 parametrii sunt egali, strict:
function equals(a, b){
    if(a === b){
        return true;
    }else{
        return false;
    }
}

// 2. O functie "compare" care primeste 2 parametrii si returneaza -1 daca primul e mai mic ca al doilea, 0 daca sunt egale si 1 daca primul e mai mare ca al doilea:
function compare(x, y){
    if (x < y){
        return -1
    } else if(x > y){
        return 1
    } else{
        return 0
    }
}

// 3. O functie "max" care primeste 2 parametrii si returneaza maximul dintre cele 2:
function max(a, b){
    if (a >= b){
        return a;
    }else{
        return b;
    }
}

// 4. O functie "min" care primeste 2 parametrii si returneaza minimul dintre cele 2:
function min(a, b){
    if(a <= b){
        return a;
    }else{
        return b;
    }
}

// 5. O functie "suma" care primeste 1 parametru, numar intreg si returneaza suma primelor N numere naturale pozitive (exemplu: daca N este 3, trebuie sa returneze 6);

function suma(a){
    let b = 0;
    for(let i = 0; i <= a; i++){
        b = b + i;
    }
    return b;
}

// 6. O functie "prim" care primeste 1 parametru si returneaza true/false daca N este numar prim sau nu (restul impartirii la 1 si la N ==0);
function prim(a) {
  if (a <= 0) return false;
  if (a === 1) return false;
  for (let i = 2; i < a; i++) {
    if (a % i == 0) {
      return false;
    }
  }
  return true;
}

// 7. O functie "sumaPrime" care primeste 1 parametru si returneaza suma primelor N numere prime (pentru N=5 trebuie sa returneze 2+3+5+7+11=28);
function prim(a) {
  if (a <= 0) return false;
  if (a === 1) return false;
  for (let i = 2; i < a; i++) {
    if (a % i == 0) {
      return false;
    }
  }
  return true;
}

function firstNPrime(x) {
  let str = [];
  let i = 2

  while (str.length < x) {
    if (prim(i)) {
      str.push(i)
    }
    i++
  }
  return str;
}

function sumaPrime(y) {
  let sum = 0;
  let str = firstNPrime(y);
  for (let i = str.length; i--;) {
    sum += str[i];
  }
  return sum;
}

//8. O functie "invers" care primeste un parametru de tip numar si intoarce inversul acestuia (ca numar) (123 => 321)
function invers(a) {
    return (
      parseFloat(
        a
          .toString()
          .split('')
          .reverse()
          .join('')
      )
    )                 
  }

// 9.O functie "produsImpare" care primeste 1 parametru si returneaza produsul primelor N numere impare pozitive (pentru N=5; returneaza 1*3*5*7*9=945)

function produsImpare(a){
    let produs = new Array(a);
    // produs.length = a;
    for (let i = 0; i <= produs.length; i++){
      if(i % 2 !==0){
        produs.push(i);
      }
    } 
    var filtered = produs.filter(function (el) {
    return el != null;
  });
    let multiple = 1; 
    for (let j = 0; j < filtered.length; j++){
      multiple = multiple * filtered[j];
    }
    return multiple;
  }

// 10. O functie "contains" care primeste 2 parametri(arr - array de nr intregi si x - numar) si verifica daca x exista in array (rezultatul este true/false)
function contains(arr, x){
    if (arr.includes(x)){
      return true;
    } else{
      return false;
    }
  }
  
// 11.O functie "maxArray" care primeste un array si returneaza valoarea maxima (ar trebui sa functioneze si pentru numere si pentru stringuri)
function maxArray(a) {
  let b = a[0];
  for (let i = 0; i <= a.length; i++) {
    if (b <= a[i]) {
      b = a[i];
    }
  } return b;
}

//12. O functie "sumMinMax" care primeste un array de numere si returneaza suma dintre valoare maxima si valoare minima

function sumMinMax(a) {
  let min = a[0];
  let sum = 0;
  for (let i = 0; i <= a.length; i++) {
    if (min >= a[i]) {
      min = a[i];
    }
  }
  sum = min + maxArray(a);
  return sum;
}

// sau

// function sumMinMax(a){
//     let max = Math.max(...a);
//     let min = Math.min(...a);
//     return max + min; 
//   }

// 13.O functie "hasDuplicates" care primeste un array si returneaza daca exista duplicate intr-un array primit ca parametru (true/false);
function hasDuplicates(arr) {
  for (let i = 1; i <= arr.length; i++){

    for (let j = 0; j < i; j++){
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  } return false;
}

// sau

// function hasDuplicates(arr) {
//     return new Set(arr).size !== arr.length;
// }

// 14.O functie "produsPozitive" care primeste un array si returneaza produsul numerelor pozitive intr-un array primit ca parametru

function produsPozitive(a) {
  let produs = 1;
  for (let i = 0; i <= a.length; i++) {
    if (a[i] > 0) {
      produs = produs * a[i];
    }
  } return produs;
}

//sau

// function produsPozitive(a, b){
//     b = a.filter(num => num > -1);
//     let produs = 1;
//     for (let i = 0; i < b.length; i++){
//       produs = produs * b[i];
//     }
//     return produs;
//   }

// 15.O functie "palindrom" care primeste un string si returneaza daca este palindrom (inversul == originalul, ex: "1234321", "55", "787") (true/false)
function palindrom(a){
  let b = a.split('').reverse().join('');
  if (a === b) {
    return true;
  }else{
    return false;
  }
}

