function prime(n) {
    for (i = 2; i <= (n) / 2; i++) {
        if (n % i == 0) {
            return "not prime";
        }
    }
    return "prime";

}

function timesTable(n) {
    document.write("<table>");
    for (i = 1; i <= n; i++) {
        document.write("<tr>");
        for (j = 1; j <= n; j++) {
            document.write("<td>", i * j, "</td>");
        }
        document.write("</td>");
    }
    document.write("</table>")
}
