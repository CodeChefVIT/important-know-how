package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", handleIndex)
	http.ListenAndServe(":3000", nil)
}

func handleIndex(w http.ResponseWriter, r *http.Request) {
	query := r.URL.Query()
	fmt.Println(query["q"])     // gives an array of q values
	fmt.Println(query.Get("q")) // gives first q value
	//http://localhost:3000/?q=1&1=3
	w.Write([]byte("Hello there"))
}
