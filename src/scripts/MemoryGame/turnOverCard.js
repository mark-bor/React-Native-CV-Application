export function turnOverCard(rotate, setRotate) {
    if (rotate.front===0 & rotate.back===180) {
        setRotate({front: 180, back: 0})
    } else {
        setRotate({front: 0, back: 180})
    }
}