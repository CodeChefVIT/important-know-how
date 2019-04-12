package main

import (
	"net/http"
)

type person struct {
	name string
}

func (p *person) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Hello " + p.name))
}

func main() {
	p := &person{name: "angad"}
	http.ListenAndServe(":3000", p)
}
