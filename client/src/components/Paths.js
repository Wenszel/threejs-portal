let Paths = {
    path1: ["[0,0]", "[0,1]", "[0,2]", "[1,2]", "[2,2]", "[3,2]", "[3,3]", "[3,4]", "[3,5]", "[4,5]", "[5,5]", "[5,4]", "[5,3]", "[5,2]", "[5,1]", "[6,1]", "[7,1]", "[7,2]", "[7,3]", "[7,4]", "[7,5]", "[7,6]", "[7,7]", "[7,8]", "[7,9]", "[6,9]"],
    path2: ["[0,0]", "[1,0]", "[2,0]", "[2,1]", "[2,2]", "[3,2]", "[4,2]", "[4,1]", "[4,0]", "[5,0]", "[6,0]", "[7,0]", "[8,0]", "[8,1]", "[8,2]", "[8,3]", "[8,4]", "[9,4]", "[9,5]", "[9,6]", "[9,7]", "[8,7]", "[7,7]", "[6,7]", "[5,7]", "[4,7]", "[4,8]", "[4,9]", "[5,9]", "[6,9]"],
    path3: ["[0,0]", "[0,1]", "[0,2]", "[0,3]", "[0,4]", "[0,5]", "[0,6]", "[0,7]", "[0,8]", "[0,9]", "[1,9]", "[2,9]", "[3,9]", "[4,9]", "[4,8]", "[4,7]", "[5,7]", "[6,7]", "[6,6]", "[6,5]", "[6,4]", "[6,3]", "[5,3]", "[4,3]", "[3,3]", "[3,2]", "[3,1]", "[3,0]", "[4,0]", "[5,0]", "[6,0]", "[7,0]", "[8,0]", "[8,1]", "[8,2]", "[8,3]", "[8,4]", "[8,5]", "[8,6]", "[8,7]", "[9,7]", "[9,8]", "[9,9]", "[8,9]", "[7,9]", "[6,9]"],
    returnPath(number) {
        if (number === 0)
            return this.path1
        else if (number === 1)
            return this.path2
        else
            return this.path3
    },
}

export default Paths