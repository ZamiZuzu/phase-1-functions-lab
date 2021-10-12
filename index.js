function distanceFromHqInBlocks(blocks){
    return  blocks > 42 ? (blocks - 42) : (42 - blocks);
}

function distanceFromHqInFeet(feet){
    return feet > 42 ? ((feet - 42) * 264) : ((42 - feet) * 264);
}

function distanceTravelledInFeet(dist1, dist2){
    return dist1 > dist2 ? ((dist1 - dist2) * 264) : ((dist2 - dist1) * 264);
}

function calculatesFarePrice(start, destination){
    let total = Math.max((start * 264), (destination * 264)) - Math.min((start * 264), (destination * 264));
    if (total <= 400){
        return 0;
    } else if (total <= 2000){
        return (((total - 400) * 2) / 100);
    } else if (total <= 2500){
        return 25;
    } else {
        return 'cannot travel that far'
    }
}