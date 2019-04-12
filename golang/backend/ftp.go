package main

import (
	"net/http"
)

func main() {
	http.ListenAndServe(":3000", http.FileServer(http.Dir("")))
}
