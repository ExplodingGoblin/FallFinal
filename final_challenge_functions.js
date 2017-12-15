function primeTable(n) {
        for (i = 2; i <= (n)/2; i++) {
            if (n % i == 0) {
                return "not prime";
            }
        }
        return "prime";

}

function timesTable(number) {
    document.write("<table>");
    for(i=1; i<=number; i++) {
        document.write("<tr>");
        for(j=1;j<=number;j++) {
            document.write("<td>", i*j, "</td>");
        }
        document.write("</td>");
    }
    document.write("</table>")
}
