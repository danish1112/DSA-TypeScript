//Q. check whether two array has duplicate elements?

/**
 * 
 * @param array1 
 * @param array2 
 * @returns boolean
 * Space complexity 0(1)
 * Time Complexity 0(n ^2)
*/
export function checkDuplicate(array1: string[], array2: string[]): boolean {
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                return true
            }
        }
    }
    return false
}


/**
 * 
 * @param array1 
 * @param array2 
 * @returns boolean
 * Space complexity 0(n)
 * Time Complexity 0(n)
 * Optimised solution
 */
export function checkDuplicate2(array1: string[], array2: string[]): boolean {
    let map: Record<string, boolean> = {};

    for (let i = 0; i < array1.length; i++) {
        if (!map[array1[i]]) {
            map[array1[i]] = true
        }
    }

    for (let i = 0; i < array2.length; i++) {
        if (map[array2[i]]) {
            return true
        }
    }

    return false
}

/**
 * 
 * @param array1 
 * @param array2 
 * @returns better code readible 
 */
export function checkDuplicate3(array1: string[], array2: string[]): boolean {
    return array1.some(item => array2.includes(item))
}

//Q. Find the Duplicates in an Array?

/**
 * 
 * @param array1 
 * @returns string of array
 * Space complexity 0(n)
 * Time Complexity 0(n)
*/
export function findDuplicates(array1: string[]): string[] {
    let Duplicates: string[] = []
    for (let i = 0; i < array1.length; i++) {
        if (array1.indexOf(array1[i]) !== i) {
            Duplicates.push(array1[i])
        }

    }
    return Duplicates

}

/**
 * 
 * @param array1 
 * @returns string of array
 * Space complexity 0(n)
 * Time Complexity 0(n)
 * optimised and readible solution
*/
export function findDuplicates2(array1: string[]): string[] {
    let seen = new Set();
    let duplicate = new Set();

    for (let item of array1) {
        if (seen.has(item)) {
            duplicate.add(item)
        } else {
            seen.add(item)
        }
    }

    return Array.from(duplicate) as string[]
}

