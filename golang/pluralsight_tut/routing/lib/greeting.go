package router

import (
	"net/http"
)

type Hello struct {
	greeting string
}

func (h Hello) registerRoute() {
	http.HandleFunc("/", h.HandleGreeting)
}

func (h Hello) HandleGreeting(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte(h.greeting))
}
