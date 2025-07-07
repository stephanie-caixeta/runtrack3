var annee = 1992;

function bisextile (annee) {
    if (annee % 4 != 0) {
        return false;
    } else if (annee % 100 != 0) {
      return true;
    } else if (annee % 400 != 0) {
        return false;
    } else {
        return true;
    }
}