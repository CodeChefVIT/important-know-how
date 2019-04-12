package main

import (
	"net/http"

	"./mymiddleware"
)

func main() {
	http.HandleFunc("/", myHandler)
	http.ListenAndServe(":3000", &middleware.TimeoutMiddleware{
		Next: new(middleware.Gzipcompression)}) // to use multiple middleware just pass the next middleware
}

func myHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "index.txt")
}
