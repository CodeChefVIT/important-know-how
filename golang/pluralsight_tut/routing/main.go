package main

import (
	"net/http"

	"./lib"
)

func main() {
	router.Startup("hi")
	http.ListenAndServe(":3000", nil)
}
