function primeTable(n) {
        for (i = 2; i <= (n)/2; i++) {
            if (n % i == 0) {
                return "not prime";
            }
        }
        return "prime";
}