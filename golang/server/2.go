package main

import (
	"fmt"
	"net/http"
)

func indexHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "<h1>Hey there</h1><br>Go is fast<br>")
	fmt.Fprintf(w, "You can even add %s", "<strong>variables</strong><br>")

	fmt.Fprintf(w, `
		<strong>This is a multiline text<strong><br>
	`)
}

func main() {
	http.HandleFunc("/", indexHandler)
	http.ListenAndServe(":8000", nil)
}
